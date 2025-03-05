import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectView from "../components/ProjectView";

gsap.registerPlugin(ScrollTrigger);

const PortfolioView = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projectsRef.current) {
      const projectElements = projectsRef.current.querySelectorAll(".project");

      projectElements.forEach((project) => {
        gsap.fromTo(
          project,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: project,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  }, []);

  return (
    <div ref={projectsRef} className="bg-black text-white flex flex-col md:flex-row justify-evenly min-h-screen w-full">
      <div className='flex-1 grid grid-cols-1'>
        <Link to="/aiportfolio" className="m-8 project">
          <ProjectView image="/projects/aiportfolio/Save Wallet View.webp" title="AI Portfolio App" description="AWS Lambda, DynamoDB, API Gateway, Amplify, Typescript, React" />
        </Link>
        <Link to="/chitter" className="m-8 project">
          <ProjectView image="/projects/chitter/ThreeJS and GLSL Graphics.webp" title="Chitter Social Media Website" description="Python, Pytest, CRUD, ThreeJS, GLSL, Flask, PostgreSQL" />
        </Link>
        <Link to="/pokedex" className="m-8 project">
          <ProjectView image="/projects/pokedexmobile/Detail Screen (Electric Type).webp" title="Pokedex React Native Android App" description="React Native, Expo, Adobe Creative Suite" />
        </Link>
        <Link to="/flashtalking" className="m-8 project">
          <ProjectView image="/projects/flashtalking/frame 1 300x250.webp" title="Flashtalking Banner Ad Design" description="Figma, GSAP" />
        </Link>
        <Link to="/frogbit" className="m-8 project">
          <ProjectView image="/projects/frogbit/Hero Section.webp" title="Cryptocurrency Frontend and Token" description="Solidity, React, Figma" />
        </Link>
        
      </div>
      <div className='flex-1 grid grid-cols-1'>
        <Link to="/elizaos" className="m-8 project">
          <ProjectView image="/projects/elizaos/Farcaster Action on Discord.webp" title="Eliza OS Contributions and AI Agent Development" description="Docker, Typescript, Vitest, CI, Open Source, RESTful APIs, AI Agent Development, Discord Bot Development" />
        </Link>
        <Link to="/PWD" className="m-8 project">
          <ProjectView image="/projects/PWD/WWO.webp" title="Putney Web Design Website" description="React, Javascript, Tailwind" />
        </Link>
        <Link to="/rebrush" className="m-8 project">
          <ProjectView image="/projects/rebrush/Hero.webp" title="REBRUSH Wordpress Website" description="Wordpress, WooCommerce, Custome Themes & Plugins, Blender, Adobe Creative Suite" />
        </Link>
        <Link to="/impasto" className="m-8 project">
          <ProjectView image="/projects/impasto/Pizza and Pizza Box.webp" title="Impasto Design Brief" description="Blender, Adobe Creative Suite" />
        </Link>
        <Link to="/wilde" className="m-8 project">
          <ProjectView image="/projects/wilde/Green Backpack.webp" title="Wilde Design Brief" description="Blender, Adobe Creative Suite" />
        </Link>
      </div>
      <div className='flex-1 grid grid-cols-1'>
        <Link to="/recipeasy" className="m-8 project">
          <ProjectView image="/projects/recipeasy/Landing Page.webp" title="Recipeasy - Recipe Web Scraping Application" description="MongoDB, React, TDD, Agile" />
        </Link>
        <Link to="/baketoday" className="m-8 project">
          <ProjectView image="/projects/baketoday/Pancakes and Syrup.webp" title="Bake Today Design Brief" description="Blender, Adobe Creative Suite" />
        </Link>
        <Link to="/shaders" className="m-8 project">
          <ProjectView image="/projects/shaders/Fractal Brownian Motion.webp" title="GLSL Shaders" description="GLSL" />
        </Link> 
        <Link to="/kafe" className="m-8 project">
        <ProjectView image="/projects/kafedesignbrief/Brand Identity Animation.webp" title="K-AFE Design Brief" description="Adobe Creative Suite" />
        </Link>
        <Link to="/homerbot" className="m-8 project">
          <ProjectView image="/projects/homerbot/Landing Page.webp" title="Homerbot AI Chatbot" description="AI Development, NextJS, Vercel" />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioView;