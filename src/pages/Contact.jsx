import React from 'react';
import Footer from '../components/Footer.tsx';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <main className="contact-main">
        <section className="contact-section">
          <h3 className="section-title">Get in Touch</h3>
          <div className="contact-content">
            <p className="contact-text">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>
        </section>

        <section className="contact-info-section">
          <h3 className="section-title">Contact Information</h3>
          <div className="contact-info-list">
            <div className="contact-info-item border-bottom">
              <div className="contact-info-details">
                <h4 className="contact-info-label">Email</h4>
                <a href="mailto:contact@dhiwin.com" className="contact-info-value">contact@dhiwin.com</a>
              </div>
            </div>

            <div className="contact-info-item border-bottom">
              <div className="contact-info-details">
                <h4 className="contact-info-label">LinkedIn</h4>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-info-value">linkedin.com/in/dhiwin</a>
              </div>
            </div>

            <div className="contact-info-item border-bottom">
              <div className="contact-info-details">
                <h4 className="contact-info-label">GitHub</h4>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-info-value">github.com/dhiwin</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-details">
                <h4 className="contact-info-label">Instagram</h4>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-info-value">@dhiwin</a>
              </div>
            </div>
          </div>
        </section>

        <section className="availability-section">
          <h3 className="section-title">Availability</h3>
          <div className="availability-content">
            <p className="availability-text">
              I'm currently available for freelance projects and open to full-time opportunities. If you have a project in mind or want to collaborate, let's connect!
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
