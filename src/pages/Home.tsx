import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Hanz</span>
          </h1>
          <p className="hero-subtitle">
            Developer & Web Designer | 3rd Year ICT Student
          </p>
          <p className="hero-description">
            I create clean, responsive websites using HTML, CSS, JavaScript, and React. 
            Currently learning full-stack development with a focus on front-end technologies.
          </p>
          <div className="hero-buttons">
            <Link to="/experience" className="btn btn-primary btn-lg">
              My Experience
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar">👨‍💻</div>
        </div>
      </section>

      <section className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">💻</div>
            <h3>Frontend Development</h3>
            <p>HTML5, CSS3, JavaScript, React with responsive design</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">⚛️</div>
            <h3>React & TypeScript</h3>
            <p>Building interactive components with modern React patterns</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🎨</div>
            <h3>UI Design</h3>
            <p>Creating clean, user-friendly interfaces with focus on usability</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Mobile-first approach ensuring great experience on all devices</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Let's Connect</h2>
        <p>I'm open to internship opportunities and collaborations. Feel free to reach out!</p>
        <Link to="/contact" className="btn btn-primary btn-lg">
          Contact Me
        </Link>
      </section>
    </div>
  );
}
