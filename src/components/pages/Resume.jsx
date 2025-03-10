import { useState } from 'react';
import '../../styles/Resume.css';

const Resume = () => {
  const isStandalone = window.location.pathname === '/resume';
  
  return (
    <div className={isStandalone ? "page-wrapper" : ""}>
      <section className="resume" id="resume">
        <div className="resume-container">
          <iframe
            src="/SyedWaliHaider(resume).pdf"
            title="Resume"
            className="resume-frame"
          />
        </div>
      </section>
    </div>
  );
};

export default Resume; 