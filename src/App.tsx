import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/landingPage";
import PortfolioPage from "./pages/portfolioPage";
import Recipeasy from "./pages/ProjectDetailViews/Recipeasy";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/portfolio',
    element: <PortfolioPage />
  },
  {
    path: '/recipeasy',
    element: <Recipeasy />
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
