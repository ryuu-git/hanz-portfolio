import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Hanz Portfolio</h3>
            <p>Developer & Web Designer | 3rd Year Information Technology Student</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Me</h4>
            <ul>
              <li><a href="https://github.com/ryuu-git" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.facebook.com/fl.hanzzz" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="mailto:elbonhanz@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Hanz Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
