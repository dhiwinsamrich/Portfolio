"use client";

import type { TargetAndTransition } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const initialProps: TargetAndTransition = {
  pathLength: 0,
  opacity: 0,
  scale: 0.8,
  rotateY: -10,
};

const animateProps: TargetAndTransition = {
  pathLength: 1,
  opacity: 1,
  scale: 1,
  rotateY: 0,
  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
};

type Props = React.ComponentProps<typeof motion.svg> & {
  speed?: number;
  onAnimationComplete?: () => void;
};

// New text-based component for Knight's Gambit
type TextEffectProps = {
  speed?: number;
  onAnimationComplete?: () => void;
  className?: string;
};

function KnightsGambitTextEffect({
  className,
  speed = 1,
  onAnimationComplete,
}: TextEffectProps) {
  const text = "Knight's Gambit !";
  const chars = text.split("");
  const calc = (x: number) => x * speed;

  return (
    <motion.div
      className={cn("flex items-center justify-center", className)}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <motion.h1
        className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight"
        style={{ fontFamily: "var(--font-sans)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {chars.map((char, index) => (
          <motion.span
            key={`char-${char}-${index}`}
            className="inline-block"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: calc(0.1),
              delay: calc(index * 0.05),
              ease: [0.25, 0.1, 0.25, 1],
            }}
            onAnimationComplete={
              index === chars.length - 1 ? onAnimationComplete : undefined
            }
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
}

function GameOnTextEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  const calc = (x: number) => x * speed;

  return (
    <motion.svg
      className={cn("h-32", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 250"
      fill="none"
      stroke="currentColor"
      strokeWidth="22"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ opacity: 1, scale: 0.8, rotateX: 8 }}
      exit={{ opacity: 0, scale: 0.6, rotateX: -8 }}
      transition={{
        duration: 0.7,
        type: "spring",
        stiffness: 140,
        damping: 18,
      }}
      {...props}
    >
      <title>Kinght's Gambit!</title>

      {/* G - Geometric G shape */}
      <motion.g>
        <motion.path
          d="M40 60L40 190L120 190L160 150L120 110L40 110"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.6),
            ease: "easeOut",
            type: "spring",
            stiffness: 280,
            damping: 20,
            opacity: { duration: 0.3 },
            scale: { duration: 0.4 },
          }}
        />
        <motion.path
          d="M120 150L160 150"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.4),
            ease: "easeInOut",
            delay: calc(0.3),
            type: "spring",
            stiffness: 320,
            damping: 22,
            opacity: { duration: 0.25, delay: calc(0.3) },
            scale: { duration: 0.35, delay: calc(0.3) },
          }}
        />
      </motion.g>

      {/* a - Geometric a shape */}
      <motion.g>
        <motion.path
          d="M200 190L200 140L240 140L280 110L280 190"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.6),
            ease: "easeOut",
            delay: calc(0.8),
            type: "spring",
            stiffness: 260,
            damping: 19,
            opacity: { duration: 0.3, delay: calc(0.8) },
            scale: { duration: 0.4, delay: calc(0.8) },
          }}
        />
        <motion.path
          d="M200 140L240 140L240 110"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.5),
            ease: "easeInOut",
            delay: calc(1.1),
            type: "spring",
            stiffness: 300,
            damping: 21,
            opacity: { duration: 0.25, delay: calc(1.1) },
            scale: { duration: 0.35, delay: calc(1.1) },
          }}
        />
      </motion.g>

      {/* m - Geometric m shape */}
      <motion.g>
        <motion.path
          d="M320 190L320 110L360 110L400 150L440 110L480 110L480 190"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.8),
            ease: "easeInOut",
            delay: calc(1.6),
            type: "spring",
            stiffness: 240,
            damping: 18,
            opacity: { duration: 0.35, delay: calc(1.6) },
            scale: { duration: 0.45, delay: calc(1.6) },
          }}
        />
        <motion.path
          d="M360 110L400 150L440 110"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.5),
            ease: "easeInOut",
            delay: calc(1.9),
            type: "spring",
            stiffness: 300,
            damping: 21,
            opacity: { duration: 0.25, delay: calc(1.9) },
            scale: { duration: 0.35, delay: calc(1.9) },
          }}
        />
      </motion.g>

      {/* e - Geometric e shape */}
      <motion.g>
        <motion.path
          d="M520 110L520 190"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.5),
            ease: "easeOut",
            delay: calc(2.4),
            type: "spring",
            stiffness: 260,
            damping: 19,
            opacity: { duration: 0.3, delay: calc(2.4) },
            scale: { duration: 0.4, delay: calc(2.4) },
          }}
        />
        <motion.path
          d="M520 110L580 110"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.4),
            ease: "easeInOut",
            delay: calc(2.7),
            type: "spring",
            stiffness: 300,
            damping: 21,
            opacity: { duration: 0.25, delay: calc(2.7) },
            scale: { duration: 0.35, delay: calc(2.7) },
          }}
        />
        <motion.path
          d="M520 150L560 150"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.4),
            ease: "easeInOut",
            delay: calc(3.0),
            type: "spring",
            stiffness: 300,
            damping: 21,
            opacity: { duration: 0.25, delay: calc(3.0) },
            scale: { duration: 0.35, delay: calc(3.0) },
          }}
        />
        <motion.path
          d="M520 190L580 190"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.4),
            ease: "easeInOut",
            delay: calc(3.3),
            type: "spring",
            stiffness: 300,
            damping: 21,
            opacity: { duration: 0.25, delay: calc(3.3) },
            scale: { duration: 0.35, delay: calc(3.3) },
          }}
        />
      </motion.g>

      {/* O - Geometric O shape */}
      <motion.path
        d="M620 110L680 110L720 150L720 190L680 190L620 150L620 110"
        style={{ strokeLinecap: "square", strokeLinejoin: "miter" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          delay: calc(3.6),
          type: "spring",
          stiffness: 180,
          damping: 16,
          opacity: { duration: 0.4, delay: calc(3.6) },
          scale: { duration: 0.6, delay: calc(3.6) },
        }}
      />

      {/* n - Geometric n shape */}
      <motion.path
        d="M760 190L760 110L800 110L840 150L840 190"
        style={{ strokeLinecap: "square", strokeLinejoin: "miter" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.7),
          ease: "easeInOut",
          delay: calc(4.4),
          type: "spring",
          stiffness: 220,
          damping: 16,
          opacity: { duration: 0.35, delay: calc(4.4) },
          scale: { duration: 0.5, delay: calc(4.4) },
        }}
      />

      {/* Exclamation mark */}
      <motion.g>
        <motion.path
          d="M880 60L880 160"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.5),
            ease: "easeOut",
            delay: calc(5.1),
            type: "spring",
            stiffness: 280,
            damping: 20,
            opacity: { duration: 0.3, delay: calc(5.1) },
            scale: { duration: 0.4, delay: calc(5.1) },
          }}
        />
        <motion.rect
          x="875"
          y="180"
          width="10"
          height="10"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={{ ...initialProps, pathLength: 1 }}
          animate={{ ...animateProps, pathLength: 1 }}
            transition={{
              duration: calc(0.3),
              delay: calc(5.4),
              type: "spring",
              stiffness: 400,
              opacity: { duration: 0.2, delay: calc(5.4) },
              scale: { duration: 0.3, delay: calc(5.4) },
            }}
            onAnimationComplete={onAnimationComplete}
        />
      </motion.g>
    </motion.svg>
  );
}

export { GameOnTextEffect, KnightsGambitTextEffect };

