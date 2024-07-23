import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Paintings: React.FC = () => {
    const images = [
        '/projects/paintings/beach_1.webp',
        '/projects/paintings/beach_2.webp',
        '/projects/paintings/beach_3.webp',
        '/projects/paintings/beach_4.webp',
        '/projects/paintings/beach_5.webp',
        '/projects/paintings/mia.webp',
        '/projects/paintings/stives.webp',
        '/projects/paintings/watercolour_sketch.webp',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/homerbot" rightArrow="/experiments" />
            <ProjectDetailView 
                title="Paintings" 
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

export default Paintings;