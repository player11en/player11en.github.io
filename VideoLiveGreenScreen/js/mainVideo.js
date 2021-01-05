const videoElement = document.getElementById('video');
const canvas = document.getElementById('canvas');
var videoTexture;
var running = false;
let camera, scene, renderer, video, material, mesh,mesh2;
var ChromaKeyMaterial;
var videoRunning = false;
const contextPerson = canvas.getContext("2d");
var meshTask = [];
var onRenderFcts= [];
var  clock, deltaTime, totalTime;

startVideoStream();


init();
// animate();



function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = -12;
    camera.position.x = -2;
    camera.position.y = 2;
    camera.rotation.y = -1.6;
    

    scene = new THREE.Scene();
    scene.background =new THREE.TextureLoader().load( 'https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg' );
   
    let ambientLight = new THREE.AmbientLight( 0xcccccc, 1.0 );
    scene.add( ambientLight );
    clock = new THREE.Clock();
    deltaTime = 0;
    totalTime = 0;
    
    scene.add( camera );

    document.body.addEventListener('keydown', keyPressed, false);
   
    video = document.getElementById( 'video' );

    var videoTexture = new THREE.Texture(canvas);
    
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.maxFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBAFormat;

    


    // // const texture2 = new THREE.TextureLoader().load( 'https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg' );
    material = new THREE.MeshBasicMaterial({ map : videoTexture, transparent : true, side: THREE.DoubleSide });
    const geometry = new THREE.PlaneBufferGeometry( 9, 16, material );
    const m2 = new THREE.MeshBasicMaterial({color: 'red'}); 
    material.map = new THREE.CanvasTexture( canvas );
    geometry.scale( 0.1, 0.1,0.1 );
    
    // ChromaKeyMaterial = new THREEx.ChromaKeyMaterial(0xd400);

    // mesh = new THREE.Mesh( geometry, m2 );
    // mesh.position.x = 2;
    // mesh.position.y = 1;
    // mesh.position.z = -7;
    // mesh.rotation.y = -1.6;
    mesh2 = new THREE.Mesh( geometry, material );
    mesh2.position.x = 2;
    mesh2.position.y = 1;
    mesh2.position.z = -7;
    mesh2.rotation.y = -1.6;
    scene.add(mesh2 );

        ////////////////////////////////////////////////////////////
        var loader = new THREE.GLTFLoader();

        // Load a glTF resource
        loader.load(
            // resource URL
            'models/Room1.glb',
            // called when the resource is loaded
            function ( gltf ) {   
                mesh = gltf.scene;
                mesh.scale.set(5, 5,5 );
                mesh.position.set(-1,-1,5);
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                var animations = gltf.animations;
                
                scene.add(mesh);

 
                // Animationmixer, loop Animaiton
                // mixer = new THREE.AnimationMixer(mesh);

                // var actions_idle = mixer.clipAction(animations[0]);
                // actions_idle.setLoop(THREE.LoopRepeat);
                // actions_idle.clampWhenFinished = true;
                // actions_idle.play();
                //  startanime = true;

            },
            // called when loading is in progresses
            function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total *100) + '% loaded' );
            },
            // called when loading has errors
            function ( error ) {
                console.log( 'An error happened' );
            }
        );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize, false );
}



videoElement.onplaying = () => {
  canvas.height = videoElement.videoHeight;
  canvas.width = videoElement.videoWidth;
};



function keyPressed(e){
  switch(e.key) {
  	case 'w':
      camera.position.x += 0.01;
    	break;
    case 's':
      camera.position.x -= 0.01;
    	break;
    case 'd':
      camera.position.z += 0.01;
    	break;
    case 'a':
      camera.position.z -= 0.01;
    	break;
  }
}

function startVideoStream() {
  // navigator.mediaDevices.getUserMedia({video: true, audio: false})
  //   .then(stream => {
  //     videoElement.srcObject = stream;
  //     videoElement.play();
  //     videoElement.hidden = true;
  //     canvas.hidden = false;
  //     running = true;
    
  //     loadBodyPix();
  //   })
  //   .catch(err => {
  //     startBtn.disabled = false;
  //     blurBtn.disabled = true;
  //     stopBtn.disabled = true;
  //     alert(`Following error occured: ${err}`);
  //   });

  if ( navigator.mediaDevices && navigator.mediaDevices.getUserMedia ) {

    const constraints = { video: { width: 640, height: 480, facingMode: 'user' } };

    navigator.mediaDevices.getUserMedia( constraints ).then( function ( stream ) {

        // apply the stream to the video element used in the texture

        videoElement.srcObject = stream;
        videoElement.play();
        videoElement.hidden = true;
        canvas.hidden = true;
        videoRunning = true;
      
        loadBodyPix();

    } ).catch( function ( error ) {

        console.error( 'Unable to access the camera/webcam.', error );

    } );

    } else {

        console.error( 'MediaDevices interface not available.' );

    }

}


function loadBodyPix() {
  options = {
    architecture: 'MobileNetV1',
  outputStride: 16,
  multiplier: 0.5,
  quantBytes: 2
  }
  bodyPix.load(options)
    .then(net => perform(net))
    .catch(err => console.log(err))
}

async function perform(net) {

  while (running = true) {
    const segmentation = await net.segmentPerson(video,{
      flipHorizontal: false,
      internalResolution: 'medium',
      maxDetections: 24,
      segmentationThreshold: 0.7
    });

    // const backgroundBlurAmount = 6;
    // const edgeBlurAmount = 2;
    // const flipHorizontal = true;

    // bodyPix.drawBokehEffect(
    //   canvas, videoElement, segmentation, backgroundBlurAmount,
    //   edgeBlurAmount, flipHorizontal);
    // const foregroundColor = {r: 0, g: 0, b: 0, a: 0};
    // const backgroundColor = {r: 0, g: 255, b: 0, a: 255};
    // const backgroundDarkeningMask = bodyPix.toMask(
    // segmentation, foregroundColor, backgroundColor);
    
    contextPerson.drawImage(videoElement, 0, 0);

    var imageData = contextPerson.getImageData(0,0, videoElement.width, videoElement.height);
        
    var pixel = imageData.data;
    for (var p = 0; p<pixel.length; p+=4)
    {
      if (segmentation.data[p/4] == 0) {
          pixel[p+3] = 0;
      }
    }
    contextPerson.imageSmoothingEnabled = true;
    contextPerson.putImageData(imageData,0,0);

    //  videoTexture = new THREE.Texture(videoElement);
    

    // var imageObject=new Image();
   
    // imageObject.onload=function(){        
    //   contextPerson.imageSmoothingEnabled = true;
    //   contextPerson.drawImage(imageObject, 0, 0, videoElement.width, videoElement.height);
    // //   // videoTexture = contextPerson;
    // // };
    // //  const coloredPartImage = bodyPix.toMask( segmentation);
    // const opacity =  1;
    // // const flipHorizontal = false;
    // const maskBlurAmount = 0;


    material.map = new THREE.CanvasTexture( canvas );
    // Draw the mask image on top of the original image onto a canvas.
    // The colored part image will be drawn semi-transparent, with an opacity of
    // 0.7, allowing for the original image to be visible under.
    
    // bodyPix.drawMask(canvas, videoElement, backgroundDarkeningMask, opacity, maskBlurAmount,flipHorizontal); 
  }
}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}


// function animate() {

//   requestAnimationFrame( animate );
//   if(videoRunning){
//       // ChromaKeyMaterial.update();
//       // videoTexture.needsUpdate = true;
//       mesh.rotation.y += 0.01;
      
//   }
//   renderer.render( scene, camera );

// }

   // render the scene
   onRenderFcts.push(function(){
    if(videoRunning){
      // console.log(mesh.position);
      // console.log(camera.position);
      // mesh.rotation.y +=0.1;
        renderer.render( scene, camera );
    }
});
// //Mute Button to turn off music
// function muteAudio(){

//   if (mute == false){
//       scene.background = new THREE.Color( 0xff0000 );
//       // video.volume = 0;
//       document.getElementById("mute").style.display ="block";
//       document.getElementById("play").style.display ="none";
//       mute = true;
//   }
//   else{
//       scene.background =new THREE.TextureLoader().load( 'https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg' );
//       document.getElementById("play").style.display ="block";
//       document.getElementById("mute").style.display ="none";
//       // video.volume = 1;
//       mute = false;
//   }
  

// };


   // run the rendering loop
   var lastTimeMsec= null
   requestAnimationFrame(function animate(nowMsec){
       // keep looping
       requestAnimationFrame( animate );
       // measure time
       lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
       var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
       lastTimeMsec	= nowMsec
       totalTime += deltaTime;
       // call each update function
       onRenderFcts.forEach(function(onRenderFct){
           if(videoRunning){
               onRenderFct(deltaMsec/1000, nowMsec/1000)
               
              //  hideBox();
               deltaTime = clock.getDelta();
               
               ////Runanimation when Modelloaded
               ////update Mixer to run animation
              //  if(startanime == true)
              //  {
              //      mixer.update(deltaTime);
              //  }
           }   
       });
   });