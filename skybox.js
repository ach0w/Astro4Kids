let scene, camera, renderer, skyboxGeo, skybox;

function init() {
    // Creates scene and camera
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        45,
        30000
    );
    camera.position.set(1200, -250, 20000);
   
    // This creates a canvas element and graphics become smoother with antialias
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.id = "canvas";
    document.body.appendChild(renderer.domElement);

    // Creates the skybox
    skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
    skybox = new THREE.Mesh(skyboxGeo);
    scene.add(skybox);

    // Animates the skybox
    animate();
}

function animate() {
    skybox.rotation.x += 0.005;
    skybox.rotation.y += 0.005;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

init();

function createPathStrings(barren) {
    const basePath = "./skybox/";
    const baseFilename = basePath + barren;
    const fileType = ".jpg";
    const sides = ["ft", "bk", "up", "dn", "rt", "lf"];
    const pathStings = sides.map(side => {
        return baseFilename + "_" + side + fileType;
});

return pathStings;
}
