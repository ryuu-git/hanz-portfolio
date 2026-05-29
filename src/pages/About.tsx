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
            I'm Hanz, a 3rd year ICT student at STI College (MAWD strand). I'm passionate about web development 
            and creating clean, user-friendly interfaces. I enjoy solving problems through code and learning new 
            technologies.
          </p>
          <p>
            My focus is on front-end development with React and JavaScript, while continuously expanding my knowledge 
            in full-stack development. I'm eager to apply what I've learned in real-world projects and grow as a developer 
            through internship and professional experience.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat">
            <h3>3</h3>
            <p>Years in ICT</p>
          </div>
          <div className="stat">
            <h3>10+</h3>
            <p>Projects Built</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Committed</p>
          </div>
        </div>
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>
        <div className="skills-columns">
          <div className="skill-column">
            <h3>Strong</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (Intermediate)</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="skill-column">
            <h3>Learning</h3>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>React Router</li>
              <li>API Integration</li>
            </ul>
          </div>
          <div className="skill-column">
            <h3>Familiar</h3>
            <ul>
              <li>Java</li>
              <li>C#</li>
              <li>C++</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
