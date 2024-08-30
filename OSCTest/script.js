import * as THREE from 'three';
import { VRButton } from 'VRButton';
import { DeviceOrientationControls } from 'DeviceOrientationControls';
import { GLTFLoader } from 'GLTFLoader';

let camera, scene, renderer, controls;
let speed = 0;
let inVR = false;

let model;
const loader = new GLTFLoader();

let pathPoints = [
    new THREE.Vector3(0, 0, 0),  // Start point
    new THREE.Vector3(-10, 0, 0), 
    new THREE.Vector3(-5, 0, -10),  
    new THREE.Vector3(10, 0, 0),  
    new THREE.Vector3(5, 0, 10), 
    new THREE.Vector3(0, 0, 0)  // End point
];

let sPath, points, pathIndex = 0;

const startButton = document.getElementById('startButton');
startButton.addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'none'; // Hide the overlay
    alignMapToCamera(); // Align map when the start button is pressed
    animate();
}, false);

function init() {
    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Device Orientation Controls
    controls = new DeviceOrientationControls(camera);

    // Add ambient light to the scene
    const ambientLight = new THREE.AmbientLight(0x404040, 2); // Soft white light with intensity 2
    scene.add(ambientLight);

    // Add directional light to the scene
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // White light with full intensity
    directionalLight.position.set(5, 10, 7.5); // Position the light
    scene.add(directionalLight);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true; // Enable VR support
    document.body.appendChild(renderer.domElement);

    // Add VR button to the page
    document.body.appendChild(VRButton.createButton(renderer));

    // Camera position
    camera.position.y = 1.6; // Typical height for VR headset

    // Load 3D model immediately
    loader.load(
        'untitled.glb',
        function (gltf) {
            model = gltf.scene;
            model.position.set(0, 0, 0); // Set initial position
            model.scale.set(1, 1, 1); // Adjust scale as needed
            scene.add(model);
            console.log('Model successfully loaded.');
        },
        function (xhr) {
            if (xhr.lengthComputable) {
                const percentComplete = (xhr.loaded / xhr.total) * 100;
                console.log(`Model loading: ${Math.round(percentComplete)}% complete`);
            }
        },
        function (error) {
            console.error('An error occurred while loading the model:', error);
        }
    );

    // Device motion event listener for speed control
    window.addEventListener('devicemotion', function (event) {
        let acceleration = event.acceleration;

        if (acceleration) {
            let shake = Math.sqrt(acceleration.x * acceleration.x + acceleration.y * acceleration.y + acceleration.z * acceleration.z);

            speed = shake / 100; // Adjust this factor as needed for appropriate speed

            if (shake < 1) {
                speed = 0;
            }
            console.log(shake);
            update();
        }
    });

    renderer.xr.addEventListener('sessionstart', function () {
        inVR = true;
        controls.enabled = false; // Disable device orientation controls in VR mode
    });

    renderer.xr.addEventListener('sessionend', function () {
        inVR = false;
        controls.enabled = true; // Re-enable device orientation controls when exiting VR mode
    });

    if (!inVR) {
        window.addEventListener('resize', onWindowResize, false);
    }

    updatePathPoints(); // Create the path curve after initialization
}

// Function to align the map to the camera's view direction
function alignMapToCamera() {
    if (model) {
        const cameraDirection = new THREE.Vector3();
        camera.getWorldDirection(cameraDirection);
        const initialYaw = Math.atan2(cameraDirection.x, cameraDirection.z);

        model.rotation.y = initialYaw;

        // Rotate all path points around Y axis to face the same direction as the camera
        pathPoints = pathPoints.map(point => {
            const rotatedX = point.x * Math.cos(initialYaw) - point.z * Math.sin(initialYaw);
            const rotatedZ = point.x * Math.sin(initialYaw) + point.z * Math.cos(initialYaw);
            return new THREE.Vector3(rotatedX, point.y, rotatedZ);
        });

        updatePathPoints(); // Update the path with the rotated points
    }
}

// Function to update the path points after they have been rotated
function updatePathPoints() {
    sPath = new THREE.CatmullRomCurve3(pathPoints);
    points = sPath.getPoints(100); // Sample 100 points along the curve
    pathIndex = 0; // Reset the path index after updating points
}

function followPath() {
    if (model && speed > 0) {
        const targetPoint = points[pathIndex + 1];
        const currentPoint = model.position;

        const direction = targetPoint.clone().sub(currentPoint).normalize();
        model.position.add(direction.multiplyScalar(speed));

        if (currentPoint.distanceTo(targetPoint) < speed) {
            pathIndex++;

            if (pathIndex >= points.length - 1) {
                pathIndex = 0;
                model.position.set(points[0].x, points[0].y, points[0].z);
            }
        }
    }
}

function update() {
    followPath();
}

function animate() {
    renderer.setAnimationLoop(() => {
        if (!inVR) {
            controls.update();
        }

        renderer.render(scene, camera);

        const quaternion = camera.quaternion;
        const debugElement = document.getElementById('debug');
        debugElement.textContent = `Quaternion:\nX: ${quaternion.x.toFixed(5)}\nY: ${quaternion.y.toFixed(5)}\nZ: ${quaternion.z.toFixed(5)}\nW: ${quaternion.w.toFixed(5)}`;
    });
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

init();
