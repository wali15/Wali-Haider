import { Link } from 'react-router-dom';
import { heroData } from '../../store/heroData';
import '../../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <h1>Hi, I'm <span className="highlight">{heroData.name}</span></h1>
        <h2>{heroData.title}</h2>
        <p>{heroData.description}</p>
        <div className="cta-buttons">
          <Link to="/resume" className="primary-btn">VIEW MY RESUME</Link>
          <Link to="/contact" className="secondary-btn">Contact Me</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
