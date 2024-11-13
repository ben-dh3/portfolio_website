import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Chitter: React.FC = () => {
    const images = [
        '/projects/chitter/ThreeJS and GLSL Graphics.webp',
        '/projects/chitter/Landing Page Graphics.webp',
        '/projects/chitter/Create an Account.webp',
        '/projects/chitter/Feed Page.webp',
        '/projects/chitter/Logo.webp',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/shaders" rightArrow="/rebrush" />
            <ProjectDetailView 
                title="Chitter" 
                about="Social media website built with Flask and PostgreSQL, with graphics made in Three.js and GLSL. Deployed on a virtual machine with Digital Ocean. Check out the website via the globe icon below.

For the background graphics, I have created a shader light effect in GLSL and applied it as a material to my meshes in ThreeJS. This aims to simulate refraction and dispersion as the viewer sees through the objects to the text behind. The Chitter logo was created in Adobe Illustrator.

The app functionality was created using test driven development, and with security in mind. All user inputs are sanitised using html-sanitizer to ensure that nothing malicious is entered into the database. There are backend checks on username, email and password inputs to make sure they are unique and valid when necessary. The app uses Flask sessions to handle login and logout functions.

Create a new post and optionally tag another user. Created using Flask Mail and Mailtrap, an email is sent from Chitter to the tagged user notifying them that <username> has tagged them in a post, with their message quoted in the body of the email." 
                images={images} 
            />
            <div className='font-Arimo my-20 flex justify-center'>
                Source Links:
                <a href="https://github.com/ben-dh3/chitter_app" target='_blank' aria-label="GitHub Link">
                    <FontAwesomeIcon icon={faGithub} className="text-2xl mx-2" />
                </a>
                <a href="https://chitterapp.co.uk/" target='_blank' aria-label="Website Link">
                    <FontAwesomeIcon icon={faGlobe} className="text-2xl mx-2" />
                </a>
            </div>
            <PageBreak />
            <PortfolioView />
        </div>
    )
}

export default Chitter