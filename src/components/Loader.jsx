import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GameOnTextEffect } from './ui/text-effect';

const Loader = ({ onComplete }) => {
  const [phase, setPhase] = useState('loading'); // 'loading' -> 'moving' -> 'complete'
  const [navbarPosition, setNavbarPosition] = useState(null);

  useEffect(() => {
    // Get navbar position - we'll use a fixed position since navbar is fixed
    // Top left area: approximately -45% x, -48% y, scale to 0.15
    setNavbarPosition({ x: -45, y: -48, scale: 0.15 });
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
            <GameOnTextEffect
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

