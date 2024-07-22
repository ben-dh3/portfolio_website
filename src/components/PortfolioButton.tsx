import { Link } from 'react-router-dom';

const PortfolioButton = () => {
    return (
        <div className="absolute bottom-24 flex flex-col items-center">
            <Link to="/portfolio" className="group relative">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-pink-500 via-green-500 to-yellow-500 rounded-3xl blur-lg group-hover:opacity-70 group-hover:-inset-3 group-hover:duration-50 animate-tilt z-0"></div>
                <button className="font-Arimo relative font-bold opacity-100 text-md border-2 border-white text-white p-4 rounded-3xl z-10">PORTFOLIO</button>
            </Link>
        </div>
    );
}

export default PortfolioButton;
