"use client"

import type React from "react"

import { useState, useCallback, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
}

interface CleanTestimonialProps {
  testimonials?: Testimonial[]
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: "Working with Dhiwin was an absolute pleasure. His expertise in AI/ML engineering helped us transform our business operations. The results exceeded our expectations and the level of professionalism was remarkable.",
    author: "Sarah Chen",
    role: "Product Manager",
    company: "TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    quote: "Dhiwin's innovative approach to problem-solving and technical expertise helped us solve complex challenges efficiently. His ability to translate ideas into intelligent solutions is truly exceptional.",
    author: "Michael Rodriguez",
    role: "CTO",
    company: "StartupXYZ",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
  {
    quote: "The quality of work and attention to detail is outstanding. Dhiwin doesn't just execute tasks - he provides strategic value that helps businesses grow. We couldn't be happier with the results.",
    author: "Emily Watson",
    role: "Founder",
    company: "InnovateLab",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
  },
  {
    quote: "Despite tight timelines, Dhiwin delivered a high-quality solution without compromising on quality. Clear communication and regular updates kept us informed throughout the entire project.",
    author: "David Kim",
    role: "Engineering Lead",
    company: "DataFlow",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  },
]

function usePreloadImages(images: string[]) {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [images])
}

function SplitText({ text }: { text: string }) {
  const words = text.split(" ")

  return (
    <span className="inline">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            delay: i * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export function CleanTestimonial({ testimonials = defaultTestimonials }: CleanTestimonialProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLButtonElement>(null)

  usePreloadImages(testimonials.map((t) => t.avatar))

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    },
    [mouseX, mouseY],
  )

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        handleNext()
      }
    },
    [handleNext]
  )

  const currentTestimonial = testimonials[activeIndex]
  const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length
  const nextIndex = (activeIndex + 1) % testimonials.length
  const prevTestimonial = testimonials[prevIndex]
  const nextTestimonial = testimonials[nextIndex]

  const renderTestimonialCard = (
    testimonial: Testimonial,
    key: string | number,
    isBlurred: boolean = false,
    className: string = ""
  ) => {
    const isPrev = String(key).startsWith("prev")
    const slideDirection = isPrev ? -20 : 20
    
    return (
    <motion.div
      key={key}
      initial={{ opacity: 0, x: isBlurred ? slideDirection : 0 }}
      animate={{ opacity: isBlurred ? 0.4 : 1, x: 0 }}
      exit={{ opacity: 0, x: isBlurred ? slideDirection : 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`relative py-16 px-6 border border-border/60 rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.08)] bg-card/80 backdrop-blur-md text-center ${className} ${
        isBlurred ? "blur-sm opacity-40 scale-90 pointer-events-none" : ""
      }`}
    >
      <div className="relative">
        <blockquote className="text-lg font-light leading-relaxed tracking-tight text-foreground line-clamp-3">
          {testimonial.quote}
        </blockquote>
        <div className="mt-8 flex items-center gap-3 justify-center">
          <motion.img
            key={testimonial.avatar}
            src={testimonial.avatar}
            alt={testimonial.author}
            className="w-10 h-10 rounded-full object-cover grayscale"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="text-left">
            <span className="block text-sm font-medium text-foreground tracking-wide">
              {testimonial.author}
            </span>
            <span className="block text-xs text-muted-foreground mt-0.5 font-mono uppercase tracking-widest">
              {testimonial.role} — {testimonial.company}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
    )
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center gap-4 md:gap-6">
      {/* Left blurred card - hidden on mobile */}
      <div className="hidden md:block w-[280px] lg:w-[320px] flex-shrink-0">
        <AnimatePresence mode="wait">
          {renderTestimonialCard(prevTestimonial, `prev-${prevIndex}`, true)}
        </AnimatePresence>
      </div>

      {/* Main card */}
      <button
        ref={containerRef}
        type="button"
        className="relative w-full max-w-xl flex-shrink-0 py-20 px-8 border border-border/60 rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.08)] bg-card/80 backdrop-blur-md text-center"
        style={{ cursor: "none" }}
        aria-label="Next testimonial"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleNext}
        onKeyDown={handleKeyDown}
      >
      {/* Custom magnetic cursor */}
      <motion.div
        className="pointer-events-none absolute z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-foreground flex items-center justify-center"
          animate={{
            width: isHovered ? 80 : 0,
            height: isHovered ? 80 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
        >
          <motion.span
            className="text-background text-xs font-medium tracking-wider uppercase"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1 }}
          >
            Next
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Floating index indicator */}
      <motion.div
        className="absolute top-8 right-8 flex items-baseline gap-1 font-mono text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span
          className="text-2xl font-light text-foreground"
          key={activeIndex}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(activeIndex + 1).padStart(2, "0")}
        </motion.span>
        <span className="text-muted-foreground">/</span>
        <span className="text-muted-foreground">{String(testimonials.length).padStart(2, "0")}</span>
      </motion.div>

      {/* Stacked avatar previews for other testimonials */}
      <motion.div
        className="absolute top-8 left-8 flex -space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.6 }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className={`w-6 h-6 rounded-full border-2 border-background overflow-hidden transition-all duration-300 ${
              i === activeIndex ? "ring-1 ring-accent ring-offset-1 ring-offset-background" : "grayscale opacity-50"
            }`}
            whileHover={{ scale: 1.1, opacity: 1 }}
          >
            <img src={t.avatar || "/placeholder.svg"} alt={t.author} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </motion.div>

      {/* Main content */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="text-xl md:text-2xl font-light leading-relaxed tracking-tight text-foreground"
          >
            <SplitText text={currentTestimonial.quote} />
          </motion.blockquote>
        </AnimatePresence>

        {/* Author with reveal line */}
        <motion.div className="mt-12 relative" layout>
          <div className="flex items-center gap-4">
            {/* Avatar container with all images stacked */}
            <div className="relative w-12 h-12">
              <motion.div
                className="absolute -inset-1.5 rounded-full border border-accent/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              {testimonials.map((t, i) => (
                <motion.img
                  key={t.avatar}
                  src={t.avatar}
                  alt={t.author}
                  className="absolute inset-0 w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
                  animate={{
                    opacity: i === activeIndex ? 1 : 0,
                    zIndex: i === activeIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              ))}
            </div>

            {/* Author info with accent line */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="relative pl-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-px bg-accent"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originY: 0 }}
                />
                <span className="block text-sm font-medium text-foreground tracking-wide">
                  {currentTestimonial.author}
                </span>
                <span className="block text-xs text-muted-foreground mt-0.5 font-mono uppercase tracking-widest">
                  {currentTestimonial.role} — {currentTestimonial.company}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="mt-16 h-px bg-border relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-accent"
            initial={{ width: "0%" }}
            animate={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      {/* Keyboard hint */}
      <motion.div
        className="absolute bottom-8 left-8 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.4 : 0.2 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Click anywhere</span>
      </motion.div>
    </button>

      {/* Right blurred card - hidden on mobile */}
      <div className="hidden md:block w-[280px] lg:w-[320px] flex-shrink-0">
        <AnimatePresence mode="wait">
          {renderTestimonialCard(nextTestimonial, `next-${nextIndex}`, true)}
        </AnimatePresence>
      </div>
    </div>
  )
}

