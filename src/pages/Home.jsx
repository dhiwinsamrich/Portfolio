import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.tsx';
import { HeroParallax } from '../components/ui/hero-parallax';
import { LogoCloud, LogoCloud4 } from '../components/ui';
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

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      
      <HeroParallax products={products} />
      
      <main className="home-main">

        <section className="selected-works-section">
          <h3 className="section-title">SELECTED WORKS</h3>
          
          <div className="works-container">
            <div className="work-item">
              <div className="work-header">
                <div className="work-number-title">
                  <span className="work-number">01</span>
                  <h4 className="work-name">Justicia - Legal AI</h4>
                </div>
              </div>
              <div className="work-content">
                <p className="work-description">
                  Justicia was born for a mission to merge cutting-edge AI with the complexities of Indian law.
                  Driven to bridge the gap between fast-moving tech and the traditionally slow, opaque legal system, I built a platform where accessibility and precision aren't just aims - they're assured.
                </p>
                <div className="work-links">
                  <a href="#" className="work-link">Live Site</a>
                  <a href="#" className="work-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="divider-horizontal"></div>

            <div className="work-item">
              <div className="work-header">
                <div className="work-number-title">
                  <span className="work-number">02</span>
                  <h4 className="work-name">Chess Game - RL</h4>
                </div>
              </div>
              <div className="work-content">
                <p className="work-description">
                  Every chess match is a dialogue - a test of strategy, creativity, and learning.
                  "Chess Game" isn't just a web-based app; it's a bold AI experiment that blends traditional gameplay with Deep-Q Learning to create an ever-evolving digital opponent.
                </p>
                <div className="work-links">
                  <a href="#" className="work-link">Live Site</a>
                  <a href="#" className="work-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="divider-horizontal"></div>

            <div className="work-item">
              <div className="work-header">
                <div className="work-number-title">
                  <span className="work-number">03</span>
                  <h4 className="work-name">RAG</h4>
                </div>
              </div>
              <div className="work-content">
                <p className="work-description">
                  Every powerful system starts with a bold vision: transforming how humans connect with information.
                  Driven by this ambition.
                  I didn't just build a system that stores knowledge - I built one that brings it to life.
                </p>
                <div className="work-links">
                  <a href="#" className="work-link">Live Site</a>
                  <a href="#" className="work-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="divider-horizontal"></div>

            <div className="work-item">
              <div className="work-header">
                <div className="work-number-title">
                  <span className="work-number">04</span>
                  <h4 className="work-name">Hand Sign Recognition</h4>
                </div>
              </div>
              <div className="work-content">
                <p className="work-description">
                  Every gesture tells a story.
                  My Hand Sign Recognition Glove was inspired by a passion to give voice and visibility to those who communicate through sign language - technology as a bridge for connection and understanding.
                </p>
                <div className="work-links">
                  <a href="#" className="work-link">Live Site</a>
                  <a href="#" className="work-link">GitHub</a>
                </div>
              </div>
            </div>
          </div>
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
          <h3 className="section-title mb-6 text-center font-medium text-lg text-muted-foreground tracking-tight md:text-2xl">
            Technologies I{" "}
            <span className="font-semibold text-primary">work</span> with.
          </h3>
          <div className="w-full">
            <LogoCloud />
          </div>
        </section>

        <section className="tools-section">
          <div className="w-full">
            <h2 className="mb-5 text-center">
              <span className="block font-medium text-2xl text-muted-foreground">
                Tools I Use
              </span>
            </h2>
            <LogoCloud4 logos={toolsLogos} />
          </div>
        </section>
      </main>
      
      <Footer hoverText="HOME" />
    </div>
  );
};

export default Home;
