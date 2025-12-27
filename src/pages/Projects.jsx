import React from 'react';
import Footer from '../components/Footer.tsx';
import { useWorkHoverPreview, WorkHoverPreviewStyles } from '../components/WorkHoverPreview';
import ProjectItem from '../components/ProjectItem';
import { projects, getProjectsPreviewData } from '../data/projects';
import { Highlighter } from '../components/ui/highlighter';
import { PageHeading } from '../components/ui/page-heading';
import './Home.css';

const workPreviewData = getProjectsPreviewData();

const Projects = () => {
  const { handleHoverStart, handleHoverMove, handleHoverEnd, PreviewCardComponent } = useWorkHoverPreview(workPreviewData);

  return (
    <div className="home-page">
      <WorkHoverPreviewStyles />
      
      <main className="home-main pt-10">
        <section className="selected-works-section">
          <div style={{ marginBottom: '48px' }}>
            <PageHeading firstWord="My" secondWord="Works" />
          </div>
          
          <div className="works-container">
            {projects.map((project, index) => (
              <React.Fragment key={project.id}>
                <ProjectItem
                  project={project}
                  handleHoverStart={handleHoverStart}
                  handleHoverMove={handleHoverMove}
                  handleHoverEnd={handleHoverEnd}
                />
                {index < projects.length - 1 && (
                  <div className="divider-horizontal"></div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          {PreviewCardComponent}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;

