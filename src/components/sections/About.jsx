import { aboutData } from '../../store/aboutData';
import '../../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{aboutData.description}</p>
            {/* <div className="contact-info">
              <p>Email: {aboutData.contact.email}</p>
              <p>Phone: {aboutData.contact.phone}</p>
              <p>LinkedIn: {aboutData.contact.linkedin}</p>
            </div> */}
          </div>
          <div className="about-image">
            {/* Add your profile image here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
