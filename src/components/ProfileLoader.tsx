import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProfileCard } from './ui/profile-card';

interface ProfileLoaderProps {
  onComplete: () => void;
}

const ProfileLoader = ({ onComplete }: ProfileLoaderProps) => {
  const [showCard, setShowCard] = useState(true);

  const handleViewPortfolio = () => {
    setShowCard(false);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <AnimatePresence>
      {showCard && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <ProfileCard
              name="Dhiwin Samrich"
              title="AI/ML Engineer who focuses on simplicity & usability."
              avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
              currentPosition={{
                role: "AI/ML Intern",
                company: "White Mastery Systems Pvt Ltd",
                experience: "4 Months"
              }}
              showOpenToWork={true}
              instagramUrl="https://instagram.com/dhiwinsamrich"
              twitterUrl="https://twitter.com/dhiwinsamrich"
              githubUrl="https://github.com/dhiwinsamrich"
              linkedinUrl="https://linkedin.com/in/dhiwinsamrich"
              onViewPortfolio={handleViewPortfolio}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileLoader;
