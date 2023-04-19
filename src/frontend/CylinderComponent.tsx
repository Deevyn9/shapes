import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CylinderComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // creating the scenery
    const scene = new THREE.Scene();

    // creating the cylinder
    const geometry = new THREE.CylinderGeometry(3, 3, 12, 32);
    const material = new THREE.MeshNormalMaterial()
    const cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder);

    // adding the camera to bring out the visuals
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 20;
    scene.add(camera);

    // renderer, used to display the model on the canvas (i.e the scene)
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // controls, allows the camera orbit around the model, and is controlled by the user
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true
    controls.enablePan = false
    controls.enableZoom = false

    const animate = () => {
      requestAnimationFrame(animate);

      cylinder.rotation.x += 0.01;
      cylinder.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default CylinderComponent;
