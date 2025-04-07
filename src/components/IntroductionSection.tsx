import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import the necessary icons

import Marquee from './Marquee';
import PageBreak from './PageBreak';

const IntroductionSection = () => {
    return (
        <div className='m-5'>
            <PageBreak />
            <div className='flex flex-row gap-2'>
                <div className='flex-1 justify-start'>
                    <div className='text-3xl font-Arimo-Italic font-bold'>BEN DUFFIELD-HARDING</div>
                    <div className='about-text text-xl font-Arimo font-bold'>
                    {`
    Creative and conscientious developer with a drive to create innovative tech that contributes to meaningful positive change.

    Proficient in AWS, NextJS and TypeScript, I utilize Blender and ThreeJS to build visually stunning projects.
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
    My background in nutrition and fitness, and passion for art and 3D creation gives me a unique perspective when building projects that tackle real world issues.

    Contact me via LinkedIn or email if you have a project idea you would like to collaborate on together. benduffieldharding@gmail.com
    `}
                    </div>
                </div>
            </div>
            <PageBreak />
            <Marquee message="3D DESIGN • FULL-STACK DEVELOPMENT • CREATIVE SOLUTIONS • " />
            <PageBreak />
        </div>
    );
}

export default IntroductionSection;
