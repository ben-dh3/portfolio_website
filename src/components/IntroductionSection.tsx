import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import the necessary icons

import Marquee from './Marquee';
import PageBreak from './PageBreak';

const IntroductionSection = () => {
    return (
        <div className='m-5'>
            <PageBreak />
            <div className='flex flex-row'>
                <div className='flex-1 justify-start'>
                    <div className='text-3xl font-Arimo-Italic font-bold'>BEN DUFFIELD-HARDING</div>
                    <div className='about-text text-xl font-Arimo font-bold'>
                    {`
    Self-taught software developer and Makers Academy alumnus specializing in building great user experiences for full-stack web applications in Agile teams.

    Proficient in React.js, TypeScript, JavaScript (ES6+), Node.js, and RESTful APIs, I utilize Jest and other testing libraries to ensure code quality.
    `}
                    </div>
                </div>
                <div className='flex flex-1 flex-col'>
                    <div className='flex justify-end'>
                        <a href="https://github.com/ben-dh3" target='_blank' aria-label="GitHub Link">
                        <FontAwesomeIcon icon={faGithub} className="text-3xl mx-2" />
                        </a>
                        <a href="https://www.linkedin.com/in/benjamin-duffield-harding-051011254/" target='_blank' aria-label="LinkedIn Link">
                            <FontAwesomeIcon icon={faLinkedin} className="text-3xl mx-2" />
                        </a>
                    </div>
                    <div className='about-text text-xl font-Arimo font-bold'>
                    {`
    My background in customer service and personal training has honed my problem-solving skills and ability to thrive in collaborative environments. Experienced in methodologies such as Agile, Test-Driven Development (TDD), and Code Reviews. 
    
    I am currently seeking a permanent position that will allow me to further improve my technical skills and contribute to innovative projects.
    `}
                    </div>
                </div>
            </div>
            <PageBreak />
            <Marquee message="AGILE • FULL-STACK DEVELOPMENT • SOFTWARE DEVELOPMENT • " />
            <PageBreak />
        </div>
    );
}

export default IntroductionSection;
