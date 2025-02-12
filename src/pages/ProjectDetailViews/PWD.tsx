import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const PWD: React.FC = () => {
    const images = [
        '/projects/PWD/WWO.webp',
        '/projects/PWD/Contact Page.webp',
        '/projects/PWD/Hero.webp',
        '/projects/PWD/FAQ Mobile.webp',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/pokedex" rightArrow="/baketoday" />
            <ProjectDetailView 
                title="Putney Web Design Website" 
                about="Business website for Putney Web Designs, made using React, Javascript and Tailwind. See the site via the globe icon below." 
                images={images} 
            />
            <div className='font-Arimo my-20 flex justify-center'>
                Source Links:
                <a href="https://putneywebdesigns.netlify.app/" target='_blank' aria-label="Website Link">
                    <FontAwesomeIcon icon={faGlobe} className="text-2xl mx-2" />
                </a>
            </div>
            <PageBreak />
            <PortfolioView />
        </div>
    )
}

export default PWD;