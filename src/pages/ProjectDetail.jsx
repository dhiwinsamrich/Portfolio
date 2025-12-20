import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Globe, Github } from 'lucide-react';
import Footer from '../components/Footer.tsx';
import CaseStudies from '../components/ui/case-studies';
import { getProjectById } from '../data/projects';
import './Home.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);

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

  // Transform project data into case study format
  const caseStudy = {
    id: 1,
    quote: project.description,
    name: project.name,
    role: 'Project',
    image: project.previewImage,
    icon: Globe,
    metrics: project.details
      ? [
          {
            value: `${project.details.features?.length || 0}`,
            label: 'Features',
            sub: 'Key features implemented',
          },
          {
            value: `${project.details.techStack?.length || 0}`,
            label: 'Technologies',
            sub: 'Tech stack used',
          },
        ]
      : [],
  };

  // Create additional case studies from project details if available
  const caseStudies = project.details
    ? [
        caseStudy,
        // Add a second case study with project details
        {
          id: 2,
          quote: project.details.inspiration || project.description,
          name: project.name,
          role: 'Development Journey',
          image: project.previewImage,
          icon: Github,
          metrics: [
            {
              value: project.details.timeline?.split(' ')[0] || 'N/A',
              label: 'Timeline',
              sub: project.details.timeline?.split('-')[1]?.trim() || 'Development period',
            },
            {
              value: `${project.details.difficulties?.length || 0}`,
              label: 'Challenges',
              sub: 'Overcome during development',
            },
          ],
        },
      ]
    : [caseStudy];

  return (
    <div className="home-page">
      <main className="home-main">
        {/* Back Button */}
        <div className="container mx-auto px-6 pt-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
        </div>

        {/* Project Header */}
        <div className="container mx-auto px-6 mb-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              {project.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.description}
            </p>
            <div className="flex items-center gap-4">
              {project.liveSiteUrl && project.liveSiteUrl !== '#' && (
                <a
                  href={project.liveSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Globe size={18} />
                  <span>Live Site</span>
                </a>
              )}
              {project.githubUrl && project.githubUrl !== '#' && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Case Studies Component */}
        <CaseStudies
          caseStudies={caseStudies}
        />

        {/* Project Details Section */}
        {project.details && (
          <div className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
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

                {/* Tech Stack */}
                {project.details.techStack && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">
                      Tech Stack
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {project.details.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-accent rounded-md text-sm text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

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

                {/* Timeline */}
                {project.details.timeline && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">
                      Timeline
                    </h2>
                    <p className="text-muted-foreground">
                      {project.details.timeline}
                    </p>
                  </div>
                )}

                {/* Difficulties */}
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
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
