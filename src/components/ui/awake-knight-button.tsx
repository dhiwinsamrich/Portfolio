"use client";

import React, { useState } from "react";

interface AwakeKnightButtonProps {
  onClick: () => void;
}

export const AwakeKnightButton = ({ onClick }: AwakeKnightButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    
    // Delay the popup by 2 seconds
    setTimeout(() => {
      onClick();
      setIsActive(false);
    }, 2000);
  };

  return (
    <div className="relative flex flex-col items-center gap-4">
      {/* Attractive Heading Text */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
          Meet Your AI Companion
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-md" style={{ fontFamily: 'var(--font-sans)' }}>
          Ask anything about my work, projects, or achievements. I'm here to help you explore.
        </p>
      </div>

      <button
        className={`
          relative flex items-center justify-center
          font-sans text-base font-normal
          bg-[#101010]
          border border-white/10 rounded-[24px]
          cursor-pointer select-none
          transition-all duration-500 ease-in-out
          hover:border-blue-400/40
          shadow-[inset_0px_1px_1px_rgba(255,255,255,0.2),inset_0px_2px_2px_rgba(255,255,255,0.15),inset_0px_4px_4px_rgba(255,255,255,0.1),inset_0px_8px_8px_rgba(255,255,255,0.05),inset_0px_16px_16px_rgba(255,255,255,0.05),0px_-1px_1px_rgba(0,0,0,0.02),0px_-2px_2px_rgba(0,0,0,0.03),0px_-4px_4px_rgba(0,0,0,0.05),0px_-8px_8px_rgba(0,0,0,0.06),0px_-16px_16px_rgba(0,0,0,0.08)]
        `}
        onClick={handleClick}
        style={{ 
          fontFamily: 'var(--font-sans)',
          letterSpacing: '0.3px',
          padding: isActive ? '12px 24px' : '12px 20px',
          minWidth: isActive ? '14em' : '10em'
        }}
      >
        {/* Before pseudo-element effect */}
        <div
          className="absolute -inset-[4px] rounded-[28px] pointer-events-none z-[-1] transition-all duration-[400ms] bg-gradient-to-b from-black/40 to-black/100 shadow-[0_-8px_8px_-6px_transparent_inset,0_-16px_16px_-8px_transparent_inset,1px_1px_1px_rgba(255,255,255,0.2),2px_2px_2px_rgba(255,255,255,0.1),-1px_-1px_1px_rgba(0,0,0,0.2),-2px_-2px_2px_rgba(0,0,0,0.1)]"
        />

        {/* SVG Icon */}
        <svg
          className="flex-grow h-6 mr-2 fill-gray-200 transition-all duration-[400ms]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={{
            animation: isActive ? 'none' : 'flicker 2s linear infinite',
            animationDelay: '0.5s'
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
          />
        </svg>

        {/* Text Wrapper */}
        <div className="relative flex items-center h-6" style={{ width: isActive ? '13em' : '10em', transition: 'width 0.5s ease-in-out' }}>
          <div
            className={`
              absolute whitespace-nowrap
              transition-opacity duration-300
              ${isActive ? 'opacity-0' : 'opacity-100'}
            `}
          >
            <span className="inline-block text-white/50" style={{ animation: 'letter-glow 2s ease-in-out infinite', animationDelay: '0s' }}>A</span>
            <span className="inline-block text-white/50" style={{ animation: 'letter-glow 2s ease-in-out infinite', animationDelay: '0.08s' }}>w</span>
            <span className="inline-block text-white/50" style={{ animation: 'letter-glow 2s ease-in-out infinite', animationDelay: '0.16s' }}>a</span>
            <span className="inline-block text-white/50" style={{ animation: 'letter-glow 2s ease-in-out infinite', animationDelay: '0.24s' }}>k</span>
            <span className="inline-block text-white/50" style={{ animation: 'letter-glow 2s ease-in-out infinite', animationDelay: '0.32s' }}>e</span>
            <span className="inline-block text-white/50 w-2" style={{ animation: 'letter-glow 2s ease-in-out infinite', animationDelay: '0.4s' }}> </span>
            <span className="inline-block text-white/50" style={{ animation: 'letter-glow 2s ease-in-out infinite', animationDelay: '0.48s' }}>K</span>
            <span className="inline-block text-white/50" style={{ animation: 'letter-glow 2s ease-in-out infinite', animationDelay: '0.56s' }}>n</span>
            <span className="inline-block text-white/50" style={{ animation: 'letter-glow 2s ease-in-out infinite', animationDelay: '0.64s' }}>i</span>
            <span className="inline-block text-white/50" style={{ animation: 'letter-glow 2s ease-in-out infinite', animationDelay: '0.72s' }}>g</span>
            <span className="inline-block text-white/50" style={{ animation: 'letter-glow 2s ease-in-out infinite', animationDelay: '0.8s' }}>h</span>
            <span className="inline-block text-white/50" style={{ animation: 'letter-glow 2s ease-in-out infinite', animationDelay: '0.88s' }}>t</span>
            <span className="inline-block text-white/50 w-2" style={{ animation: 'letter-glow 2s ease-in-out infinite', animationDelay: '0.96s' }}> </span>
            <span className="inline-block text-white/50" style={{ animation: 'letter-glow 2s ease-in-out infinite', animationDelay: '1.04s' }}>F</span>
            <span className="inline-block text-white/50" style={{ animation: 'letter-glow 2s ease-in-out infinite', animationDelay: '1.12s' }}>u</span>
            <span className="inline-block text-white/50" style={{ animation: 'letter-glow 2s ease-in-out infinite', animationDelay: '1.2s' }}>r</span>
            <span className="inline-block text-white/50" style={{ animation: 'letter-glow 2s ease-in-out infinite', animationDelay: '1.28s' }}>y</span>
          </div>
          <div
            className={`
              absolute whitespace-nowrap
              transition-opacity duration-300
              ${isActive ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <span className="inline-block text-white/50" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '0s' }}>A</span>
            <span className="inline-block text-white/50" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '0.05s' }}>w</span>
            <span className="inline-block text-white/50" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '0.1s' }}>a</span>
            <span className="inline-block text-white/50" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '0.15s' }}>k</span>
            <span className="inline-block text-white/50" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '0.2s' }}>e</span>
            <span className="inline-block text-white/50" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '0.25s' }}>n</span>
            <span className="inline-block text-white/50" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '0.3s' }}>i</span>
            <span className="inline-block text-white/50" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '0.35s' }}>n</span>
            <span className="inline-block text-white/50" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '0.4s' }}>g</span>
            <span className="inline-block text-white/50 w-2" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '0.45s' }}> </span>
            <span className="inline-block text-white/50" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '0.5s' }}>K</span>
            <span className="inline-block text-white/50" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '0.55s' }}>n</span>
            <span className="inline-block text-white/50" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '0.6s' }}>i</span>
            <span className="inline-block text-white/50" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '0.65s' }}>g</span>
            <span className="inline-block text-white/50" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '0.7s' }}>h</span>
            <span className="inline-block text-white/50" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '0.75s' }}>t</span>
            <span className="inline-block text-white/50 w-2" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '0.8s' }}> </span>
            <span className="inline-block text-white/50" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '0.85s' }}>F</span>
            <span className="inline-block text-white/50" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '0.9s' }}>u</span>
            <span className="inline-block text-white/50" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '0.95s' }}>r</span>
            <span className="inline-block text-white/50" style={{ animation: isActive ? 'letter-fade-in 0.5s ease-out forwards' : 'none', animationDelay: '1s' }}>y</span>
          </div>
        </div>
      </button>

      <style>{`
        @keyframes flicker {
          50% {
            opacity: 0.3;
          }
        }
        @keyframes letter-glow {
          50% {
            text-shadow: 0 0 3px rgba(255, 255, 255, 0.8);
            color: rgba(255, 255, 255, 1);
          }
        }
        @keyframes letter-fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

