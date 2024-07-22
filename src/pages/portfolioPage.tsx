import { Link } from 'react-router-dom';
import ProjectView from "../components/ProjectView";
import IntroductionSection from '../components/IntroductionSection';

export default function PortfolioPage(){

    return(
        <div className="bg-black text-white flex flex-col min-h-screen w-full">
            <IntroductionSection />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                <Link to="/recipeasy" className="m-8 transform hover:scale-105 transition-transform">
                    <ProjectView image="/projects/recipeasy/recipeasy-landing-page.png" title="Recipeasy" description="An easy-to-use recipe app"/>
                </Link>
                <Link to="/artist-website" className="m-8 transform hover:scale-105 transition-transform">
                    <ProjectView image="/projects/Artist.png" title="Artist Website" description="A portfolio site for artists"/>
                </Link>
                <Link to="/frogbit-website" className="m-8 transform hover:scale-105 transition-transform">
                    <ProjectView image="/projects/Frogbit.png" title="Frogbit Website" description="A modern website for Frogbit"/>
                </Link>
                <Link to="/frogbit-website" className="m-8 transform hover:scale-105 transition-transform">
                    <ProjectView image="/projects/Frogbit.png" title="Frogbit Website" description="A modern website for Frogbit"/>
                </Link>
                <Link to="/frogbit-website" className="m-8 transform hover:scale-105 transition-transform">
                    <ProjectView image="/projects/Frogbit.png" title="Frogbit Website" description="A modern website for Frogbit"/>
                </Link>
                <Link to="/frogbit-website" className="m-8 transform hover:scale-105 transition-transform">
                    <ProjectView image="/projects/Frogbit.png" title="Frogbit Website" description="A modern website for Frogbit"/>
                </Link>
            </div>
        </div>
    )
}
