import * as THREE from 'three';
import { VRButton } from 'VRButton';
import { DeviceOrientationControls } from 'DeviceOrientationControls';
import { GLTFLoader } from 'GLTFLoader';

let camera, scene, renderer, controls;
let speed = 0;
let inVR = false;

let model;
const loader = new GLTFLoader();

// Define an S-shaped path
const pathPoints = [
    new THREE.Vector3(0, 0, 0),  // Start point
    new THREE.Vector3(-10, 0, 0), 
    new THREE.Vector3(-5, 0, -10),  
    new THREE.Vector3(10, 0, 0),  
    new THREE.Vector3(5, 0, 10), 
    new THREE.Vector3(0, 0, 0)  // End point
];

// Create a smooth S-shaped curve
const sPath = new THREE.CatmullRomCurve3(pathPoints);
const points = sPath.getPoints(100); // Sample 100 points along the curve

let pathIndex = 0;

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
            // On success: add the model to the scene
            model = gltf.scene;
            model.position.set(0, 0, 0); // Set initial position
            model.scale.set(1, 1, 1); // Adjust scale as needed
            scene.add(model);
            console.log('Model successfully loaded.');
        },
        function (xhr) {
            // On progress: display the percentage of the model loaded
            if (xhr.lengthComputable) {
                const percentComplete = (xhr.loaded / xhr.total) * 100;
                console.log(`Model loading: ${Math.round(percentComplete)}% complete`);
            }
        },
        function (error) {
            // On error: log the error
            console.error('An error occurred while loading the model:', error);
        }
    );

    // Device motion event listener for speed control
    window.addEventListener('devicemotion', function (event) {
        let acceleration = event.acceleration;

        if (acceleration) {
            // Calculate total shake as the magnitude of the acceleration vector
            let shake = Math.sqrt(acceleration.x * acceleration.x + acceleration.y * acceleration.y + acceleration.z * acceleration.z);

            // Update speed based on the shake intensity, with a minimum threshold
            speed = shake / 100; // Adjust this factor as needed for appropriate speed

            // If the shake is below a certain threshold, stop the movement
            if (shake < 1) {
                speed = 0;
            }
            console.log(shake);
            // Call the update function whenever the speed changes
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
}

// Function to align the map to the camera's view direction
function alignMapToCamera() {
    if (model) {
        // Get the initial Y rotation of the camera (yaw)
        const cameraDirection = new THREE.Vector3();
        camera.getWorldDirection(cameraDirection);
        const initialYaw = Math.atan2(cameraDirection.x, cameraDirection.z);

        // Apply the initial Y rotation to the model to face the same direction as the camera
        model.rotation.y = initialYaw;
    }
}

function followPath() {
    if (model && speed > 0) {
        const targetPoint = points[pathIndex + 1];
        const currentPoint = model.position;

        // Use the speed (derived from shaking) to control the movement speed along the path
        const direction = targetPoint.clone().sub(currentPoint).normalize();
        model.position.add(direction.multiplyScalar(speed));

        // Check if the model has reached the target point
        if (currentPoint.distanceTo(targetPoint) < speed) {
            pathIndex++;

            // If the model has reached the last point, reset to loop the path
            if (pathIndex >= points.length - 1) {
                pathIndex = 0; // Reset to start from the beginning of the path
                model.position.set(points[0].x, points[0].y, points[0].z); // Optionally reset position to the start point
            }
        }
    }
}

function update() {
    // This function is called whenever the speed changes
    followPath();
}

function animate() {
    renderer.setAnimationLoop(() => {
        if (!inVR) {
            controls.update(); // Update the device orientation controls only if not in VR
        }

        // Rendering the scene
        renderer.render(scene, camera);

        // Update debug element with current quaternion values
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

// Initialize the scene as soon as the script loads
init();