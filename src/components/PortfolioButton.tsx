import { Link } from 'react-router-dom';

const PortfolioButton = () => {
    return(
        <div className="absolute bottom-24 flex flex-col items-center">
            <Link to="/portfolio">
                <button className="bg-white rounded-md">PORTFOLIO</button>
            </Link>
        </div>
    )
}

export default PortfolioButton