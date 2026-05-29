import '../styles/Experience.css';

const experiences = [
  {
    title: 'Personal Portfolio Project',
    company: 'Self-Directed Learning',
    period: '2026',
    description: 'Built a responsive personal portfolio using React, TypeScript, and CSS. Implemented dark/light theme toggle with localStorage, React Router for navigation, and mobile-first responsive design.',
    technologies: ['React', 'TypeScript', 'CSS3', 'Vite']
  },
  {
    title: 'Personal Gallery Website',
    company: 'Self-Directed Learning',
    period: '2025 - ongoing',
    description: 'Developed a personal gallery website for me and my girlfriend to saved our memories and save it in one place. The website features a clean, responsive design and allows us to easily upload and organize our photos.',
    technologies: ['React', 'JavaScript', 'CSS3', 'LocalStorage']
  },
  {
    title: 'PARTYUP - Application for travelers',
    company: 'Self-Directed Learning',
    period: '2026 - Ongoing',
    description: 'Created a travel planning app that helps users find companions with similar interests and destinations.',
    technologies: ['React', 'API', 'JavaScript', 'CSS3']
  },
  {
    title: 'Multiple Projects',
    company: 'ICT and IT Coursework & Self-Learning',
    period: '2021 - present',
    description: 'Built various web applications including to-do lists, calculators, and expense trackers. Focused on learning fundamentals of HTML, CSS, JavaScript, and React.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Java', 'C#', 'Python']
  }
];

const education = [
  {
    title: 'Senior High School - Mobile Application and Web Development',
    institution: 'STI College',
    year: '2021 - 2023',
    details: 'Specialized in MAWD (Mobile Application and Web Development) strand'
  },
  {
    title: 'Bachelor of Science in Information Technology',
    institution: 'STI College',
    year: '2023 - Present',
    details: '3rd Year Student focusing on software development and web technologies'
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
          <h2>Experience</h2>
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
        <h2>Continuous Learning</h2>
        <div className="cert-grid">
          <div className="cert-item">
            <h4>React Fundamentals</h4>
            <p>Self-Directed Learning, 2024</p>
          </div>
          <div className="cert-item">
            <h4>Web Development Basics</h4>
            <p>STI College Coursework, 2024</p>
          </div>
          <div className="cert-item">
            <h4>Responsive Web Design</h4>
            <p>Ongoing Learning, 2024</p>
          </div>
        </div>
      </section>
    </div>
  );
}
