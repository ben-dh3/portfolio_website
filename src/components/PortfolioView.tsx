import { Link } from 'react-router-dom';
import ProjectView from "../components/ProjectView";

const PortfolioView = () => {
    return(
        <div className="bg-black text-white flex flex-col md:flex-row justify-evenly min-h-screen w-full">
            <div className='flex-1 grid grid-cols-1'>
                <Link to="/pokedex" className="m-8">
                    <ProjectView image="/projects/pokedexmobile/detail-screen.webp" title="Pokedex React Native Android App" description="Adobe Creative Suite, typography, colour theory, layout design, software development, web design"/>
                </Link>
                
                
                
            </div>
            <div className='flex-1 grid grid-cols-1'>
                <Link to="/recipeasy" className="m-8">
                    <ProjectView image="/projects/recipeasy/landing-page.webp" title="Recipeasy Recipe Webscraper App" description="software development, web design"/>
                </Link>
                <Link to="/frogbit" className="m-8">
                    <ProjectView image="/projects/frogbit/hero.webp" title="Crypto Token Website" description="software development, web design, pixel art"/>
                </Link>
                
                <Link to="/paintings" className="m-8">
                    <ProjectView image="/projects/paintings/stives.webp" title="Paintings" description="watercolour and oil painting"/>
                </Link>
            </div>
            <div className='flex-1 grid grid-cols-1'>
                <Link to="/artbyben" className="m-8">
                    <ProjectView image="/projects/artbyben/ben-graphics.webp" title="Shopify ECommerce Art Store" description="software development, web design, motion graphics"/>
                </Link>
                <Link to="/homerbot" className="m-8">
                    <ProjectView image="/projects/homerbot/landing-page.webp" title="Homerbot AI Chatbot" description="web design, pixel art"/>
                </Link>
                <Link to="/experiments" className="m-8">
                    <ProjectView image="/projects/experiments/interaction-1.webp" title="Experiments" description="watercolour and oil painting"/>
                </Link>
            </div>
        </div>
    )
}

export default PortfolioView
