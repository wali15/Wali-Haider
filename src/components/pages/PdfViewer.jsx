import { useState } from 'react';
import '../../styles/PdfViewer.css';
import { useParams } from 'react-router-dom';

const PdfViewer = () => {
  const { pdfUrl } = useParams();

  const isStandalone = window.location.pathname === '/pdf-viewer/:pdfUrl';
  
  return (
    <div className={isStandalone ? "page-wrapper" : ""}>
      <section className="resume" id="resume">
        <div className="resume-container">
          <iframe
            src={pdfUrl}
            title="Resume"
            className="resume-frame"
          />
        </div>
      </section>
    </div>
  );
};

export default PdfViewer; 