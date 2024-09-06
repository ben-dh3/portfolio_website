import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const BDHArtAndDesign: React.FC = () => {
    const images = [
        '/projects/bdhartanddesign/Hero Page.webp',
        '/projects/bdhartanddesign/Shopify Integration Product Page.webp',
        '/projects/bdhartanddesign/Contact Page Utilising Netlify Forms.webp',
        '/projects/bdhartanddesign/Motion Graphics Created in AE.webp',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/recipeasy" rightArrow="/pokedex" />
            <ProjectDetailView 
                title="Ben D-H Art & Design" 
                about="Art & Design showcase utilising Shopify Integration, exploring graphic design principles - colour theory, layout design and typography. The App is deployed and available via the globe icon below.

I have created the background graphics with GLSL shaders and React Three Fibre. The effect is created with a Fractal Brownian Motion function, and uses a mouse movement event listener to interact with the colours.

Deployed using Netlify, I have integrated Netlify forms to collect customer queries. I have used the Shopify Buy Button to enable sales through my site, and a carousel feature to easily view my work. The website is fully responsive and styled with Tailwind, taking modern UX design trends into account." 
                images={images} 
            />
            <div className='font-Arimo my-20 flex justify-center'>
                Source Links:
                <a href="https://github.com/ben-dh3/artist_website_glsl" target='_blank' aria-label="GitHub Link">
                    <FontAwesomeIcon icon={faGithub} className="text-2xl mx-2" />
                </a>
                <a href="https://bdhartanddesign.netlify.app/" target='_blank' aria-label="Website Link">
                    <FontAwesomeIcon icon={faGlobe} className="text-2xl mx-2" />
                </a>
            </div>
            <PageBreak />
            <PortfolioView />
        </div>
    )
}

export default BDHArtAndDesign