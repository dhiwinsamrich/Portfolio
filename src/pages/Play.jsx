import React from 'react';
import { FullScreenScrollFX } from '../components/ui/full-screen-scroll-fx';
import InteractiveBentoGallery from '../components/ui/interactive-bento-gallery';
import Footer from '../components/Footer';
import { scrollSections, mediaItems } from '../data/play';
import './Home.css';

const Play = () => {
  return (
    <div className="home-page min-h-screen">
      {/* Full Screen Scroll Effect */}
      <FullScreenScrollFX
        sections={scrollSections}
        header={<><div>The Creative</div><div>Process</div></>}
        footer={<div></div>}
        showProgress
        durations={{ change: 0.7, snap: 800 }}
      />

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

