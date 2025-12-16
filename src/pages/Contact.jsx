import React from 'react';
import Footer from '../components/Footer.tsx';
import { Browser } from '../components/ui/browser';
import ThankYouCard from '../components/ui/thank-you-card';
import { Mail, Linkedin, Github, MessageCircle, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactBookmarks = [
    {
      id: "1",
      title: "Email",
      url: "mailto:dhiwinsamrich916@gmail.com",
      favicon: "📧",
    },
    {
      id: "2",
      title: "LinkedIn",
      url: "https://linkedin.com/in/dhiwinsamrich",
      favicon: "💼",
    },
    {
      id: "3",
      title: "GitHub",
      url: "https://github.com/dhiwinsamrich",
      favicon: "🐙",
    },
    {
      id: "4",
      title: "Portfolio",
      url: "https://dhiwinsamrich.github.io",
      favicon: "🌐",
    },
  ];

  const contactHistory = [
    {
      id: "1",
      title: "Email Contact",
      url: "mailto:dhiwinsamrich916@gmail.com",
      timestamp: new Date(Date.now() - 3600000),
      favicon: "📧",
    },
    {
      id: "2",
      title: "LinkedIn Profile",
      url: "https://linkedin.com/in/dhiwinsamrich",
      timestamp: new Date(Date.now() - 7200000),
      favicon: "💼",
    },
    {
      id: "3",
      title: "GitHub Profile",
      url: "https://github.com/dhiwinsamrich",
      timestamp: new Date(Date.now() - 10800000),
      favicon: "🐙",
    },
  ];

  const renderContactContent = (url, isLoading) => {
    if (isLoading) {
      return (
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <div className="border-primary mx-auto h-8 w-8 animate-spin rounded-full border-2 border-t-transparent mb-4" />
            <p className="text-muted-foreground font-sans">Loading contact information...</p>
          </div>
        </div>
      );
    }

    if (url.startsWith("mailto:")) {
      return (
        <div className="flex h-full flex-col items-center justify-center p-4 md:p-8">
          <Mail className="h-12 w-12 md:h-16 md:w-16 text-primary mb-3 md:mb-4" />
          <h2 className="text-xl md:text-2xl font-bold mb-2 font-serif">Email Me</h2>
          <p className="text-muted-foreground mb-4 md:mb-6 text-center max-w-md font-sans text-sm md:text-base px-4">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="mailto:dhiwinsamrich916@gmail.com"
            className="bg-primary text-primary-foreground px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-primary/90 transition-colors font-sans text-xs md:text-sm break-all text-center max-w-full mx-4"
          >
            dhiwinsamrich916@gmail.com
          </a>
        </div>
      );
    }

    if (url.includes("linkedin.com")) {
      return (
        <div className="flex h-full flex-col items-center justify-center p-4 md:p-8">
          <Linkedin className="h-12 w-12 md:h-16 md:w-16 text-primary mb-3 md:mb-4" />
          <h2 className="text-xl md:text-2xl font-bold mb-2 font-serif">Connect on LinkedIn</h2>
          <p className="text-muted-foreground mb-4 md:mb-6 text-center max-w-md font-sans text-sm md:text-base px-4">
            Let's connect professionally and explore collaboration opportunities.
          </p>
          <a
            href="https://linkedin.com/in/dhiwinsamrich"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-primary/90 transition-colors font-sans text-xs md:text-sm"
          >
            View LinkedIn Profile
          </a>
        </div>
      );
    }

    if (url.includes("github.com")) {
      return (
        <div className="flex h-full flex-col items-center justify-center p-4 md:p-8">
          <Github className="h-12 w-12 md:h-16 md:w-16 text-primary mb-3 md:mb-4" />
          <h2 className="text-xl md:text-2xl font-bold mb-2 font-serif">Check Out My Code</h2>
          <p className="text-muted-foreground mb-4 md:mb-6 text-center max-w-md font-sans text-sm md:text-base px-4">
            Explore my projects, contributions, and open-source work on GitHub.
          </p>
          <a
            href="https://github.com/dhiwinsamrich"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-primary/90 transition-colors font-sans text-xs md:text-sm"
          >
            View GitHub Profile
          </a>
        </div>
      );
    }

    if (url.includes("dhiwinsamrich.github.io")) {
      return (
        <div className="flex h-full flex-col items-center justify-center p-4 md:p-8">
          <MapPin className="h-12 w-12 md:h-16 md:w-16 text-primary mb-3 md:mb-4" />
          <h2 className="text-xl md:text-2xl font-bold mb-2 font-serif">Portfolio Website</h2>
          <p className="text-muted-foreground mb-4 md:mb-6 text-center max-w-md font-sans text-sm md:text-base px-4">
            Visit my portfolio to see my work, projects, and achievements.
          </p>
          <a
            href="https://dhiwinsamrich.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-primary/90 transition-colors font-sans text-xs md:text-sm"
          >
            Visit Portfolio
          </a>
        </div>
      );
    }

    return (
      <div className="flex h-full flex-col items-center justify-center p-4 md:p-8">
        <MessageCircle className="h-12 w-12 md:h-16 md:w-16 text-primary mb-3 md:mb-4" />
        <h2 className="text-xl md:text-2xl font-bold mb-2 font-serif">Get in Touch</h2>
        <p className="text-muted-foreground mb-4 md:mb-6 text-center max-w-md font-sans text-sm md:text-base px-4">
          I'm currently available for freelance projects and open to full-time opportunities. 
          If you have a project in mind or want to collaborate, let's connect!
        </p>
        <div className="grid grid-cols-2 gap-2 md:gap-4 mt-2 md:mt-4 w-full max-w-md px-4">
          <a
            href="mailto:dhiwinsamrich916@gmail.com"
            className="flex flex-col items-center p-3 md:p-4 border rounded-lg hover:bg-muted transition-colors"
          >
            <Mail className="h-6 w-6 md:h-8 md:w-8 mb-1 md:mb-2" />
            <span className="text-xs md:text-sm font-medium font-sans">Email</span>
          </a>
          <a
            href="https://linkedin.com/in/dhiwinsamrich"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-3 md:p-4 border rounded-lg hover:bg-muted transition-colors"
          >
            <Linkedin className="h-6 w-6 md:h-8 md:w-8 mb-1 md:mb-2" />
            <span className="text-xs md:text-sm font-medium font-sans">LinkedIn</span>
          </a>
          <a
            href="https://github.com/dhiwinsamrich"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-3 md:p-4 border rounded-lg hover:bg-muted transition-colors"
          >
            <Github className="h-6 w-6 md:h-8 md:w-8 mb-1 md:mb-2" />
            <span className="text-xs md:text-sm font-medium font-sans">GitHub</span>
          </a>
          <a
            href="https://dhiwinsamrich.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-3 md:p-4 border rounded-lg hover:bg-muted transition-colors"
          >
            <MapPin className="h-6 w-6 md:h-8 md:w-8 mb-1 md:mb-2" />
            <span className="text-xs md:text-sm font-medium font-sans">Portfolio</span>
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="contact-page pt-5">
      <main className="contact-main">
        <section className="contact-section">
          <h3 className="section-title">Get in Touch</h3>
          <div className="contact-content">
            <p className="contact-text">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>
        </section>

        <section className="contact-info-section">
          <h3 className="section-title">Contact Information</h3>
          <div className="contact-browser-container">
            <Browser
              image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
              initialUrl="about:home"
              showWindowControls={true}
              showBookmarksBar={true}
              showStatusBar={true}
              enableTabManagement={true}
              enableBookmarks={true}
              enableHistory={true}
              enableDownloads={false}
              enableSettings={false}
              maxTabs={5}
              customBookmarks={contactBookmarks}
              customHistory={contactHistory}
              simulateLoading={true}
              loadingDuration={800}
              renderContent={renderContactContent}
            />
          </div>
        </section>

        <section className="availability-section">
          <h3 className="section-title">Availability</h3>
          <div className="availability-content">
            <p className="availability-text">
              I'm currently available for freelance projects and open to full-time opportunities. If you have a project in mind or want to collaborate, let's connect!
            </p>
          </div>
        </section>

        <section className="thank-you-section">
          <div className="flex justify-center items-center py-12">
            <ThankYouCard />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
