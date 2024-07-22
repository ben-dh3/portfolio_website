import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';

import LandingPage from "./pages/landingPage";
import PortfolioPage from "./pages/portfolioPage";
import Recipeasy from "./pages/ProjectDetailViews/Recipeasy";
import ArtByBen from "./pages/ProjectDetailViews/ArtByBen";
import Frogbit from "./pages/ProjectDetailViews/Frogbit";
import Homerbot from "./pages/ProjectDetailViews/Frogbit";
import Paintings from "./pages/ProjectDetailViews/Paintings";

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
  },
  {
    path: '/artbyben',
    element: <ArtByBen />
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
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
