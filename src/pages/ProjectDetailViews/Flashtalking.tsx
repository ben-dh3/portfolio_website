import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PortfolioView from "../../components/PortfolioView";
import ProjectDetailNavigation from "../../components/ProjectDetailNavigation";
import ProjectDetailView from "../../components/ProjectDetailView";
import PageBreak from '../../components/PageBreak';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Flashtalking: React.FC = () => {
    const images = [
        '/projects/flashtalking/frame 1 300x250.webp',
        '/projects/flashtalking/frame 2 300x250.webp',
        '/projects/flashtalking/frame 3 300x250.webp',
    ];

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <div className="bg-black text-white">
            <ProjectDetailNavigation leftArrow="/shaders" rightArrow="/impasto" />
            <ProjectDetailView 
                title="Flashtalking Banner Ad Design" 
                about="A suite of 3 frame ads for Flashtalking by Mediaocean in the sizes 300x250, 300x600, 970x250, 320x50 (mobile). View the full suite of ads via the globe icon below.

My goal was to use brand colours and fonts along with simple playful animation to draw attention to important messaging in the ad.

Following the Flashtalking style guide, I created a range of designs in Figma by arranging the images and design components provided. For my animated component I designed a wavy shape to highlight key words in the ad, while referencing the Mediaocean brand (that uses wave imagery as a metaphor for movement and innovation).

I assembled my designs with HTML and CSS in CodePen, matching the layout of my figma designs. I imported my wavy shape as an SVG from Figma and used the DrawSVG plugin with GSAP to animate an SVG mask - one that reveals the shape and one that hides it - to create a playful handwriting effect. I used a GSAP timeline to order the timing of the animations.
" 
                images={images} 
            />
            <div className='font-Arimo my-20 flex justify-center'>
                Source Links:
                <a href="https://ben-dh3.github.io/hosted-assets/Interview%20Design%20Task%20-%20Ben%20Duffield-Harding.pdf" target='_blank' aria-label="Storyboard Link">
                    <FontAwesomeIcon icon={faGlobe} className="text-2xl mx-2" />
                </a>
                <a href="https://www.instagram.com/ben.d_h/" target='_blank' aria-label="Instagram Link">
                    <FontAwesomeIcon icon={faInstagram} className="text-2xl mx-2" />
                </a>
            </div>
            <PageBreak />
            <PortfolioView />
        </div>
    )
}

export default Flashtalking;