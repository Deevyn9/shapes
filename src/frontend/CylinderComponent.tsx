import { useEffect, useRef } from "react";
import * as THREE from "three";


const CylinderComponent = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.CylinderGeometry(3, 3, 12, 32);
    const material = new THREE.MeshBasicMaterial({ color: "red" });
    const cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder);

    camera.position.z = 20;

    // const controls = new OrbitControls(camera, canvas);
    const animate = () => {
      requestAnimationFrame(animate)

      cylinder.rotation.x += 0.01;
      cylinder.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} />
};

export default CylinderComponent;