import '../styles/Experience.css';

const experiences = [
  {
    title: 'Senior React Developer',
    company: 'Tech Company Inc.',
    period: '2022 - Present',
    description: 'Led development of multiple React applications, mentored junior developers, and improved app performance by 40%.',
    technologies: ['React', 'TypeScript', 'Redux', 'Node.js']
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description: 'Developed full-stack web applications, managed databases, and collaborated with cross-functional teams.',
    technologies: ['React', 'Express', 'MongoDB', 'AWS']
  },
  {
    title: 'Junior Web Developer',
    company: 'Web Design Studio',
    period: '2019 - 2020',
    description: 'Built responsive websites, fixed bugs, and learned best practices in web development.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    title: 'Intern',
    company: 'Startup Hub',
    period: '2018 - 2019',
    description: 'Assisted in web development projects, learned version control with Git, and contributed to team projects.',
    technologies: ['JavaScript', 'Bootstrap', 'Git']
  }
];

const education = [
  {
    title: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    year: '2018',
    details: 'Relevant coursework: Web Development, Database Management, Software Engineering'
  },
  {
    title: 'Full Stack Web Development Bootcamp',
    institution: 'Coding Bootcamp',
    year: '2019',
    details: 'Intensive program covering React, Node.js, and modern web technologies'
  }
];

export default function Experience() {
  return (
    <div className="experience">
      <section className="experience-hero">
        <h1>Experience & Education</h1>
        <p className="subtitle">My professional journey</p>
      </section>

      <section className="experience-container">
        <div className="experience-section">
          <h2>Work Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                  <p className="period">{exp.period}</p>
                  <p className="description">{exp.description}</p>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="education-section">
          <h2>Education</h2>
          <div className="education-list">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <h3>{edu.title}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="year">{edu.year}</p>
                <p className="details">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <div className="cert-grid">
          <div className="cert-item">
            <h4>React Advanced Patterns</h4>
            <p>Coursera, 2023</p>
          </div>
          <div className="cert-item">
            <h4>Web Development Specialist</h4>
            <p>Google Digital Garage, 2022</p>
          </div>
          <div className="cert-item">
            <h4>AWS Solutions Architect</h4>
            <p>Amazon Web Services, 2022</p>
          </div>
        </div>
      </section>
    </div>
  );
}
