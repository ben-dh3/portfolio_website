import React, { useEffect } from "react";
import * as THREE from 'three';

export default function LandingPage() {

  useEffect(() => { 
      
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.setZ(75);
    const canvas = document.getElementById('my-canvas')!;
    const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias:true,  
    });
    //renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(new THREE.Color('#21282a'), 1);
    document.body.appendChild(renderer.domElement);
 

    //light
    const ambientLight = new THREE.AmbientLight(0xffffff, 10); //color and intensity
    scene.add(ambientLight);

    //particles
    const particlesGeometry = new THREE.BufferGeometry;
    const particlesCnt = 100;
    const posArray = new Float32Array(particlesCnt * 3);
    for(let i = 0; i < particlesCnt * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 150
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    const material = new THREE.PointsMaterial({
      size: 0.2,
      color: 0xabcdff
    })
    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);

    window.addEventListener( 'resize', onWindowResize, false );
    function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
    //animate
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      particlesMesh.rotation.y = elapsedTime * -0.1;
      particlesMesh.rotation.x = elapsedTime * -0.02;
      //
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
      };
  
    animate();

   },[]);

  return (
    <div>
      <canvas id='my-canvas'></canvas> 
    </div>      
  )
}