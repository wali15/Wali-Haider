import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from 'react-icons/md';
import { experienceData } from '../../store/experienceData';
import '../../styles/Experience.css';

const Experience = () => {
  const isStandalone = window.location.pathname === '/experience';
  
  return (
    <div style={{marginTop:"3rem"}}className={isStandalone ? "page-wrapper" : ""}>
      <section className="experience" id="experience">
        <div className="experience-container">
          <h2>Work Experience</h2>
          <VerticalTimeline>
            {experienceData.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element"
                contentStyle={{ 
                  background: 'var(--card-bg)', 
                  color: 'var(--text-color)', 
                  border: '1px solid var(--border-color)' 
                }}
                contentArrowStyle={{ borderRight: '7px solid var(--card-bg)' }}
                date={experience.period}
                iconStyle={{ background: 'var(--primary-color)', color: '#fff' }}
                icon={<MdWork />}
              >
                <h3 className="vertical-timeline-element-title">{experience.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
                <div className="responsibilities">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <p key={idx} className="responsibility-item">
                      {responsibility}
                    </p>
                  ))}
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>
    </div>
  );
};

export default Experience;
