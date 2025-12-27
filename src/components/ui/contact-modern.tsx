import React from "react";
import { PageHeading } from './page-heading';
import { Button } from './button';
import { Calendar } from 'lucide-react';
import './contact-modern.css';

interface ContactModernProps {
  generalEmail?: string;
  generalPhone?: string;
  address?: string;
  githubUrl?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  xUrl?: string;
}

export const ContactModern = ({
  generalEmail = "hello@example.com",
  generalPhone = "+1 (555) 123-4567",
  address = "123 Design Street, Creative District, City 12345",
  githubUrl = "https://github.com",
  instagramUrl = "https://instagram.com",
  facebookUrl = "https://facebook.com",
  xUrl = "https://x.com",
}: ContactModernProps) => {
  // Image path - properly encoded for URL
  const imagePath = encodeURI(`${process.env.PUBLIC_URL || ''}/Contact Page image/WhatsApp Image 2025-07-11 at 16.03.35_0284de12.jpg`);
  return (
    <section className="contact-modern-section">
      <div className="contact-modern-container">
        {/* Left Column */}
        <div className="contact-modern-left">
          {/* Heading */}
          <div className="contact-modern-header">
            <PageHeading firstWord="Contact" secondWord="Me" />
            <p className="contact-modern-subtitle">
              Get in touch with me for any enquiries and questions
            </p>
          </div>

          {/* Info Blocks Grid */}
          <div className="contact-modern-grid">
            {/* General Inquiries */}
            <div className="contact-modern-block">
              <p className="contact-modern-label">
                General inquiries
              </p>
              <a
                href={`mailto:${generalEmail}`}
                className="contact-modern-link"
              >
                {generalEmail}
              </a>
              <a
                href={`tel:${generalPhone}`}
                className="contact-modern-link"
              >
                {generalPhone}
              </a>
            </div>

            {/* Address */}
            <div className="contact-modern-block">
              <p className="contact-modern-label">
                Address
              </p>
              <p className="contact-modern-text">
                {address}
              </p>
            </div>
          </div>

          {/* Book a Call Button */}
          <div className="contact-modern-book-call">
            <Button
              asChild
              className="contact-modern-book-button"
            >
              <a
                href="https://cal.com/dhiwin-samrich-j-dyyfl5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book a Call
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="contact-modern-social">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-modern-social-link"
            >
              Github
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-modern-social-link"
            >
              Instagram
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-modern-social-link"
            >
              Facebook
            </a>
            <a
              href={xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-modern-social-link"
            >
              X
            </a>
          </div>
        </div>

        {/* Right Column - Bento Grid Image */}
        <div className="contact-modern-right">
          <div 
            className="contact-bento-grid"
            style={{
              backgroundImage: `url(${imagePath})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Grid Item 1 - Large top left */}
            <div className="contact-bento-item contact-bento-item-1"></div>
            
            {/* Grid Item 2 - Medium top right */}
            <div className="contact-bento-item contact-bento-item-2"></div>
            
            {/* Grid Item 3 - Small middle right */}
            <div className="contact-bento-item contact-bento-item-3"></div>
            
            {/* Grid Item 4 - Medium bottom left */}
            <div className="contact-bento-item contact-bento-item-4"></div>
            
            {/* Grid Item 5 - Large bottom right */}
            <div className="contact-bento-item contact-bento-item-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

