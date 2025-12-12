import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navItems = useMemo(() => [
    { 
      name: 'WORKS', 
      hoverText: "WORKS i've DONE",
      url: '/projects',
      parts: [
        { text: 'WORKS', bold: true },
        { text: " i've ", bold: false, italic: true, small: true },
        { text: 'DONE', bold: true },
      ]
    },
    { 
      name: 'PLAY', 
      hoverText: 'PLAY with ME',
      url: '/play',
      parts: [
        { text: 'PLAY', bold: true },
        { text: ' with ', bold: false, italic: true, small: true },
        { text: 'ME', bold: true },
      ]
    },
    { 
      name: 'ABOUT', 
      hoverText: 'ABOUT',
      url: '/about',
      parts: [{ text: 'ABOUT', bold: false }]
    },
    { 
      name: 'CONTACT', 
      hoverText: 'CONTACT',
      url: '/contact',
      parts: [{ text: 'CONTACT', bold: false }]
    },
    { 
      name: 'IG/YT', 
      hoverText: 'IG/YT',
      url: '#', 
      external: true,
      parts: [{ text: 'IG/YT', bold: true }]
    },
  ], []);

  const handleLinkClick = (item: typeof navItems[0]) => {
    if (item.external && item.name === 'IG/YT') {
      // Open GitHub and LinkedIn
      window.open('https://www.github.com/dhiwinsamrich', '_blank');
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 h-20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Blurred background */}
      <div className="absolute inset-0 backdrop-blur-md bg-background/60" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-between px-8 md:px-12 lg:px-16">
        {/* Left: Kinght's Gambit */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold text-foreground hover:opacity-80 transition-opacity z-10"
        >
          Kinght's Gambit!
        </Link>

        {/* Right: Navigation Links */}
        <nav className="flex items-center gap-8 md:gap-10 lg:gap-12 z-10">
          {navItems.map((item) => {
            const isActive = location.pathname === item.url;
            const isHovered = hoveredLink === item.name;
            const showExpanded = isHovered && item.parts.length > 1;

            return (
              <Link
                key={item.name}
                to={item.url}
                onClick={() => handleLinkClick(item)}
                className="relative overflow-hidden"
                onMouseEnter={() => setHoveredLink(item.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div className="flex items-center">
                  <AnimatePresence mode="wait">
                    {showExpanded ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="flex items-baseline whitespace-nowrap"
                      >
                        {item.parts.map((part, index) => (
                          <span
                            key={index}
                            className={`
                              text-sm md:text-base lg:text-lg uppercase tracking-wider
                              ${part.bold ? 'font-bold text-foreground' : 'font-normal text-foreground/60'}
                              ${'italic' in part && part.italic ? 'italic' : ''}
                              ${'small' in part && part.small ? 'text-xs md:text-sm lg:text-base' : ''}
                            `}
                          >
                            {part.text}
                          </span>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={`
                          text-sm md:text-base lg:text-lg uppercase tracking-wider whitespace-nowrap
                          ${item.parts[0]?.bold || isActive
                            ? 'font-bold text-foreground'
                            : 'font-normal text-foreground/60'
                          }
                        `}
                      >
                        {item.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground"
                    layoutId="activeIndicator"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Subtle border bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-border/50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
    </motion.header>
  );
};

export default Header;
