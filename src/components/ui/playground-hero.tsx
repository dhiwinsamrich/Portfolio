"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GLSLHills } from "./glsl-hills";
import { KnightFuryChat } from "./knight-fury-chat";
import { Button } from "./button";

export function PlaygroundHero() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden min-h-screen">
      <GLSLHills width="100vw" height="100vh" />
      
      {/* My PlayGround Heading - Floating at top */}
      {/* <div className="absolute top-0 left-0 w-full z-30 pointer-events-none" style={{ paddingTop: '144px' }}>
        <div className="play-heading-container">
          <PageHeading firstWord="My" secondWord="PlayGround" />
        </div>
      </div> */}
      
      <div className="space-y-6 pointer-events-none z-10 text-center absolute">
        <h1 className="font-semibold text-7xl whitespace-pre-wrap" style={{ fontFamily: 'var(--font-sans)' }}>
          <span className="italic text-6xl font-thin" style={{ fontFamily: 'var(--font-serif)' }}>
            My Creativity Speaks <br />
          </span>
          Louder Than Words
        </h1>
        <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
          I explore the boundaries of what's possible, blending technical skills with artistic vision. <br/> This is my playground where curiosity meets courage, and every project is a bold move forward.
        </p>
      </div>

      {/* Meet The Knight Fury Button */}
      <div className="text-center w-full my-6 sm:my-8 md:my-12 z-20 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
        </motion.div>
      </div>

      {/* Knight Fury Chat Dialog */}
      <KnightFuryChat open={isChatOpen} onOpenChange={setIsChatOpen} />
    </div>
  );
}

