const create3DEnvironment = () => {
  console.log('This is the 3DEnvironment function');
  const renderer = new THREE.WebGLRenderer();
  console.log('Created a renderer');
  const fieldOfView = 75;
  // Measured in degrees, not radians

  const aspect = 2;
  // The canvas default (300px-wide: 150px tall --> 2:1 -->  2)

  const near = 0.1;

  const far = 5;
  
  const camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);
  console.log('Camera was created');
  const scene = new THREE.Scene()
  console.log('Scene was created');
  const width = 1;
  const height = 1;
  const depth = 1;
  const geometry = new THREE.BoxGeometry(width, height, depth);
  console.log('Geometry is here');
  const material = new THREE.MeshBasicMaterial({ color: 0xc2c5cc });
  console.log('MeshBasicMaterial created');
  const cube = new THREE.Mesh(geometry, material);
  console.log('cube is created');
  scene.add(cube);
  console.log('cube is added to scene');

  renderer.render(scene, camera);
  console.log('renderer on scene and camera');
  document.body.appendChild(renderer.domElement);
  console.log('appended renderer to DOM');
};

console.log('About to call 3DEnvironment');
create3DEnvironment();
console.log('Finished calling 3DEnvironment');


