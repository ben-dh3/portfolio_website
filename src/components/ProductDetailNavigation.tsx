import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';

interface ProjectDetailNavigationProps {
    leftArrow: string;
    rightArrow: string;
}

const ProjectDetailNavigation: React.FC<ProjectDetailNavigationProps> = ({ leftArrow, rightArrow }) => {
    return (
        <div className='mx-5 text-9xl flex justify-between'>
            <Link to={leftArrow}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <Link to="/portfolio">
                <FontAwesomeIcon icon={faTimes} />
            </Link>
            <Link to={rightArrow}>
                <FontAwesomeIcon icon={faArrowRight} />
            </Link>
        </div>
    )
}

export default ProjectDetailNavigation