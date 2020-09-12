
//create  Transparent Video form Greenscreenvideo

var THREEx	= THREEx	|| {};

THREEx.ChromaKeyMaterial = function (keyColor) {
  THREE.ShaderMaterial.call(this);

	video = document.getElementById('videoIOS');
	video.loop = true;
    video.load();
    video.volume = 1;

  var keyColorObject = new THREE.Color(keyColor);

  var videoTexture = new THREE.Texture(video);
  videoTexture.minFilter = THREE.LinearFilter;
  videoTexture.magFilter = THREE.LinearFilter;

  this.startVideo = function() {
    video.play();
  };

  this.stopVideo = function() {
    video.pause();
    console.log("flup")
  };


  this.update = function () {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      if (videoTexture) {
        videoTexture.needsUpdate = true;
      }
    }
  };

  this.setValues({

    uniforms: {
      texture: {
        type: "t",
        value: videoTexture
      },
      color: {
        type: "c",
        value: keyColorObject
      }
    },
    vertexShader:
    "varying mediump vec2 vUv;\n" +
    "void main(void)\n" +
    "{\n" +
    "vUv = uv;\n" +
    "mediump vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n" +
    "gl_Position = projectionMatrix * mvPosition;\n" +
    "}",
    fragmentShader:
    "uniform mediump sampler2D texture;\n" +
    "uniform mediump vec3 color;\n" +
    "varying mediump vec2 vUv;\n" +
    "void main(void)\n" +
    "{\n" +
    "  mediump vec3 tColor = texture2D( texture, vUv ).rgb;\n" +
    "  mediump float a = (length(tColor - color) - 0.5) *7.0;\n" +
    "  gl_FragColor = vec4(tColor, a);\n" +
    "}",
    transparent: true,
    side: THREE.DoubleSide
  });
};

THREEx.ChromaKeyMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype);