import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, TrendingUp, Globe } from 'lucide-react';
import FeedbackSlider from '../components/ui/feedback-slider';
import InteractiveImageBentoGallery from '../components/ui/bento-gallery';
import { AboutMe } from '../components/ui/about-me';
import { WavePath } from '../components/ui/wave-path';
import Footer from '../components/Footer';
import { bentoImageItems } from '../data/play';
import './Home.css';

const Play = () => {
  return (
    <div className="home-page min-h-screen">
      {/* Hero Section with Feedback Slider */}
      <div 
        className="w-full md:h-[700px] flex items-center justify-center overflow-hidden relative"
        style={{
          height: '100dvh',
          minHeight: '-webkit-fill-available',
        }}
      >
        <FeedbackSlider className="h-full w-full" />
        
      </div>

      <main className="home-main py-0">
        <section className="py-0 md:py-0">
          <InteractiveImageBentoGallery
            imageItems={bentoImageItems}
            title="Visual Gallery"
            description="Drag to explore, click to expand. A curated collection of my photography and creative moments captured through different lenses and perspectives."
          />
        </section>

        {/* Quote Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Sparkles className="h-12 w-12 mx-auto mb-6 text-primary" />
            <blockquote className="text-2xl md:text-3xl font-light italic text-foreground mb-6 leading-relaxed">
              "Creativity is intelligence having fun. In this playground, I explore the boundaries of what's possible,
              blending technical skills with artistic vision to create something truly unique."
            </blockquote>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Zap className="h-4 w-4" />
              <span className="text-sm">Always experimenting, always learning</span>
            </div>
          </motion.div>
        </section>

        {/* Wave Section */}
        <section className="wave-section relative w-full flex flex-col items-center justify-center py-20 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(var(--foreground)/.1),transparent_50%)] blur-[30px]"
          />
          <div className="flex w-[80vw] flex-col items-center">
            <WavePath className="mb-10" />
            <div className="flex w-full flex-col items-center">
              <div className="flex items-center justify-center gap-3 flex-wrap md:flex-nowrap">
                <p className="text-muted-foreground text-sm whitespace-nowrap">PLAYGROUND :)</p>
                <p className="text-foreground/80 text-2xl md:text-4xl whitespace-nowrap">
                  Where Creativity Meets Innovation !
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="w-full overflow-visible">
          <AboutMe />
        </section>

        {/* Call to Action Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20"
          >
            <Globe className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Create Something Together
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Interested in collaborating on a creative project? Whether it's photography, videography, or design,
              I'm always open to new opportunities and exciting challenges.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <TrendingUp className="h-4 w-4" />
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Play;

