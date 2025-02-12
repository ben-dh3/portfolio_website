import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';

const Recipeasy: React.FC = () => {
    const images = [
        '/projects/recipeasy/Landing Page.webp',
        '/projects/recipeasy/Favourite Button.webp',
        '/projects/recipeasy/Create Account.webp',
        '/projects/recipeasy/Login.webp',
        '/projects/recipeasy/Edit Recipe Top.webp',
        '/projects/recipeasy/Edit Recipe Bottom.webp',
        '/projects/recipeasy/My Recipes Page.webp',
        '/projects/recipeasy/Create Recipe From Scratch.webp',
        '/projects/recipeasy/Logo.webp',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/elizaos" rightArrow="/pokedex" />
            <ProjectDetailView 
                title="Recipeasy - Recipe Web Scraping Application" 
                about="Recipeasy was created to solve the inaccessibility issue of long form recipe blogs. This was made for our final project in an Agile engineering team at Makers.

The core functionality is a web scraper that takes a URL to a recipe and scrapes the recipe data from the web page, then a recipe form is populated in the app which can be modified, saved, and stored. Create an account, login, and favourite your best finds. With the create new recipe feature - fill in a blank recipe form and save it to your collection.

Our team used Figma to design and plan the application, and Trello to organise our Agile workflow. We used test-driven development with React testing library and Vitest. The app is built with the MERN stack and Axios, Cheerio and Puppeteer for the web scraper on the backend. We used Tailwind to style the app." 
                images={images} 
            />
            <div className='font-Arimo my-20 flex justify-center'>
                Source Links:
                <a href="https://github.com/kawrou/RecipEasy-recipe-manager" target='_blank' aria-label="GitHub Link">
                    <FontAwesomeIcon icon={faGithub} className="text-2xl mx-2" />
                </a>
            </div>
            <PageBreak />
            <PortfolioView />
        </div>
    )
}

export default Recipeasy