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
const NavSection = ({ links, index }: { links: { label: string; href: string }[]; index: number }) => (
  <motion.div variants={itemVariants} custom={index} className="flex flex-row gap-6 md:gap-8 justify-center items-center">
    {links.map((link, linkIndex) => (
      <motion.div
        key={linkIndex}
        variants={linkVariants}
        custom={linkIndex}
        whileHover={{
          y: -2,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-sans text-xs md:text-sm group relative"
      >
        <Link to={link.href} className="relative">
          <span className="relative">
            {link.label}
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
  sections?: { title: string; links: { label: string; href: string }[] }[];
  social?: { href: string; label: string; icon: React.ReactNode }[];
  title?: string;
  subtitle?: string;
  copyright?: string;
  currentTime?: string;
  scrollToTop?: () => void;
}

export default function StickyFooter({
  sections = [
    { title: "Navigation", links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ]},
  ],
  social = [],
  title = "Dhiwin Samrich",
  subtitle = "AI/ML Engineer / Working Worldwide",
  copyright = `©${new Date().getFullYear()} Dhiwin Samrich. All rights reserved.`,
}: StickyFooterProps) {
  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-6 md:pt-12 pb-20 md:pb-32 px-4 md:px-12 w-full flex flex-col justify-center items-center relative overflow-hidden mt-20 min-h-[450px]"
    >
            {/* Infinite Plane Shader Background - Knight's Gambit Theme */}
            <InfinitePlaneBg 
              planeHeight={0} 
              speed={0.5} 
              className="z-0"
              ariaLabel="Knight's Gambit infinite plane background"
            />
            
            {/* Subtle overlay removed for transparency */}

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
            <div className="relative z-[10] w-full max-w-10xl mx-auto flex flex-col items-center justify-center gap-6 md:gap-8">
              {/* Navigation Section - Horizontal */}
              <motion.div variants={containerVariants} className="w-auto flex justify-center">
                {sections.map((section, index) => (
                  <NavSection key={section.title} links={section.links} index={index} />
                ))}
              </motion.div>

              {/* Title - Dhiwin Samrich */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.8] font-serif bg-gradient-to-r from-foreground via-muted-foreground to-foreground/60 bg-clip-text text-transparent cursor-default text-center"
              >
                {title}
              </motion.h1>

              {/* Copyright - Positioned above InfinitePlane */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="text-muted-foreground text-xs md:text-sm hover:text-foreground transition-colors duration-300 text-center"
              >
                {copyright}
              </motion.p>

              {/* Social Links */}
              {social.length > 0 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.8, staggerChildren: 0.1 }}
                  className="flex gap-2 md:gap-3 justify-center"
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
            </div>
    </motion.footer>
  )
}

