import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Impasto: React.FC = () => {
    const images = [
        '/projects/impasto/Logo.webp',
        '/projects/impasto/Pizza and Pizza Box.webp',
        '/projects/impasto/Pizza Boxes.webp',
        '/projects/impasto/Box Stack.webp',
        '/projects/impasto/Pizza Display.webp',
        '/projects/impasto/Pizza Rack.webp',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/baketoday" rightArrow="/flashtalking" />
            <ProjectDetailView 
                title="Impasto Design Project" 
                about="Brand identity design for Impasto from Instagram account @designerbriefs. 3D designs created and modelled in Blender. Logo created in Adobe Illustrator.
                
                Bringing the flavours of Rome to your table, Impasto makes pinsa, pizza al taglio, and other classic Roman street food, perfect for dining in or delivery. The name Impasto, meaning dough in Italian, reflects the heart of their craft." 
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

export default Impasto;