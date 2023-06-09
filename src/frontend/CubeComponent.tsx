import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CubeComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // creating the scenery
    const scene = new THREE.Scene();

    // creating the cube
    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // adding the camera to bring out the visuals
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    scene.add(camera);

    // renderer, used to display the model on the canvas (i.e the scene)
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // controls, allows the camera orbit around the model, and is controlled by the user
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;

    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
       cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default CubeComponent;
