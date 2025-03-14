import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const AIPortfolio: React.FC = () => {
    const images = [
        '/projects/aiportfolio/Save Wallet View.webp',
        '/projects/aiportfolio/Portfolio View.webp',
        '/projects/aiportfolio/AI Analysis View.webp'
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/kafe" rightArrow="/balancednews" />
            <ProjectDetailView 
                title="AWS AI Portfolio" 
                about="The AI Portfolio uses the Claude LLM to analyze portfolio data from the Zapper API and news sentiment from CryptoPanic to generate suggestions for investment allocation.

                The backend is deployed with AWS CDK and uses DynamoDB to store wallet addresses entered by the user. A lambda function fetches portfolio data from the stored wallet address. The portfolio data is passed to another lambda that uses Claude LLM to make analysis based on current news sentiment.

                The frontend is deployed with AWS Amplify, and is built with Typescript and React.
                " 
                images={images} 
            />
            <div className='font-Arimo my-20 flex justify-center'>
                Source Links:
                <a href="https://master.d5ohu7yc8el7a.amplifyapp.com" target='_blank' aria-label="Website Link">
                    <FontAwesomeIcon icon={faGlobe} className="text-2xl mx-2" />
                </a>
                <a href="https://github.com/ben-dh3/ai-portfolio-frontend" target='_blank' aria-label="Github Link">
                    <FontAwesomeIcon icon={faGithub} className="text-2xl mx-2" />
                </a>
            </div>
            <PageBreak />
            <PortfolioView />
        </div>
    )
}

export default AIPortfolio;