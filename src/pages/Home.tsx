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
            Full Stack Developer | Web Designer | Problem Solver
          </p>
          <p className="hero-description">
            I build beautiful, responsive, and user-friendly web applications using modern technologies.
            Let's create something amazing together!
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
        <h2>What I Do</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">⚛️</div>
            <h3>React Development</h3>
            <p>Building interactive UIs with React, Hooks, and state management</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>Creating beautiful and responsive designs that users love</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">⚙️</div>
            <h3>Backend Development</h3>
            <p>Developing robust APIs and server-side solutions</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">📱</div>
            <h3>Responsive Web</h3>
            <p>Mobile-first approach ensuring apps work on all devices</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to start your project?</h2>
        <p>I'm always interested in hearing about new projects and opportunities.</p>
        <Link to="/contact" className="btn btn-primary btn-lg">
          Let's Talk
        </Link>
      </section>
    </div>
  );
}
