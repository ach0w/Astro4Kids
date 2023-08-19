let scene, camera, renderer, skyboxGeo, skybox;
function init() {
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    45,
    30000
);
camera.position.set(1200, -250, 20000);

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.id = "canvas";
document.body.appendChild(renderer.domElement);

    skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
    skybox = new THREE.Mesh(skyboxGeo);
    scene.add(skybox);
    
animate();
}
function animate() {
renderer.render(scene, camera);
requestAnimationFrame(animate);
}

init();
