/**
 * NavOverlay Component
 * 
 * A production-ready navigation overlay component with custom cursor and animations.
 * Replicates the navbar behavior from prototypestudio.fr
 * 
 * Usage:
 *   import NavOverlay from './components/NavOverlay';
 *   
 *   function App() {
 *     return <NavOverlay />;
 *   }
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

// Custom Cursor Component
const CustomCursor = ({ isOverlayOpen }) => {
  const cursorRef = useRef(null);
  const cursorFollowerRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const follower = cursorFollowerRef.current;
    if (!cursor || !follower) return;

    // Update mouse position
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    // Easing function for smooth cursor movement
    const ease = (start, end, factor) => start + (end - start) * factor;

    // Animation loop
    let animationFrameId;
    const animate = () => {
      const factor = isHovering.current ? 0.15 : 0.1;
      
      cursorPosition.current.x = ease(
        cursorPosition.current.x,
        mousePosition.current.x,
        factor
      );
      cursorPosition.current.y = ease(
        cursorPosition.current.y,
        mousePosition.current.y,
        factor
      );

      cursor.style.transform = `translate(${mousePosition.current.x}px, ${mousePosition.current.y}px)`;
      follower.style.transform = `translate(${cursorPosition.current.x}px, ${cursorPosition.current.y}px)`;

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Handle hover states
    const handleMouseEnter = (e) => {
      isHovering.current = true;
      cursor.classList.add('cursor-hover');
      follower.classList.add('cursor-follower-hover');
      
      // Magnetic effect
      const rect = e.target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const offsetX = (e.clientX - centerX) * 0.2;
      const offsetY = (e.clientY - centerY) * 0.2;
      
      follower.style.transform = `translate(${cursorPosition.current.x + offsetX}px, ${cursorPosition.current.y + offsetY}px) scale(1.5)`;
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
      cursor.classList.remove('cursor-hover');
      follower.classList.remove('cursor-follower-hover');
    };

    // Attach hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      cancelAnimationFrame(animationFrameId);
    };
  }, [isTouchDevice]);

  if (isTouchDevice || isOverlayOpen) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          border: '2px solid white',
          transition: 'width 0.2s, height 0.2s',
        }}
      />
      <div
        ref={cursorFollowerRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          transition: 'width 0.3s, height 0.3s, transform 0.3s ease-out',
        }}
      />
    </>
  );
};

// Focus trap hook
const useFocusTrap = (isActive) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  }, [isActive]);

  return containerRef;
};

// Main NavOverlay Component
const NavOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const overlayRef = useFocusTrap(isOpen);

  const navLinks = [
    { label: "Works i've done", path: '/projects' },
    { label: "About me", path: '/about' },
    { label: "Contact me", path: '/contact' },
  ];

  const socialLinks = [
    { label: 'GitHub', url: 'https://www.github.com/dhiwinsamrich', external: true },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/dhiwin-samrich-9167-jerome/', external: true },
    { label: 'Email', url: 'mailto:dhiwinsamrichj@gmail.com', external: true },
  ];

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, handleClose]);

  // Prevent body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
      <CustomCursor isOverlayOpen={isOpen} />
      
      {/* Top Bar */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 lg:px-12 py-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex-1" />
        
        <button
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          className="relative px-6 py-3 text-sm md:text-base font-medium uppercase tracking-wider text-foreground hover:text-foreground/80 transition-colors cursor-none"
        >
          <span className="relative z-10">Menu</span>
          <motion.span
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </motion.header>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-[100] bg-background flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8 lg:top-12 lg:right-12 z-10">
              <button
                onClick={handleClose}
                aria-label="Close menu"
                className="p-2 text-foreground hover:text-foreground/80 transition-colors cursor-none"
              >
                <X className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            {/* Navigation Links */}
            <motion.nav
              className="flex-1 flex flex-col justify-center items-start px-6 md:px-12 lg:px-16 xl:px-24"
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    variants={itemVariants}
                    className="mb-4 md:mb-6 lg:mb-8"
                  >
                    <Link
                      to={link.path}
                      onClick={handleClose}
                      className={`
                        block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light uppercase tracking-tight
                        text-foreground hover:text-foreground/80 transition-colors
                        cursor-none relative group
                        ${isActive ? 'font-bold' : ''}
                      `}
                    >
                      <span className="relative inline-block">
                        {link.label}
                        <motion.span
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>

            {/* Social Links */}
            <motion.div
              className="px-6 md:px-12 lg:px-16 xl:px-24 pb-8 md:pb-12 lg:pb-16"
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div
                className="flex flex-wrap gap-6 md:gap-8 lg:gap-10"
                variants={itemVariants}
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target={social.external ? '_blank' : undefined}
                    rel={social.external ? 'noopener noreferrer' : undefined}
                    className="text-sm md:text-base lg:text-lg uppercase tracking-wider text-foreground/70 hover:text-foreground transition-colors cursor-none relative group"
                  >
                    <span className="relative inline-block">
                      {social.label}
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </span>
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavOverlay;

