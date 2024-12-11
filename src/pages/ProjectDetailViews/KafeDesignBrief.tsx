import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const KafeDesignBrief: React.FC = () => {
    const images = [
        '/projects/kafedesignbrief/Brand Identity Animation.webp',
        '/projects/kafedesignbrief/Logo Design Animation.webp',
        '/projects/kafedesignbrief/Coffee Cup Mockup.webp',
        '/projects/kafedesignbrief/Sign Mockup.webp',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/photoshopprojects" rightArrow="/shaders" />
            <ProjectDetailView 
                title="K-AFE Design Project" 
                about="Brand identity design for K-AFE from Instagram account @designerbriefs🫰🧋☕Logo created in Adobe Illustrator and animated in After Effects.
                
                K-afe is a Korean cafe that offers a wide range of traditional and modern Korean beverages and snacks in a modern and inviting atmosphere making it a perfect spot for coffee lovers and foodies." 
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

export default KafeDesignBrief;