import React from 'react';
import '../../styles/Modal.css';

const Modal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={imageUrl} alt="Certificate" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal; 