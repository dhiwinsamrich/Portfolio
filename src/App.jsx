import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Play from './pages/Play';
import NotFound from './pages/NotFound';
import TopNav from './components/TopNav';
import ProfileLoader from './components/ProfileLoader';
import { FloatingConsultButton } from './components/ui/floating-consult-button';
import './App.css';

const PageWrapper = ({ children }) => (
  <motion.div
    key={children.key}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Reveal on scroll for sections and key blocks
  useEffect(() => {
    const targets = document.querySelectorAll(
      'section, .card, .work-item, .product-card, .contact-content, .availability-content, .achievements-section, .home-main > *'
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    targets.forEach((el) => {
      if (!el.classList.contains('reveal-visible')) {
        el.classList.add('reveal-init');
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleBookCall = () => {
    // You can customize this action - e.g., open a calendar link, email, etc.
    window.location.href = 'mailto:dhiwinsamrichj@gmail.com?subject=Consultation Request';
  };

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <TopNav />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper key={location.pathname}><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper key={location.pathname}><About /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper key={location.pathname}><Contact /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper key={location.pathname}><Projects /></PageWrapper>} />
          <Route path="/project/:id" element={<PageWrapper key={location.pathname}><ProjectDetail /></PageWrapper>} />
          <Route path="/play" element={<PageWrapper key={location.pathname}><Play /></PageWrapper>} />
          <Route path="*" element={<PageWrapper key={location.pathname}><NotFound /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      
      {/* Floating Consult Button - appears on all pages */}
      {!isLoading && (
        <FloatingConsultButton
          revolvingText="LET'S TALK - CONSULTATION - "
          popupHeading="Let's Connect"
          popupDescription="I'm available for freelance projects and open to full-time opportunities. Let's discuss how I can help bring your ideas to life."
          popupBadgeText="Available"
          ctaButtonText="Get in Touch"
          ctaButtonAction={handleBookCall}
          position={{ bottom: "2rem", right: "2rem" }}
        />
      )}
      
      {/* Profile Loader Overlay */}
      {isLoading && <ProfileLoader onComplete={handleLoaderComplete} />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
