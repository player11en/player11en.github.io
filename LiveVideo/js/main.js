let camera, scene, renderer, video, canvas

var ChromaKeyMaterial;
var videoTexture;
var videoRunning = false;
var playing = false;

init();
animate();

function init() {

    
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    scene = new THREE.Scene();
    scene.background =new THREE.TextureLoader().load( 'https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg' );
   
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = -7;
    camera.position.x = -4;
    camera.position.y = 2;
    camera.rotation.y = -1.6;
    scene.add(camera);

    let ambientLight = new THREE.AmbientLight( 0xcccccc, 1.0 );
    scene.add( ambientLight );

}


function videoText(){
    video = document.getElementById( 'video' );

    videoTexture = new THREE.VideoTexture( video );
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.maxFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBAFormat;

    const texture2 = new THREE.TextureLoader().load( 'https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg' );
    var material = new THREE.MeshBasicMaterial({ map : videoTexture, transparent : true, side: THREE.DoubleSide });
    const geometry = new THREE.PlaneBufferGeometry( 16, 9, material );
    const m2 = new THREE.MeshBasicMaterial({color: 'red'}); 
    geometry.scale( 0.25, 0.25, 0.25 );
    ChromaKeyMaterial = new THREEx.ChromaKeyMaterial(0xd400);


    var listener = new THREE.AudioListener();
    camera.add( listener );

    // create a global audio source
    sound = new THREE.Audio(listener);

    var mesh1 = new THREE.Mesh( geometry, ChromaKeyMaterial );

    mesh1.position.x = 3;
    mesh1.position.y = 1;
    mesh1.position.z = -7;
    mesh1.rotation.y = -1.6;

    scene.add( mesh1 );


    window.addEventListener( 'resize', onWindowResize, false );

    if ( navigator.mediaDevices && navigator.mediaDevices.getUserMedia ) {

      const constraints = {audio: true, video: { width: 1280, height: 720, facingMode: 'user' } };

        navigator.mediaDevices.getUserMedia( constraints ).then( function ( stream ) {

            // apply the stream to the video element used in the texture

            video.srcObject = stream;
            sound.srcObject = stream;
            sound.play();
            video.play();
            videoRunning = true;
            // loadAndUseBodyPix();

        } ).catch( function ( error ) {

            console.error( 'Unable to access the camera/webcam.', error );

        } );

    } else {

        console.error( 'MediaDevices interface not available.' );

    }
}



function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

    requestAnimationFrame( animate );
    if(videoRunning){
        ChromaKeyMaterial.update();
    }

    if(playing){
        videoText();
        playing = false;
    }
    renderer.render( scene, camera );

}


function playVideo(){
    playing = true;
    document.getElementById("overlay").style.display = "none";

};

 //Mute Button to turn off music
 function muteAudio(){

    if (mute == false){
        scene.background = new THREE.Color( 0xff0000 );
        video.volume = 0;
        document.getElementById("mute").style.display ="block";
        document.getElementById("play").style.display ="none";
        mute = true;
    }
    else{
        scene.background =new THREE.TextureLoader().load( 'https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg' );
        document.getElementById("play").style.display ="block";
        document.getElementById("mute").style.display ="none";
        video.volume = 1;
        mute = false;
    }
    

};