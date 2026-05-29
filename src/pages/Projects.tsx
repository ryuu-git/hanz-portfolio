import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, shopping cart, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://example-ecommerce.com',
    github: 'https://github.com/yourusername/ecommerce'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team collaboration features.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    link: 'https://example-tasks.com',
    github: 'https://github.com/yourusername/task-app'
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather information dashboard with location-based forecasts and interactive maps.',
    technologies: ['React', 'API', 'Chart.js', 'Geolocation'],
    link: 'https://example-weather.com',
    github: 'https://github.com/yourusername/weather-app'
  },
  {
    title: 'Blog Platform',
    description: 'Full-featured blogging platform with markdown support, comments, and social sharing.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
    link: 'https://example-blog.com',
    github: 'https://github.com/yourusername/blog-app'
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive personal portfolio website showcasing projects and skills.',
    technologies: ['React', 'Vite', 'CSS3', 'TypeScript'],
    link: 'https://example-portfolio.com',
    github: 'https://github.com/yourusername/portfolio'
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat application with user authentication and message history.',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
    link: 'https://example-chat.com',
    github: 'https://github.com/yourusername/chat-app'
  }
];

export default function Projects() {
  return (
    <div className="projects">
      <section className="projects-hero">
        <h1>My Projects</h1>
        <p className="subtitle">Showcase of my recent work</p>
      </section>

      <section className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section className="more-projects">
        <h2>Want to see more?</h2>
        <p>Check out my GitHub profile for more projects and contributions.</p>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Visit My GitHub
        </a>
      </section>
    </div>
  );
}
