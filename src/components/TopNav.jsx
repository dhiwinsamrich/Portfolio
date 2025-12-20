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
      label: 'MY', 
      center: 'play', 
      right: 'GROUND', 
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
        className={`fixed inset-x-0 top-0 transition-colors duration-300 ${
          isMenuOpen ? 'z-[101]' : 'z-50'
        } ${
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
              onClick={handleLinkClick}
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
              className={`relative w-8 h-8 flex items-center justify-center text-foreground hover:text-foreground/80 transition-colors ${
                isMenuOpen ? 'z-[101]' : ''
              }`}
            >
              {/* Chess Knight Icon - Hidden when menu is open */}
              <motion.svg
                width="36"
                height="36"
                viewBox="0 0 2000 2000"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0"
                animate={{ 
                  opacity: isMenuOpen ? 0 : 1,
                  scale: isMenuOpen ? 0.8 : 1,
                  rotate: isMenuOpen ? -90 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {/* Chess Knight - Main silhouette path from the SVG */}
                <path d="M 948.148438 427.078125 C 621.023438 427.078125 355.835938 692.269531 355.835938 1019.390625 C 355.835938 1263.640625 503.679688 1473.351562 714.757812 1563.941406 C 711.832031 1557.660156 711.214844 1550.289062 713.734375 1543.148438 C 713.773438 1543.039062 713.8125 1542.929688 713.851562 1542.820312 L 741.78125 1465.519531 C 745.183594 1456.101562 751.097656 1449.148438 758.0625 1445.890625 L 852.4375 1445.890625 L 761.660156 1429.761719 C 751.917969 1428.03125 744.390625 1419.890625 743.945312 1410.011719 C 743.929688 1409.671875 743.921875 1409.320312 743.921875 1408.96875 C 743.921875 1397.871094 751.863281 1388.621094 762.378906 1386.601562 C 762.363281 1386.460938 762.34375 1386.328125 762.324219 1386.191406 L 933.742188 1386.191406 L 778.765625 1363.050781 C 760.421875 1360.308594 746.207031 1345.558594 744.195312 1327.121094 C 728.050781 1179.21875 926.863281 1063.121094 921.761719 962.570312 C 905.164062 983.601562 878.113281 995.21875 851.328125 994.570312 C 824.550781 993.921875 753.578125 968.898438 741.101562 978.511719 C 728.621094 988.121094 716.371094 998.691406 701.484375 1003.828125 C 686.597656 1008.96875 667.984375 1007.21875 657.996094 995.039062 C 653.511719 989.570312 651.085938 982.46875 645.8125 977.761719 C 640.546875 973.058594 633.472656 970.980469 627.621094 967.03125 C 607.972656 953.761719 641.089844 933.140625 638.589844 906.921875 C 711.601562 892.558594 772.199219 841.761719 817.367188 782.628906 C 847.625 743.011719 863.761719 759.230469 926.453125 735.011719 C 910.683594 717.390625 918.503906 683.03125 926.53125 665.421875 C 943.484375 712.949219 1087.570312 735.609375 1114.871094 841.339844 C 1127.078125 888.628906 1098.808594 975.269531 1043.421875 1020.828125 C 1106.738281 994.140625 1147.988281 939.53125 1154.539062 881.871094 C 1187.769531 970.03125 1147.828125 1089.910156 1062 1132.988281 C 1131.679688 1131.769531 1177.460938 1064.121094 1187.039062 1005.761719 C 1191.660156 1052.738281 1173.96875 1100.820312 1148.101562 1140.300781 C 1122.230469 1179.789062 1082.570312 1210.050781 1037.648438 1224.570312 C 1093.871094 1223.269531 1149.488281 1199.5 1187.039062 1157.621094 C 1172.429688 1289.609375 1078.648438 1296.808594 1109.601562 1386.191406 L 1109.789062 1386.191406 C 1109.789062 1386.359375 1109.769531 1386.519531 1109.769531 1386.699219 C 1120.050781 1388.890625 1127.761719 1398.03125 1127.761719 1408.96875 C 1127.761719 1421.550781 1117.570312 1431.75 1104.988281 1431.75 L 1104.578125 1431.75 C 1103.378906 1431.75 1102.410156 1432.71875 1102.410156 1433.921875 L 1102.410156 1441.648438 C 1102.410156 1442.839844 1103.378906 1443.808594 1104.578125 1443.808594 C 1115.300781 1443.808594 1125.101562 1452.210938 1129.898438 1465.519531 L 1157.828125 1542.820312 C 1161.449219 1552.839844 1161.671875 1563.53125 1159.398438 1572.921875 C 1382.210938 1487.839844 1540.460938 1272.101562 1540.460938 1019.390625 C 1540.460938 692.269531 1275.269531 427.078125 948.148438 427.078125 Z" />
              </motion.svg>
              {/* Close X icon - Visible when menu is open */}
              <motion.svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0"
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0,
                  scale: isMenuOpen ? 1 : 0.8,
                  rotate: isMenuOpen ? 0 : 90
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
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
