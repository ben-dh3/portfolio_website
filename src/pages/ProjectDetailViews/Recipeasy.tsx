import ProjectDetailView from "../../components/ProjectDetailView";
import PortfolioPage from "../portfolioPage";

const RecipeasyDetail: React.FC = () => {
    const images = [
        '/projects/recipeasy/recipeasy-landing-page.png',
        '/projects/recipeasy/recipeasy-like.png',
        '/projects/recipeasy/recipeasy-login.png',
        '/projects/recipeasy/recipeasy-my-recipes.png',
        '/projects/recipeasy/recipeasy-recipe-page.png'
    ];

    return(
        <div>
            <ProjectDetailView title="Recipeasy" about="An easy-to-use recipe app" images={images} />
            <PortfolioPage />
        </div>
    )
}

export default RecipeasyDetail