import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.tsx';
import { HeroSection03 } from '../components/ui/hero-03';
import { LogoCloud, LogoCloud4 } from '../components/ui';
import { WavePath } from '../components/ui/wave-path';
import { CleanTestimonial } from '../components/ui/clean-testimonial';
import { useWorkHoverPreview, WorkHoverPreviewStyles } from '../components/WorkHoverPreview';
import ProjectItem from '../components/ProjectItem';
import { projects, getProjectsPreviewData } from '../data/projects';
import { experiences } from '../data/experience';
import { homepageCurrentWork } from '../data/homepage-current-work';
import BadgeButtonCombo from '../components/ui/badge-button-combo';
import { ProductHighlightCard } from '../components/ui/product-card';
import { LocationTag } from '../components/ui/location-tag';
import { LiquidButton } from '../components/ui/liquid-glass-button';
import { Trophy, Target, GraduationCap, Award, BookOpen, Users, ArrowUp, ArrowDown } from 'lucide-react';
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
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
    alt: "GitHub",
  },
  {
    src: "/ToolsIuse/docker.svg",
    alt: "Docker",
    height: 20,
    width: 80,
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original-wordmark.svg",
    alt: "Supabase",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    alt: "Figma",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg",
    alt: "Azure",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    alt: "AWS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
    alt: "Git",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/powerbi.svg",
    alt: "Power BI",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg",
    alt: "Microsoft SQL Server",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/microsoftpowerautomate.svg",
    alt: "Power Automate",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/n8n.svg",
    alt: "n8n",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/kaggle.svg",
    alt: "Kaggle",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/huggingface.svg",
    alt: "Hugging Face",
  },
];

// Get preview data from centralized data
const workPreviewData = getProjectsPreviewData();

// Show only top 5 projects on home page
const displayedProjects = projects.slice(0, 5);

// Parse date string (e.g., "Aug 2025")
const parseDate = (dateStr) => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const parts = dateStr.split(' ');
  const month = monthNames.indexOf(parts[0]);
  const year = Number.parseInt(parts[1], 10);
  
  if (Number.isNaN(year) || month === -1) return null;
  return new Date(year, month, 1);
};

// Format duration string
const formatDuration = (years, months) => {
  const yearText = years === 1 ? 'year' : 'years';
  const monthText = months === 1 ? 'month' : 'months';
  
  if (years > 0 && months > 0) {
    return `${years} ${yearText} ${months} ${monthText}`;
  }
  if (years > 0) {
    return `${years} ${yearText}`;
  }
  if (months > 0) {
    return `${months} ${monthText}`;
  }
  return 'Less than a month';
};

// Calculate duration from period string (e.g., "Aug 2025 - Present")
const calculateDuration = (period) => {
  if (!period) return '';
  
  const parts = period.split(' - ');
  if (parts.length < 1) return '';
  
  const startDate = parseDate(parts[0].trim());
  if (!startDate) return '';
  
  const endDateStr = parts[1]?.trim() || 'Present';
  const endDate = endDateStr === 'Present' ? new Date() : parseDate(endDateStr);
  if (!endDate) return '';
  
  // Calculate difference
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  return formatDuration(years, months);
};

const Home = () => {
  const { handleHoverStart, handleHoverMove, handleHoverEnd, PreviewCardComponent } = useWorkHoverPreview(workPreviewData);
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

  return (
    <div className="home-page">
      <WorkHoverPreviewStyles />
      
      <HeroSection03 />
      
      <main className="home-main">

        <section className="current-internship-section">
          <h3 className="section-title">CURRENT WORK</h3>
          
          {experiences.length > 0 && (() => {
            const currentWork = experiences[0];
            const workType = currentWork.type === 'Internship' ? 'Internship' : 'Full time';
            return (
              <div style={{ marginBottom: '24px', display: 'inline-block' }}>
                <LiquidButton size="default" variant="default">
                  {workType}
                </LiquidButton>
              </div>
            );
          })()}
          
          <div className="internship-container">
            {experiences.length > 0 && (() => {
              const currentInternship = experiences[0];
              return (
                <div className="internship-item">
                  <div className="internship-header">
                    <div className="internship-company-role">
                      <h4 className="internship-company" style={{ fontFamily: 'var(--font-serif)' }}>
                        {currentInternship.company}
                      </h4>
                      <p className="internship-role" style={{ fontFamily: 'var(--font-sans)' }}>
                        {currentInternship.title}
                      </p>
                      {currentInternship.period && (
                        <p className="internship-duration" style={{ 
                          fontFamily: 'var(--font-sans)', 
                          fontSize: '0.875rem',
                          opacity: 0.7,
                          marginTop: '4px'
                        }}>
                          {calculateDuration(currentInternship.period)}
                        </p>
                      )}
                      {currentInternship.location && (
                        <div className="internship-location" style={{ marginTop: '12px' }}>
                          <LocationTag 
                            city={currentInternship.location.city}
                            country={currentInternship.location.country}
                            timezone={currentInternship.location.timezone}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="internship-content">
                    <div className="internship-achievements">
                      <h5 className="internship-achievements-title" style={{ fontFamily: 'var(--font-sans)' }}>
                        Key Metrics:
                      </h5>
                      <ul className="internship-achievements-list">
                        {homepageCurrentWork.metrics.slice(0, 6).map((item) => {
                          const isIncrease = item.type === 'increase';
                          const ArrowIcon = isIncrease ? ArrowUp : ArrowDown;
                          const arrowColor = isIncrease ? '#22c55e' : '#ef4444'; // green-500 and red-500
                          const rotation = isIncrease ? '30deg' : '-30deg'; // slight slant
                          
                          return (
                            <li key={`${item.metric}-${item.description}`} className="internship-achievement-item" style={{ fontFamily: 'var(--font-sans)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                              <ArrowIcon 
                                size={18} 
                                style={{ 
                                  color: arrowColor, 
                                  marginTop: '2px',
                                  flexShrink: 0,
                                  transform: `rotate(${rotation})`,
                                  transition: 'transform 0.2s ease'
                                }} 
                              />
                              <div>
                                <strong style={{ color: 'hsl(var(--primary))', fontWeight: 600 }}>{item.metric}</strong>
                                {' — '}
                                <span style={{ opacity: 0.8, fontSize: '0.95em' }}>{item.description}</span>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          <div className="view-more-container">
            <BadgeButtonCombo 
              label="Know More" 
              badge={experiences.length}
              size="md"
              asChild
              className="know-more-button"
            >
              <Link to="/career" style={{ textDecoration: 'none', color: 'inherit', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Know More
              </Link>
            </BadgeButtonCombo>
          </div>
        </section>

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
                />
                {index < displayedProjects.length - 1 && (
            <div className="divider-horizontal"></div>
                )}
              </React.Fragment>
            ))}
            </div>

          {projects.length > 5 && (
            <div className="view-more-container">
              <BadgeButtonCombo 
                label="View More" 
                badge={projects.length}
                size="md"
                asChild
                className="view-more-button"
              >
                <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  View More
                </Link>
              </BadgeButtonCombo>
            </div>
          )}
          
          {PreviewCardComponent}
        </section>

        <section className="achievements-section">
          <h3 className="section-title">ACHIVEMENTS</h3>
          
          <div className="achievements-grid-new">
          <ProductHighlightCard
              category="Academic Excellence"
              categoryIcon={<GraduationCap className="h-5 w-5" />}
              title="Gold Medalist"
              description="Got Gold Medal in PG - Jain University (9.55 CGPA). Recognized for outstanding academic performance and excellence in postgraduate studies."
              imageSrc={<Award className="pt-5 h-24 w-24 text-primary" />}
              imageAlt="PG Gold Medal Achievement"
            />
            <ProductHighlightCard
              category="Academic Excellence"
              categoryIcon={<GraduationCap className="h-5 w-5" />}
              title="Gold Medalist"
              description="University Gold Medalist at Madurai Kamaraj University - 2023. Recognized for outstanding academic performance and excellence."
              imageSrc={<Award className="pt-5 h-24 w-24 text-primary" />}
              imageAlt="Gold Medal Achievement"
            />
            
            <ProductHighlightCard
              category="Competition"
              categoryIcon={<Trophy className="h-5 w-5" />}
              title="Make-A-Thon"
              description="2nd Position in 24 Hours Make-A-Thon. Showcased innovation and problem-solving skills in a competitive hackathon environment."
              imageSrc={<Users className="pt-5 h-24 w-24 text-primary" />}
              imageAlt="Hackathon Achievement"
            />
            
            <ProductHighlightCard
              category="Examination"
              categoryIcon={<Target className="h-5 w-5" />}
              title="TANCET 99.4%"
              description="Achieved 99.4 Percentile in TANCET Exam - 2023. Demonstrated exceptional performance in competitive entrance examination."
              imageSrc={<BookOpen className="pt-5 h-24 w-24 text-primary" />}
              imageAlt="TANCET Achievement"
            />
          
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

        <section className="wave-section relative w-full flex flex-col items-center justify-center py-20 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(var(--foreground)/.1),transparent_50%)] blur-[30px]"
          />

          <div className="flex w-[80vw] flex-col items-center">
            <WavePath className="mb-10" />
            <div className="flex w-full flex-col items-center">
              <div className="flex items-center justify-center gap-3 flex-wrap md:flex-nowrap">
                <p className="text-muted-foreground text-sm whitespace-nowrap">ME :)</p>
                <p className="text-foreground/80 text-2xl md:text-4xl whitespace-nowrap">
                  I Aspire to Inspire before I Expire !
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="w-full mb-12">
            <h2 className="mb-5 text-center">
              <span className="block typography-statement text-foreground">
                People's <span className="typography-statement-serif text-primary">Loved</span> my work
              </span>
            </h2>
          </div>
          <div className="flex justify-center w-full">
            <CleanTestimonial
            testimonials={[
              {
                quote: "Working with Dhiwin was an absolute pleasure. His expertise in AI/ML engineering helped us transform our business operations. The results exceeded our expectations and the level of professionalism was remarkable.",
                author: "Sarah Chen",
                role: "Product Manager",
                company: "TechCorp",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
              },
              {
                quote: "Dhiwin's innovative approach to problem-solving and technical expertise helped us solve complex challenges efficiently. His ability to translate ideas into intelligent solutions is truly exceptional.",
                author: "Michael Rodriguez",
                role: "CTO",
                company: "StartupXYZ",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
              },
              {
                quote: "The quality of work and attention to detail is outstanding. Dhiwin doesn't just execute tasks - he provides strategic value that helps businesses grow. We couldn't be happier with the results.",
                author: "Emily Watson",
                role: "Founder",
                company: "InnovateLab",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
              },
              {
                quote: "Despite tight timelines, Dhiwin delivered a high-quality solution without compromising on quality. Clear communication and regular updates kept us informed throughout the entire project.",
                author: "David Kim",
                role: "Engineering Lead",
                company: "DataFlow",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
              },
            ]}
          />
          </div>
        </section>

      </main>
      
      <Footer currentTime={currentTime} scrollToTop={scrollToTop} />
    </div>
  );
};

export default Home;
