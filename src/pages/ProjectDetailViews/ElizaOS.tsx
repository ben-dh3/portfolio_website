import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ElizaOS: React.FC = () => {
    const images = [
        '/projects/elizaos/Farcaster Action on Discord.webp',
        '/projects/elizaos/Zapper Portfolio Action.webp',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/chitter" rightArrow="/recipeasy" />
            <ProjectDetailView 
                title="ElizaOS Contributions and AI Agent Development" 
                about="ElizaOS is a library for creating AI agents that extend the abilities of an AI model to be able to perform specific tasks. 
                
                I have contributed by creating a plugin for the Zapper API which allows users to view a formatted portfolio of given addresses. I created a Farcaster action which allows users to view a portfolio of addresses from a given Farcaster username.
                
                I also created a Discord bot which allows users to access an AI agent with Zapper API capabilities.
                " 
                images={images} 
            />
            <div className='font-Arimo my-20 flex justify-center'>
                Source Links:
                <a href="https://github.com/ben-dh3/plugin-zapper" target='_blank' aria-label="Github Link">
                    <FontAwesomeIcon icon={faGithub} className="text-2xl mx-2" />
                </a>
            </div>
            <PageBreak />
            <PortfolioView />
        </div>
    )
}

export default ElizaOS;