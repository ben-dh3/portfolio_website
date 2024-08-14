import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
        <div className='font-Arimo m-5'>
            <div className='flex flex-col sm:flex-row'>
                <div className='text-5xl font-bold sm:flex-1'>{title}</div>
                <div className='about-text text-3xl mt-10 sm:mt-0 sm:flex-1'>{about}</div>    
            </div>
            
            <div className='mt-10 flex flex-wrap'>
                {images.map((image, index) => (
                    <div className='mt-10 mx-auto m-5 h-[400px]'>
                        <img
                        key={index}
                        className='w-full h-full object-cover cursor-zoom-in'
                        src={image}
                        alt={title}
                        onClick={() => handleImageClick(image)}
                        />
                        <h2 className='text-center mt-2 text-lg font-semibold'>
                            {image.split('/').pop()?.replace('.webp', '')}
                        </h2>
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50'>
                    <div className='max-w-screen max-h-screen overflow-auto'>
                        <button className='fixed top-10 right-10 text-white text-xl' onClick={handleCloseModal}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <img className='w-auto h-full' src={selectedImage} alt={title} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectDetailView;
