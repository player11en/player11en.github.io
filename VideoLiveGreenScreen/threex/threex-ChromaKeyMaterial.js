//create  Transparent Video form Greenscreenvideo
function vertexShader() {
  return `

	varying vec2 vUv;

	void main()
	{
		vUv = uv;
		vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
		gl_Position = projectionMatrix * mvPosition;
	}
  `
};


function fragmentShader() {
  return `

	varying vec2 vUv;
 
	uniform float thresholdSensitivity;
	uniform float smoothing;
	uniform vec3 colorToReplace;
	uniform sampler2D inputImageTexture;
	
	void main()
	{
		vec4 textureColor = texture2D(inputImageTexture, vUv);
		
		float maskY = 0.2989 * colorToReplace.r + 0.5866 * colorToReplace.g + 0.1145 * colorToReplace.b;
		float maskCr = 0.7132 * (colorToReplace.r - maskY);
		float maskCb = 0.5647 * (colorToReplace.b - maskY);
		
		float Y = 0.2989 * textureColor.r + 0.5866 * textureColor.g + 0.1145 * textureColor.b;
		float Cr = 0.7132 * (textureColor.r - Y);
		float Cb = 0.5647 * (textureColor.b - Y);
		
		float blendValue = smoothstep(thresholdSensitivity, thresholdSensitivity + smoothing, distance(vec2(Cr, Cb), vec2(maskCr, maskCb)));
		gl_FragColor = vec4(textureColor.rgb, textureColor.a * blendValue);
	}
  `
};

var THREEx	= THREEx	|| {};

THREEx.ChromaKeyMaterial = function (keyColor) {
  THREE.ShaderMaterial.call(this);

	video = document.getElementById('video');
	video.loop = true;
    video.load();
    video.volume = 1;

  var keyColorObject = new THREE.Color(keyColor);

  var thresholdSensitivity = 0.39;
  var smoothing = 0.01;

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
      inputImageTexture: {
        type: "t",
        value: videoTexture
      },
      colorToReplace: {
        type: "c",
        value: keyColorObject
      },
      thresholdSensitivity: {
				type: "f",
				value: thresholdSensitivity
			},
			smoothing: {
				type: "f",
				value: smoothing
			}
    },
    vertexShader: vertexShader(),
    fragmentShader: fragmentShader(),
    transparent: true,
    side: THREE.DoubleSide
  });
};

THREEx.ChromaKeyMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype);