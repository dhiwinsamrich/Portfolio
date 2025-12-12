import React from "react";
import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import StickyFooter from "./ui/footer";

interface FooterProps {
  currentTime?: string;
  scrollToTop?: () => void;
}

const Footer = ({ currentTime = "", scrollToTop }: FooterProps) => {
  const socialLinks = [
    {
      icon: <Github className="w-4 h-4" />,
      href: "https://www.github.com/dhiwinsamrich",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      href: "https://www.linkedin.com/in/dhiwin-samrich-9167-jerome/",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      href: "mailto:dhiwinsamrichj@gmail.com",
      label: "Email",
    },
  ];

  const sections = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <StickyFooter
      sections={sections}
      social={socialLinks}
      title="Dhiwin Samrich"
      subtitle="AI/ML Engineer / Working Worldwide"
      copyright={`©${new Date().getFullYear()} Dhiwin Samrich. All rights reserved.`}
      currentTime={currentTime}
      scrollToTop={scrollToTop}   />
  );
};

export default Footer;
