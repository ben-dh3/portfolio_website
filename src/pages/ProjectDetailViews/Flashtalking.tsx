import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Flashtalking: React.FC = () => {
    const images = [
        '/projects/flashtalking/frame 1 300x250.webp',
        '/projects/flashtalking/frame 2 300x250.webp',
        '/projects/flashtalking/frame 3 300x250.png',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/baketoday" rightArrow="/pokedex" />
            <ProjectDetailView 
                title="Flashtalking Banner Ad Design" 
                about="" 
                images={images} 
            />
            <div className='font-Arimo my-20 flex justify-center'>
                Source Links:
                <a href="https://ben-dh3.github.io/hosted-assets/Interview%20Design%20Task%20-%20Ben%20Duffield-Harding.pdf" target='_blank' aria-label="Storyboard Link">
                    <FontAwesomeIcon icon={faGlobe} className="text-2xl mx-2" />
                </a>
                <a href="https://www.instagram.com/ben.d_h/" target='_blank' aria-label="Instagram Link">
                    <FontAwesomeIcon icon={faInstagram} className="text-2xl mx-2" />
                </a>
            </div>
            <PageBreak />
            <PortfolioView />
        </div>
    )
}

export default Flashtalking;