import '../styles/About.css';

export default function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About Me</h1>
        <p className="subtitle">Get to know me better</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Who Am I?</h2>
          <p>
            I'm a passionate Full Stack Developer with a love for creating beautiful and functional web applications.
            With expertise in React, JavaScript, TypeScript, and modern web technologies, I help businesses
            and entrepreneurs bring their ideas to life.
          </p>
          <p>
            My journey in web development started with curiosity and has evolved into a career dedicated to
            solving complex problems and creating user-centric solutions. I believe in writing clean, maintainable
            code and staying updated with the latest industry trends.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat">
            <h3>5+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>30+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </section>

      <section className="skills">
        <h2>My Skills</h2>
        <div className="skills-columns">
          <div className="skill-column">
            <h3>Frontend</h3>
            <ul>
              <li>React & React Router</li>
              <li>TypeScript</li>
              <li>HTML5 & CSS3</li>
              <li>JavaScript ES6+</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="skill-column">
            <h3>Backend</h3>
            <ul>
              <li>Node.js & Express</li>
              <li>MongoDB & Firebase</li>
              <li>RESTful APIs</li>
              <li>Authentication</li>
              <li>PostgreSQL</li>
              <li>Serverless Functions</li>
            </ul>
          </div>
          <div className="skill-column">
            <h3>Tools & Others</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Vite & Webpack</li>
              <li>Testing (Jest)</li>
              <li>Figma</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
