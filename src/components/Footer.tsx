import React from "react";
import { ModemAnimatedFooter } from "./ui/modem-animated-footer";
import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

interface FooterProps {
  currentTime?: string;
  scrollToTop?: () => void;
}

const Footer = ({ currentTime = "", scrollToTop }: FooterProps) => {
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://www.github.com/dhiwinsamrich",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/dhiwin-samrich-9167-jerome/",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:dhiwinsamrichj@gmail.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" },
    { label: "PROJECTS", href: "/projects" },
  ];

  return (
    <ModemAnimatedFooter
      brandName="Dhiwin Samrich"
      brandDescription="AI/ML Engineer / Working Worldwide"
      socialLinks={socialLinks}
      navLinks={navLinks}
      currentTime={currentTime}
      scrollToTop={scrollToTop}
    />
  );
};

export default Footer;
