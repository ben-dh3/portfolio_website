import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./pages/landingPage";
import PortfolioPage from "./pages/portfolioPage";
import PokedexMobile from "./pages/ProjectDetailViews/PokedexMobile";
import Recipeasy from "./pages/ProjectDetailViews/Recipeasy";
import BDHArtAndDesign from "./pages/ProjectDetailViews/BDHArtAndDesign";
import Frogbit from "./pages/ProjectDetailViews/Frogbit";
import Homerbot from "./pages/ProjectDetailViews/Homerbot";
import Shaders from "./pages/ProjectDetailViews/Shaders";
import PhotoshopProjects from "./pages/ProjectDetailViews/PhotoshopProjects";
import Chitter from "./pages/ProjectDetailViews/Chitter";
import KafeDesignBrief from "./pages/ProjectDetailViews/KafeDesignBrief";
import Wilde from "./pages/ProjectDetailViews/Wilde";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/pokedex',
    element: <PokedexMobile />
  },
  {
    path: '/portfolio',
    element: <PortfolioPage />
  },
  {
    path: '/recipeasy',
    element: <Recipeasy />
  },
  {
    path: '/bdhartanddesign',
    element: <BDHArtAndDesign />
  },
  {
    path: '/frogbit',
    element: <Frogbit />
  },
  {
    path: '/homerbot',
    element: <Homerbot />
  },
  {
    path: '/photoshopprojects',
    element: <PhotoshopProjects />
  },
  {
    path: '/shaders',
    element: <Shaders />
  },
  {
    path: '/chitter',
    element: <Chitter />
  },
  {
    path: '/kafedesignbrief',
    element: <KafeDesignBrief />
  },
  {
    path: '/wilde',
    element: <Wilde />
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
