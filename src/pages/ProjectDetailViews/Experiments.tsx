import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";

const Experiments: React.FC = () => {
    const images = [
        '/projects/experiments/interaction-1.webp',
        '/projects/experiments/interaction-2.webp',
        '/projects/experiments/interaction-3.webp',
        '/projects/experiments/interaction-4.webp',
        '/projects/experiments/interaction-5.webp',
        '/projects/experiments/interaction-6.webp',
        '/projects/experiments/interaction-7.webp',
        '/projects/experiments/interaction-8.webp',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/paintings" rightArrow="/recipeasy" />
            <ProjectDetailView 
                title="Experiments" 
                about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Feugiat in fermentum posuere urna. Tristique nulla aliquet enim tortor. Eu feugiat pretium nibh ipsum consequat nisl vel. Eget nullam non nisi est sit amet facilisis magna etiam. In est ante in nibh mauris cursus mattis molestie. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Quis viverra nibh cras pulvinar mattis nunc sed. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Aliquam eleifend mi in nulla posuere. Risus sed vulputate odio ut enim blandit volutpat maecenas. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Risus nullam eget felis eget nunc. Porttitor leo a diam sollicitudin tempor id. Enim praesent elementum facilisis leo vel fringilla est. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Urna molestie at elementum eu facilisis sed odio morbi. In cursus turpis massa tincidunt. Egestas quis ipsum suspendisse ultrices gravida dictum fusce.
                
                Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Quis ipsum suspendisse ultrices gravida. Cursus eget nunc scelerisque viverra mauris in aliquam. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Aliquam vestibulum morbi blandit cursus. At varius vel pharetra vel. Neque egestas congue quisque egestas diam. Odio aenean sed adipiscing diam donec adipiscing. At lectus urna duis convallis convallis tellus. Feugiat scelerisque varius morbi enim nunc. Cras semper auctor neque vitae tempus quam pellentesque nec nam." 
                images={images} 
            />
            <PortfolioView />
        </div>
    )
}

export default Experiments;