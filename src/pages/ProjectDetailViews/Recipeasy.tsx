import { Outlet } from "react-router-dom";
import PortfolioPage from "../portfolioPage";

export default function Recipeasy(){
    return(
        <div>
            <div className="flex flex-col md:flex-row">
                <div>Title</div>
                <div>About section</div>
            </div>
            <div>

            </div>
            <PortfolioPage />
        </div>
    )
}