import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { KnightsGambitTextEffect } from './ui/text-effect';

const Loader = ({ onComplete }) => {
  const [phase, setPhase] = useState('loading'); // 'loading' -> 'moving' -> 'complete'
  const [navbarPosition, setNavbarPosition] = useState(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Calculate navbar position dynamically
    const calculatePosition = () => {
      const navbarElement = document.querySelector('[data-navbar-logo]');
      if (navbarElement && textRef.current) {
        const navbarRect = navbarElement.getBoundingClientRect();
        const textRect = textRef.current.getBoundingClientRect();
        
        // Calculate the position to move the text to match navbar logo
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const targetX = navbarRect.left + navbarRect.width / 2;
        const targetY = navbarRect.top + navbarRect.height / 2;
        
        const deltaX = targetX - centerX;
        const deltaY = targetY - centerY;
        
        // Calculate scale (navbar text is much smaller)
        const scale = navbarRect.width / textRect.width * 0.8; // Slightly smaller for better fit
        
        setNavbarPosition({ 
          x: (deltaX / window.innerWidth) * 100, 
          y: (deltaY / window.innerHeight) * 100, 
          scale: scale 
        });
      } else {
        // Fallback position if navbar not found
        setNavbarPosition({ x: -45, y: -48, scale: 0.15 });
      }
    };

    // Wait a bit for DOM to be ready
    const timer = setTimeout(calculatePosition, 100);
    window.addEventListener('resize', calculatePosition);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculatePosition);
    };
  }, []);

  const handleTextAnimationComplete = () => {
    // Wait a bit before starting the move animation
    setTimeout(() => {
      setPhase('moving');
    }, 500);
  };

  useEffect(() => {
    if (phase === 'moving' && navbarPosition) {
      // After move animation completes, call onComplete
      const timer = setTimeout(() => {
        setPhase('complete');
        setTimeout(() => {
          onComplete();
        }, 300);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [phase, navbarPosition, onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'complete' && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            ref={textRef}
            className="text-foreground"
            style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}
            initial={{ scale: 1, x: 0, y: 0 }}
            animate={
              phase === 'moving' && navbarPosition
                ? {
                    x: `${navbarPosition.x}vw`,
                    y: `${navbarPosition.y}vh`,
                    scale: navbarPosition.scale,
                    opacity: 1,
                  }
                : {
                    scale: 1,
                    x: 0,
                    y: 0,
                    opacity: 1,
                  }
            }
            transition={{
              duration: phase === 'moving' ? 0.8 : 0,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <KnightsGambitTextEffect
              speed={0.8}
              onAnimationComplete={handleTextAnimationComplete}
              className="h-40 md:h-48 lg:h-56"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;

