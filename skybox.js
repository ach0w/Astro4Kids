let scene, camera, renderer, skyboxGeo, skybox;

const skyboxImage = 'barren';

function init() {
    // Creates scene and camera
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        45,
        30000
    );
    camera.position.set(1200, -250, 2000);
   
    // This creates a canvas element and graphics become smoother with antialias
    
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.id = "canvas";
    document.body.appendChild(renderer.domElement);

    // Creates the skybox

    const materialArray = createMaterialArray(skyboxImage);
    skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
    skybox = new THREE.Mesh(skyboxGeo, materialArray);
    scene.add(skybox);
    
    // Animates the skybox
    animate();
}

function animate() {
    skybox.rotation.x += 0.001;
    skybox.rotation.y += 0.001;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

function createPathStrings(barren) {
    const basePath = "./skybox/";
    const baseFilename = basePath + barren;
    const fileType = ".jpg";
    const sides = ["ft", "bk", "up", "dn", "rt", "lf"];
    const pathStrings = sides.map(side => {
        return baseFilename + "_" + side + fileType;
});

    return pathStrings;  
}


function createMaterialArray(barren) {
    const skyboxImagepaths = createPathStrings(barren);
    const materialArray = skyboxImagepaths.map(image => {
        let texture = new THREE.TextureLoader().load(image);

         return new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide }); // <---
  });
    return materialArray;
}


init();

