import { aboutData } from '../../store/aboutData';
import '../../styles/About.css';

const About = () => {
  const isStandalone = window.location.pathname === '/about';
  
  return (
    <div className={isStandalone ? "page-wrapper" : ""}>
      <section className="about" id="about">
        <div className="about-container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>{aboutData.description}</p>
            </div>
            <div className="about-image">
              {/* Add your profile image here */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
