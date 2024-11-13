import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Rebrush: React.FC = () => {
    const images = [
        '/projects/rebrush/Hero.webp',
        '/projects/rebrush/Colours.webp',
        '/projects/rebrush/Product.webp',
        '/projects/rebrush/Collection.webp',
        '/projects/rebrush/Brush Head Detail.webp',
        '/projects/rebrush/Handle Detail.webp',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/chitter" rightArrow="/baketoday" />
            <ProjectDetailView 
                title="REBRUSH Wordpress Website" 
                about="Wordpress website and 3D CGI scenes made for REBRUSH, a company offering eco-friendly toothbrushes made from recycled materials. View the website via the globe icon below.

I created a custom theme and colour scheme in Wordpress, and used the Google Fonts for Wordpress plugin to refine my brand identity. I used the variable product option with WooCommerce to display the different colour options in an intuitive way.

I created the CGI scenes in Blender and modelled the brushes with inspiration from the Suri toothbrush design. I designed complimentary lighting and textures in Blender and chose a complementary colour scheme for the collection.
" 
                images={images} 
            />
            <div className='font-Arimo my-20 flex justify-center'>
                Source Links:
                <a href="https://rebrushhealth.wpcomstaging.com/" target='_blank' aria-label="Website Link">
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

export default Rebrush;