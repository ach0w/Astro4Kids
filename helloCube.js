const create3DEnvironment = () => {
  const renderer = new THREE.WebGLRenderer();

  const fieldOfView = 75;
  // Measured in degrees, not radians

  const aspect = 2;
  // The canvas default (300px-wide: 150px tall --> 2:1 -->  2)

  const near = 0.1;

  const far = 5;

  const camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);
};

create3DEnvironment();


