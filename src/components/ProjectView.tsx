import React, { FC } from 'react';

interface ProjectViewProps {
    image: string;
    title: string;
    description: string;
}

const ProjectView: FC<ProjectViewProps> = ({ image, title, description }) => {
    return (
        <div className='space-y-2 font-Arimo flex flex-col'>
            <img className='flex max-w-full' src={image} alt={title} />
            <div className='text-2xl font-bold'>{title}</div>
            <div className=''>{description}</div>
        </div>
    );
}

export default ProjectView;
