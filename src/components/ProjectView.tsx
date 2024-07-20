import React, { FC } from 'react';

interface ProjectViewProps {
    image: string;
    title: string;
    description: string;
}

const ProjectView: FC<ProjectViewProps> = ({ image, title, description }) => {
    return (
        <div>
            <img src={image} alt={title} />
            <div>{title}</div>
            <div>{description}</div>
        </div>
    );
}

export default ProjectView;
