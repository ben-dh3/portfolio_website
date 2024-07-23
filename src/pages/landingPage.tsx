import { useEffect } from "react";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import PortfolioButton from "../components/PortfolioButton";

export default function LandingPage() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.setZ(10);
    const canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });

    // Renderer settings
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(new THREE.Color(0x000000), 1);
    const div = document.getElementById('canvas-div')!;
    div.appendChild(renderer.domElement);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff,10)
    const directionalLight2 = new THREE.DirectionalLight(0xffffff,10)
    const directionalLight3 = new THREE.DirectionalLight(0xffffff,10)
    directionalLight1.position.set(0,0,2);
    directionalLight2.position.set(2,0,0);
    directionalLight3.position.set(-2,0,0);
    scene.add(directionalLight1, directionalLight2, directionalLight3)

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 50;
    const posArray = new Float32Array(particlesCnt * 3);
    for (let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 70;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const material = new THREE.PointsMaterial({
      size: 0.1,
      color: 0xffffff,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);

    // GLTF Loader
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/model_graphics.glb', (gltf) => {
      const model = gltf.scene;
      model.position.set(0, 0, 6);

      // Apply MeshPhongMaterial
      model.traverse((node) => {
        if (node instanceof THREE.Mesh) {
          node.material = new THREE.MeshPhongMaterial({
            color: 0x000000,
            specular: 0xDBFFDC,
            shininess: 100,
          });
        }
      });

      scene.add(model);

      // Animation
      const clock = new THREE.Clock();
      const animate = () => {
        const elapsedTime = clock.getElapsedTime();
        particlesMesh.rotation.y = elapsedTime * -0.1;
        particlesMesh.rotation.x = elapsedTime * -0.02;
        model.rotation.y = elapsedTime * 0.4;

        renderer.render(scene, camera);
        window.requestAnimationFrame(animate);
      };

      animate();
    }, undefined, (error) => {
      console.error("Error loading GLTF model", error);
    });

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div id="canvas-div" className="z--10 relative touch-none w-full h-full overflow-hidden">
        <canvas id="my-canvas"></canvas>
      </div>
      <PortfolioButton />
    </div>
  );
}
