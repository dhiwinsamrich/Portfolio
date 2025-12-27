import React from "react";
import Footer from "../components/Footer.tsx";
import { ContactModern } from "../components/ui/contact-modern";
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <main className="contact-main">
        <ContactModern 
          generalEmail="dhiwinsamrichj@gmail.com"
          generalPhone="+91 8678949676"
          address="Chennai, Tamil Nadu, India"
          githubUrl="https://github.com"
          instagramUrl="https://instagram.com"
          facebookUrl="https://facebook.com"
          xUrl="https://x.com"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
