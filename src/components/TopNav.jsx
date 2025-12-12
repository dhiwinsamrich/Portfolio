/**
 * TopNav Component
 * 
 * A production-ready top navigation bar component matching the Prototype Studio style.
 * Features: fixed transparent header with Menu button, full-screen overlay navigation,
 * and smooth hover animations with expanding text.
 * 
 * Usage:
 *   import TopNav from './components/TopNav';
 *   
 *   function App() {
 *     return <TopNav />;
 *   }
 */

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    { key: 'works', label: 'WORKS', sub: "i've done", path: '/projects' },
    { key: 'about', label: 'ABOUT', sub: 'me', path: '/about' },
    { key: 'contact', label: 'CONTACT', sub: 'me', path: '/contact' },
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
        <div className="max-w-10xl mx-auto px-6 md:px-8 lg:px-12 py-4 md:py-5 flex items-center justify-between">
          {/* Logo - Left */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group" 
            aria-label="Homepage"
          >
            <span className="font-black text-foreground text-lg md:text-xl tracking-tight select-none">
              GameOn!
            </span>
          </Link>

          {/* Navigation Items - Visible on Large Screens */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-0.5">
            {items.map((it, idx) => {
              const isActive = 
                (it.key === 'works' && location.pathname === '/projects') ||
                (it.key === 'about' && location.pathname === '/about') ||
                (it.key === 'contact' && location.pathname === '/contact');

              return (
                <Link
                  key={it.key}
                  to={it.path}
                  className={`relative group px-2 md:px-3 py-2 inline-flex items-end text-xs md:text-sm tracking-widest uppercase transition-all duration-700 ease-out ${
                    isActive 
                      ? 'text-foreground font-extrabold' 
                      : 'text-foreground/60 hover:text-foreground'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="flex items-baseline gap-1 md:gap-2 overflow-hidden">
                    <span className={`leading-tight transition-all duration-700 ease-out whitespace-nowrap ${
                      isActive 
                        ? 'text-sm md:text-base lg:text-lg' 
                        : 'text-xs md:text-sm group-hover:text-sm md:group-hover:text-base'
                    }`}>
                      {it.label}
                    </span>
                    {/* sub label shown only on hover (italic, small) - expands smoothly */}
                    {it.sub && (
                      <span className="ml-0 md:ml-1 text-[10px] md:text-xs italic transform translate-y-0.5 transition-all duration-700 ease-out whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[200px] opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100">
                        {it.sub}
                      </span>
                    )}
                  </span>

                  {/* underline animation (grow from left when hovered or active) */}
                  <span 
                    className={`absolute left-0 right-0 -bottom-1 h-[2px] transform origin-left transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                    style={{ 
                      background: 'currentColor',
                      transformOrigin: 'left center'
                    }} 
                  />
                </Link>
              );
            })}

            {/* Social Links - IG / YT */}
            <div className="flex items-center gap-1 ml-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm tracking-widest uppercase text-foreground/60 hover:text-foreground transition-colors"
              >
                IG
              </a>
              <span className="text-foreground/30">/</span>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm tracking-widest uppercase text-foreground/60 hover:text-foreground transition-colors"
              >
                YT
              </a>
            </div>
          </nav>

          {/* Menu Button - Right (hidden on large screens where nav is visible) */}
          <button
            onClick={handleMenuToggle}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="relative text-sm md:text-base font-medium uppercase tracking-wider text-foreground hover:text-foreground/80 transition-colors lg:hidden"
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
      </header>

      {/* Full Screen Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-[100] bg-background flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Navigation Links */}
            <motion.nav
              className="flex-1 flex flex-col justify-center items-start px-6 md:px-12 lg:px-16 xl:px-24"
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {items.map((item, index) => {
                const isActive = 
                  (item.key === 'works' && location.pathname === '/projects') ||
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
                        {item.sub && (
                          <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl italic font-light opacity-70">
                            {item.sub}
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
