import { Link } from 'react-router-dom';
import ProjectView from "../components/ProjectView";

const PortfolioView = () => {
    return(
        <div className="bg-black text-white flex flex-col min-h-screen w-full">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                <Link to="/recipeasy" className="m-8 transform hover:scale-105 transition-transform">
                    <ProjectView image="/projects/recipeasy/landing-page.webp" title="Recipeasy" description="software development, web design"/>
                </Link>
                <Link to="/artbyben" className="m-8 transform hover:scale-105 transition-transform">
                    <ProjectView image="/projects/artbyben/ben-graphics.webp" title="Shopify ECommerce Art Store" description="software development, web design, motion graphics"/>
                </Link>
                <Link to="/frogbit" className="m-8 transform hover:scale-105 transition-transform">
                    <ProjectView image="/projects/frogbit/hero.webp" title="Crypto Token Website" description="software development, web design, pixel art"/>
                </Link>
                <Link to="/homerbot" className="m-8 transform hover:scale-105 transition-transform">
                    <ProjectView image="/projects/homerbot/landing-page.webp" title="Homerbot" description="web design, pixel art"/>
                </Link>
                <Link to="/paintings" className="m-8 transform hover:scale-105 transition-transform">
                    <ProjectView image="/projects/paintings/stives.webp" title="Paintings" description="watercolour and oil painting"/>
                </Link>
                <Link to="/experiments" className="m-8 transform hover:scale-105 transition-transform">
                    <ProjectView image="/projects/experiments/interaction-1.webp" title="Experiments" description="watercolour and oil painting"/>
                </Link>
            </div>
        </div>
    )
}

export default PortfolioView
