var canvas = document.getElementById("renderCanvas");

!function (A, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.NoSleep = e() : A.NoSleep = e() }("undefined" != typeof self ? self : this, function () { return function (A) { function e(B) { if (o[B]) return o[B].exports; var Q = o[B] = { i: B, l: !1, exports: {} }; return A[B].call(Q.exports, Q, Q.exports, e), Q.l = !0, Q.exports } var o = {}; return e.m = A, e.c = o, e.d = function (A, o, B) { e.o(A, o) || Object.defineProperty(A, o, { configurable: !1, enumerable: !0, get: B }) }, e.n = function (A) { var o = A && A.__esModule ? function () { return A.default } : function () { return A }; return e.d(o, "a", o), o }, e.o = function (A, e) { return Object.prototype.hasOwnProperty.call(A, e) }, e.p = "", e(e.s = 0) }([function (A, e, o) { "use strict"; function B(A, e) { if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function") } var Q = function () { function A(A, e) { for (var o = 0; o < e.length; o++) { var B = e[o]; B.enumerable = B.enumerable || !1, B.configurable = !0, "value" in B && (B.writable = !0), Object.defineProperty(A, B.key, B) } } return function (e, o, B) { return o && A(e.prototype, o), B && A(e, B), e } }(), t = o(1), n = t.webm, c = t.mp4, E = "undefined" != typeof navigator && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream, l = function () { function A() { var e = this; B(this, A), E ? this.noSleepTimer = null : (this.noSleepVideo = document.createElement("video"), this.noSleepVideo.setAttribute("muted", ""), this.noSleepVideo.setAttribute("title", "No Sleep"), this.noSleepVideo.setAttribute("playsinline", ""), this._addSourceToVideo(this.noSleepVideo, "webm", n), this._addSourceToVideo(this.noSleepVideo, "mp4", c), this.noSleepVideo.addEventListener("loadedmetadata", function () { e.noSleepVideo.duration <= 1 ? e.noSleepVideo.setAttribute("loop", "") : e.noSleepVideo.addEventListener("timeupdate", function () { e.noSleepVideo.currentTime > .5 && (e.noSleepVideo.currentTime = Math.random()) }) })) } return Q(A, [{ key: "_addSourceToVideo", value: function (A, e, o) { var B = document.createElement("source"); B.src = o, B.type = "video/" + e, A.appendChild(B) } }, { key: "enable", value: function () { E ? (this.disable(), console.warn("\n        NoSleep enabled for older iOS devices. This can interrupt\n        active or long-running network requests from completing successfully.\n        See https://github.com/richtr/NoSleep.js/issues/15 for more details.\n      "), this.noSleepTimer = window.setInterval(function () { document.hidden || (window.location.href = window.location.href.split("#")[0], window.setTimeout(window.stop, 0)) }, 15e3)) : this.noSleepVideo.play() } }, { key: "disable", value: function () { E ? this.noSleepTimer && (console.warn("\n          NoSleep now disabled for older iOS devices.\n        "), window.clearInterval(this.noSleepTimer), this.noSleepTimer = null) : this.noSleepVideo.pause() } }]), A }(); A.exports = l }, function (A, e, o) { "use strict"; A.exports = { webm: "data:video/webm;base64,GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA/vz0AAA=", mp4: "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQAD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" } }]) });
var isPC = false;
var isMobile = false;

if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
} else {
    isPC = true;
}

var startRenderLoop = function (engine, canvas) {
    engine.runRenderLoop(function () {
        if (sceneToRender && sceneToRender.activeCamera) {
            sceneToRender.render();
        }
    });
}

var engine = null;
var scene = null;
var sceneToRender = null;
var createDefaultEngine = function () { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true, disableWebGL2Support: false }); };
var camera, camera2;
var run = false;
var back = false;
var left = false;
var right = false;

var createScene = async function () {
    var scene = new BABYLON.Scene(engine);

    const env = {};
    camera = new BABYLON.ArcRotateCamera("camera", BABYLON.Tools.ToRadians(0), BABYLON.Tools.ToRadians(70), 0.5, new BABYLON.Vector3(0.0, 0.1, 0.0), scene);
    camera.minZ = 0.01;
    camera.upperRadiusLimit = 200;
    camera.lowerRadiusLimit = 45;
    camera.upperBetaLimit = 1.25;
    camera.lowerBetaLimit = 0;
    camera.attachControl(canvas, true);

    if (isMobile) {
        camera2 = new BABYLON.FreeCamera("DeviceCamera", new BABYLON.Vector3(60, 8, 0.1), scene);
        camera2.setTarget(new BABYLON.Vector3(-2.5, 8, 0));
        camera2.inertia *= 0.95;
        camera2.ellipsoid = new BABYLON.Vector3(1, 4, 1);
        camera2.speed = 2;
        camera2.detachControl(canvas, true);
        camera2.invertRotation = false;
    }
    else {
        camera2 = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(60, 8, 0.1), scene);
        camera2.setTarget(new BABYLON.Vector3(-2.5, 8, 0));

        camera2.attachControl(canvas, true);
        camera2.inertia *= 0.95;
        camera2.ellipsoid = new BABYLON.Vector3(1, 4, 1);
        camera2.speed = 2;
        camera2.invertRotation = false;
        camera2.detachControl(canvas);
        camera2.touchAngularSensibility = 50000;

        camera2.keysUp = [87];
        camera2.keysDown = [83];
        camera2.keysLeft = [65];
        camera2.keysRight = [68];

    }

    var pointerlockchange = function () {
        if (isPC) {
            var controlEnabled = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement || false;
            if (!controlEnabled) {
                camera2.detachControl(canvas);
                isLocked = false;

            } else {
                camera2.attachControl(canvas);
                isLocked = true;
                this.active = true;
            }
        }
    };

    document.addEventListener("pointerlockchange", pointerlockchange, false);
    document.addEventListener("mspointerlockchange", pointerlockchange, false);
    document.addEventListener("mozpointerlockchange", pointerlockchange, false);
    document.addEventListener("webkitpointerlockchange", pointerlockchange, false);

    scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
    scene.fogColor = new BABYLON.Color3(0.9, 0.9, 0.85);
    scene.fogDensity = 0.005;
    scene.fogEnabled = false;

    env.lighting = BABYLON.CubeTexture.CreateFromPrefilteredData("https://patrickryanms.github.io/BabylonJStextures/Demos/sodaBottle/assets/env/hamburg_hbf.env", scene);
    env.lighting.name = "hamburg_hbf";
    env.lighting.environmentIntensity = 0;
    env.lighting.gammaSpace = false;
    env.lighting.rotationY = BABYLON.Tools.ToRadians(0);
    scene.environmentTexture = env.lighting;

    env.skybox = BABYLON.MeshBuilder.CreateSphere("Dome", { slice: 1, diameter: 1024 }, scene);
    env.skyboxMaterial = new BABYLON.PBRMaterial("skyBox", scene);
    env.skyboxMaterial.backFaceCulling = false;
    env.skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("https://patrickryanms.github.io/BabylonJStextures/Demos/sodaBottle/assets/skybox/hamburg", scene);
    env.skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    env.skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    env.skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    env.skyboxMaterial.microSurface = 0.35;
    env.skybox.material = env.skyboxMaterial;

    var light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(-1, -1, 1), scene);
    light.position = new BABYLON.Vector3(20, 30, -20);

    light.intensity = 3;
    var shadowGenerator = new BABYLON.ShadowGenerator(512, light);

    shadowGenerator.useBlurExponentialShadowMap = true;
    shadowGenerator.enableSoftTransparentShadow = true;
    shadowGenerator.transparencyShadow = true;
    shadowGenerator.darkness = 0.01;

    var myGround = BABYLON.MeshBuilder.CreateGround("myGround", { width: 200, height: 200, subdivisions: 8 }, scene);
    myGround.position = new BABYLON.Vector3(0, 0, 0);
    myGround.visibility = false;

    var mat = new BABYLON.StandardMaterial("mat1", scene);
    mat.diffuseColor = new BABYLON.Color3(1, 1, 0);
    mat.emissiveColor = new BABYLON.Color3(1, 1, 0);

    var Paper1 = BABYLON.MeshBuilder.CreateBox("Box1", { height: 1, width: 0.75, depth: 0.1 });
    Paper1.position = new BABYLON.Vector3(0, 5, 0);
    Paper1.rotation.x = -Math.PI / 8;
    Paper1.visibility = false;
    Paper1.material = mat;

    var mat2 = new BABYLON.StandardMaterial("mat2", scene);
    mat2.diffuseColor = new BABYLON.Color3(1, 0, 0);
    mat2.emissiveColor = new BABYLON.Color3(1, 0, 0);

    var Paper2 = BABYLON.MeshBuilder.CreateBox("Box2", { height: 1, width: 0.75, depth: 0.1 });
    Paper2.position = new BABYLON.Vector3(53, 15, -46);
    Paper2.rotation.x = -Math.PI / 8;
    Paper2.visibility = false;
    Paper2.material = mat2;

    var mat3 = new BABYLON.StandardMaterial("mat3", scene);
    mat3.diffuseColor = new BABYLON.Color3(1, 0.65, 0);
    mat3.emissiveColor = new BABYLON.Color3(1, 0.65, 0);

    var Paper3 = BABYLON.MeshBuilder.CreateBox("Box3", { height: 1, width: 0.75, depth: 0.1 });
    Paper3.position = new BABYLON.Vector3(-34, 9, 56);
    Paper3.rotation.x = -Math.PI / 8;
    Paper3.visibility = false;
    Paper3.material = mat3;

    var plane = BABYLON.MeshBuilder.CreatePlane("myGround", { width: 180, height: 20 }, scene);
    plane.position = new BABYLON.Vector3(-66, 0, 0);
    plane.rotation.z = Math.PI;
    plane.rotation.y = -Math.PI / 2;
    plane.visibility = true;
    plane.visibility = 0;

    var plane2 = BABYLON.MeshBuilder.CreatePlane("myGround", { width: 180, height: 20 }, scene);
    plane2.position = new BABYLON.Vector3(66, 0, 0);
    plane2.rotation.z = Math.PI;
    plane2.rotation.y = Math.PI / 2;
    plane2.visibility = true;
    plane2.visibility = 0;

    camera2.onCollide = function (colMesh) {
        if (colMesh.name === "Box1") {
            bottomLine.text = "Page 1 acquired";
            rectangle.isVisible = true;
            tb2.isVisible = true;
            tb4.isVisible = false;
            tb.isVisible = false;
            tb3.isVisible = false;
            tb5.isVisible = false;
            Button1.isVisible = false;
            Paper2.visibility = true;

            inventBut1.image.source = "images/Page1.png";
            colMesh.dispose();

            setTimeout(function () {
                topLine.text = "";
                bottomLine.text = "";
            }, 3000);
        }
        if (colMesh.name === "Box2") {
            bottomLine.text = "Page 2 acquired";
            tb2.isVisible = false;
            tb.isVisible = false;
            tb4.isVisible = false;
            tb5.isVisible = false;
            Button1.isVisible = false;
            rectangle.isVisible = true;
            tb3.isVisible = true;
            Paper3.visibility = true;
            inventBut2.image.source = "images/Page2.png";
            colMesh.dispose();

            setTimeout(function () {
                topLine.text = "";
                bottomLine.text = "";
            }, 3000);
        }
        if (colMesh.name === "Box3") {
            bottomLine.text = "Page 3 acquired";
            tb2.isVisible = false;
            tb.isVisible = false;
            tb3.isVisible = false;
            tb5.isVisible = false;
            Button1.isVisible = false;
            rectangle.isVisible = true;
            tb4.isVisible = true;
            inventBut3.image.source = "images/Page3.png";
            colMesh.dispose();

            setTimeout(function () {
                topLine.text = "";
                bottomLine.text = "";
            }, 3000);

            setTimeout(function () {
                music2.play();
            }, 8000);
        }
    }

    var count = 0;
    let isLocked = false;
    scene.onPointerDown = function (evt) {
        if (rectangle.isVisible && !isInOpt) {
            rectangle.isVisible = false;
            tb.isVisible = false;
            if (wasInInv) {
                setTimeout(function () {
                    ipressed = true;
                }, 80);
            }
            if (haveAllP) {
                rectangle.isVisible = true;
                tb4.isVisible = false;
                tbEnd.isVisible = true;
                haveAllP = false;
            }
            else {
                tbEnd.isVisible = false;
            }
        }

        if (scene.activeCamera == camera2) {
            if (isPC) {
                if (document.pointerLockElement !== canvas) {
                    canvas.requestPointerLock = canvas.requestPointerLock || canvas.msRequestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock || false;
                    if (canvas.requestPointerLock) {
                        canvas.requestPointerLock();
                    }
                }
            }

            if (evt.button == 0 && scene.activeCamera == camera2) {
                let ray = camera2.getForwardRay();
                ray.length = 25;
                let hit = scene.pickWithRay(ray);
                let model = hit.pickedMesh;
                if (model != null) {
                    if (model.name == "Box1") {
                        model.dispose();
                        bottomLine.text = "Page 1 acquired";
                        rectangle.isVisible = true;
                        tb2.isVisible = true;
                        tb4.isVisible = false;
                        tb.isVisible = false;
                        tb3.isVisible = false;
                        tb5.isVisible = false;
                        Button1.isVisible = false;
                        Paper2.visibility = true;
                        inventBut1.image.source = "images/Page1.png";

                        setTimeout(function () {
                            topLine.text = "";
                            bottomLine.text = "";
                        }, 3000);
                    }
                    if (model.name == "Box2" && model != null) {
                        model.dispose();
                        bottomLine.text = "Page 2 acquired";
                        tb2.isVisible = false;
                        tb.isVisible = false;
                        tb4.isVisible = false;
                        tb5.isVisible = false;
                        Button1.isVisible = false;
                        rectangle.isVisible = true;
                        tb3.isVisible = true;
                        Paper3.visibility = true;

                        inventBut2.image.source = "images/Page2.png";

                        setTimeout(function () {
                            topLine.text = "";
                            bottomLine.text = "";
                        }, 3000);
                    }
                    if (model.name == "Box3" && model != null) {
                        model.dispose();
                        bottomLine.text = "Page 3 acquired";
                        tb2.isVisible = false;
                        tb.isVisible = false;
                        tb3.isVisible = false;
                        tb5.isVisible = false;
                        Button1.isVisible = false;
                        rectangle.isVisible = true;
                        tb4.isVisible = true;
                        inventBut3.image.source = "images/Page3.png";
                        haveAllP = true;

                        setTimeout(function () {
                            topLine.text = "";
                            bottomLine.text = "";
                        }, 3000);

                        setTimeout(function () {
                            music2.play();
                        }, 8000);
                    }
                }
            }

        }
    }

    const [topLine, bottomLine, progressBar] = createUI();

    BABYLON.SceneLoader.ShowLoadingScreen = false;

    BABYLON.SceneLoader.OnPluginActivatedObservable.addOnce(function (loader) {

        loader.onCompleteObservable.add(function () {
            bottomLine.text = "Loading Complete";
            for (var i = 0; i < scene.meshes.length; i++) {
                if (scene.meshes[i].name.includes("Plane") || scene.meshes[i].name == "Cylinder.002" || scene.meshes[i].name == "Circle") {
                    scene.meshes[i].receiveShadows = true;
                    scene.meshes[i].material.environmentIntensity = 0.25;
                }
                if (scene.meshes[i].name.includes("Cube")) {
                    shadowGenerator.addShadowCaster(scene.meshes[i]);
                    scene.meshes[i].checkCollisions = true;
                    scene.meshes[i].material.environmentIntensity = 0.25;
                }
            }
            setTimeout(function () {
                topLine.text = "";
                bottomLine.text = "Light and Shadows Updated";
            }, 2000);
            setTimeout(function () {
                topLine.text = "";
                bottomLine.text = "";
                button2.isVisible = true;
                if (isMobile)
                    ButtonInv.isVisible = true;
                Paper1.visibility = true;
            }, 4000);
        });
    });

    BABYLON.SceneLoader.AppendAsync("https://dl.dropbox.com/s/wn9dmi5d1v3p5iu/Park.glb?dl=0", "Park.glb",
        scene,
        function (meshes) {
            if (meshes.lengthComputable) {
                bottomLine.text = "Loading, please wait..." + (meshes.loaded * 100 / meshes.total).toFixed() + "%";
            }
            else {
                var dlCount = meshes.loaded / (1024 * 1024);
                bottomLine.text = "Loading, please wait..." + Math.floor(dlCount * 100.0) / 100.0 + " MB already loaded.";
            }
        });

    scene.gravity = new BABYLON.Vector3(0, -0.9, 0);

    scene.collisionsEnabled = true;
    if (isMobile) {
        camera2.applyGravity = true;
        camera2._needMoveForGravity = true;
        camera2.checkCollisions = true;
        var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        var button3 = BABYLON.GUI.Button.CreateImageOnlyButton("but3", "");
        button3.width = "180px"
        button3.height = "180px";
        button3.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        button3.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        button3.top = "-150px";
        button3.cornerRadius = 5;
        button3.image.source = "images/footprints.svg";
        button3.thickness = 0;
        button3.background = 'rgba(1, 1, 1, 0.05)'
        button3.thickness = 0;
        button3.alpha = 0.75;
        button3.onPointerDownObservable.add(function () {
            run = true;
        });
        button3.onPointerUpObservable.add(function () {
            run = false;
        });
        button3.isVisible = false;
        advancedTexture.addControl(button3);
    }
    else {
        camera2.applyGravity = true;
        camera2._needMoveForGravity = true;
        camera2.checkCollisions = true;
    }
    myGround.checkCollisions = true;
    Paper1.checkCollisions = true;
    Paper2.checkCollisions = true;
    Paper3.checkCollisions = true;

    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var target = BABYLON.Mesh.CreatePlane("targetViewVR");
    var circle = new BABYLON.GUI.Ellipse();
    circle.width = "20px";
    circle.height = "20px";
    circle.color = "white";
    circle.thickness = 3;
    advancedTexture.addControl(circle);
    target.isPickable = false;
    circle.isVisible = false;

    var inventory = new BABYLON.GUI.Rectangle("invent");
    inventory.background = "gray";
    inventory.width = "50%";
    inventory.height = "27%";
    if (isMobile) {
        inventory.height = "10%";
    }
    inventory.alpha = 0.85;
    inventory.isVisible = false;
    advancedTexture.addControl(inventory);

    var inventBut1 = BABYLON.GUI.Button.CreateImageOnlyButton("Page1", "");
    inventBut1.width = "33%";
    inventBut1.height = "100%";
    inventBut1.background = "white";
    inventBut1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    inventBut1.onPointerDownObservable.add(function () {
        if (inventBut1.image.source != "") {
            ipressed = false;
            rectangle.isVisible = !rectangle.isVisible;
            tb2.isVisible = true;
            tb4.isVisible = false;
            tb3.isVisible = false;
            tb5.isVisible = false;
            Button1.isVisible = false;
        }
    });
    inventory.addControl(inventBut1);

    var inventBut2 = BABYLON.GUI.Button.CreateImageOnlyButton("Page2", "");
    inventBut2.width = "33%";
    inventBut2.height = "100%";
    inventBut2.background = "white";
    inventBut2.onPointerDownObservable.add(function () {
        if (inventBut2.image.source != "") {
            ipressed = false;
            rectangle.isVisible = !rectangle.isVisible;
            tb3.isVisible = true;
            tb2.isVisible = false;
            tb4.isVisible = false;
            tb5.isVisible = false;
            Button1.isVisible = false;
        }
    });
    inventBut2.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    inventory.addControl(inventBut2);

    var inventBut3 = BABYLON.GUI.Button.CreateImageOnlyButton("Page3", "");
    inventBut3.width = "33%";
    inventBut3.height = "100%";
    inventBut3.background = "white";
    inventBut3.onPointerDownObservable.add(function () {
        if (inventBut3.image.source != "") {
            ipressed = false;
            rectangle.isVisible = !rectangle.isVisible;
            tb4.isVisible = true;
            tb2.isVisible = false;
            tb3.isVisible = false;
            tb5.isVisible = false;
            Button1.isVisible = false;
        }
    });
    inventBut3.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    inventory.addControl(inventBut3);

    var rectangle = new BABYLON.GUI.Rectangle("rect");
    rectangle.background = "gray";
    rectangle.width = "55%";
    rectangle.height = "80%";
    rectangle.alpha = 0.85;
    advancedTexture.addControl(rectangle);

    var tb = new MixedTextBlock();
    tb.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    tb.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    tb.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    tb.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    tb.multiTextArgs = [
        { text: "\n In Arc Rotate Mode:", fillStyle: "white", font: "bold 32px Helvetica" },
        { text: "\n \n Have a look at the park in Arc Rotate Mode", fillStyle: "white", font: "bold 22px Helvetica" },
        { text: `\n \n In Walking Mode:`, fillStyle: "white", font: "bold 32px Helvetica" },
        { text: "\n \n Desktop Mode: Use WASD for WALK \n Mobile Mode: Press the Walk Button \n \n  Use Shift to SPRINT \n Walk over or left click to collect the Pages", fillStyle: "white", font: "bold 22px Helvetica" },
        { text: "\n \n Press I Key to open Inventory or Click the Inventory Button", fillStyle: "white", font: "bold 22px Helvetica" },
        { text: "\n \n When you collect the single pages they are added into your Inventory \n Each page reveals a part of an story that occurred in this park \n Collect all pieces and reveal the story", fillStyle: "white", font: "bold 25px Helvetica" },
        { text: "\n \n There is Audio playing. It can be turned of in options. \n Wear headphones for the best immersive experience", fillStyle: "yellow", font: "bold 22px Helvetica" },
        { text: "\n \n This story is complete AI generated with some promts and inspiration from me", fillStyle: "yellow", font: "bold 28px Helvetica" },
    ];
    tb.text = "hi";
    tb.isVisible = true;
    rectangle.addControl(tb);

    var tb2 = new MixedTextBlock();
    tb2.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    tb2.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    tb2.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    tb2.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    tb2.multiTextArgs = [
        { text: "\n Mysterious case of Timmy Parker", fillStyle: "white", font: "bold 32px Helvetica" },
        { text: "\n \n Part 1 of 3", fillStyle: "white", font: "bold 28px Helvetica" },
        { text: "\n \n \n It was a hot summer day in the small town of Millfield when eight-year-old Timmy Parker went missing in the park. His parents, Mary and John, had taken him and his younger sister, Sara, to the park for a picnic at the pavilion, and they had all been enjoying the day together.", fillStyle: "white", font: "bold 20px Helvetica" },
        { text: "\n \n Timmy was an active and adventurous boy, always eager to explore and try new things. He loved spending time in the park, playing sports, riding his bike, and practicing his skateboarding skills.", fillStyle: "white", font: "bold 20px Helvetica" },
        { text: "\n \n On this particular day, Timmy was particularly excited to go to the skate park and show off his new tricks. He had been practicing hard and was eager to impress his sister and their friend, Emily, who had also joined them at the park.", fillStyle: "white", font: "bold 20px Helvetica" },
        { text: "\n \n Timmy was last seen playing at the skate park with Sara and Emily, where he had been practicing his skateboarding skills. His parents noticed he was missing when they went to pack up their picnic basket and Timmy was nowhere to be found.", fillStyle: "white", font: "bold 20px Helvetica" },
        { text: "\n \n Panicked, Mary and John searched the park for Timmy, but he was nowhere to be found. They called the police, who quickly arrived on the scene and began a search for the missing boy.", fillStyle: "white", font: "bold 20px Helvetica" },
        { text: "\n \n As the hours passed, the search for Timmy intensified. The police scoured the park and interviewed witnesses, but no one had seen Timmy since he was at the skate park.", fillStyle: "white", font: "bold 20px Helvetica" },
        { text: "\n \n \n ...", fillStyle: "white", font: "bold 18px Helvetica" }
    ];
    tb2.text = "hi";
    tb2.isVisible = false;
    rectangle.addControl(tb2);

    var tb3 = new MixedTextBlock();
    tb3.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    tb3.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    tb3.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    tb3.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    tb3.multiTextArgs = [
        { text: "\n Mysterious case of Timmy Parker", fillStyle: "white", font: "bold 32px Helvetica" },
        { text: "\n \n Part 2 of 3", fillStyle: "white", font: "bold 28px Helvetica" },
        { text: "\n \n The search for Timmy continued into the night and the entire community joined in, determined to find the missing boy. Just when all hope seemed lost, Timmy was found the next morning, lying lifeless in the small lake near the park.", fillStyle: "white", font: "bold 20px Helvetica" },
        { text: "\n \n The police were baffled by Timmy's death, as there were no signs of foul play or injury. They conducted a thorough investigation, but were unable to find any leads or suspects. The case remained a mystery and the community was left to mourn the loss of the young boy.", fillStyle: "white", font: "bold 20px Helvetica" },
        { text: "\n \n As the weeks passed, Sara began to have vivid nightmares about the day Timmy went missing. She claimed that the three of them had been playing together at the skate park, but that Emily had suddenly pushed Timmy into the lake and he had drowned.", fillStyle: "white", font: "bold 20px Helvetica" },
        { text: "\n \n Sara's parents were skeptical of her story, as they had never seen or met Emily before. Sara had always talked about her as her imaginary friend, and Mary and John had just assumed she was a figment of Sara's imagination.", fillStyle: "white", font: "bold 20px Helvetica" },
        { text: "\n \n However, Sara insisted that Emily was real and that she had always been there for them at the park. She claimed that Emily was the one who had taught Timmy how to skateboard and that they had always played together at the skate park.", fillStyle: "white", font: "bold 20px Helvetica" },
        { text: "\n \n The police were intrigued by Sara's story and decided to investigate further. They searched for any information about Emily and her family, but they were unable to find any records or evidence of her existence. It was as if she had simply vanished into thin air.", fillStyle: "white", font: "bold 20px Helvetica" },
        { text: "\n \n ...", fillStyle: "white", font: "bold 18px Helvetica" }
    ];
    tb3.text = "hi";
    tb3.isVisible = false;
    rectangle.addControl(tb3);

    var tb4 = new MixedTextBlock();
    tb4.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    tb4.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    tb4.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    tb4.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    tb4.multiTextArgs = [
        { text: "\n Mysterious case of Timmy Parker", fillStyle: "white", font: "bold 32px Helvetica" },
        { text: "\n \n Part 3 of 3", fillStyle: "white", font: "bold 28px Helvetica" },
        { text: "\n \n Sara's parents were at a loss as to what to do. They were worried about Sara's well-being and decided to bring her to a therapist for help.", fillStyle: "white", font: "bold 20px Helvetica" },
        { text: "\n \n During her sessions with the therapist, Sara revealed that Emily was not a real person. She was a ghost that only Sara could see and communicate with. Sara claimed that Emily had been her imaginary friend since she was a child, and that she had always been there for her.", fillStyle: "white", font: "bold 20px Helvetica" },
        { text: "\n \n The therapist listened to Sara's story with an open mind, and eventually came to the conclusion that Emily was a manifestation of Sara's subconscious mind. She believed that Sara was projecting her feelings of guilt and grief onto the ghostly figure of Emily.", fillStyle: "white", font: "bold 20px Helvetica" },
        { text: "\n \n Sara's parents were shocked by this revelation, but they were relieved to finally have an explanation for Sara's behavior. With the help of the therapist, they were able to work through their grief and help Sara come to terms with Timmy's death.", fillStyle: "white", font: "bold 20px Helvetica" },
        { text: "\n \n As for Emily, she was never seen or heard from again. The mysterious ghostly figure remained a mystery, but Sara was able to find peace and move on from the tragedy that had befallen her and her family. The police closed the case, unable to solve the mystery of Timmy's death. But for Sara and her family, the memory of Emily and the tragedy at the park would always linger in their minds.", fillStyle: "white", font: "bold 20px Helvetica" },
        { text: "\n \n However, even as the years passed, there were still some strange occurrences in the park that seemed to be linked to Emily. Some people claimed to hear the sound of a little girl playing at night, even though there was no one there. Others reported seeing a ghostly figure resembling a young girl in the park, although no one was able to confirm these sightings.", fillStyle: "white", font: "bold 20px Helvetica" },
    ];
    tb4.text = "hi";
    tb4.isVisible = false;
    rectangle.addControl(tb4);

    var tb5 = new MixedTextBlock();
    tb5.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    tb5.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    tb5.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    tb5.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    tb5.multiTextArgs = [
        { text: "\n Options", fillStyle: "white", font: "bold 32px Helvetica" },
        { text: "\n \n This is a small interactive story", fillStyle: "white", font: "bold 28px Helvetica" },
        { text: "\n \n We collect pages of an old chase to find out what happend in this park.", fillStyle: "white", font: "bold 24px Helvetica" },
        { text: "\n Collect all pages and unveil the mystery that took place here", fillStyle: "white", font: "bold 24px Helvetica" },
        { text: "\n \n Desktop Mode: \n - Use WASD for WALK \n - Use Shift to SPRINT \n - Walk over or left click to collect the Pages", fillStyle: "white", font: "bold 22px Helvetica" },
        { text: "\n - Press I Key to open Inventory \n \n Mobile Mode: \n - Press the Walk Button  \n - Click the Inventory Button to open Inventory", fillStyle: "white", font: "bold 22px Helvetica" }
    ];
    tb5.text = "hi";
    tb5.isVisible = false;
    rectangle.addControl(tb5);

    var tbEnd = new MixedTextBlock();
    tbEnd.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    tbEnd.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    tbEnd.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    tbEnd.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    tbEnd.multiTextArgs = [
        { text: "\n Thank you for playing", fillStyle: "white", font: "bold 32px Helvetica" },
        { text: "\n \n the 'Game' is over, we hope you liked the story", fillStyle: "white", font: "bold 28px Helvetica" },
        { text: "\n \n This was just a short concept work. Created to test and entertain.", fillStyle: "white", font: "bold 25px Helvetica" },
        { text: "\n \n You can still walk around and have a look at all assets at the park \n and reread the story inside your inventory.", fillStyle: "white", font: "bold 25px Helvetica" },
        { text: "\n \n \n We hope to see you at our next project. \n \n Greetings \n \n Player Eleven Studios", fillStyle: "white", font: "bold 18px Helvetica" }
    ];
    tbEnd.text = "hi";
    tbEnd.isVisible = false;
    rectangle.addControl(tbEnd);

    const music = new BABYLON.Sound("Music", "audio/ambient.mp3", scene, null, {
        loop: true,
        volume: 0.25,
    });

    const music2 = new BABYLON.Sound("girl", "audio/girlgiggle.mp3", scene, null, {
        loop: false,
        volume: 0.25,
    });

    var Button1 = new BABYLON.GUI.Rectangle("recet");
    Button1.color = "blue";
    Button1.width = "300px";
    Button1.height = "300px";
    Button1.thickness = 0;
    Button1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    Button1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    Button1.top = 450;
    if (isMobile) {
        Button1.top = 550;
    }
    Button1.left = 0;
    Button1.isVisible = false;
    rectangle.addControl(Button1);

    let cb1 = new BABYLON.GUI.Checkbox("music");
    cb1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    cb1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    if (isMobile) {
        cb1.heightInPixels = 35;
        cb1.widthInPixels = 35;
        cb1.top = 85;
        cb1.left = 30;
    } else {
        cb1.heightInPixels = 20;
        cb1.widthInPixels = 20;
        cb1.top = 90;
        cb1.left = 50;
    }
    cb1.isChecked = false;
    cb1.color = "#FFFFFF";
    cb1.onIsCheckedChangedObservable.add(function (value) {
        if (value) {
            music.play();
        }
        else {
            music.pause();
        }
    });
    Button1.addControl(cb1);

    let cb2 = new BABYLON.GUI.Checkbox("glow");
    cb2.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    cb2.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    if (isMobile) {
        cb2.heightInPixels = 35;
        cb2.widthInPixels = 35;
        cb2.top = 45;
        cb2.left = 30;
    } else {
        cb2.heightInPixels = 20;
        cb2.widthInPixels = 20;
        cb2.top = 50;
        cb2.left = 50;
    }
    cb2.isChecked = true;
    cb2.color = "#FFFFFF";
    cb2.onIsCheckedChangedObservable.add(function (value) {
        glowLayer.isEnabled = value;
    });
    Button1.addControl(cb2);

    let cb3 = new BABYLON.GUI.Checkbox("fog");
    cb3.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    cb3.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    if (isMobile) {
        cb3.heightInPixels = 35;
        cb3.widthInPixels = 35;
        cb3.top = 5;
        cb3.left = 30;
    } else {
        cb3.heightInPixels = 20;
        cb3.widthInPixels = 20;
        cb3.top = 10;
        cb3.left = 50;
    }

    cb3.isChecked = true;
    cb3.color = "#FFFFFF";
    cb3.onIsCheckedChangedObservable.add(function (value) {
        scene.fogEnabled = value;
    });
    Button1.addControl(cb3);

    let tb1 = new BABYLON.GUI.TextBlock("tb1", "Music ON/OFF");
    tb1.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    tb1.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    tb1.top = 90;
    tb1.left = 86;
    tb1.fontSize = 25;
    tb1.color = "white";
    tb1.fontStyle = "bold";
    tb1.fontFamily = "Helvetica";
    Button1.addControl(tb1);

    let tb6 = new BABYLON.GUI.TextBlock("tb6", "Glow ON/OFF");
    tb6.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    tb6.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    tb6.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    tb6.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    tb6.top = 50;
    tb6.left = 86;
    tb6.fontSize = 25;
    tb6.color = "white";
    tb6.fontStyle = "bold";
    tb6.fontFamily = "Helvetica";
    Button1.addControl(tb6);

    let tb7 = new BABYLON.GUI.TextBlock("tb7", "Fog On/OFF");
    tb7.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    tb7.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    tb7.top = 10;
    tb7.left = 86;
    tb7.fontSize = 25;
    tb7.color = "white";
    tb7.fontStyle = "bold";
    tb7.fontFamily = "Helvetica";
    Button1.addControl(tb7);

    var header = new BABYLON.GUI.TextBlock();
    header.text = "Volume";
    header.height = "30px";
    header.color = "white";
    header.fontSize = 25;
    header.color = "white";
    header.fontStyle = "bold";
    header.fontFamily = "Helvetica";
    header.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    header.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    header.top = 130;
    header.left = -15;
    Button1.addControl(header);

    var slider = new BABYLON.GUI.Slider();
    slider.minimum = 0;
    slider.maximum = 1;
    slider.value = 0.25;
    slider.height = "20px";
    slider.width = "200px";
    slider.color = "white";
    slider.background = "#A9A9A9";
    slider.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    slider.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    slider.top = 180;
    slider.left = 43;
    slider.onValueChangedObservable.add(function (value) {
        if (music.isPlaying) {
            music.setVolume(value);
        }
    });
    Button1.addControl(slider);

    var button2 = BABYLON.GUI.Button.CreateSimpleButton("but2", "Story Mode");
    button2.width = "150px"
    button2.height = "40px";
    button2.color = "Black";
    button2.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    button2.left = "-50px";
    button2.cornerRadius = 5;
    button2.background = "white";
    button2.thickness = 0;
    button2.onPointerUpObservable.add(function () {
        if (count == 0) {
            cb1.isChecked = true;
            count += 1;
        }
        if (scene.activeCamera == camera2) {
            camera2.detachControl(canvas);
            scene.activeCamera = camera;
            camera.attachControl(canvas, true);
            button2.textBlock.text = "Story Mode";
            scene.fogEnabled = false;
            glowLayer.isEnabled = false;
            OptButton.isVisible = false;
            progressBar.isVisible = false;
            circle.isVisible = false;
            if (isMobile) {
                button3.isVisible = false;
            }
        } else {
            camera.detachControl(canvas);
            scene.activeCamera = camera2;
            camera2.attachControl(canvas, true);
            button2.textBlock.text = "View Mode";
            OptButton.isVisible = true;
            scene.fogEnabled = true;
            glowLayer.isEnabled = true;
            if (isPC) {
                progressBar.isVisible = true;
            }
            circle.isVisible = true;
            if (isMobile) {
                button3.isVisible = true;
            }
        }
    });
    button2.isVisible = false;
    advancedTexture.addControl(button2);

    if (isMobile) {
        var ButtonInv = BABYLON.GUI.Button.CreateImageOnlyButton("butt", "");
        ButtonInv.width = "60px"
        ButtonInv.height = "60px";
        ButtonInv.color = "Black";
        ButtonInv.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        ButtonInv.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        ButtonInv.left = "-50px";
        ButtonInv.top = "-50px";
        ButtonInv.cornerRadius = 5;
        ButtonInv.image.source = "images/inventory.svg";
        ButtonInv.thickness = 0;
        ButtonInv.background = 'rgba(1, 1, 1, 0.1)'
        ButtonInv.onPointerUpObservable.add(function () {
            ipressed = !ipressed;
            wasInInv = !wasInInv;

        });
        ButtonInv.isVisible = true;
        advancedTexture.addControl(ButtonInv);
    }

    var OptButton = BABYLON.GUI.Button.CreateImageOnlyButton("buttt", "");
    OptButton.width = "60px"
    OptButton.height = "60px";
    OptButton.color = "Black";
    OptButton.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    OptButton.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    OptButton.left = "-50px";
    OptButton.top = "50px";
    OptButton.cornerRadius = 5;
    OptButton.image.source = "images/settings.svg";
    OptButton.thickness = 0;
    OptButton.background = 'rgba(1, 1, 1, 0.05)'
    OptButton.onPointerUpObservable.add(function () {
        rectangle.isVisible = !rectangle.isVisible;
        tb5.isVisible = true;
        Button1.isVisible = true;
        inventory.isVisible = false;
        tb.isVisible = false;
        tb2.isVisible = false;
        tb3.isVisible = false;
        tb4.isVisible = false;
        isInOpt = !isInOpt;

    });
    OptButton.isVisible = false;
    advancedTexture.addControl(OptButton);

    scene.onBeforeRenderObservable.add(function () {
        if (isMobile && button3.isVisible) {
            let ray = camera2.getForwardRay();
            ray.length = 25;
            let hit = scene.pickWithRay(ray);
            if (run == true && hit.distance <= 0 || run == true && hit.distance >= 10) {
                var v2 = BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(0, 0, 2), BABYLON.Matrix.RotationY(camera2.rotation.y));
                camera2.position.addInPlace(v2);
            }
        }
        else {
            if (run == true) {
                var v2 = BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(0, 0, 0.1), BABYLON.Matrix.RotationY(camera2.rotation.y));
                camera2.position.addInPlace(v2);
            }
            if (back == true) {
                var v2 = BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(0, 0, -0.1), BABYLON.Matrix.RotationY(camera2.rotation.y));
                camera2.position.addInPlace(v2);

            }
            if (left == true) {
                var v2 = BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(-0.1, 0, 0), BABYLON.Matrix.RotationY(camera2.rotation.y));
                camera2.position.addInPlace(v2);
            }
            if (right == true) {
                var v2 = BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(0.1, 0, 0), BABYLON.Matrix.RotationY(camera2.rotation.y));
                camera2.position.addInPlace(v2);
            }
        }
        Paper1.rotation.y += 0.05;
        Paper2.rotation.y += 0.05;
        Paper3.rotation.y += 0.05;
    });

    var energy = 50, shiftPressed = false, ipressed = false, wasInInv = false, isInOpt = false; haveAllP = false;
    scene.onBeforeRenderObservable.add(function () {
        if (shiftPressed && scene.activeCamera == camera2) {
            if (energy > 0) {
                camera2.speed = 1.5;
                energy--;
                progressBar.width = energy / 1 / 100;
            }
            else {
                camera2.speed = 0.5;
                if (energy < 50 && !shiftPressed) {
                    energy += 0.5;
                    progressBar.width = energy / 1 / 100;
                }
            }
        } else {
            camera2.speed = 0.5;
            if (energy < 50) {
                energy += 0.5;
                progressBar.width = energy / 1 / 100;
            }
        }
        if (ipressed) {
            inventory.isVisible = true;
            if (isPC) {
                document.exitPointerLock = document.exitPointerLock ||
                    document.mozExitPointerLock ||
                    document.webkitExitPointerLock;
                document.exitPointerLock();
            }
        }
        else {
            inventory.isVisible = false;
        }
    });
    scene.onKeyboardObservable.add((kbInfo) => {
        switch (kbInfo.type) {
            case BABYLON.KeyboardEventTypes.KEYDOWN:
                switch (kbInfo.event.key) {
                    case "Shift":
                        shiftPressed = true;
                        break;
                    case "i":
                        ipressed = !ipressed;
                        wasInInv = !wasInInv;
                        break
                }
                break;
            case BABYLON.KeyboardEventTypes.KEYUP:
                switch (kbInfo.event.key) {
                    case "Shift":
                        shiftPressed = false;
                        break;
                }
        }
    });

    var glowLayer = new BABYLON.GlowLayer("glow", scene, {
        mainTextureFixedSize: 256,
        blurKernelSize: 32
    });
    glowLayer.intensity = 0.45;
    glowLayer.isEnabled = false;

    return scene;
};

function createUI() {
    const uiTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    const attributionLine = new BABYLON.GUI.TextBlock();
    attributionLine.color = "lightgray";
    attributionLine.fontSize = 12;
    attributionLine.top = "-45%";
    attributionLine.text = " Asset created by player11en \n \n Music by Guilherme Bernardes William";
    uiTexture.addControl(attributionLine);

    const topLine = new BABYLON.GUI.TextBlock();
    topLine.color = "white";
    topLine.fontSize = 24;
    topLine.top = "-38%";
    uiTexture.addControl(topLine);

    const bottomLine = new BABYLON.GUI.TextBlock();
    bottomLine.color = "white";
    bottomLine.fontSize = 24;
    bottomLine.top = "45%";
    uiTexture.addControl(bottomLine);

    const progressBar = new BABYLON.GUI.Rectangle();
    progressBar.width = 0.5;
    progressBar.height = "15px";
    progressBar.outlineWidth = "2px";
    progressBar.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    progressBar.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    progressBar.top = "10px";
    progressBar.left = "5px";
    progressBar.isVisible = false;
    progressBar.background = BABYLON.Color3.FromHexString("#99EE99").toHexString();
    uiTexture.addControl(progressBar);

    return [topLine, bottomLine, progressBar];
}

window.initFunction = async function () {
    var asyncEngineCreation = async function () {
        try {
            return createDefaultEngine();
        } catch (e) {
            console.log("the available createEngine function failed. Creating the default engine instead");
            return createDefaultEngine();
        }
    }

    window.engine = await asyncEngineCreation();
    if (!engine) throw 'engine should not be null.';
    startRenderLoop(engine, canvas);
    window.scene = createScene();
};
initFunction().then(() => {
    scene.then(returnedScene => { sceneToRender = returnedScene; });

});

window.addEventListener("resize", function () {
    engine.resize();
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MixedTextBlock = /** @class */ (function (_super) {
    __extends(MixedTextBlock, _super);
    function MixedTextBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MixedTextBlock.prototype, "multiTextArgs", {
        set: function (value) {
            this._multiTextArgs = value;
        },
        enumerable: false,
        configurable: true
    });
    MixedTextBlock.prototype._drawText = function (text, textWidth, y, context) {
        var width = this._currentMeasure.width;
        var x = 0;
        switch (this._textHorizontalAlignment) {
            case BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT:
                x = 10;
                break;
            case BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT:
                x = width - textWidth;
                break;
            case BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER:
                x = (width - textWidth) / 2;
                break;
        }
        if (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) {
            context.shadowColor = this.shadowColor;
            context.shadowBlur = this.shadowBlur;
            context.shadowOffsetX = this.shadowOffsetX;
            context.shadowOffsetY = this.shadowOffsetY;
        }
        if (this.outlineWidth) {
            context.strokeText(text, this._currentMeasure.left + x, y);
        }
        var Y = y - this._fontOffset.height
        try {
            Y = Y + parseInt(this._multiTextArgs[0].font.split(" ")[1].replace("px", ""))
        }
        catch (e) {
            Y = this._fontOffset.height
        }
        this._fillMixedText(context, this._multiTextArgs, this._currentMeasure.left + x, Y);
    };
    MixedTextBlock.prototype._fillMixedText = function (context, args, x, y) {
        var defaultFillStyle = context.fillStyle;
        var defaultFont = context.font;
        var defaultOffset = this._fontOffset.height
        var lineStart = x
        var lineBreak = this._currentMeasure.top
        var windowWidth = this._currentMeasure.width - 30
        context.save();
        args.forEach(function (_a) {
            var text = _a.text, fillStyle = _a.fillStyle, font = _a.font;
            var splittedText = text.split(" ")
            var height = 0
            try {
                height = parseInt(_a.font.split(" ")[1].replace("px", ""))
            }
            catch (e) {
                height = defaultOffset
            }
            context.fillStyle = fillStyle || defaultFillStyle;
            context.font = font || defaultFont;
            splittedText.forEach(function (word) {
                var finalText = word.split("\n")
                if (finalText.length > 1) {
                    for (var i = 0; i < finalText.length; i++) {
                        finalText[i] = " " + finalText[i]
                        if (x - lineStart + context.measureText(finalText[i]).width > windowWidth) {
                            x = lineStart
                            y += height
                            finalText[i] = finalText[i].replace(" ", "")
                        }
                        if (x == lineStart)
                            finalText[i] = finalText[i].replace(" ", "")
                        context.fillText(finalText[i], x, y);
                        x += context.measureText(finalText[i]).width;
                        if (i != finalText.length - 1) {
                            y += height
                            x = lineStart
                        }
                    }
                }
                else {
                    word = " " + word
                    if (x - lineStart + context.measureText(word).width > windowWidth) {
                        x = lineStart
                        y += height
                        word = word.replace(" ", "")
                    }
                    if (x == lineStart)
                        word = word.replace(" ", "")
                    context.fillText(word, x, y);
                    x += context.measureText(word).width;
                }
            })
        });
        context.restore();
    };
    return MixedTextBlock;
}(BABYLON.GUI.TextBlock));