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
                <div className='flex items-center'>
                    <a href="https://github.com/ben-dh3" target='_blank' aria-label="GitHub Link">
                        <FontAwesomeIcon icon={faGithub} className="text-2xl mx-2" />
                    </a>
                    <a href="https://www.linkedin.com/in/benjamin-duffield-harding-051011254/" target='_blank' aria-label="LinkedIn Link">
                        <FontAwesomeIcon icon={faLinkedin} className="text-2xl mx-2" />
                    </a>
                    <a href="https://www.instagram.com/ben.d_h/" target='_blank' aria-label="Instagram Link">
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl mx-2" />
                    </a>
                </div>
            </div>
            <PageBreak />
            <Marquee message="WEB DESIGN • GRAPHIC DESIGN • SOFTWARE DEVELOPMENT • " />
            <PageBreak />
        </div>
    );
}

export default IntroductionSection;
