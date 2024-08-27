import { Link } from 'react-router-dom';
import ProjectView from "../components/ProjectView";

const PortfolioView = () => {
    return(
        <div className="bg-black text-white flex flex-col md:flex-row justify-evenly min-h-screen w-full">
            <div className='flex-1 grid grid-cols-1'>
                <Link to="/pokedex" className="m-8">
                    <ProjectView image="/projects/pokedexmobile/Detail Screen.webp" title="Pokedex React Native Android App" description="Adobe Creative Suite, typography, colour theory, layout design, software development, web design"/>
                </Link>
                
                
                
            </div>
            <div className='flex-1 grid grid-cols-1'>
                <Link to="/recipeasy" className="m-8">
                    <ProjectView image="/projects/recipeasy/Landing Page.webp" title="Recipeasy Recipe Webscraper App" description="software development, web design"/>
                </Link>
                <Link to="/frogbit" className="m-8">
                    <ProjectView image="/projects/frogbit/Hero Section.webp" title="Cryptocurrency Frontend and Token" description="cryptocurrency development, software development, web design, pixel art"/>
                </Link>
                
                <Link to="/paintings" className="m-8">
                    <ProjectView image="/projects/paintings/St Ives Watercolour.webp" title="Paintings" description="watercolour and oil painting"/>
                </Link>
            </div>
            <div className='flex-1 grid grid-cols-1'>
                <Link to="/bdhartanddesign" className="m-8">
                    <ProjectView image="/projects/bdhartanddesign/Hero Page.webp" title="BDH Art & Design Shopify ECommerce Store" description="Adobe Creative Suite, typography, colour theory, layout design, GLSL shaders, software development, web design, motion graphics"/>
                </Link>
                <Link to="/homerbot" className="m-8">
                    <ProjectView image="/projects/homerbot/Landing Page.webp" title="Homerbot AI Chatbot" description="web design, pixel art"/>
                </Link>
                <Link to="/experiments" className="m-8">
                    <ProjectView image="/projects/experiments/Oil and Water Colour Interaction 1.webp" title="Experiments" description="watercolour and oil painting"/>
                </Link>
            </div>
        </div>
    )
}

export default PortfolioView
