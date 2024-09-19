import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import PageBreak from '../../components/PageBreak';

const Frogbit: React.FC = () => {
    const images = [
        '/projects/frogbit/Hero Section.webp',
        '/projects/frogbit/How To Buy Section.webp',
        '/projects/frogbit/Tokenomics Section.webp',
        '/projects/frogbit/Mobile View.webp',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/recipeasy" rightArrow="/photoshopprojects" />
            <ProjectDetailView 
                title="Frogbit" 
                about="Crypto website created as an example for potential freelancing clients on Fiverr. This single page React application with colourful artwork follows the conventions of “Meme Coin” websites in the cryptocurrency ecosystem. The App is deployed and available via the globe icon below.

Website optimised for accessibility and SEO using Lighthouse. I created the graphics in Piskel before designing the layout of each section in Figma. I wrote the smart contract for this crypto token in Solidity and deployed it to Base layer 2 on Ethereum. The smart contract is verified and available on Base Etherscan (a block explorer for Base chain)." 
                images={images} 
            />
            <div className='font-Arimo my-20 flex justify-center'>
                Source Links:
                <a href="https://github.com/ben-dh3/frogbit_website" target='_blank' aria-label="GitHub Link">
                    <FontAwesomeIcon icon={faGithub} className="text-2xl mx-2" />
                </a>
                <a href="https://frogbit.netlify.app/" target='_blank' aria-label="Website Link">
                    <FontAwesomeIcon icon={faGlobe} className="text-2xl mx-2" />
                </a>
                <a href="https://medium.com/coinmonks/verify-a-smart-contract-on-etherscan-9eb5eb4f55cd" target='_blank' aria-label="Medium Link">
                    <FontAwesomeIcon icon={faMedium} className="text-2xl mx-2" />
                </a>
            </div>
            <PageBreak />
            <PortfolioView />
        </div>
    )
}

export default Frogbit;