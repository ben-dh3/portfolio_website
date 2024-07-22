import React, { useState } from 'react';

interface ProjectDetailViewProps {
    title: string;
    about: string;
    images: string[];
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ title, about, images }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className='m-5 flex flex-col'>
            <div>{title}</div>
            <div>{about}</div>
            <div className='flex flex-wrap'>
                {images.map((image, index) => (
                    <img
                        key={index}
                        className='flex w-[400px] m-2 cursor-zoom-in'
                        src={image}
                        alt={title}
                        onClick={() => handleImageClick(image)}
                    />
                ))}
            </div>
            {selectedImage && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50'>
                    <div className='relative'>
                        <button
                            className='absolute top-2 right-2 text-black text-xl'
                            onClick={handleCloseModal}
                        >
                            &times;
                        </button>
                        <img
                            className='max-w-full max-h-full'
                            src={selectedImage}
                            alt={title}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectDetailView;
