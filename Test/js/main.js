
let camera, scene, renderer, video, canvas;
var ChromaKeyMaterial;
var videoTexture;
var videoRunning = false;

init();
animate();



function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = -7;
    camera.position.x = -4;
    camera.position.y = 2;
    camera.rotation.y = -1.6;
    

    scene = new THREE.Scene();
    scene.background =new THREE.TextureLoader().load( 'https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg' );
   
    video = document.getElementById( 'video' );

    videoTexture = new THREE.VideoTexture( video );
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.maxFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBAFormat;


    
    let ambientLight = new THREE.AmbientLight( 0xcccccc, 1.0 );
    scene.add( ambientLight );

    const texture2 = new THREE.TextureLoader().load( 'https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg' );
    var material = new THREE.MeshBasicMaterial({ map : videoTexture, transparent : true, side: THREE.DoubleSide });
    const geometry = new THREE.PlaneBufferGeometry( 9, 16, material );
    const m2 = new THREE.MeshBasicMaterial({color: 'red'}); 
    geometry.scale( 0.1, 0.1, 0.1 );
    ChromaKeyMaterial = new THREEx.ChromaKeyMaterial(0xd400);

    var mesh1 = new THREE.Mesh( geometry, ChromaKeyMaterial );

    mesh1.position.x = 3;
    mesh1.position.y = 1;
    mesh1.position.z = -7;
    mesh1.rotation.y = -1.6;

    scene.add( mesh1 );




    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize, false );

    if ( navigator.mediaDevices && navigator.mediaDevices.getUserMedia ) {

        const constraints = { video: { width: 1280, height: 720, facingMode: 'user' } };

        navigator.mediaDevices.getUserMedia( constraints ).then( function ( stream ) {

            // apply the stream to the video element used in the texture

            video.srcObject = stream;
            video.play();
            videoRunning = true;
            // loadAndUseBodyPix();

        } ).catch( function ( error ) {

            console.error( 'Unable to access the camera/webcam.', error );

        } );

    } else {

        console.error( 'MediaDevices interface not available.' );

    }

        //only in console --> testing loading  time 
        function onProgress(xhr) { console.log( (xhr.loaded / xhr.total * 100) + '% loaded' ); }
        function onError(xhr) { console.log( 'An error happened' ); }

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
            // var animations = gltf.animations;
            
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


}

// async function loadBodyPix() {
//     var outputStride = 16;
//     var segmentationThreshold = 0.7;

//     var imageElement = document.getElementById('video');

//     bodyPix.load().then(function(net){
//     return net.estimatePersonSegmentation(imageElement, outputStride, segmentationThreshold)
//     }).then(function(segmentation){
//     //   console.log(segmentation);
//         const maskBackground = true;
//         // Convert the personSegmentation into a mask to darken the background.
//             const backgroundDarkeningMask = bodyPix.toMaskImageData(segmentation, maskBackground);

//             const opacity = 1;

//             const canvas = document.getElementById('canvas');

//             const ctx = canvas.getContext('2d');
//             const { data:imgData } = ctx.getImageData(0, 0, canvas.width, canvas.height);

//             const newImg = ctx.createImageData(canvas.width, canvas.height);
//             const newImgData = newImg.data;
//             ctx.putImageData(newImg, 0, 0);
//         // draw the mask onto the image on a canvas.  With opacity set to 0.7 this will darken the background.
//     })
// };


// async function pop() {
  
//     // Loading the model
//     const net = await bodyPix.load({
//       architecture: 'MobileNetV1',
//       outputStride: 16,
//       multiplier: 0.75,
//       quantBytes: 2
//     });
    
//     // Segmentation
//     const canvas = document.querySelector('canvas');
//     const videos = document.querySelector('video');
//     const segmentation = await net.segmentPerson(videos, {
//         flipHorizontal: false,
//         internalResolution: 'medium',
//         segmentationThreshold: 0.7
//       });

//          const coloredPartImage = bodyPix.toMask(segmentation);
//         const opacity =  1;
//         const flipHorizontal = false;
//         const maskBlurAmount = 0;

//         // Draw the mask image on top of the original image onto a canvas.
//         // The colored part image will be drawn semi-transparent, with an opacity of
//         // 0.7, allowing for the original image to be visible under.
//         bodyPix.drawMask(
//             canvas, videos, coloredPartImage, opacity, maskBlurAmount,
//             flipHorizontal);

//     const ctx = canvas.getContext('2d');
//     const { data:imgData } = ctx.getImageData(0, 0, canvas.width, canvas.height);

//       // Creating new image data
//   const newImg = ctx.createImageData(canvas.width, canvas.height);
//   const newImgData = newImg.data;
  
//   // Apply the effect
//   for(let i=0; i<map.length; i++) {
//     // Extract data into r, g, b, a from imgData
//     const [r, g, b, a] = [
//       imgData[i*4],
//       imgData[i*4+1],
//       imgData[i*4+2],
//       imgData[i*4+3]
//     ];

//     // Calculate the gray color
//     const gray = ((0.3 * r) + (0.59 * g) + (0.11 * b));

//     // Set new RGB color to gray if map value is not 1
//     // for the current pixel in iteration
//     [
//       newImgData[i*4],
//       newImgData[i*4+1],
//       newImgData[i*4+2],
//       newImgData[i*4+3]
//     ] = !map[i] ? [gray, gray, gray, 255] : [r, g, b, a];
//   }
  
//   // Draw the new image back to canvas
//   ctx.putImageData(newImg, 0, 0);
// };

// function loadImage(src) {
//     const img = new Image();
//     img.crossOrigin = '';
//     const canvas = document.querySelector('canvas');
//     const ctx = canvas.getContext('2d');
  
//     // Load the image on canvas
//     img.addEventListener('load', () => {
//       // Set canvas width, height same as image
//       canvas.width = img.width;
//       canvas.height = img.height;
//       ctx.drawImage(img, 0, 0);
  
//       pop();
//     });
  
//     img.src = src;
//   }

// loadImage('/image/Test.jpg');

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
    renderer.render( scene, camera );

}
 //Mute Button to turn off music
 function muteAudio(){

    if (mute == false){
        scene.background = new THREE.Color( 0xff0000 );
        // video.volume = 0;
        document.getElementById("mute").style.display ="block";
        document.getElementById("play").style.display ="none";
        mute = true;
    }
    else{
        scene.background =new THREE.TextureLoader().load( 'https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg' );
        document.getElementById("play").style.display ="block";
        document.getElementById("mute").style.display ="none";
        // video.volume = 1;
        mute = false;
    }
    

};