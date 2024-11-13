import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Greenette: React.FC = () => {
    const images = [
        '/projects/greenette/greenette animation.webp',
        '/projects/greenette/greenette claymation.webp',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/wilde" rightArrow="/kafedesignbrief" />
            <ProjectDetailView 
                title="Greenette Design Project" 
                about="Product visualisation for GREENETTE, a modern garden centre offering all you need to create beautiful green spaces🐌🌱 CGI scenes created in Blender, logo created in Illustrator and animated in AE.
                
                Greenette is a garden centre that offers a diverse selection of plants and gardening supplies, along with expert advice. It's a place where everyone can find the inspiration and tools they need to create their own green paradise.
                " 
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

export default Greenette;