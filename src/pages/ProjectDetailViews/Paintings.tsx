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
        '/projects/paintings/Beach Watercolour 1.webp',
        '/projects/paintings/Beach Watercolour 2.webp',
        '/projects/paintings/Beach Watercolour 3.webp',
        '/projects/paintings/Beach Watercolour 4.webp',
        '/projects/paintings/Beach Watercolour 5.webp',
        '/projects/paintings/Mia Oil Painting on Canvas.webp',
        '/projects/paintings/St Ives Watercolour.webp',
        '/projects/paintings/Watercolour Sketch.webp',
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
                <a href="https://www.instagram.com/ben.d_h/" target='_blank' aria-label="Instagram Link">
                    <FontAwesomeIcon icon={faInstagram} className="text-2xl mx-2" />
                </a>
            </div>
            <PageBreak />
            <PortfolioView />
        </div>
    )
}

export default Paintings;