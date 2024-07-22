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
        <div className='mx-auto font-Arimo m-5'>
            <div className='flex flex-row'>
                <div className='text-5xl font-bold flex-1'>{title}</div>
                <div className='about-text text-3xl flex-1'>{about}</div>    
            </div>
            
            <div className='flex flex-wrap'>
                {images.map((image, index) => (
                    <div className='mx-auto m-5 h-[400px] h-full'>
                        <img
                        key={index}
                        className='w-full h-full object-cover cursor-zoom-in'
                        src={image}
                        alt={title}
                        onClick={() => handleImageClick(image)}
                        />
                    </div>
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
