import React from 'react';
import FeedbackSlider from '../components/ui/feedback-slider';
import InteractiveBentoGallery from '../components/ui/interactive-bento-gallery';
import Footer from '../components/Footer';
import { mediaItems } from '../data/play';
import './Home.css';

const Play = () => {
  return (
    <div className="home-page min-h-screen">
      {/* Feedback Slider */}
      <div 
        className="w-full md:h-[700px] flex items-center justify-center overflow-hidden"
        style={{
          height: '100vh',
          height: '100dvh', // Dynamic viewport height for mobile
          minHeight: '100vh',
          minHeight: '-webkit-fill-available', // iOS Safari fix
        }}
      >
        <FeedbackSlider className="h-full w-full" />
      </div>

      <main className="home-main py-12">
        <InteractiveBentoGallery
          mediaItems={mediaItems}
          title="My Passions & Gallery"
          description="Drag to rearrange, click to explore. A collection of my photography and videography work."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Play;

