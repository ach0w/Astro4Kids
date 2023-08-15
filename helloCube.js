const create3DEnvironment = () => {
  const renderer = new THREE.WebGLRenderer();

  const fieldOfView = 75;
  // Measured in degrees, not radians

  const aspect = 2;
  // The canvas default (300px-wide: 150px tall --> 2:1 -->  2)

  const near = 0.1;

  const far = 5;

  const camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);
  
  const scene = new THREE.Scene()
  
  const width = 1;
  const height = 1;
  const depth = 1;
  const geometry = new THREE.BoxGeometry(width, height, depth);

  const material = new THREE.MeshBasicMaterial({ color: 0xc2c5cc });

  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  renderer.render(scene, camera)
  document.body.appendChild(renderer.domElement);
  requestAnimationFrame(animate)

  const animate = (time, speed=1) => {
    time *= 0.001; // converted to seconds

    const rotation = time * speed;
    cube.rotation.x = rotation;
    cube.rotation.y = rotation;
 };
  requestAnimationFrame(animate)
};


create3DEnvironment();


