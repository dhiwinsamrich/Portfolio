import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleBookCall = () => {
    // You can customize this action - e.g., open a calendar link, email, etc.
    window.location.href = 'mailto:dhiwinsamrichj@gmail.com?subject=Consultation Request';
  };

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/play" element={<Play />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
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
    </Router>
  );
}

export default App;
