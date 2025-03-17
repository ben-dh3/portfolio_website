import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const BalancedNews: React.FC = () => {
    const images = [
        '/projects/balancednews/Headlines Page.webp',
        '/projects/balancednews/Articles Page.webp',
        '/projects/balancednews/Flow Chart.webp',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/aiportfolio" rightArrow="/recipeasy" />
            <ProjectDetailView 
                title="Balanced News PWA" 
                about="Full-stack PWA built with AWS, React and Typescript. View the app via the globe icon below.
                
                Aims to provide a balanced political perspective on top headlines. Uses Anthropic API to generate summaries of related articles across the political spectrum.
                " 
                images={images} 
            />
            <div className='font-Arimo my-20 flex justify-center'>
                Source Links:
                <a href="https://balancednews.netlify.app/" target='_blank' aria-label="Website Link">
                    <FontAwesomeIcon icon={faGlobe} className="text-2xl mx-2" />
                </a>
                <a href="https://github.com/ben-dh3/balanced-news-frontend" target='_blank' aria-label="Github Link">
                    <FontAwesomeIcon icon={faGithub} className="text-2xl mx-2" />
                </a>
            </div>
            <PageBreak />
            <PortfolioView />
        </div>
    )
}

export default BalancedNews;