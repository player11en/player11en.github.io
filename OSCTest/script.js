import * as THREE from 'three';
import { VRButton } from 'VRButton';
import { DeviceOrientationControls } from 'DeviceOrientationControls';
import { GLTFLoader } from 'GLTFLoader';

let camera, scene, renderer, controls;
let speed = 0;
let inVR = false;
let road;  // GLB file representing the road
const loader = new GLTFLoader();

const startButton = document.getElementById('startButton');
startButton.addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'none'; // Hide the overlay
    animate();
}, false);

function init() {
    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1.6, 0); // Fix the camera position

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

    // Load 3D road model immediately
    loader.load(
        'untitled.glb',
        function (gltf) {
            road = gltf.scene;
            road.position.set(0, 0, 0); // Set initial position
            road.scale.set(1, 1, 1); // Adjust scale as needed
            scene.add(road);
            console.log('Road model successfully loaded.');
        },
        function (xhr) {
            if (xhr.lengthComputable) {
                const percentComplete = (xhr.loaded / xhr.total) * 100;
                console.log(`Road loading: ${Math.round(percentComplete)}% complete`);
            }
        },
        function (error) {
            console.error('An error occurred while loading the road model:', error);
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
}

// Function to rotate the road according to the device orientation
function rotateRoadWithDeviceOrientation() {
    if (road) {
        const euler = new THREE.Euler();
        euler.setFromQuaternion(camera.quaternion, 'YXZ'); // Get Y-axis rotation from camera
        road.rotation.y = euler.y; // Apply the Y rotation to the road
    }
}

function updateRoadPosition() {
    if (road && speed > 0) {
        // Move the road forward along the positive Z-axis to simulate running forward
        road.position.z += speed;
    }
}

function update() {
    rotateRoadWithDeviceOrientation();
    updateRoadPosition();
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

        // Update road rotation and position
        update();
    });
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Initialize the scene as soon as the script loads
init();
