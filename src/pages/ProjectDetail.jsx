import React, { useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Globe, Github } from 'lucide-react';
import Footer from '../components/Footer.tsx';
import { BentoGridShowcase } from '../components/ui/bento-product-features';
import {
  IntegrationCard,
  TrackersCard,
  FocusCard,
  StatisticCard,
  ProductivityCard,
  CoreProcessCard,
} from '../components/ui/project-bento-cards';
import WheelPagination from '../components/ui/wheel-pagination';
import { getProjectById, projects } from '../data/projects';
import './Home.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);
  
  // Get current project index and total projects count
  const currentProjectIndex = projects.findIndex(p => p.id === id);
  const totalProjects = projects.length;
  
  // Handle pagination change - use useCallback to prevent infinite loops
  const handlePageChange = useCallback((page) => {
    if (page >= 0 && page < totalProjects && page !== currentProjectIndex) {
      const targetProject = projects[page];
      navigate(`/project/${targetProject.id}`);
    }
  }, [totalProjects, currentProjectIndex, navigate]);

  if (!project) {
    return (
      <div className="home-page">
        <main className="home-main">
          <div className="container mx-auto px-6 py-32 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The project you're looking for doesn't exist.
            </p>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Go Back Home
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }


  return (
    <div className="home-page">
      <main className="home-main">
        {/* Project Header */}
        <div className="container mx-auto px-6 mb-3 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              {project.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.description}
            </p>
            {(project.githubUrl && project.githubUrl !== '#') || (project.liveSiteUrl && project.liveSiteUrl !== '#') ? (
              <div className="flex items-center justify-center gap-4">
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors cursor-pointer"
                  >
                    <Github size={18} />
                    <span>GitHub Repo</span>
                  </a>
                )}
                {project.liveSiteUrl && project.liveSiteUrl !== '#' && (
                  <a
                    href={project.liveSiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
                  >
                    <Globe size={18} />
                    <span>Website Link</span>
                  </a>
                )}
              </div>
            ) : null}
          </div>
        </div>

        {/* Bento Grid Showcase */}
        <div className="container mx-auto px-6 py-16">
          <BentoGridShowcase
            integration={<IntegrationCard project={project} />}
            trackers={<TrackersCard project={project} />}
            statistic={<StatisticCard project={project} />}
            focus={<FocusCard project={project} />}
            productivity={<ProductivityCard project={project} />}
            shortcuts={<CoreProcessCard project={project} />}
          />
        </div>

        {/* Project Details Section - Only show Inspiration, Features, Challenges Faced, and Solution */}
        {project.details && (
          <div className="container mx-auto px-6 pt-4 pb-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Inspiration */}
                {project.details.inspiration && (
                  <div className="space-y-4 md:col-span-2">
                    <h2 className="text-2xl font-semibold text-foreground">
                      Inspiration
                    </h2>
                    <p className="text-muted-foreground">
                      {project.details.inspiration}
                    </p>
                  </div>
                )}

                {/* Features */}
                {project.details.features && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">
                      Features
                    </h2>
                    <ul className="space-y-2">
                      {project.details.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges Faced */}
                {project.details.difficulties && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">
                      Challenges Faced
                    </h2>
                    <ul className="space-y-2">
                      {project.details.difficulties.map((difficulty, index) => (
                        <li
                          key={index}
                          className="text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">▹</span>
                          <span>{difficulty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Solution */}
                {project.details.solution && (
                  <div className="space-y-4 md:col-span-2">
                    <h2 className="text-2xl font-semibold text-foreground">
                      Solution
                    </h2>
                    <p className="text-muted-foreground">
                      {project.details.solution}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Pagination */}
        {currentProjectIndex >= 0 && (
          <div className="container mx-auto px-6 py-8 flex justify-center">
            <WheelPagination
              totalPages={totalProjects}
              visibleCount={5}
              initialPage={currentProjectIndex}
              onChange={handlePageChange}
            />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
