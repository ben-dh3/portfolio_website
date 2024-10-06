import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Wilde: React.FC = () => {
    const images = [
        '/projects/wilde/Wilde Icon.webp',
        '/projects/wilde/Wilde Logo.webp',
        '/projects/wilde/Material Visualisation.webp',
        '/projects/wilde/Green Backpack.webp',
        '/projects/wilde/Orange Backpack.webp',
        '/projects/wilde/Orange Fabric.webp',
        '/projects/wilde/Green Bag Reverse.webp',
        '/projects/wilde/Orange Bag Reverse.webp',
        '/projects/wilde/Back to Backpack.webp',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/pokedex" rightArrow="/bdhartanddesign" />
            <ProjectDetailView 
                title="Wilde Design Project" 
                about="Brand identity design for Wilde from Instagram account @designerbriefs. 3D designs created and modelled in Blender, I created the fabric effect using material shaders. I made the Logo in Adobe Illustrator.
                
                Wilde is a sustainable bag brand that creates stylish and practical bags for everyday use. Inspired by a love for adventure, Wilde bags are designed to be versatile, durable and perfect for any journey, whether in the city or outdoors." 
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

export default Wilde;