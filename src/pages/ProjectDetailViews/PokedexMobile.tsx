import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import the necessary icons

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const PokedexMobile: React.FC = () => {
    const images = [
        '/projects/pokedexmobile/search-screen.webp',
        '/projects/pokedexmobile/detail-screen.webp',
        '/projects/pokedexmobile/pokemon-types/fire.webp',
        '/projects/pokedexmobile/pokemon-types/water.webp',
        '/projects/pokedexmobile/pokemon-types/grass.webp',
        '/projects/pokedexmobile/pokemon-types/ice.webp',
        '/projects/pokedexmobile/pokemon-types/normal.webp',
        '/projects/pokedexmobile/pokemon-types/fighting.webp',
        '/projects/pokedexmobile/pokemon-types/psychic.webp',
        '/projects/pokedexmobile/pokemon-types/bug.webp',
        '/projects/pokedexmobile/pokemon-types/rock.webp',
        '/projects/pokedexmobile/pokemon-types/steel.webp',
        '/projects/pokedexmobile/pokemon-types/ground.webp',
        '/projects/pokedexmobile/pokemon-types/dark.webp',
        '/projects/pokedexmobile/pokemon-types/dragon.webp',
        '/projects/pokedexmobile/pokemon-types/poison.webp',
        '/projects/pokedexmobile/pokemon-types/flying.webp',
        '/projects/pokedexmobile/pokemon-types/fairy.webp',

    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/experiments" rightArrow="/recipeasy" />
            <ProjectDetailView 
                title="Pokedex Android App" 
                about="" 
                images={images} 
            />
            <div className='font-Arimo my-20 flex justify-center'>
                Source Links:
                <a href="https://github.com/ben-dh3/android-pokedex" target='_blank' aria-label="GitHub Link">
                    <FontAwesomeIcon icon={faGithub} className="text-2xl mx-2" />
                </a>
                <a href="" target='_blank' aria-label="Android Download Link">
                    <FontAwesomeIcon icon={faAndroid} className="text-2xl mx-2" />
                </a>
            </div>
            <PageBreak />
            <PortfolioView />
        </div>
    )
}

export default PokedexMobile