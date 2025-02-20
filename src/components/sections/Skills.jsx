import { skillsData } from '../../store/skillsData.jsx';
import '../../styles/Skills.css';

const Skills = () => {
  const isStandalone = window.location.pathname === '/skills';
  
  return (
    <div className={isStandalone ? "page-wrapper" : ""}>
      <section className="skills" id="skills">
        <div className="skills-container">
          <h2>Skills & Expertise</h2>
          <div className="skills-grid">
            {skillsData.map((skillCategory, index) => (
              <div key={index} className="skill-category">
                <h3>{skillCategory.category}</h3>
                <div className="skill-items">
                  {skillCategory.items.map((skill, i) => (
                    <div key={i} className="skill-item">
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
