import { experienceData } from '../../store/experienceData';
import '../../styles/Experience.css';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2>Work Experience</h2>
        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="period">{exp.period}</p>
              <ul>
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
