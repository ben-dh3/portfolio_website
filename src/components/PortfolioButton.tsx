import { Link } from 'react-router-dom';

const PortfolioButton = () => {
    return(
        <div className="absolute bottom-24 flex flex-col items-center">
            <Link to="/portfolio">
                <button className="border border-white text-white p-4 rounded-3xl">PORTFOLIO</button>
            </Link>
        </div>
    )
}

export default PortfolioButton