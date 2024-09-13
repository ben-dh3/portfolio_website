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
        <Link to="/chitter" className="m-8 project">
          <ProjectView image="/projects/chitter/ThreeJS and GLSL Graphics.webp" title="Chitter" description="ThreeJS, GLSL, Flask, PostgreSQL, Tailwind, Devops, web design, software development" />
        </Link>
        <Link to="/pokedex" className="m-8 project">
          <ProjectView image="/projects/pokedexmobile/Detail Screen.webp" title="Pokedex React Native Android App" description="Adobe Creative Suite, typography, colour theory, layout design, software development, web design" />
        </Link>
        <Link to="/frogbit" className="m-8 project">
          <ProjectView image="/projects/frogbit/Hero Section.webp" title="Cryptocurrency Frontend and Token" description="cryptocurrency development, software development, web design, pixel art" />
        </Link>
      </div>
      <div className='flex-1 grid grid-cols-1'>
        <Link to="/recipeasy" className="m-8 project">
          <ProjectView image="/projects/recipeasy/Landing Page.webp" title="Recipeasy Recipe Webscraper App" description="software development, web design" />
        </Link>
        <Link to="/kafedesignbrief" className="m-8 project">
          <ProjectView image="/projects/kafedesignbrief/Brand Identity Animation.webp" title="K-AFE Design Brief" description="Adobe Creative Suite" />
        </Link>
        <Link to="/photoshopprojects" className="m-8 project">
          <ProjectView image="/projects/photoshopprojects/Self Portrait 1.webp" title="Photoshop Graphics Projects" description="Adobe Creative Suite" />
        </Link>
        <Link to="/paintings" className="m-8 project">
          <ProjectView image="/projects/paintings/St Ives Watercolour.webp" title="Paintings" description="watercolour and oil painting" />
        </Link>
      </div>
      <div className='flex-1 grid grid-cols-1'>
        <Link to="/bdhartanddesign" className="m-8 project">
          <ProjectView image="/projects/bdhartanddesign/Hero Page.webp" title="BDH Art & Design Shopify ECommerce Store" description="Adobe Creative Suite, typography, colour theory, layout design, GLSL shaders, software development, web design, motion graphics" />
        </Link>
        <Link to="/shaders" className="m-8 project">
          <ProjectView image="/projects/shaders/Fractal Brownian Motion.webp" title="GLSL Shaders" description="GLSL" />
        </Link>
        <Link to="/homerbot" className="m-8 project">
          <ProjectView image="/projects/homerbot/Landing Page.webp" title="Homerbot AI Chatbot" description="web design, pixel art" />
        </Link>
        <Link to="/experiments" className="m-8 project">
          <ProjectView image="/projects/experiments/Oil and Water Colour Interaction 1.webp" title="Experiments" description="watercolour and oil painting" />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioView;