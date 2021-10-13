let camera, scene, renderer, controls, sphere, portal, badworld,goodworld;

// leerer Vector
const direction = new THREE.Vector3;

// Verhindert das Welt zufällig wechselt
var hittingport = false;
var truecounter = 0;

// Zeitvariable
var clock = new THREE.Clock();
var delta;

//Liste wird mit allen Modellen gefüllt welche Collidierbar sein sollen
var collidableMeshList = [];

// Für wasdController
let speed = 1.0;

init();
ModelLoader();
// threejs basic construct: Scene, Camera, Renderer, licht etc.
// Jede Threejs Szene hat diese

function init() {
    ///Scene und Camera
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 15;

    //Punktlicht licht kommt nur von einem Punkt
    var lightPoint = new THREE.PointLight(0xffffff, 0.5);
    lightPoint.position.set(0, 50, 40);
    scene.add(lightPoint);

    //Ambientes licht beleuchtet alles aus jeder richtung gleichmäßig
    var lightAmb = new THREE.AmbientLight(0xffffff);

    scene.add(lightAmb);

    const light = new THREE.DirectionalLight(0xffffff, 0.8, 100);
    light.position.set(0, 100, 40); //default; light shining from top
    light.castShadow = true; // default false
    scene.add(light);

///Renderer benötigt zur Dastellung
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true; //Shadow
    renderer.shadowMapSoft = true; // Shadow
    renderer.shadowMap.type = THREE.PCFShadowMap; //Shadow
    document.body.appendChild(renderer.domElement);

//Orbit Cortroller Modell im Zentrum --> Kamera dreht sich ums Zentrum
    controls = new THREE.OrbitControls(camera);

    controls.rotateSpeed = 0.1;
    controls.zoomSpeed = 0.9;

    controls.minDistance = 2;
    controls.maxDistance = 100;

    controls.minPolarAngle = 0; // radians
    controls.maxPolarAngle = Math.PI / 2; // radians

    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

///Erstellung einer einfachen Kugel in threejs
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(-1, 2, -15);
    sphere.scale.set(0.05, 0.05, 0.05);
    scene.add(sphere);
}

///Laden aller Modelle
function ModelLoader() {

    //only in console --> testing loading  time 
    function onProgress(xhr) { console.log((xhr.loaded / xhr.total * 100) + '% loaded'); }
    function onError(xhr) { console.log('An error happened'); }

    ////////////////////////////////////////////////////////////
    // load Gltf Model
    ////////////////////////////////////////////////////////////
    var loader = new THREE.GLTFLoader();

    //Laden von GLTF/GLB Modellen
    loader.load(
        //URL
        'glb/goodworld.glb',
        // wird aufgerufen sobald Modell geladen hat
        function (gltf) {
            goodworld = gltf.scene;
            goodworld.scale.set(1.6, 1.6, 1.6);
            goodworld.position.set(-1, -1, 0);
            goodworld.castShadow = true;
            goodworld.receiveShadow = true;

            scene.add(goodworld);
        },
        // zeigt Laden Prozess in der Console an
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        //  zeigt Probleme beim LAden in der Console an
        function (error) {
            console.log('An error happened');
        }
    );

    loader.load(
        // URL
        'glb/AnimatedObj.glb',
        function (gltf) {
            mesh = gltf.scene;
            mesh.scale.set(1, 1, 1);
            mesh.position.set(-3, 2, 0);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            var animations = gltf.animations;
            scene.add(mesh);

            // Animationmixer, loop Animaiton
            mixer = new THREE.AnimationMixer(mesh);
            var actions_idle = mixer.clipAction(animations[0]);
            actions_idle.setLoop(THREE.LoopRepeat);
            actions_idle.clampWhenFinished = true;
            actions_idle.play();
            startanime = true;

        },
      // zeigt Laden Prozess in der Console an
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
         //  zeigt Probleme beim LAden in der Console an
        function (error) {
            console.log('An error happened');
        }
    );

    loader.load(
        // URL
        'glb/Portal.glb',
        function (gltf) {
            mesh = gltf.scene;
            mesh.scale.set(1, 1, 1);
            mesh.position.set(-1, -1.5, 5);
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            // Zuweisung des Portals, da dieses für die Animation benötigt wird
            mesh.traverse(child => {
                if (child.name === 'Cylinder003') {
                    portal = child;
                    collidableMeshList.push(child);
                }
            });
            scene.add(mesh);
        },
             // zeigt Laden Prozess in der Console an
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        //  zeigt Probleme beim LAden in der Console an
        function (error) {
            console.log('An error happened');
        }
    );
    loader.load(
        'glb/badworld.glb',
        function (gltf) {
            badworld = gltf.scene;
            badworld.scale.set(1.6, 1.6, 1.6);
            badworld.position.set(-1, -1, 0);
            badworld.castShadow = true;
            badworld.receiveShadow = true;
            badworld.visible = false;
            scene.add(badworld);
        },
             // zeigt Laden Prozess in der Console an
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        //  zeigt Probleme beim LAden in der Console an
        function (error) {
            console.log('An error happened');
        }
    );
}

///animate aktualiesiert jeden dargestellten Frame
//Wichtig fpr Animationen und Funktionen die permanent aufgerufen werden.
function animate(time) {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
    TWEEN.update(time);
    delta = clock.getDelta();
    if (mixer) mixer.update(delta);
    wasdController();
    update();
}
requestAnimationFrame(animate);


///Grundaufbau einer WASD Steuerung
function wasdController() {
    camera.getWorldDirection(direction);
    // console.log(direction);
    document.onkeydown = function (e) {
        // Hier: wird in der Console jeder Tastencode der Tastatur wiedergegeben.
        console.log(e.keyCode)
        // Kamerarichtungsvector
        var vector = camera.getWorldDirection();
        switch (e.keyCode) {
            case 87:
                //W für Vorwärts in Kamerarichtung
                camera.position.addScaledVector(direction, speed);
                break;
            case 65:
                break;
            case 83:
                 //S für Rückwärts in Kamerarichtung
                camera.position.addScaledVector(direction, -1 * speed);
                break;
            case 68:
                break;
        }
    };
}


/// Schaltet zwischen den 3D Modellen
///Button nutzt gleiche Funktion
function changeWorld() {
    goodworld.visible = !goodworld.visible;
    badworld.visible = !badworld.visible;
}

///Anpassung der Rendersicht wenn Browserfenster umsklaiert wird.
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

///In Update wird sobald die Kamera mit dem Portal kollidiert und dieses verlässt werden die Modelle ausgetauscht
function update() {
    var originPoint = camera.position.clone();
    var directionVector = camera.getWorldDirection(direction);

    var ray = new THREE.Raycaster(originPoint, directionVector.clone().normalize());
    var collisionResults = ray.intersectObjects(collidableMeshList);
    if (collisionResults.length > 0 && collisionResults[0].distance < directionVector.length()) {
        truecounter = 1;
    }
    if (!(collisionResults.length > 0 && collisionResults[0].distance < directionVector.length()) && truecounter == 1) {
        hittingport = true;

    }
    if (hittingport && truecounter == 1) {
        changeWorld();
        hittingport = false;
        truecounter = 0;
    }
}

///MausKlick Funktion
window.addEventListener('click', onDocumentMouseDown, false);

///MousPosition wird beim Klicken erfasst. 
///Raycast ist ein Strahl/eine Linie welche von jedem Objekt oder jeder Interaktion geworfen werden kann.
///Hier: Von der Kamera aus wird ein Strahl in richtung MausKlickPosition geworfen
///Der Strahl wird "endlos weit" geworfen und Trifft Objekte in der Szene. 
///Beim Klicken kann geschaut werden womit dieser Strahl sich schneidet.
function onDocumentMouseDown(event) {
    
    var raycaster = new THREE.Raycaster(); 
    var mouse = new THREE.Vector2();

    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    ///Beschrenkung nur portal wird erkannt als Klickbares Objekt
    var intersects = raycaster.intersectObjects([portal]);
    ////Hier name des Meshes Wichtig
    ////Ich habe beim benennen in Blender/Maya nicht aufgepasst, weswegen das Portal Cylinder003 heißt;
    // über:
    console.log(raycaster.intersectObjects(scene.children, true)[0].object.name);
    // kann der name des getroffenen Objekts wiedergegeben werden

    ///Geschaut ob was getroffen wurde 
    if (intersects.length > 0) {

        //////Wenn getroffenes Cylinder003 dann mach Sachen
        if (intersects[0].object.name == 'Cylinder003') {

            ///Orbit Controlle aus, damit man die Animation, verhindert das der Nutzer wärend der Animation sich umschauen kann.
            controls.enabled = false;
            ////Tween animation von einem Punkt zum anderen
            // Hier camera zu gelber Sphere
            var position = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
            var target = { x: sphere.position.x, y: sphere.position.y, z: sphere.position.z };
            var tween = new TWEEN.Tween(position).to(target, 2000);
            tween.onUpdate(function () {
                camera.position.set(position.x, position.y, position.z);
            });
            tween.start()
            .onComplete(() => {
                // Wenn Amiamtion fertig dann schalte OrbitControl wieder an
                controls.enabled = true;
            });
        }
    }
}



