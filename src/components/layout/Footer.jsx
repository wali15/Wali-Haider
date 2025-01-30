import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';
import { heroData } from '../../store/heroData';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show scroll-to-top button when page is scrolled
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

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Me</h3>
            <p>{heroData.description}</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/#about">About</Link></li>
              <li><Link to="/#skills">Skills</Link></li>
              <li><Link to="/#projects">Projects</Link></li>
              <li><Link to="/#experience">Experience</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="footer-links">
              <li><a href="mailto:walihaider4699@gmail.com">walihaider4699@gmail.com</a></li>
              <li><a href="tel:+923467002245">+92 346 7002245</a></li>
            </ul>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/wali-haider4699" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Wali Haider. All rights reserved.</p>
        </div>
      </div>

      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </footer>
  );
};

export default Footer;
