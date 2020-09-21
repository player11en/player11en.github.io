    // //Used to keep Screen on while Webapp is running
    !function(A,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.NoSleep=e():A.NoSleep=e()}("undefined"!=typeof self?self:this,function(){return function(A){function e(B){if(o[B])return o[B].exports;var Q=o[B]={i:B,l:!1,exports:{}};return A[B].call(Q.exports,Q,Q.exports,e),Q.l=!0,Q.exports}var o={};return e.m=A,e.c=o,e.d=function(A,o,B){e.o(A,o)||Object.defineProperty(A,o,{configurable:!1,enumerable:!0,get:B})},e.n=function(A){var o=A&&A.__esModule?function(){return A.default}:function(){return A};return e.d(o,"a",o),o},e.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},e.p="",e(e.s=0)}([function(A,e,o){"use strict";function B(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}var Q=function(){function A(A,e){for(var o=0;o<e.length;o++){var B=e[o];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(A,B.key,B)}}return function(e,o,B){return o&&A(e.prototype,o),B&&A(e,B),e}}(),t=o(1),n=t.webm,c=t.mp4,E="undefined"!=typeof navigator&&parseFloat((""+(/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))<10&&!window.MSStream,l=function(){function A(){var e=this;B(this,A),E?this.noSleepTimer=null:(this.noSleepVideo=document.createElement("video"),this.noSleepVideo.setAttribute("muted",""),this.noSleepVideo.setAttribute("title","No Sleep"),this.noSleepVideo.setAttribute("playsinline",""),this._addSourceToVideo(this.noSleepVideo,"webm",n),this._addSourceToVideo(this.noSleepVideo,"mp4",c),this.noSleepVideo.addEventListener("loadedmetadata",function(){e.noSleepVideo.duration<=1?e.noSleepVideo.setAttribute("loop",""):e.noSleepVideo.addEventListener("timeupdate",function(){e.noSleepVideo.currentTime>.5&&(e.noSleepVideo.currentTime=Math.random())})}))}return Q(A,[{key:"_addSourceToVideo",value:function(A,e,o){var B=document.createElement("source");B.src=o,B.type="video/"+e,A.appendChild(B)}},{key:"enable",value:function(){E?(this.disable(),console.warn("\n        NoSleep enabled for older iOS devices. This can interrupt\n        active or long-running network requests from completing successfully.\n        See https://github.com/richtr/NoSleep.js/issues/15 for more details.\n      "),this.noSleepTimer=window.setInterval(function(){document.hidden||(window.location.href=window.location.href.split("#")[0],window.setTimeout(window.stop,0))},15e3)):this.noSleepVideo.play()}},{key:"disable",value:function(){E?this.noSleepTimer&&(console.warn("\n          NoSleep now disabled for older iOS devices.\n        "),window.clearInterval(this.noSleepTimer),this.noSleepTimer=null):this.noSleepVideo.pause()}}]),A}();A.exports=l},function(A,e,o){"use strict";A.exports={webm:"data:video/webm;base64,GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA/vz0AAA=",mp4:"data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQADQGgcIQADQGgcAAAACQGeYUQn/wALKCEAA0BoHAAAAAkBnmNEJ/8ACykhAANAaBwhAANAaBwAAAANQZpoNExDP/6plgAMuSEAA0BoHAAAAAtBnoZFESwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBnqVEJ/8ACykhAANAaBwAAAAJAZ6nRCf/AAsoIQADQGgcIQADQGgcAAAADUGarDRMQz/+qZYADLghAANAaBwAAAALQZ7KRRUsK/8ACPkhAANAaBwAAAAJAZ7pRCf/AAsoIQADQGgcIQADQGgcAAAACQGe60Qn/wALKCEAA0BoHAAAAA1BmvA0TEM//qmWAAy5IQADQGgcIQADQGgcAAAAC0GfDkUVLCv/AAj5IQADQGgcAAAACQGfLUQn/wALKSEAA0BoHCEAA0BoHAAAAAkBny9EJ/8ACyghAANAaBwAAAANQZs0NExDP/6plgAMuCEAA0BoHAAAAAtBn1JFFSwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBn3FEJ/8ACyghAANAaBwAAAAJAZ9zRCf/AAsoIQADQGgcIQADQGgcAAAADUGbeDRMQz/+qZYADLkhAANAaBwAAAALQZ+WRRUsK/8ACPghAANAaBwhAANAaBwAAAAJAZ+1RCf/AAspIQADQGgcAAAACQGft0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bm7w0TEM//qmWAAy4IQADQGgcAAAAC0Gf2kUVLCv/AAj5IQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHAAAAAkBn/tEJ/8ACykhAANAaBwAAAANQZvgNExDP/6plgAMuSEAA0BoHCEAA0BoHAAAAAtBnh5FFSwr/wAI+CEAA0BoHAAAAAkBnj1EJ/8ACyghAANAaBwhAANAaBwAAAAJAZ4/RCf/AAspIQADQGgcAAAADUGaJDRMQz/+qZYADLghAANAaBwAAAALQZ5CRRUsK/8ACPkhAANAaBwhAANAaBwAAAAJAZ5hRCf/AAsoIQADQGgcAAAACQGeY0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bmmg0TEM//qmWAAy5IQADQGgcAAAAC0GehkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGepUQn/wALKSEAA0BoHAAAAAkBnqdEJ/8ACyghAANAaBwAAAANQZqsNExDP/6plgAMuCEAA0BoHCEAA0BoHAAAAAtBnspFFSwr/wAI+SEAA0BoHAAAAAkBnulEJ/8ACyghAANAaBwhAANAaBwAAAAJAZ7rRCf/AAsoIQADQGgcAAAADUGa8DRMQz/+qZYADLkhAANAaBwhAANAaBwAAAALQZ8ORRUsK/8ACPkhAANAaBwAAAAJAZ8tRCf/AAspIQADQGgcIQADQGgcAAAACQGfL0Qn/wALKCEAA0BoHAAAAA1BmzQ0TEM//qmWAAy4IQADQGgcAAAAC0GfUkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGfcUQn/wALKCEAA0BoHAAAAAkBn3NEJ/8ACyghAANAaBwhAANAaBwAAAANQZt4NExC//6plgAMuSEAA0BoHAAAAAtBn5ZFFSwr/wAI+CEAA0BoHCEAA0BoHAAAAAkBn7VEJ/8ACykhAANAaBwAAAAJAZ+3RCf/AAspIQADQGgcAAAADUGbuzRMQn/+nhAAYsAhAANAaBwhAANAaBwAAAAJQZ/aQhP/AAspIQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHAAACiFtb292AAAAbG12aGQAAAAA1YCCX9WAgl8AAAPoAAAH/AABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAGGlvZHMAAAAAEICAgAcAT////v7/AAAF+XRyYWsAAABcdGtoZAAAAAPVgIJf1YCCXwAAAAEAAAAAAAAH0AAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAygAAAMoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAB9AAABdwAAEAAAAABXFtZGlhAAAAIG1kaGQAAAAA1YCCX9WAgl8AAV+QAAK/IFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAUcbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAE3HN0YmwAAACYc3RzZAAAAAAAAAABAAAAiGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAygDKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAyYXZjQwFNQCj/4QAbZ01AKOyho3ySTUBAQFAAAAMAEAAr8gDxgxlgAQAEaO+G8gAAABhzdHRzAAAAAAAAAAEAAAA8AAALuAAAABRzdHNzAAAAAAAAAAEAAAABAAAB8GN0dHMAAAAAAAAAPAAAAAEAABdwAAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAAC7gAAAAAQAAF3AAAAABAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAEEc3RzegAAAAAAAAAAAAAAPAAAAzQAAAAQAAAADQAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAANAAAADQAAAQBzdGNvAAAAAAAAADwAAAAwAAADZAAAA3QAAAONAAADoAAAA7kAAAPQAAAD6wAAA/4AAAQXAAAELgAABEMAAARcAAAEbwAABIwAAAShAAAEugAABM0AAATkAAAE/wAABRIAAAUrAAAFQgAABV0AAAVwAAAFiQAABaAAAAW1AAAFzgAABeEAAAX+AAAGEwAABiwAAAY/AAAGVgAABnEAAAaEAAAGnQAABrQAAAbPAAAG4gAABvUAAAcSAAAHJwAAB0AAAAdTAAAHcAAAB4UAAAeeAAAHsQAAB8gAAAfjAAAH9gAACA8AAAgmAAAIQQAACFQAAAhnAAAIhAAACJcAAAMsdHJhawAAAFx0a2hkAAAAA9WAgl/VgIJfAAAAAgAAAAAAAAf8AAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACsm1kaWEAAAAgbWRoZAAAAADVgIJf1YCCXwAArEQAAWAAVcQAAAAAACdoZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU3RlcmVvAAAAAmNtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAidzdGJsAAAAZ3N0c2QAAAAAAAAAAQAAAFdtcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAADNlc2RzAAAAAAOAgIAiAAIABICAgBRAFQAAAAADDUAAAAAABYCAgAISEAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAABYAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAGAAAAWAAAAXBzdGNvAAAAAAAAAFgAAAOBAAADhwAAA5oAAAOtAAADswAAA8oAAAPfAAAD5QAAA/gAAAQLAAAEEQAABCgAAAQ9AAAEUAAABFYAAARpAAAEgAAABIYAAASbAAAErgAABLQAAATHAAAE3gAABPMAAAT5AAAFDAAABR8AAAUlAAAFPAAABVEAAAVXAAAFagAABX0AAAWDAAAFmgAABa8AAAXCAAAFyAAABdsAAAXyAAAF+AAABg0AAAYgAAAGJgAABjkAAAZQAAAGZQAABmsAAAZ+AAAGkQAABpcAAAauAAAGwwAABskAAAbcAAAG7wAABwYAAAcMAAAHIQAABzQAAAc6AAAHTQAAB2QAAAdqAAAHfwAAB5IAAAeYAAAHqwAAB8IAAAfXAAAH3QAAB/AAAAgDAAAICQAACCAAAAg1AAAIOwAACE4AAAhhAAAIeAAACH4AAAiRAAAIpAAACKoAAAiwAAAItgAACLwAAAjCAAAAFnVkdGEAAAAObmFtZVN0ZXJlbwAAAHB1ZHRhAAAAaG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAO2lsc3QAAAAzqXRvbwAAACtkYXRhAAAAAQAAAABIYW5kQnJha2UgMC4xMC4yIDIwMTUwNjExMDA="}}])});
 
    //Variable Setup
    var scene, camera, renderer, clock, deltaTime, totalTime;

    var arToolkitSource, arToolkitContext;
    var ChromaKeyMaterial;
    var pivot;
    var markerRoot1,smoothedRoot;
    var ARInitRunning = false;
    var videoTexture;
    var noSleep = new NoSleep();
    var video;
    var mute = false;
    var onRenderFcts= [];
    var timer = 0;
    var plane;
    var updaterate  = 60;
    var videoIsPlaying = false;
    var viewWithoutMarker = false;
    ARInitRunning = true;
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var  videoPreloaded = false;
    var startButton = document.getElementById( 'startButton' );
    var dir = new THREE.Vector3();
    var markerup =  new THREE.Vector3();

    initialize();
    intitMarker();

    if(isiOSDevice() || isSafari){

        var overlay = document.createElement('div');
        overlay.id = "overlay";

        startButton = document.createElement('Button');
        startButton.id = "startButton"; 
        startButton.textContent = 'Video Starten';
        overlay.appendChild(startButton);
        var container = document.getElementById('Container');
        document.documentElement.appendChild(overlay);
        container.appendChild(overlay);

        startButton.addEventListener( 'click', function () {
            loadVideo();
            var overlay = document.getElementById('overlay');
            overlay.remove();
            //keep screen on
            noSleep.enable();
        }, false );

    }
    else{
        loadVideo();
        //keep screen on
        noSleep.enable();
    }
    
    //replayButton when Video finished
    var videoEnded = document.getElementById('videoIOS');
    videoEnded.addEventListener('ended', function (){
        console.log("videoende");
        var overlay = document.createElement('div');
        overlay.id = "replayButton";

        startButton = document.createElement('Button');
        startButton.id = "startButton"; 
        startButton.textContent = 'Nochmal abspielen';

        overlay.appendChild(startButton);
       

        startButton.addEventListener( 'click', function () {
            playVideo();
            var overlay = document.getElementById('replayButton');
            overlay.remove();
        }, false );
    });
  
    ////init --> create Scene, Camera, Light
    function initialize()
    { 

        document.documentElement.requestFullscreen();
        screen.orientation.lock('portrait').then(null, function(error) {
        document.exitFullscreen();
        });
        //antialias, sortObjects and logarithmicDepthBuffer used to prevent z-fighting
        // alpha used for transparent Background
        renderer = new THREE.WebGLRenderer({
            antialias : true,
            logarithmicDepthBuffer: true,
            sortObjects: true,
            alpha: true,
            precision: 'mediump'
        });
        renderer.setClearColor(new THREE.Color('lightgrey'), 0);
        renderer.setSize(1920, 1080);
        renderer.domElement.style.position = 'fixed';
        renderer.domElement.style.top = '0px';
        renderer.domElement.style.left = '0px';
        document.body.appendChild( renderer.domElement );

        scene = new THREE.Scene();
        
        let ambientLight = new THREE.AmbientLight( 0xcccccc, 1.0 );
        scene.add( ambientLight );
                    
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 10000);
        scene.add( camera );
        clock = new THREE.Clock();
        deltaTime = 0;
        totalTime = 0;
        
    ////////////////////////////////////////////////////////////
    // setup arToolkitSource
    ////////////////////////////////////////////////////////////

        arToolkitSource = new THREEx.ArToolkitSource({
            sourceType : 'webcam', 
        });

        arToolkitSource.init(function onReady(){   
            onResize();    
        });

        // handle resize event
        window.addEventListener('resize', function(){
            onResize();
        });
      
    ////////////////////////////////////////////////////////////
    // setup arToolkitContext
    ////////////////////////////////////////////////////////////	
   
        // create atToolkitContext
        //add camera_para.dat
        arToolkitContext = new THREEx.ArToolkitContext({

            detectionMode: 'mono',
            cameraParametersUrl: 'data/camera_para.dat',
            patternRatio:0.8,
            canvasWidth: 80*3,
            canvasHeight: 60*3,
            maxDetectionRate: updaterate,
        });
        
        // copy projection matrix to camera when initialization complete
        arToolkitContext.init( function onCompleted(){
            camera.projectionMatrix.copy( arToolkitContext.getProjectionMatrix() );
        });

        // update artoolkit on every frame
        onRenderFcts.push(function(){
            if( arToolkitSource.ready === false )	return
            arToolkitContext.update( arToolkitSource.domElement)            
        })
    }  

    ////////////////////////////////////////////////////////////
    // setup markerRoots
    ////////////////////////////////////////////////////////////
    function intitMarker(){
        // build markerControls --> Selfcreated Marker
        //made with AR.js Marker Training Site
        //add patt data
        markerRoot1 = new THREE.Group();
        //markerRoot1.position.set(0,0,0);
        scene.add(markerRoot1);
        markerControls1 = new THREEx.ArMarkerControls(arToolkitContext, markerRoot1, {
            type: 'pattern',
            patternUrl: "patt/pattern-Konpart.patt",
            smooth: true,
            // number of matrices to smooth tracking over, more = smoother but slower follow
            smoothCount:4,
            // distance tolerance for smoothing, if smoothThreshold # of matrices are under tolerance, tracking will stay still
            smoothTolerance: 0.01,
            // threshold for smoothing, will keep still unless enough matrices are over tolerance
            smoothThreshold: 2
        }) 
       
        var axesHelper = new THREE.AxesHelper( 5 );
        // scene.add( axesHelper );

        markerRoot1.add (axesHelper);

        // build a smoothedControls
        //keeps object at last marker position even if Marker ist lost
        smoothedRoot = new THREE.Group()
        scene.add(smoothedRoot);
        var smoothedControls = new THREEx.ArSmoothedControls(smoothedRoot, {
            lerpPosition: 0.4,
            lerpQuaternion: 0.3,
            lerpScale: 1,

        })
        onRenderFcts.push(function(delta){
            smoothedControls.update(markerRoot1)
        })
                
    }

    function playVideo(){
        video.play();

    };

    ////////////////////////////////////////////////////////////
    // setup markerRoots
    ////////////////////////////////////////////////////////////
    function loadVideo(){
        // startButton.style.display ="none";
      
        //only in console --> testing loading  time 
        if(isiOSDevice == true || isSafari == true){
            //video used from html <video> Tag to keep control

            video  = document.getElementById('videoIOS');
            video.loop = false;
            video.volume = 1;

            var listener = new THREE.AudioListener();
            camera.add( listener );

            // create a global audio source
            sound = new THREE.Audio(listener);

            //Chromakeying skript in Threex folder 
            ChromaKeyMaterial = new THREEx.ChromaKeyMaterial(0xd400);

            //add material to plane
            plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 2), ChromaKeyMaterial);
            plane.position.set(0,1,0);

            //pivot used to change plane orgin
            pivot = new THREE.Group();
            pivot.position.set( 0.0, 0.0, 0 ); // MOVE THE PIVOT BACK TO WORLD ORIGN
            markerRoot1.add( pivot ); // THIS ADDS THE PIVOT TO THE CENTRE OF THE GEOMOETRY
           

            pivot.add( plane );

            markerRoot1.add(pivot);
            smoothedRoot.add(pivot);

            //update Greenscreenkeyed after its loaded
            videoPreloaded = true;
            video.pause();
            
        }
        else{
            video  = document.getElementById('videoIOS');
            video.src = 'video/KundenVideoTopWebm.webm';

            video.autoload = true;
            video.loop = false;
            video.volume = 1;
            console.log("notios"); 

            video.onloadeddata = function(){
               
                
                //Creating Texture from video
                videoTexture = new THREE.VideoTexture( video);
                videoTexture.minFilter = THREE.LinearFilter;
                videoTexture.maxFilter = THREE.LinearFilter;
                videoTexture.format = THREE.RGBAFormat;
            
                var listener = new THREE.AudioListener();
                camera.add( listener );
    
                // create a global audio source
                sound = new THREE.Audio(listener);
    
                var material = new THREE.MeshBasicMaterial({ map : videoTexture, transparent : true, side: THREE.DoubleSide });
                plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 4), material);
                plane.position.set(0,2,0);
    
                    
                pivot = new THREE.Group();
                pivot.position.set( 0, 0, 0 ); // MOVE THE PIVOT BACK TO WORLD ORIGN
                markerRoot1.add( pivot ); // THIS ADDS THE PIVOT TO THE CENTRE OF THE GEOMOETRY, WHICH WAS THEN ADDING MESH2 IN THE WRONG PLACE
                pivot.add( plane );
    
                markerRoot1.add(pivot);
                smoothedRoot.add(pivot);
            };
            // videoPreloaded = true;
            video.pause();
        }     
    };

    //check if iOS device
    function isiOSDevice() {
        return [
          'iPad Simulator',
          'iPhone Simulator',
          'iPod Simulator',
          'iPad',
          'iPhone',
          'iPod'
        ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
      }


    function playWithoutMarker(){       
        console.log("hit");
        viewWithoutMarker = true;
    }


    //Mute Button to turn off music
    function muteAudio(){

        if (mute == false){
            
            video.volume = 0;
            document.getElementById("mute").style.display ="block";
            document.getElementById("play").style.display ="none";
            mute = true;
        }
        else{
            document.getElementById("play").style.display ="block";
            document.getElementById("mute").style.display ="none";
            video.volume = 1;
            mute = false;
        }
    };
    
    //Check if marker detected or lost
    function checkMarker(){
        
        var box = document.getElementById("Container");
        var infoMsg = document.getElementById("noMarker");

        // is marker currently tracked??
        if (markerRoot1.visible || viewWithoutMarker) {
            // has video already started??        
            if (!videoIsPlaying ){
                
                // hide info box
                box.style.display = "none";
                infoMsg.style.display = "none";
                // start video
                video.play();
                video.muted = !video.muted;
                video.volume = 1;
                videoIsPlaying = true;
            }
            else {
                
                // video is already playing
                let v = new THREE.Vector3(0,0,0);
                markerPosition = markerRoot1.position;
                markerRoot1.add(pivot);
                camera.remove(pivot);
                VideorotatetoCamera();
                pivot.position.copy(v);
            }
            
            timer = 0;
        }
        
        // // is video already playing and marker has been lost??
        if (videoIsPlaying && (!markerRoot1.visible || viewWithoutMarker )) {
        
            // increase timer
            if(timer <= 120){
                timer += 1;
            }
            
            if(timer == 100 || viewWithoutMarker){
                // move video to screen center
                markerRoot1.remove(pivot);
                camera.add(pivot);
                camera.position = new THREE.Vector3(0,0,0);
                camera.quaternion = new THREE.Vector3(0,0,0);
                pivot.position.copy(camera.position);
                pivot.quaternion.copy(camera.quaternion);
                pivot.position.z = -6;
                pivot.position.y = -2;
            }
        }
    }

    //arToolkit Resizefunction 
    function onResize()
    {
        arToolkitSource.onResizeElement()	
        arToolkitSource.copyElementSizeTo(renderer.domElement)	
        
        if ( arToolkitContext.arController !== null )
        {
            arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);	
        }	    
    };    

    document.addEventListener("keydown", onDocumentKeyDown, false);
    function onDocumentKeyDown(event) {
        var keyCode = event.which;
        if (keyCode == 87) {
            plane.position.addScaledVector( markerup, -0.01 );
        }
    };

    function VideorotatetoCamera(){   
        // pivot.lookAt(camera.position);


        // camera.getWorldDirection( dir );


        // // markerRoot1.up.set(0,-1,0);
        // markerRoot1.getWorldDirection( markerup );
        
       

        // console.log(markerup);
        // console.log(dir);

        // // plane.position.addScaledVector( markerup, -0.01 );

        // var newdir = new THREE.Vector3();

        // var angle = THREE.Math.radToDeg(newdir.subVectors( markerup, dir ).normalize());

        


        // console.log(angle);

        // if(angle > 90 ){
        //     pivot.rotation.x = THREE.Math.degToRad(0);

        // }
        // if(angle < 90){
        //     pivot.rotation.x = THREE.Math.degToRad(-90);

        // }

        // THREE.Math.radToDeg( radians );

        // plane.updateMatrixWorld();
        // var worldMatrix = plane.matrixWorld;
        // var worldPos  = new THREE.Vector3().setFromMatrixPosition(worldMatrix);
        // camera.updateMatrixWorld();
        //  var worldMatrix2 = camera.matrixWorld;
        //  var worldPos2  = new THREE.Vector3().setFromMatrixPosition(worldMatrix2);

        //  pivot.rotation.y += markerRoot1.rotation.y;

        //  obj.rotation.y = Math.atan2( ( camera.position.x - obj.position.x ), ( camera.position.z - obj.position.z ) );
        // console.log(pivot.rotation.y);
    };

    // render the scene
    onRenderFcts.push(function(){
        if(ARInitRunning){
            renderer.render( scene, camera );
        }
    });
       
    // run the rendering loop
    var lastTimeMsec= null
    requestAnimationFrame(function animate(nowMsec){
        // keep looping
        requestAnimationFrame( animate);
        // measure time
        lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
        var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
        lastTimeMsec	= nowMsec
        totalTime += deltaTime;
        // call each update function
        onRenderFcts.forEach(function(onRenderFct){
            if(ARInitRunning){
                onRenderFct(deltaMsec/1000, nowMsec/1000)
                checkMarker();

               //updateGreenscreenmaterial
                if(videoPreloaded && isiOSDevice() || videoPreloaded && isSafari){
                    ChromaKeyMaterial.update();
                }
                deltaTime = clock.getDelta();
            }   
        });
    });