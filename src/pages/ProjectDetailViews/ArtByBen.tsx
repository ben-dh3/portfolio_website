import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Import the necessary icons

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const ArtByBen: React.FC = () => {
    const images = [
        '/projects/artbyben/hero.webp',
        '/projects/artbyben/ben-graphics.webp',
        '/projects/artbyben/shop.webp',
        '/projects/artbyben/mobile-nav.webp',
        '/projects/artbyben/mobile-view.webp',
        '/projects/artbyben/figma-designs.webp'
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/recipeasy" rightArrow="/frogbit" />
            <ProjectDetailView 
                title="Art By Ben" 
                about="This store was created independently for the purpose of selling my creations.

Inspiration for the motion graphics taken from Organs’ creative agency website. I designed the graphics in Figma, before creating the animation in Adobe After Effects. The lettering shape is made up of circles that expand and shrink in a flowing motion, a plastic texture has been applied that accentuates the movement.

The web app is created with Typescript/React, and React testing library for CI/CD integration with Github Actions. Deployed using Netlify, I have integrated Netlify forms to collect customer queries. I have used the Shopify Buy Button to enable sales through my site, and a carousel feature to easily view my work. The website is fully responsive and styled with Tailwind, taking modern UX design trends into account." 
                images={images} 
            />
            <div className='font-Arimo my-20 flex justify-center'>
                Source Links:
                <a href="https://github.com/ben-dh3/artist_website" target='_blank' aria-label="GitHub Link">
                    <FontAwesomeIcon icon={faGithub} className="text-2xl mx-2" />
                </a>
                <a href="https://artbyben.netlify.app/" target='_blank' aria-label="Website Link">
                    <FontAwesomeIcon icon={faGlobe} className="text-2xl mx-2" />
                </a>
            </div>
            <PageBreak />
            <PortfolioView />
        </div>
    )
}

export default ArtByBen