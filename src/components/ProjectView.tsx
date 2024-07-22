import React, { FC } from 'react';

interface ProjectViewProps {
    image: string;
    title: string;
    description: string;
}

const ProjectView: FC<ProjectViewProps> = ({ image, title, description }) => {
    return (
        <div className='font-Arimo flex flex-col'>
            <img className='flex max-w-full' src={image} alt={title} />
            <div>{title}</div>
            <div>{description}</div>
        </div>
    );
}

export default ProjectView;
