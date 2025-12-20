import React from 'react';
import FeedbackSlider from '../components/ui/feedback-slider';
import InteractiveImageBentoGallery from '../components/ui/bento-gallery';
import { Testimonial } from '../components/ui/design-testimonial';
import Footer from '../components/Footer';
import { bentoImageItems } from '../data/play';
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
        <InteractiveImageBentoGallery
          imageItems={bentoImageItems}
          title="My Gallery"
          description="Drag to explore, click to expand. A collection of my photography moments."
        />
        
        {/* Testimonials Section */}
        <div className="w-full mt-20">
          <Testimonial />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Play;

