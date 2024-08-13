import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Experiments: React.FC = () => {
    const images = [
        '/projects/experiments/interaction-1.webp',
        '/projects/experiments/interaction-2.webp',
        '/projects/experiments/interaction-3.webp',
        '/projects/experiments/interaction-4.webp',
        '/projects/experiments/interaction-5.webp',
        '/projects/experiments/interaction-6.webp',
        '/projects/experiments/interaction-7.webp',
        '/projects/experiments/interaction-8.webp',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/paintings" rightArrow="/pokedex" />
            <ProjectDetailView 
                title="Experiments" 
                about="" 
                images={images} 
            />
            <div className='font-Arimo my-20 flex justify-center'>
                Source Links:
                <a href="https://www.instagram.com/__artbyben/" target='_blank' aria-label="Instagram Link">
                    <FontAwesomeIcon icon={faInstagram} className="text-2xl mx-2" />
                </a>
            </div>
            <PageBreak />
            <PortfolioView />
        </div>
    )
}

export default Experiments;