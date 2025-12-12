import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.tsx';
import { HeroSection03 } from '../components/ui/hero-03';
import { LogoCloud, LogoCloud4 } from '../components/ui';
import { useWorkHoverPreview, WorkHoverPreviewStyles } from '../components/WorkHoverPreview';
import { ProjectDetailsModal } from '../components/ProjectDetailsModal';
import ProjectItem from '../components/ProjectItem';
import { projects, getProjectsPreviewData, getProjectDetails as getProjectDetailsData } from '../data/projects';
import './Home.css';

const products = [
  {
    title: "Justicia - Legal AI",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1280&auto=format&fit=crop",
  },
  {
    title: "Chess Game - RL",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1280&auto=format&fit=crop",
  },
  {
    title: "RAG System",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1280&auto=format&fit=crop",
  },
  {
    title: "Hand Sign Recognition",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1280&auto=format&fit=crop",
  },
  {
    title: "AI/ML Projects",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1280&auto=format&fit=crop",
  },
  {
    title: "Deep Learning Models",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1280&auto=format&fit=crop",
  },
  {
    title: "Neural Networks",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=1280&auto=format&fit=crop",
  },
  {
    title: "Data Science",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1280&auto=format&fit=crop",
  },
  {
    title: "Machine Learning",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1280&auto=format&fit=crop",
  },
  {
    title: "Computer Vision",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1280&auto=format&fit=crop",
  },
  {
    title: "Natural Language Processing",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1280&auto=format&fit=crop",
  },
  {
    title: "Reinforcement Learning",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1280&auto=format&fit=crop",
  },
  {
    title: "AI Research",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1280&auto=format&fit=crop",
  },
  {
    title: "Tech Innovation",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1280&auto=format&fit=crop",
  },
  {
    title: "Software Development",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1280&auto=format&fit=crop",
  },
];

const toolsLogos = [
  {
    src: "https://svgl.app/library/github_wordmark_light.svg",
    alt: "GitHub",
  },
  {
    src: "https://svgl.app/library/docker-wordmark-light.svg",
    alt: "Docker",
  },
  {
    src: "https://svgl.app/library/supabase_wordmark_light.svg",
    alt: "Supabase",
  },
  {
    src: "https://svgl.app/library/figma-wordmark-light.svg",
    alt: "Figma",
  },
  {
    src: "https://svgl.app/library/azure-wordmark-light.svg",
    alt: "Azure",
  },
  {
    src: "https://svgl.app/library/aws-wordmark-light.svg",
    alt: "AWS",
  },
  {
    src: "https://svgl.app/library/hugging-face-wordmark-light.svg",
    alt: "Hugging Face",
  },
  {
    src: "https://svgl.app/library/kaggle-wordmark-light.svg",
    alt: "Kaggle",
  },
  {
    src: "https://svgl.app/library/git-wordmark-light.svg",
    alt: "Git",
  },
  {
    src: "https://svgl.app/library/microsoft-wordmark-light.svg",
    alt: "Power BI",
  },
  {
    src: "https://svgl.app/library/microsoft-wordmark-light.svg",
    alt: "Microsoft Workbench",
  },
  {
    src: "https://svgl.app/library/microsoft-wordmark-light.svg",
    alt: "Power Automate",
  },
  {
    src: "https://svgl.app/library/n8n-wordmark-light.svg",
    alt: "n8n",
  },
  {
    src: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=400&auto=format&fit=crop",
    alt: "LM Studio",
  },
];

// Get preview data and project details from centralized data
const workPreviewData = getProjectsPreviewData();
const projectDetails = getProjectDetailsData();

// Show only top 5 projects on home page
const displayedProjects = projects.slice(0, 5);

const Home = () => {
  const { handleHoverStart, handleHoverMove, handleHoverEnd, PreviewCardComponent } = useWorkHoverPreview(workPreviewData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12;
      const displayMinutes = minutes.toString().padStart(2, '0');
      setCurrentTime(`${displayHours}:${displayMinutes} ${ampm}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      
      <HeroSection03 />
      
      <main className="home-main">

        <section className="selected-works-section">
          <h3 className="section-title">SELECTED WORKS</h3>
          
          <div className="works-container">
            {displayedProjects.map((project, index) => (
              <React.Fragment key={project.id}>
                <ProjectItem
                  project={project}
                  handleHoverStart={handleHoverStart}
                  handleHoverMove={handleHoverMove}
                  handleHoverEnd={handleHoverEnd}
                  handleExploreClick={handleExploreClick}
                />
                {index < displayedProjects.length - 1 && (
                  <div className="divider-horizontal"></div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          {projects.length > 5 && (
            <div className="view-more-container">
              <Link to="/projects" className="view-more-button">
                View More
              </Link>
            </div>
          )}
          
          {PreviewCardComponent}
        </section>

        <section className="achievements-section">
          <h3 className="section-title">ACHIVEMENTS</h3>
          
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-rank">1st</div>
              <div className="achievement-details">
                <h4 className="achievement-title">UNIVERSITY GOLD MEDALIST</h4>
                <p className="achievement-subtitle">Madurai Kamaraj University - 2023</p>
              </div>
            </div>

            <div className="achievement-card">
              <div className="achievement-rank">2nd</div>
              <div className="achievement-details">
                <h4 className="achievement-title">Make-A-Thon</h4>
                <p className="achievement-subtitle">2nd Position in 24 Hours Make-A-Thon</p>
              </div>
            </div>

            <div className="achievement-card">
              <div className="achievement-rank">99.4</div>
              <div className="achievement-details">
                <h4 className="achievement-title">TANCET EXAM</h4>
                <p className="achievement-subtitle">99.4 Percentile - 2023</p>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <h3 className="section-title mb-6 text-center typography-statement text-foreground">
            Technologies I{" "}
            <span className="typography-statement-serif text-primary">work</span> with.
          </h3>
          <div className="w-full">
            <LogoCloud />
          </div>
        </section>

        <section className="tools-section">
          <div className="w-full">
            <h2 className="mb-5 text-center">
              <span className="block typography-statement text-foreground">
                Tools I <span className="typography-statement-serif text-primary">Use</span>
              </span>
            </h2>
            <LogoCloud4 logos={toolsLogos} />
          </div>
        </section>

      </main>
      
      <Footer currentTime={currentTime} scrollToTop={scrollToTop} />
      
      <ProjectDetailsModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        project={getProjectDetails()}
      />
    </div>
  );
};

export default Home;
