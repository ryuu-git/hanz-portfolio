import '../styles/ProjectCard.css';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  link, 
  github 
}: ProjectCardProps) {
  return (
    <div className="project-card">
      {image && (
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="project-content">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-links">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View Live
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
