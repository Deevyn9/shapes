import { useEffect, useRef } from "react";
import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const SphereComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // scene
    const scene = new THREE.Scene();

    // creating the sphere
    const geometry = new THREE.SphereGeometry(6, 64, 64);
    const material = new THREE.MeshStandardMaterial({ color: "blue", roughness: 0.5 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // light
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 10, 10);
    scene.add(light);

    // camera
    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 20;
    scene.add(camera);

    // renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(2)
    renderer.render(scene, camera)

    // controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true  
    controls.enablePan = false
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 5

    // resize
    window.addEventListener("resize", () => {
      // update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      // update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });
 

    // rerendering the canvas when screen is adjusted
    const loop = () => {
      controls.update()
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
    };

    loop();

    const animate = () => {
      requestAnimationFrame(animate);

      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default SphereComponent;
