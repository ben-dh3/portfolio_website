import React, { useEffect } from "react";
import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';

export default function LandingPage() {

  useEffect(() => { 
      
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.setZ(75);
    const canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,  
    });
    
    // Renderer settings
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(new THREE.Color('#21282a'), 1);
    document.body.appendChild(renderer.domElement);
 
    // Light
    const ambientLight = new THREE.AmbientLight(0x000000, 1);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 100000);
    pointLight.position.set(-30, 10, 300);
    scene.add(pointLight);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 100;
    const posArray = new Float32Array(particlesCnt * 3);
    for(let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 150;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const material = new THREE.PointsMaterial({
      size: 0.2,
      color: 0xabcdff
    });
    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);

    // Declare textMesh in the outer scope
    let textMesh: THREE.Mesh | undefined;

    // TTF Loader
    const loader = new TTFLoader();
    loader.load('/fonts/Lobster-Regular.ttf', function (json) {
      const font = new FontLoader().parse(json);
      console.log("Font loaded"); // Debugging log
      const textGeometry = new TextGeometry('Hello three.js!', {
        font: font,
        size: 15,
        height: 5,
        curveSegments: 2,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 0.5,
        bevelOffset: 0,
        bevelSegments: 5
      });

      // Center the geometry
      textGeometry.center();

      // Load the bump map
      const textureLoader = new THREE.TextureLoader();
      const bumpMap = textureLoader.load('/wall-stone-texture.jpg'); // Replace with the path to your bump map

      const textMaterial = new THREE.MeshPhongMaterial({
        color: 0x000000,
        specular: 0x99BAA2,
        shininess: 100,
        bumpMap: bumpMap,
        bumpScale: 0.5, // Adjust to increase or decrease bumpiness
      });

      textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(0, 0, 0); // Position it at the center of the scene
      scene.add(textMesh);
      console.log("Text mesh added to the scene"); // Debugging log
    }, undefined, function (error) {
      console.error("Error loading font", error); // Error handling
    });

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // Animation
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      particlesMesh.rotation.y = elapsedTime * -0.1;
      particlesMesh.rotation.x = elapsedTime * -0.02;
      if (textMesh) { // Ensure textMesh is defined before trying to rotate it
        textMesh.rotation.y += 0.005; // Spin around its Y axis
      }
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
  
    animate();

  }, []);

  return (
    <div>
      <canvas id='my-canvas'></canvas> 
    </div>      
  );
}
