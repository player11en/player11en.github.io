
// Client-side code
// let clients = new Object();
const socket = io();

const objects = [];

var players = {}

camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.y = 0;



scene = new THREE.Scene();
scene.background = new THREE.Color("white");

// Initialize Three.js renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

controls = new THREE.OrbitControls( camera );
controls.addEventListener( 'change', render );

// Initialize Three.js cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Update client position based on user input
document.addEventListener('keydown', (event) => {
  switch (event.keyCode) {
    case 37: // left
      cube.position.x -= 0.1;
      break;
    case 38: // up
      cube.position.y += 0.1;
      break;
    case 39: // right
      cube.position.x += 0.1;
      break;
    case 40: // down
      cube.position.y -= 0.1;
      break;
  }

  // // Send movement update to server
  socket.emit('movement', {
    x: cube.position.x,
    y: cube.position.y,
  });
});

// Update other clients' positions based on server updates
socket.on('movement', (movement) => {
  for (const clientId in clients) {
    if (clientId !== socket.id) {
      clients[clientId].x = movement.x;
      clients[clientId].y = movement.y;
    }
  }
});

// Render the scene
function render() {
  requestAnimationFrame(render);

  // for (const clientId in clients) {
  //   const client = clients[clientId];
  //   cube.position.x = client.x;
  //   cube.position.y = client.y;
    renderer.render(scene, camera);
  // }
}

render();