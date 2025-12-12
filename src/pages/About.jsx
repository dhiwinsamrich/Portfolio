import React from 'react';
import Footer from '../components/Footer.tsx';
import { ContributionGraph } from '../components/ui/contribution-graph';
import { Timeline } from '../components/ui/timeline';
import { useGitHubContributions } from '../hooks/useGitHubContributions';
import { getTimelineData } from '../data/experience';
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

  const { data: contributionData, loading: contributionsLoading, error: contributionsError } = useGitHubContributions('dhiwinsamrich');

  // Get experience timeline data from centralized data file and format for Timeline component
  const experienceData = getTimelineData();
  const experienceTimeline = experienceData.map((exp) => ({
    title: exp.period,
    content: (
      <div className="space-y-3">
        <div className="space-y-2">
          <h4 className="text-xl font-semibold text-foreground">
            {exp.title}
          </h4>
          <p className="text-muted-foreground">
            {exp.company}
          </p>
          {exp.type && (
            <span className="inline-block px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded">
              {exp.type}
            </span>
          )}
        </div>
        {exp.descriptions && exp.descriptions.length > 0 && (
          <ul className="space-y-2 mt-4">
            {exp.descriptions.map((desc, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    ),
  }));

  return (
    <div className="about-page">
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
          <h3 className="section-title">Internship Experience</h3>
          <div className="experience-content">
            <p className="experience-description">My journey through various internships and roles in AI/ML and Data Science.</p>
            <Timeline 
              data={experienceTimeline}
            />
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

        <section className="contributions-section">
          <h3 className="section-title">GitHub Contributions</h3>
          <div className="contributions-content">
            {contributionsLoading ? (
              <div className="contributions-loading">Loading contributions...</div>
            ) : contributionsError ? (
              <div className="contributions-error">
                <p className="text-muted-foreground mb-2">Unable to load GitHub contributions:</p>
                <p className="text-sm text-muted-foreground">{contributionsError}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Please check:
                  <br />• Your GitHub username is correct: <strong>dhiwinsamrich</strong>
                  <br />• Your GitHub profile is public
                  <br />• Check browser console for more details
                </p>
              </div>
            ) : (
              <ContributionGraph
                data={contributionData}
                year={new Date().getFullYear()}
                showLegend={true}
                showTooltips={true}
              />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;