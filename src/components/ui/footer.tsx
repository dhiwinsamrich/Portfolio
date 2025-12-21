"use client"
import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import InfinitePlaneBg from "./infinite-plane"

// Animation variants for reusability
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
}

const socialVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 10,
    },
  },
}

const backgroundVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      ease: "easeOut" as const,
    },
  },
}

// Reusable components
const NavSection = ({ links, index }: { links: { label: string; href: string; center?: string; right?: string }[]; index: number }) => (
  <motion.div variants={itemVariants} custom={index} className="flex flex-row flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center items-center px-2">
    {links.map((link, linkIndex) => (
      <motion.div
        key={linkIndex}
        variants={linkVariants}
        custom={linkIndex}
        whileHover={{
          y: -2,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-sans text-[10px] sm:text-xs md:text-sm group relative whitespace-nowrap"
      >
        <Link to={link.href} className="relative">
          <span className="relative flex items-baseline gap-0.5 sm:gap-1">
            <span className="uppercase tracking-wider">{link.label}</span>
            {link.center && (
              <span className="italic normal-case opacity-70 text-[9px] sm:text-[10px] md:text-xs">{link.center}</span>
            )}
            {link.right && (
              <span className="normal-case opacity-70 text-[9px] sm:text-[10px] md:text-xs">{link.right}</span>
            )}
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 bg-primary"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </span>
        </Link>
      </motion.div>
    ))}
  </motion.div>
)

const SocialLink = ({ href, label, icon, index }: { href: string; label: string; icon: React.ReactNode; index: number }) => (
  <motion.a
    variants={socialVariants}
    custom={index}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{
      scale: 1.2,
      rotate: 12,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    }}
    whileTap={{ scale: 0.9 }}
    className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-muted hover:bg-gradient-to-r hover:from-primary hover:to-secondary flex items-center justify-center transition-colors duration-300 group"
    aria-label={label}
  >
    <motion.div
      className="text-muted-foreground group-hover:text-primary-foreground"
      whileHover={{ scale: 1.1 }}
    >
      {icon}
    </motion.div>
  </motion.a>
)

interface StickyFooterProps {
  sections?: { title: string; links: { label: string; href: string; center?: string; right?: string }[] }[];
  social?: { href: string; label: string; icon: React.ReactNode }[];
  title?: string;
  subtitle?: string;
  copyright?: string;
  currentTime?: string;
  scrollToTop?: () => void;
}

// Chess Board Pattern Component
const ChessBoardPattern = () => (
  <div className="absolute inset-0 opacity-[0.03] z-0">
    <div className="w-full h-full" style={{
      backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 50px, hsl(var(--foreground)) 50px, hsl(var(--foreground)) 51px),
        repeating-linear-gradient(90deg, transparent, transparent 50px, hsl(var(--foreground)) 50px, hsl(var(--foreground)) 51px)
      `,
      backgroundSize: '100px 100px',
    }} />
  </div>
)

// Chess Notation Divider
const ChessNotationDivider = () => (
  <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="relative w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-border to-transparent my-3 sm:my-4"
  >
    <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[8px] font-mono text-muted-foreground/40">
      a8
    </div>
    <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[8px] font-mono text-muted-foreground/40">
      h1
    </div>
  </motion.div>
)

// Chess Quote Component
const ChessQuote = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.4, duration: 0.8 }}
    className="text-center max-w-2xl mx-auto px-4"
  >
    <motion.p
      className="text-xs sm:text-sm md:text-base text-muted-foreground/80 italic font-serif mb-1 sm:mb-2 px-2"
      whileHover={{ scale: 1.02 }}
    >
      "Every move is a decision, every decision shapes the game"
    </motion.p>
    <p className="text-xs text-muted-foreground/50 font-mono">
      — Knight's Gambit Philosophy
    </p>
  </motion.div>
)

export default function StickyFooter({
  sections = [
    { title: "Navigation", links: [
      { label: "WORKS", href: "/projects", center: "i've", right: "done" },
      { label: "MY", href: "/play", center: "play", right: "GROUND" },
      { label: "ABOUT", href: "/about", center: "me" },
      { label: "CONTACT", href: "/contact", center: "me" },
    ]},
  ],
  social = [],
  title = "Dhiwin Samrich",
  subtitle = "AI/ML Engineer / Working Worldwide",
  copyright = `©${new Date().getFullYear()} Dhiwin Samrich. All rights reserved.`,
  scrollToTop,
}: StickyFooterProps) {
  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-6 md:pt-12 pb-20 md:pb-32 px-3 sm:px-4 md:px-12 w-full flex flex-col justify-center items-center relative overflow-hidden mt-20 min-h-[500px] sm:min-h-[550px] bg-gradient-to-b from-transparent via-background/50 to-background"
    >
            {/* Chess Board Pattern Background */}
            <ChessBoardPattern />
            
            {/* Infinite Plane Shader Background - Knight's Gambit Theme */}
            <InfinitePlaneBg 
              planeHeight={0} 
              speed={0.5} 
              className="z-0"
              ariaLabel="Knight's Gambit infinite plane background"
            />

            <motion.div
              variants={backgroundVariants}
              className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl z-[1]"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.div
              variants={backgroundVariants}
              className="absolute bottom-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-3xl z-[1]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* Footer Content - Vertical Stack Layout */}
            <div className="relative z-[10] w-full max-w-10xl mx-auto flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
              {/* Chess Notation Divider - Top */}
              <ChessNotationDivider />

              {/* Navigation Section - Horizontal with wrapping */}
              <motion.div variants={containerVariants} className="w-full max-w-full flex justify-center px-2 sm:px-4">
                {sections.map((section, index) => (
                  <NavSection key={section.title} links={section.links} index={index} />
                ))}
              </motion.div>

              {/* Chess Quote */}
              <ChessQuote />

              {/* Social Links and Copyright - Same line on md+ */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 md:gap-0 w-full relative px-2 sm:px-4"
              >
                {/* Copyright - Left aligned on md+ */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="text-muted-foreground text-xs md:text-sm hover:text-foreground transition-colors duration-300 text-center md:text-left font-mono md:absolute md:left-0"
                >
                  {copyright}
                </motion.p>

                {/* Social Links - Centered on md+ */}
                {social.length > 0 && (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.6, staggerChildren: 0.1 }}
                    className="flex gap-2 md:gap-3 justify-center md:mx-auto"
                  >
                    {social.map((socialItem, index) => (
                      <SocialLink
                        key={socialItem.label}
                        href={socialItem.href}
                        label={socialItem.label}
                        icon={socialItem.icon}
                        index={index}
                      />
                    ))}
                  </motion.div>
                )}

                {/* Chess Pieces - Right aligned on md+ */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2, duration: 0.5 }}
                  className="flex items-center gap-1 md:gap-2 text-lg md:text-xl font-serif md:absolute md:right-0"
                >
                  {/* Black pieces: pawn, bishop, rook, queen, king */}
                  <span className="text-foreground">♟</span>
                  <span className="text-foreground">♝</span>
                  <span className="text-foreground">♜</span>
                  <span className="text-foreground">♛</span>
                  <span className="text-foreground">♚</span>
                  {/* Black knight */}
                  <span className="text-foreground">♞</span>
                  {/* White knight (facing the black knight) */}
                  <span className="text-muted-foreground transform scale-x-[-1]">♘</span>
                </motion.div>
              </motion.div>
            </div>
    </motion.footer>
  )
}

