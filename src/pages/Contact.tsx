import { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p className="subtitle">Let's discuss your project</p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-item">
            <h3>Email</h3>
            <p><a href="mailto:elbonhanz@gmail.com">elbonhanz@gmail.com</a></p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p><a href="tel:+639091702252">+63 909 170 2252</a></p>
          </div>
          <div className="info-item">
            <h3>Location</h3>
            <p>Bulacan, Philippines</p>
          </div>
          <div className="info-item">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a href="https://github.com/ryuu-git" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.facebook.com/fl.hanzzz" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Me a Message</h2>
          
          {submitted && (
            <div className="success-message">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Project Subject"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              rows={6}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-lg">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
