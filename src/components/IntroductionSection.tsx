import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import the necessary icons

import Marquee from './Marquee';
import PageBreak from './PageBreak';

const IntroductionSection = () => {
    return (
        <div className='m-5'>
            <PageBreak />
            <div className='flex flex-row justify-between'>
                <div className='text-3xl font-Arimo-Italic font-bold'>BEN DUFFIELD-HARDING</div>
                <div className='flex'>
                    <a href="https://github.com/your-github-profile" target='_blank' aria-label="GitHub Link">
                        <FontAwesomeIcon icon={faGithub} className="text-2xl mx-2" /> {/* Corrected the icon reference */}
                    </a>
                    <a href="https://www.linkedin.com/in/your-linkedin-profile" target='_blank' aria-label="LinkedIn Link">
                        <FontAwesomeIcon icon={faLinkedin} className="text-2xl mx-2" /> {/* Corrected the icon reference */}
                    </a>
                    <a href="https://www.instagram.com/__artbyben/" target='_blank' aria-label="Instagram Link">
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl mx-2" /> {/* Corrected the icon reference */}
                    </a>
                </div>
            </div>
            <PageBreak />
            <Marquee message="WEB DEVELOPMENT + WEB DESIGN + ARTIST" />
            <PageBreak />
        </div>
    );
}

export default IntroductionSection;
