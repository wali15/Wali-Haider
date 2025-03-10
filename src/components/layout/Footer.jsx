import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Footer.css';
import { heroData } from '../../store/heroData';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Me</h3>
            <p>{heroData.description}</p>
            <div className="footer-buttons">
              <Link to="/contact" className="modern-button primary" onClick={handleLinkClick}>
                Contact Me
              </Link>
              <Link to="/resume" className="modern-button secondary" onClick={handleLinkClick}>
                Resume
              </Link>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {/* <li><Link to="/about" onClick={handleLinkClick}>About</Link></li> */}
              <li><Link to="/skills" onClick={handleLinkClick}>Skills</Link></li>
              <li><Link to="/projects" onClick={handleLinkClick}>Projects</Link></li>
              <li><Link to="/experience" onClick={handleLinkClick}>Experience</Link></li>
              <li><Link to="/certifications" onClick={handleLinkClick}>Certifications</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-details">
              <p><strong>Email:</strong> walihaiderofficial@outlook.com</p>
              <p><strong>Phone:</strong> +92 325 7262793</p>
              <div className="social-buttons">
                <a 
                  href="https://github.com/wali15" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-button github"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/wali-haider-6497a5251/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-button linkedin"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://www.instagram.com/wali.dev_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-button instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {heroData.name}. All rights reserved.</p>
        </div>
      </div>
      
      {isVisible && (
        <button 
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
