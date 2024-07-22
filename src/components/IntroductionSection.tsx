import instagram from '../../public/icons/instagram.svg';
import linkedin from '../../public/icons/linkedin.svg';
import github from '../../public/icons/github.svg';
import Marquee from './Marquee';

const IntroductionSection = () => {

    return (
        <div className='m-5'>
            <div className="h-[5px] bg-gradient-to-r from-pink-500 via-white to-green-500 background-animate"></div>
            <div className='flex flex-row justify-between'>
                <div className=''>BEN DUFFIELD-HARDING</div>
                <div className='flex'>
                    <a href="https://www.instagram.com/__artbyben/" target='_blank' aria-label="Instagram Link">
                        <img src={linkedin} className="h-6 w-auto" alt="linkedin" />
                    </a>
                    <a href="https://www.instagram.com/__artbyben/" target='_blank' aria-label="Instagram Link">
                        <img src={github} className="h-6 w-auto" alt="linkedin" />
                    </a>
                    <a href="https://www.instagram.com/__artbyben/" target='_blank' aria-label="Instagram Link">
                        <img src={instagram} className="h-6 w-auto" alt="linkedin" />
                    </a>
                </div>
            </div>
            <div className="h-[5px] bg-gradient-to-r from-pink-500 via-white to-green-500 background-animate"></div>
            <Marquee message="WEB DEVELOPMENT + WEB DESIGN + ARTIST" />
            <div className="h-[5px] bg-gradient-to-r from-pink-500 via-white to-green-500 background-animate"></div>
        </div>
    )
}

export default IntroductionSection