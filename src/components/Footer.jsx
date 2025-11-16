import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* <div className="footer-text">Made with love:)</div> */}
        
        <div className="footer-links">
          <a href="#resume" className="footer-link">Resume</a>
          <a href="mailto:contact@dhiwin.com" className="footer-link">Mail</a>
        </div>
        
        <div className="footer-links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">Linked In</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
        </div>
        
        <button className="cta-button">
          <span className="cta-text">Let's Connect</span>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
            <g clipPath="url(#clip0_4_75)">
              <path d="M7 21L21 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.625 7H21V18.375" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_4_75">
                <rect width="28" height="28" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
