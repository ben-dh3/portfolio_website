import { Link } from 'react-router-dom';
import ProjectView from "../components/ProjectView";

export default function PortfolioPage(){

    return(
        <div className="bg-black flex flex-col min-h-screen w-full">
            <Link to="/recipeasy">
                <ProjectView image="/Recipeasy.png" title="Recipeasy" description="testing"/>
            </Link>

        </div>
    )
}