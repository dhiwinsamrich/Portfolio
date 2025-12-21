import React from 'react';
import Footer from '../components/Footer.tsx';
import { ContributionGraph } from '../components/ui/contribution-graph';
import { useGitHubContributions } from '../hooks/useGitHubContributions';
import { experiences } from '../data/experience';
import { education } from '../data/education';
import { WorkExperience } from '../components/ui/work-experience';
import { Education } from '../components/ui/education';
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

  const workExperienceData = React.useMemo(() => {
    const logoFallbacks = [
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=64&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=64&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=64&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=64&auto=format&fit=crop",
    ];

    return (Array.isArray(experiences) ? experiences : []).map((exp, idx) => ({
      id: exp.id,
      companyName: exp.company,
      companyLogo: logoFallbacks[idx % logoFallbacks.length],
      isCurrentEmployer: idx === 0,
      positions: [
        {
          id: `${exp.id}-position`,
          title: exp.title,
          employmentPeriod: exp.period,
          employmentType: exp.type,
          icon: "code",
          description: Array.isArray(exp.descriptions)
            ? exp.descriptions.map((d) => `♞ ${d}`).join("\n")
            : undefined,
          skills: Array.isArray(exp.skills) ? exp.skills : [],
          projectsInvolved: Array.isArray(exp.projectsInvolved) ? exp.projectsInvolved : [],
          isExpanded: idx === 0,
        },
      ],
    }));
  }, []);

  const educationData = React.useMemo(() => {
    return (Array.isArray(education) ? education : []).map((edu, idx) => ({
      id: edu.id,
      degree: edu.degree,
      institution: edu.institution,
      period: edu.period,
      cgpa: edu.cgpa,
      description: edu.description,
      achievement: edu.achievement,
      specialization: edu.specialization,
      isExpanded: idx === 0,
    }));
  }, []);

  return (
    <div className="about-page pt-5">
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
          <h3 className="section-title">Work Experience</h3>
          <div className="experience-content">
            {/* <p className="experience-description">My journey through various internships and roles in AI/ML and Data Science.</p> */}
            <WorkExperience className="w-full rounded-lg border" experiences={workExperienceData} />
          </div>
        </section>

        <section className="certificates-section">
          <h3 className="section-title">Certificates</h3>
          <div className="certificates-list">
            {certificates.map((cert) => (
              <div key={cert} className="certificate-item">
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
          <div className="education-content">
            <Education className="w-full rounded-lg border" education={educationData} />
          </div>
        </section>

        <section className="contributions-section">
          <h3 className="section-title">GitHub Contributions</h3>
          <div className="contributions-content">
            {contributionsLoading && (
              <div className="contributions-loading">Loading contributions...</div>
            )}

            {!contributionsLoading && contributionsError && (
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
            )}

            {!contributionsLoading && !contributionsError && (
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