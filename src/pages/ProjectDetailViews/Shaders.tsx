import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Shaders: React.FC = () => {
    const images = [
        '/projects/shaders/Fractal Brownian Motion.webp',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/photoshopprojects" rightArrow="/homerbot" />
            <ProjectDetailView 
                title="GLSL Shaders" 
                about="Created Northern Lights effect using Fractal Brownian Motion. An interactive version is available along with source code via the globe icon below." 
                images={images} 
            />
            <div className='font-Arimo my-20 flex justify-center'>
                Source Links:
                <a href="https://www.shadertoy.com/view/MfjBDz" target='_blank' aria-label="Website Link">
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

export default Shaders;