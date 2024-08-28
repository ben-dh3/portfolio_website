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
import Paintings from "./pages/ProjectDetailViews/Paintings";
import Experiments from "./pages/ProjectDetailViews/Experiments";
import SelfPortrait from "./pages/ProjectDetailViews/SelfPortrait";
import Shaders from "./pages/ProjectDetailViews/Shaders";

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
    path: '/paintings',
    element: <Paintings />
  },
  {
    path: '/experiments',
    element: <Experiments />
  },
  {
    path: '/selfportrait',
    element: <SelfPortrait />
  },
  {
    path: '/shaders',
    element: <Shaders />
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
