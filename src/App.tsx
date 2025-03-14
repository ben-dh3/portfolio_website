import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./pages/landingPage";
import PortfolioPage from "./pages/portfolioPage";
import PokedexMobile from "./pages/ProjectDetailViews/PokedexMobile";
import Recipeasy from "./pages/ProjectDetailViews/Recipeasy";
import Homerbot from "./pages/ProjectDetailViews/Homerbot";
import Shaders from "./pages/ProjectDetailViews/Shaders";
import Chitter from "./pages/ProjectDetailViews/Chitter";
import KafeDesignBrief from "./pages/ProjectDetailViews/KafeDesignBrief";
import Wilde from "./pages/ProjectDetailViews/Wilde";
import BakeToday from "./pages/ProjectDetailViews/BakeToday";
import Impasto from "./pages/ProjectDetailViews/Impasto";
import Rebrush from "./pages/ProjectDetailViews/Rebrush";
import ElizaOS from "./pages/ProjectDetailViews/ElizaOS";
import AIPortfolio from "./pages/ProjectDetailViews/AIPortfolio";
import BalancedNews from "./pages/ProjectDetailViews/BalancedNews";

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
    path: '/homerbot',
    element: <Homerbot />
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
    path: '/kafe',
    element: <KafeDesignBrief />
  },
  {
    path: '/wilde',
    element: <Wilde />
  },
  {
    path: '/baketoday',
    element: <BakeToday />
  },
  {
    path: '/impasto',
    element: <Impasto />
  },
  {
    path: '/rebrush',
    element: <Rebrush />
  },
  {
    path: '/elizaos',
    element: <ElizaOS />
  },
  {
    path: '/aiportfolio',
    element: <AIPortfolio />
  },
  {
    path: '/balancednews',
    element: <BalancedNews />
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
