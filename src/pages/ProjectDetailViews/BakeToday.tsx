import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const BakeToday: React.FC = () => {
    const images = [
        '/projects/baketoday/Logo.webp',
        '/projects/baketoday/Pancakes and Packaging.webp',
        '/projects/baketoday/Pancakes and Syrup.webp',
        '/projects/baketoday/Strawberry Packaging.webp',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/impasto" rightArrow="/pokedex" />
            <ProjectDetailView 
                title="Bake Today Design Project" 
                about="Brand identity design for Bake Today from Instagram account @designerbriefs. 3D designs created and modelled in Blender. I made the Logo in Adobe Illustrator.
                
                Bake Today is a pancake baking kit brand that offers everything you need to make homemade pancakes with ease. With a variety of flavours and simple instructions, Bake Today makes it easy to create a meal that everyone will love." 
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

export default BakeToday;