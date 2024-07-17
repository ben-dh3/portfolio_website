import React, { useEffect } from "react";
import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';

export default function LandingPage() {

  useEffect(() => { 
      
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.setZ(75);
    const canvas = document.getElementById('my-canvas');
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
    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Adjusted intensity
    scene.add(ambientLight);

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

    // TTF Loader
    const loader = new TTFLoader();
    loader.load('/fonts/Lobster-Regular.ttf', function (json) {
      const font = new FontLoader().parse(json);
      const textGeometry = new TextGeometry('Hello three.js!', {
        font: font,
        size: 10,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 0.5,
        bevelOffset: 0,
        bevelSegments: 5
      });
      const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(-30, 0, 0);
      scene.add(textMesh);
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
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
  
    animate();

  }, []);

  return (
    <div>
      <canvas id='my-canvas'></canvas> 
    </div>      
  )
}
