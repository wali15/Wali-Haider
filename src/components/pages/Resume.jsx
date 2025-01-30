import { useState } from 'react';
import '../../styles/Resume.css';

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="resume-page">
      <div className="resume-container">
        {isLoading && (
          <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
            <p>Loading Resume...</p>
          </div>
        )}
        <div className="pdf-wrapper">
          <iframe
            src="https://drive.google.com/file/d/1Z8G9xFimZTi4o3SiKBs-f5wzm71kVVOi/preview?usp=drivesdk"
            title="Resume"
            className="pdf-viewer"
            frameBorder="0"
            onLoad={handleLoad}
          />
        </div>
      </div>
    </div>
  );
};

export default Resume; 