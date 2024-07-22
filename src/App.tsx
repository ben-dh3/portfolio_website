import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/landingPage";
import PortfolioPage from "./pages/portfolioPage";
import Recipeasy from "./pages/ProjectDetailViews/Recipeasy";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft, faArrowRight, faTimes);

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
