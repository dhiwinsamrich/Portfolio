"use client";
 
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { KnightFuryChat } from "./knight-fury-chat";
import { Button } from "./button";
 
export function HeroSection() {
  const gradientRef = useRef<HTMLDivElement>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
 
  useEffect(() => {
    // Animate words
    const words = document.querySelectorAll<HTMLElement>(".word");
    words.forEach((word) => {
      const delay = parseInt(word.getAttribute("data-delay") || "0", 10);
      setTimeout(() => {
        word.style.animation = "word-appear 0.8s ease-out forwards";
      }, delay);
    });
 
    // Mouse gradient
    const gradient = gradientRef.current;
    function onMouseMove(e: MouseEvent) {
      if (gradient) {
        gradient.style.left = e.clientX - 192 + "px";
        gradient.style.top = e.clientY - 192 + "px";
        gradient.style.opacity = "1";
      }
    }
    function onMouseLeave() {
      if (gradient) gradient.style.opacity = "0";
    }
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
 
    // Word hover effects
    words.forEach((word) => {
      word.addEventListener("mouseenter", () => {
        word.style.textShadow = "0 0 20px rgba(0, 0, 0, 0.1)";
      });
      word.addEventListener("mouseleave", () => {
        word.style.textShadow = "none";
      });
    });
 
    // Click ripple effect
    function onClick(e: MouseEvent) {
      const ripple = document.createElement("div");
      ripple.style.position = "fixed";
      ripple.style.left = e.clientX + "px";
      ripple.style.top = e.clientY + "px";
      ripple.style.width = "4px";
      ripple.style.height = "4px";
      ripple.style.background = "rgba(0, 0, 0, 0.1)";
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.pointerEvents = "none";
      ripple.style.animation = "pulse-glow 1s ease-out forwards";
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    }
    document.addEventListener("click", onClick);
 
    // Floating elements on scroll
    let scrolled = false;
    function onScroll() {
      if (!scrolled) {
        scrolled = true;
        document.querySelectorAll<HTMLElement>(".floating-element").forEach((el, index) => {
          setTimeout(() => {
            el.style.animationPlayState = "running";
          }, index * 200);
        });
      }
    }
    window.addEventListener("scroll", onScroll);
 
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
 
  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-hidden relative w-full"
      style={{
        background: "hsl(var(--background))",
      }}
    >
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: "0.5s" }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: "1s" }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: "1.5s" }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: "2s" }} />
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          className="grid-line"
          style={{ animationDelay: "2.5s", opacity: 0.1 }}
        />
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          className="grid-line"
          style={{ animationDelay: "3s", opacity: 0.1 }}
        />
        <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3s" }} />
        <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3.2s" }} />
        <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.4s" }} />
        <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.6s" }} />
        <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: "4s" }} />
      </svg>
 
      {/* Corner elements */}
      <div className="corner-element top-8 left-8" style={{ animationDelay: "4s" }}>
        <div
          className="absolute top-0 left-0 w-2 h-2 opacity-30"
          style={{ background: "hsl(var(--foreground))" }}
        ></div>
      </div>
      <div className="corner-element top-8 right-8" style={{ animationDelay: "4.2s" }}>
        <div
          className="absolute top-0 right-0 w-2 h-2 opacity-30"
          style={{ background: "hsl(var(--foreground))" }}
        ></div>
      </div>
      <div className="corner-element bottom-8 left-8" style={{ animationDelay: "4.4s" }}>
        <div
          className="absolute bottom-0 left-0 w-2 h-2 opacity-30"
          style={{ background: "hsl(var(--foreground))" }}
        ></div>
      </div>
      <div className="corner-element bottom-8 right-8" style={{ animationDelay: "4.6s" }}>
        <div
          className="absolute bottom-0 right-0 w-2 h-2 opacity-30"
          style={{ background: "hsl(var(--foreground))" }}
        ></div>
      </div>
 
      {/* Floating elements */}
      <div className="floating-element" style={{ top: "25%", left: "15%", animationDelay: "5s" }}></div>
      <div className="floating-element" style={{ top: "60%", left: "85%", animationDelay: "5.5s" }}></div>
      <div className="floating-element" style={{ top: "40%", left: "10%", animationDelay: "6s" }}></div>
      <div className="floating-element" style={{ top: "75%", left: "90%", animationDelay: "6.5s" }}></div>
 
      <div 
        className="relative z-10 min-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20"
      >
        {/* Top tagline */}
        <div className="text-center w-full">
          <h2
            className="text-[10px] xs:text-xs sm:text-sm md:text-base font-mono font-light uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground break-all sm:break-normal"
          >
            <span className="word inline-block" data-delay="0">
              WELCOME
            </span>
            <span className="word inline-block mx-0.5 sm:mx-1" data-delay="200">
              TO
            </span>
            <span className="word inline-block mx-0.5 sm:mx-1" data-delay="400">
              <b>MYPLAYGROUND</b>
            </span>
            <span className="word inline-block mx-0.5 sm:mx-1" data-delay="600">
              —
            </span>
            <span className="word inline-block mx-0.5 sm:mx-1" data-delay="800">
              WHERE
            </span>
            <span className="word inline-block mx-0.5 sm:mx-1" data-delay="1000">
              CREATIVITY
            </span>
            <span className="word inline-block mx-0.5 sm:mx-1" data-delay="1200">
              MEETS
            </span>
            <span className="word inline-block mx-0.5 sm:mx-1" data-delay="1400">
              INNOVATION.
            </span>
          </h2>
          <div
            className="mt-3 sm:mt-4 w-12 sm:w-16 h-px opacity-30 mx-auto"
            style={{
              background: `linear-gradient(to right, transparent, hsl(var(--foreground)), transparent)`,
            }}
          ></div>
        </div>
 
        {/* Main headline */}
        <div className="text-center w-full max-w-[95%] sm:max-w-4xl md:max-w-5xl mx-auto relative px-2">
          <h1
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight leading-[1.1] sm:leading-tight tracking-tight text-decoration text-foreground"
          >
            <div className="mb-3 sm:mb-4 md:mb-6 ">
              <span className="word inline-block" data-delay="1600">
                CREATIVITY_
              </span>
              <span className="word inline-block" data-delay="1750">
                IS_
              </span>
              <span className="word inline-block" data-delay="1900">
                INTELLIGENCE_
              </span>
              <span className="word inline-block" data-delay="2050">
                HAVING_
              </span>
              <span className="word inline-block" data-delay="2200">
                FUN.
              </span>
            </div>
            <div
              className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-thin leading-relaxed text-muted-foreground"
            >
              <span className="word inline-block" data-delay="2600">
                IN_
              </span>
              <span className="word inline-block" data-delay="2750">
                THIS_
              </span>
              <span className="word inline-block" data-delay="2900">
                PLAYGROUND,
              </span>
              <span className="word inline-block" data-delay="3050">
                I_
              </span>
              <span className="word inline-block" data-delay="3200">
                EXPLORE_
              </span>
              <span className="word inline-block" data-delay="3350">
                THE_
              </span>
              <span className="word inline-block" data-delay="3500">
                BOUNDARIES_
              </span>
              <span className="word inline-block" data-delay="3650">
                OF_
              </span>
              <span className="word inline-block" data-delay="3800">
                WHAT'S_
              </span>
              <span className="word inline-block" data-delay="3950">
                POSSIBLE.
              </span>
            </div>
          </h1>
          <div
            className="hidden sm:block absolute -left-4 md:-left-8 top-1/2 w-3 md:w-4 h-px opacity-20"
            style={{
              background: "hsl(var(--foreground))",
              animation: "word-appear 1s ease-out forwards",
              animationDelay: "3.5s",
            }}
          ></div>
          <div
            className="hidden sm:block absolute -right-4 md:-right-8 top-1/2 w-3 md:w-4 h-px opacity-20"
            style={{
              background: "hsl(var(--foreground))",
              animation: "word-appear 1s ease-out forwards",
              animationDelay: "3.7s",
            }}
          ></div>
        </div>

        {/* Meet The Knight Fury Button */}
        <div className="text-center w-full my-6 sm:my-8 md:my-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.2, duration: 0.6 }}
          >
            <Button
              onClick={() => setIsChatOpen(true)}
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-mono uppercase tracking-wider border border-foreground/20 hover:bg-foreground hover:text-background transition-all duration-300"
              variant="outline"
            >
              Meet The Knight Fury
            </Button>
          </motion.div>
        </div>
 
        {/* Bottom tagline */}
        <div className="text-center w-full">
          <div
            className="mb-3 sm:mb-4 w-12 sm:w-16 h-px opacity-30 mx-auto"
            style={{
              background: `linear-gradient(to right, transparent, hsl(var(--foreground)), transparent)`,
            }}
          ></div>
          <h2
            className="text-[10px] xs:text-xs sm:text-sm md:text-base font-mono font-light uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground break-all sm:break-normal"
          >
            <span className="word inline-block" data-delay="4400">
              BLENDING_
            </span>
            <span className="word inline-block mx-0.5 sm:mx-1" data-delay="4550">
              TECHNICAL_
            </span>
            <span className="word inline-block mx-0.5 sm:mx-1" data-delay="4700">
              SKILLS_
            </span>
            <span className="word inline-block mx-0.5 sm:mx-1" data-delay="4850">
              WITH_
            </span>
            <span className="word inline-block mx-0.5 sm:mx-1" data-delay="5000">
              ARTISTIC_
            </span>
            <span className="word inline-block mx-0.5 sm:mx-1" data-delay="5150">
              VISION.
            </span>
          </h2>
          <div
            className="mt-6 flex justify-center space-x-4 opacity-0"
            style={{
              animation: "word-appear 1s ease-out forwards",
              animationDelay: "4.5s",
            }}
          >
            <div
              className="w-1 h-1 rounded-full opacity-40"
              style={{ background: "hsl(var(--foreground))" }}
            ></div>
            <div
              className="w-1 h-1 rounded-full opacity-60"
              style={{ background: "hsl(var(--foreground))" }}
            ></div>
            <div
              className="w-1 h-1 rounded-full opacity-40"
              style={{ background: "hsl(var(--foreground))" }}
            ></div>
          </div>
        </div>
      </div>
 
      <div
        id="mouse-gradient"
        ref={gradientRef}
        className="fixed pointer-events-none w-96 h-96 rounded-full blur-3xl transition-all duration-500 ease-out opacity-0"
        style={{
          background: `radial-gradient(circle, hsl(var(--foreground) / 0.05) 0%, transparent 100%)`,
        }}
      ></div>

      {/* Knight Fury Chat Dialog */}
      <KnightFuryChat open={isChatOpen} onOpenChange={setIsChatOpen} />
    </div>
  );
}

