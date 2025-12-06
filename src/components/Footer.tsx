import React from "react";
import {
  Mail,
  Linkedin as LinkedInIcon,
  Instagram,
  Github as GitHubIcon,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "./ui";

interface FooterProps {
  hoverText?: string;
}

const Footer = ({ hoverText = "DHIWIN" }: FooterProps) => {
  // Footer link data
  const footerLinks: Array<{
    title: string;
    links: Array<{ label: string; href: string; external?: boolean }>;
  }> = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Resume", href: "#resume" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "LinkedIn", href: "https://linkedin.com", external: true },
        { label: "GitHub", href: "https://github.com", external: true },
        { label: "Instagram", href: "https://instagram.com", external: true },
      ],
    },
  ];

  // Contact info data
  const contactInfo: Array<{
    icon: React.ReactElement;
    text: string;
    href?: string;
    external?: boolean;
  }> = [
    {
      icon: <Mail size={18} className="text-[#000000]" />,
      text: "dhiwinsamrichj@gmail.com",   
      href: "mailto:dhiwinsamrichj@gmail.com",
    },
    {
      icon: <LinkedInIcon size={18} className="text-[#000000]" />,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/dhiwin-samrich-9167-jerome/",
      external: true,
    },
    {
      icon: <GitHubIcon size={18} className="text-[#000000]" />,
      text: "GitHub",
      href: "https://github.com/dhiwinsamrich",
      external: true,
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <LinkedInIcon size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/in/dhiwin-samrich-9167-jerome/" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/_itz_jerome._" },
    { icon: <GitHubIcon size={20} />, label: "GitHub", href: "https://github.com/dhiwinsamrich" },
  ];

  return (
    <footer className="bg-[#ffffff] relative h-fit rounded-3xl overflow-hidden mx-4 mt-8 sm:mx-4 md:mx-8 md:mt-16 mb-0">
      <div className="max-w-7xl mx-auto pt-8 sm:pt-10 md:pt-14 px-4 sm:px-6 md:px-14 pb-0 z-40 relative">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8 lg:gap-16 pb-0">
          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-[#000000] text-base md:text-lg font-semibold mb-4 md:mb-6">
                {section.title}
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="text-[#000000] hover:text-[#2f8df3] transition-colors text-sm md:text-base"
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-[#000000] text-base md:text-lg font-semibold mb-4 md:mb-6">
              Contact
            </h4>
            <ul className="space-y-3 md:space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start md:items-center space-x-2 md:space-x-3">
                  <span className="flex-shrink-0 mt-0.5 md:mt-0">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[#000000] hover:text-[#000000] transition-colors text-sm md:text-base break-words"
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-[#000000] hover:text-[#000000] transition-colors text-sm md:text-base break-words">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Text hover effect */}
      <div className="flex h-[20rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem] -mt-10 sm:-mt-16 md:-mt-20 -mb-40 sm:-mb-56 md:-mb-60 items-start justify-start">
        <TextHoverEffect text={hoverText} className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
};

export default Footer;

