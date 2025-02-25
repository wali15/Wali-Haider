import React, { useState } from 'react';
import { certificationsData } from '../../store/certificationsData';
import Modal from './Modal.jsx';
import '../../styles/Certifications.css';

const Certifications = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage('');
    };

    return (
        <section className="certifications">
            <h2>Certifications</h2>
            <div className="certifications-gallery">
                {certificationsData.map((certification, index) => (
                    <div className="certification-item" key={index}>
                        <img
                            src={certification.imageUrl}
                            alt={certification.title}
                            onClick={() => openModal(certification.imageUrl)}
                        />
                        <div className="certification-description">
                            <h3>{certification.title}</h3>
                            <p className="category">{certification.category}</p>
                            <p>{certification.description}</p>
                            {certification.pdfUrl && (
                                <a
                                    href={certification.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="view-pdf"
                                >
                                    View Certificate
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} imageUrl={selectedImage} />
        </section>
    );
};

export default Certifications;