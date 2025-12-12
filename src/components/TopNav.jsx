import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Character animation component
const AnimatedText = ({ text, delay = 0, className = '', isHovered = false }) => {
  if (!text) return null;
  
  return (
    <span className={className}>
      {text.split('').map((char, idx) => (
        <motion.span
          key={`${text}-${idx}`}
          className="char inline-block"
          initial={{ opacity: 0, visibility: 'hidden' }}
          animate={{
            opacity: isHovered ? 1 : 0,
            visibility: isHovered ? 'visible' : 'hidden',
          }}
          transition={{
            duration: 0.6,
            delay: delay + idx * 0.04,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          aria-hidden="true"
        >
          {char}
        </motion.span>
      ))}
      <span className="sr-only">{text}</span>
    </span>
  );
};

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const items = [
    { 
      key: 'works', 
      label: 'WORKS', 
      center: "i've", 
      right: 'done', 
      path: '/projects',
    },
    { 
      key: 'play', 
      label: 'PLAY', 
      center: 'with', 
      right: 'me', 
      path: '/play',
    },
    { 
      key: 'about', 
      label: 'ABOUT', 
      center: 'me', 
      right: '', 
      path: '/about',
    },
    { 
      key: 'contact', 
      label: 'CONTACT', 
      center: 'me', 
      right: '', 
      path: '/contact',
    },
  ];

  const socialLinks = [
    { label: 'IG', url: 'https://www.instagram.com', external: true },
    { label: 'YT', url: 'https://www.youtube.com', external: true },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const containerVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
    },
    open: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      {/* Fixed Top Bar */}
      <header 
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled 
            ? 'bg-background/70 backdrop-blur-sm border-b border-border/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-10xl mx-auto px-4 md:px-6 lg:px-8 py-2 md:py-3">
          {/* Desktop Navigation - Visible on md screens and above */}
          <div className="hidden md:flex items-center justify-between">
            {/* Logo - Left */}
            <Link 
              to="/" 
              className="flex items-center gap-2 group" 
              aria-label="Homepage"
              data-navbar-logo
            >
              <span className="font-black text-foreground text-base md:text-lg lg:text-xl tracking-tight select-none">
                Knight's Gambit!
              </span>
            </Link>

            <div className="header-menu flex justify-end">
              <div className="header-menu-inner flex justify-end items-center gap-x-2 lg:gap-x-2 uppercase">
                {/* Navigation Items */}
                <div className="header-items flex items-center gap-x-8">
                  {items.map((item, idx) => {
                    const isActive = 
                      (item.key === 'works' && location.pathname === '/projects') ||
                      (item.key === 'play' && location.pathname === '/play') ||
                      (item.key === 'about' && location.pathname === '/about') ||
                      (item.key === 'contact' && location.pathname === '/contact');

                    const isHovered = hoveredItem === item.key;
                    
                    const isAnyItemHovered = hoveredItem !== null;
                    const shouldBlur = isAnyItemHovered && !isHovered;
                    
                    let opacityClass = 'opacity-60 hover:opacity-100';
                    if (shouldBlur) {
                      opacityClass = 'opacity-30';
                    } else if (isActive) {
                      opacityClass = 'opacity-100';
                    }
                    
                    return (
                      <div
                        key={item.key}
                        className="header-item-w pointer-events-none"
                        style={{ opacity: 1, visibility: 'inherit' }}
                      >
                        <Link
                          to={item.path}
                          className={`header-item relative inline-flex items-baseline pointer-events-auto transition-all duration-300 ease-out overflow-visible ${opacityClass}`}
                          onMouseEnter={() => setHoveredItem(item.key)}
                          onMouseLeave={() => setHoveredItem(null)}
                          style={{ 
                            overflow: 'visible',
                            filter: shouldBlur ? 'blur(4px)' : 'none',
                            transition: 'opacity 0.3s ease-out, filter 0.3s ease-out',
                          }}
                        >
                          <motion.span 
                            className="header-item-left inline-block pointer-events-none text-sm md:text-base lg:text-lg tracking-widest uppercase whitespace-nowrap"
                            animate={{
                              x: isHovered ? -4 : 0,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: [0.4, 0, 0.2, 1],
                            }}
                          >
                            {item.label}
                          </motion.span>
                          {(item.center || item.right) && (
                            <motion.span 
                              className="header-item-hover-text inline-flex items-baseline gap-x-0.5 pl-0 pointer-events-none whitespace-nowrap"
                              initial={{ maxWidth: 0, opacity: 0 }}
                              animate={{ 
                                maxWidth: isHovered ? 500 : 0,
                                opacity: isHovered ? 1 : 0,
                              }}
                              transition={{
                                duration: 0.6,
                                ease: [0.25, 0.1, 0.25, 1],
                              }}
                              style={{ 
                                overflow: 'visible',
                                minWidth: 0,
                                marginLeft: '-2px',
                              }}
                            >
                              {item.center && (
                                <span className="header-item-center inline-block font-heading gap-x-0 italic text-xs md:text-sm normal-case -mt-[0.5px] whitespace-nowrap">
                                  <AnimatedText text={item.center} delay={0.2} isHovered={isHovered} />
                                </span>
                              )}
                              {item.right && (
                                <span className="header-item-right pl-0 inline-block whitespace-nowrap text-sm md:text-base">
                                  <AnimatedText text={item.right} delay={item.center ? 0.2 + item.center.length * 0.04 : 0.2} isHovered={isHovered} />
                                </span>
                              )}
                            </motion.span>
                          )}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Only on small screens */}
          <div className="flex items-center justify-between md:hidden">
            {/* Logo - Left */}
            <Link 
              to="/" 
              className="flex items-center gap-2 group" 
              aria-label="Homepage"
              data-navbar-logo
            >
              <span className="font-black text-foreground text-base tracking-tight select-none">
                Knight's Gambit!
              </span>
            </Link>

            {/* Menu Button - Right */}
            <button
              onClick={handleMenuToggle}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="relative text-xs font-medium uppercase tracking-wider text-foreground hover:text-foreground/80 transition-colors"
            >
              <span className="relative z-10">
                {isMenuOpen ? 'Close' : 'Menu'}
              </span>
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-foreground origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Navigation Overlay - Mobile Only */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-[100] bg-background flex flex-col md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Navigation Links */}
            <motion.nav
              className="flex-1 flex flex-col justify-center items-end px-6 md:px-12 lg:px-16 xl:px-24 pt-[calc(5rem_+_10rem)] pb-20"
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {items.map((item, index) => {
                const isActive = 
                  (item.key === 'works' && location.pathname === '/projects') ||
                  (item.key === 'play' && location.pathname === '/play') ||
                  (item.key === 'about' && location.pathname === '/about') ||
                  (item.key === 'contact' && location.pathname === '/contact');

                return (
                  <motion.div
                    key={item.path}
                    variants={itemVariants}
                    className="mb-4 md:mb-6 lg:mb-8"
                  >
                    <Link
                      to={item.path}
                      onClick={handleLinkClick}
                      className={`
                        block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light uppercase tracking-tight
                        text-foreground hover:text-foreground/80 transition-colors
                        relative group cursor-pointer
                        ${isActive ? 'font-bold' : ''}
                      `}
                    >
                      <span className="flex items-baseline gap-2">
                        <span>{item.label}</span>
                        {(item.center || item.right) && (
                          <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl italic font-light opacity-70">
                            {item.center && <span>{item.center} </span>}
                            {item.right && <span>{item.right}</span>}
                          </span>
                        )}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="mt-8 md:mt-12 lg:mt-16 flex items-center gap-4 md:gap-6"
              >
                {socialLinks.map((social, idx) => (
                  <React.Fragment key={social.label}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg md:text-xl lg:text-2xl font-light uppercase tracking-wider text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {social.label}
                    </a>
                    {idx < socialLinks.length - 1 && (
                      <span className="text-foreground/30">/</span>
                    )}
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
