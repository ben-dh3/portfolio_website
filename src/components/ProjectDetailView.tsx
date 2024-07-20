import React, { FC } from 'react';

interface ProjectDetailViewProps {
    title: string;
    about: string;
    images: array;
}

const ProjectDetailView: FC<ProjectDetailViewProps> = ({ title, about, images }) => {
    return (
        <div className='flex flex-col'>
            <div>{title}</div>
            <div>{about}</div>
            <div>
                {/* for i in images...
                <img className='flex max-w-full' src={image} alt={title} /> */}
            </div>
        </div>
    );
}

export default ProjectDetailView;