import '../styles/Projects.css';

const projects = [
  {
    title: 'Task Management App',
    description: 'A React-based task management app where users can create, edit, and track their daily tasks with an intuitive interface.',
    technologies: ['React', 'JavaScript', 'CSS3', 'LocalStorage'],
    link: null,
    github: 'https://github.com/ryuu-git'
  },
  {
    title: 'Weather App',
    description: 'A weather application that fetches real-time data from an API and displays current conditions and forecasts.',
    technologies: ['React', 'API', 'JavaScript', 'CSS3'],
    link: null,
    github: 'https://github.com/ryuu-git'
  },
  {
    title: 'Personal Portfolio',
    description: 'A fully responsive portfolio website built with React and TypeScript, featuring dark/light theme support.',
    technologies: ['React', 'TypeScript', 'CSS3', 'Vite'],
    link: null,
    github: 'https://github.com/ryuu-git/hanz-portfolio'
  },
  {
    title: 'To-Do List Application',
    description: 'A simple but effective to-do list with add, delete, and mark-complete functionality with local storage.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
    link: null,
    github: 'https://github.com/ryuu-git'
  },
  {
    title: 'Calculator App',
    description: 'A functional calculator application built with React supporting basic arithmetic operations.',
    technologies: ['React', 'JavaScript', 'CSS3'],
    link: null,
    github: 'https://github.com/ryuu-git'
  },
  {
    title: 'Expense Tracker',
    description: 'An expense tracking application to help manage and visualize personal spending with category organization.',
    technologies: ['React', 'JavaScript', 'CSS3', 'LocalStorage'],
    link: null,
    github: 'https://github.com/ryuu-git'
  }
];

export default function Projects() {
  return (
    <div className="projects">
      <section className="projects-hero">
        <h1>Hanz Portfolio</h1>
        <p className="subtitle">My Recent Projects & Learning</p>
      </section>

      <section className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Live</a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Code</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="more-projects">
        <h2>Explore More on GitHub</h2>
        <p>Check out my GitHub profile for more projects and contributions.</p>
        <a href="https://github.com/ryuu-git" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Visit My GitHub
        </a>
      </section>
    </div>
  );
}
