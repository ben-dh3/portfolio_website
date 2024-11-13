import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Homerbot: React.FC = () => {
    const images = [
        '/projects/homerbot/Landing Page.webp',
        '/projects/homerbot/Mobile View.webp',
        '/projects/homerbot/Pixel Animation Created in Piskel.webp',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/bdhartanddesign" rightArrow="/photoshopprojects" />
            <ProjectDetailView 
                title="Homerbot" 
                about="This is an AI chat bot using OpenAI's API; the AI model has been fine tuned with dialogue to respond like Homer Simpson. The App is deployed and available via the globe icon below. 

The UI has been designed in Figma with references to Simpsons episodes, and graphics made in Piskel. The application is built with Next.js and deployed with Vercel." 
                images={images} 
            />
            <div className='font-Arimo my-20 flex justify-center'>
                Source Links:
                <a href="https://github.com/ben-dh3/ai_chatbot" target='_blank' aria-label="GitHub Link">
                    <FontAwesomeIcon icon={faGithub} className="text-2xl mx-2" />
                </a>
                <a href="https://ai-homerbot.vercel.app/" target='_blank' aria-label="Website Link">
                    <FontAwesomeIcon icon={faGlobe} className="text-2xl mx-2" />
                </a>
            </div>
            <PageBreak />
            <PortfolioView />
        </div>
    )
}

export default Homerbot;