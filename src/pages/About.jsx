import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  const certificates = [
    'GenAI Powered Data Analytics - Tata',
    'Probability & Statistics for ML & DS - DeepLearning.AI',
    'Machine Learning and NLP Basics - Edureka',
    'Introduction to Data Analytics - IBM',
    'Big Data with Spark and Hadoop - IBM',
    'Digital Forensics Essentials - EC-Council',
    'Machine Learning with R -Tutorialspoint',
    'Machine Learning using Python - Tutorialspoint',
    'Deep Learning - Tutorialspoint'
  ];

  return (
    <div className="about-page">
      <Header />
      
      <main className="about-main">
        <section className="about-section">
          <h3 className="section-title">About me</h3>
          <div className="about-content">
            <p className="about-text">
              I'm Dhiwin Samrich, an AI/ML Engineer who's  inspired by the Chess Knight - bold, creative, and unafraid to take the unconventional path. Guided by the motto, "I Aspire to Inspire before I Expire," I approach every project and connection with passion and purpose. When I'm not building intelligent systems, you'll find me exploring new worlds through gaming or discovering fresh perspectives while traveling. For me, life and innovation are both about curiosity, courage, and making the next move count.
            </p>
            <div className="profile-image"></div>
          </div>
        </section>

        <section className="experience-section">
          <h3 className="section-title">Experience</h3>
          <div className="experience-list">
            <div className="experience-item border-bottom">
              <div className="job-info">
                <h4 className="job-title">AI/ML Engineer</h4>
                <p className="company-name">White Mastery</p>
              </div>
              <p className="text-secondary">Jan 2025</p>
            </div>

            <div className="experience-item border-bottom">
              <div className="job-info">
                <h4 className="job-title">Machine Learning Engineer Intern</h4>
                <p className="company-name">Krutanic</p>
              </div>
              <p className="text-secondary">Jan 2025</p>
            </div>

            <div className="experience-item border-bottom">
              <div className="job-info">
                <h4 className="job-title">Data Science and Analyst Intern</h4>
                <p className="company-name">Zidio Development</p>
              </div>
              <p className="text-secondary">Aug 2024 - Nov 2024</p>
            </div>

            <div className="experience-item">
              <div className="job-info">
                <h4 className="job-title">Artificial Intelligence Intern</h4>
                <p className="company-name">NoviTech R&D Pvt Ltd</p>
              </div>
              <p className="text-secondary">Feb 2024 - Apr 2024</p>
            </div>
          </div>
        </section>

        <section className="certificates-section">
          <h3 className="section-title">Certificates</h3>
          <div className="certificates-list">
            {certificates.map((cert, index) => (
              <div key={index} className="certificate-item">
                <span className="certificate-name">{cert}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0)">
                    <path d="M4 12L12 4" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.5 4H12V10.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="16" height="16" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            ))}
          </div>
        </section>

        <section className="education-section">
          <h3 className="section-title">Education</h3>
          <div className="education-list">
            <div className="education-item border-bottom">
              <div className="degree-info">
                <h4 className="degree-title">Master of Computer Applications</h4>
                <p className="institution-name">JAIN University</p>
              </div>
              <p className="text-secondary">2023-2025</p>
            </div>

            <div className="education-item">
              <div className="degree-info">
                <h4 className="degree-title">Bachelor of Computer Applications</h4>
                <p className="institution-name">NPR College</p>
              </div>
              <p className="text-secondary">2020-2023</p>
            </div>
          </div>
        </section>

        <div className="page-title">ABOUT</div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
