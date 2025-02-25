import React from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/Resume.css';

const PdfViewer = () => {
    const { pdfUrl, pdfTitle } = useParams();  // Note: parameter names should match the route definition
    
    const isStandalone = window.location.pathname.includes('/pdf-viewer');
    const decodedPdfUrl = pdfUrl ? decodeURIComponent(pdfUrl) : '';
    const decodedTitle = pdfTitle ? decodeURIComponent(pdfTitle) : 'Document';

    return (
        <div className={isStandalone ? "page-wrapper" : ""}>
            <section className="resume" id="resume">
                <div className="resume-container">
                    {pdfTitle && <h2>{decodedTitle}</h2>}
                    <iframe
                        src={decodedPdfUrl}
                        title={decodedTitle}
                        className="resume-frame"
                        onError={(e) => console.error('Error loading PDF:', e)}
                    />
                </div>
            </section>
        </div>
    );
};

export default PdfViewer;