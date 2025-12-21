import React from 'react';
import Footer from '../components/Footer.tsx';
import { experiences } from '../data/experience';
import { WorkExperience } from '../components/ui/work-experience';
import './Career.css';

const Career = () => {
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

  return (
    <div className="career-page pt-5">
      <main className="career-main">
        <section className="career-header-section">
          <h1 className="career-title">Career Journey</h1>
          <p className="career-subtitle">
            A detailed look at my professional experiences, achievements, and growth in AI/ML engineering.
          </p>
        </section>

        <section className="career-experience-section">
          <h3 className="section-title">Work Experience</h3>
          <div className="career-experience-content">
            <WorkExperience className="w-full rounded-lg border" experiences={workExperienceData} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Career;

