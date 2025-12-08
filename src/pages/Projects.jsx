import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.tsx';
import { useWorkHoverPreview, WorkHoverPreviewStyles } from '../components/WorkHoverPreview';
import { ProjectDetailsModal } from '../components/ProjectDetailsModal';
import ProjectItem from '../components/ProjectItem';
import { projects, getProjectsPreviewData, getProjectDetails as getProjectDetailsData } from '../data/projects';
import './Home.css';

const workPreviewData = getProjectsPreviewData();
const projectDetails = getProjectDetailsData();

const Projects = () => {
  const { handleHoverStart, handleHoverMove, handleHoverEnd, PreviewCardComponent } = useWorkHoverPreview(workPreviewData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExploreClick = (projectKey) => {
    setSelectedProject(projectKey);
    setIsModalOpen(true);
  };

  const getProjectDetails = () => {
    if (!selectedProject) return null;
    return projectDetails[selectedProject] || null;
  };

  return (
    <div className="home-page">
      <WorkHoverPreviewStyles />
      <Header />
      
      <main className="home-main">
        <section className="selected-works-section">
          <h3 className="section-title">ALL PROJECTS</h3>
          
          <div className="works-container">
            {projects.map((project, index) => (
              <React.Fragment key={project.id}>
                <ProjectItem
                  project={project}
                  handleHoverStart={handleHoverStart}
                  handleHoverMove={handleHoverMove}
                  handleHoverEnd={handleHoverEnd}
                  handleExploreClick={handleExploreClick}
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
      
      <ProjectDetailsModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        project={getProjectDetails()}
      />
    </div>
  );
};

export default Projects;

