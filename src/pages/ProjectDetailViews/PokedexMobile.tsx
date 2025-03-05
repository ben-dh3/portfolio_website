import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faGithub } from '@fortawesome/free-brands-svg-icons';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';

const PokedexMobile: React.FC = () => {
    const images = [
        '/projects/pokedexmobile/Search Screen.webp',
        '/projects/pokedexmobile/Detail Screen (Grass Type).webp',
        '/projects/pokedexmobile/Detail Screen (Electric Type).webp',
        '/projects/pokedexmobile/Splash Screen Typography.webp',
        '/projects/pokedexmobile/Search Screen Typography.webp',
        '/projects/pokedexmobile/Mobile Icon.webp',
        '/projects/pokedexmobile/pokemon-types/Fire.webp',
        '/projects/pokedexmobile/pokemon-types/Water.webp',
        '/projects/pokedexmobile/pokemon-types/Ice.webp',
        '/projects/pokedexmobile/pokemon-types/Normal.webp',
        '/projects/pokedexmobile/pokemon-types/Fighting.webp',
        '/projects/pokedexmobile/pokemon-types/Psychic.webp',
        '/projects/pokedexmobile/pokemon-types/Bug.webp',
        '/projects/pokedexmobile/pokemon-types/Rock.webp',
        '/projects/pokedexmobile/pokemon-types/Steel.webp',
        '/projects/pokedexmobile/pokemon-types/Ground.webp',
        '/projects/pokedexmobile/pokemon-types/Dark.webp',
        '/projects/pokedexmobile/pokemon-types/Dragon.webp',
        '/projects/pokedexmobile/pokemon-types/Poison.webp',
        '/projects/pokedexmobile/pokemon-types/Flying.webp',
        '/projects/pokedexmobile/pokemon-types/Fairy.webp',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/baketoday" rightArrow="/rebrush" />
            <ProjectDetailView 
                title="Pokedex Android App" 
                about="This Mobile Pokedex was created as a passion project and is available to download for Android devices via the Android icon below.

Designed in Figma, initially I took inspiration from some classic Pokedex designs, before landing on a minimalist and modern design that imagines a pokeball in the user's hand. The layout takes into account modern UI trends and graphic design principles with a visual hierarchy; the user is first drawn to the search bar at the top, then to the pokeball search button that acts as navigation for the app. On the pokemon detail page the colour scheme reflects the type of the pokemon, press the pokeball button again and be taken back to the search screen.

The app has been created with React Native and Expo with Tailwind styling. Graphics have been created in Illustrator and animated in After Effects. The search function uses the Poke API to populate the pokemon detail page." 
                images={images} 
            />
            <div className='font-Arimo my-20 flex justify-center'>
                Source Links:
                <a href="https://github.com/ben-dh3/android-pokedex" target='_blank' aria-label="GitHub Link">
                    <FontAwesomeIcon icon={faGithub} className="text-2xl mx-2" />
                </a>
                <a href="https://expo.dev/accounts/bendh3/projects/pokedex-mobile-app/builds/d706747a-e61d-4fea-bd94-6bd833ece426" target='_blank' aria-label="Android Download Link">
                    <FontAwesomeIcon icon={faAndroid} className="text-2xl mx-2" />
                </a>
            </div>
            <PageBreak />
            <PortfolioView />
        </div>
    )
}

export default PokedexMobile