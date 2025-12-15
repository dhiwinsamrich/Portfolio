"use client"

import { motion } from "framer-motion"
import { Instagram, Twitter, Github, Linkedin } from "lucide-react"
import { cn } from "../../lib/utils"

interface CurrentPosition {
  role?: string
  company?: string
  experience?: string
}

interface ProfileCardProps {
  name?: string
  title?: string
  avatarUrl?: string
  currentPosition?: CurrentPosition
  showOpenToWork?: boolean
  instagramUrl?: string
  twitterUrl?: string
  githubUrl?: string
  linkedinUrl?: string
  onViewPortfolio?: () => void
}

export function ProfileCard({
  name = "Dhiwin Samrich",
  title = "AI/ML Engineer who focuses on simplicity & usability.",
  avatarUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  currentPosition,
  showOpenToWork = true,
  instagramUrl,
  twitterUrl,
  githubUrl,
  linkedinUrl,
  onViewPortfolio,
}: ProfileCardProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-card/80 backdrop-blur-md border border-[#EBEBEB] rounded-lg overflow-hidden">
        {/* Profile content */}
        <div className="px-8 py-10">
          {/* Open to Work Indicator */}
          {showOpenToWork && (
            <motion.div
              className="flex items-center justify-center gap-2 mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="relative">
                <motion.div
                  className="w-2 h-2 rounded-full bg-foreground"
                  animate={{
                    opacity: [1, 0.3, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <span className="text-foreground text-xs font-light uppercase tracking-wider" style={{ fontFamily: 'var(--font-sans)' }}>
                Open to Work
              </span>
            </motion.div>
          )}

          {/* Avatar */}
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32">
              <div className="w-full h-full rounded-full border-2 border-[#EBEBEB] overflow-hidden bg-card">
                <img src={avatarUrl || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Name */}
          <h2 className="text-3xl font-semibold text-foreground mb-3 tracking-tight text-center" style={{ fontFamily: 'var(--font-serif)' }}>
            {name}
          </h2>
          
          {/* Title */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 text-center font-light" style={{ fontFamily: 'var(--font-sans)' }}>
            {title}
          </p>
          
          {/* Current Position */}
          {currentPosition && (
            <div className="mb-8 text-center">
              <p className="text-foreground text-xs font-medium uppercase tracking-wider mb-3" style={{ fontFamily: 'var(--font-sans)' }}>
                Current:
              </p>
              <div className="space-y-2 text-muted-foreground text-xs font-light" style={{ fontFamily: 'var(--font-sans)' }}>
                {currentPosition.role && (
                  <p>
                    <span className="font-medium">Role:</span> {currentPosition.role}
                  </p>
                )}
                {currentPosition.company && (
                  <p>
                    <span className="font-medium">Company:</span> {currentPosition.company}
                  </p>
                )}
                {currentPosition.experience && (
                  <p>
                    <span className="font-medium">Experience:</span> {currentPosition.experience}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Divider */}
          <div className="w-full h-px bg-[#EBEBEB] mb-8"></div>

          {/* View Portfolio Button */}
          {onViewPortfolio && (
            <button
              onClick={onViewPortfolio}
              className={cn(
                "w-full mb-8 rounded-lg px-6 py-3 font-medium transition-all duration-300",
                "text-foreground",
                "bg-transparent border border-[#EBEBEB]",
                "hover:bg-[#EBEBEB]/50 hover:-translate-y-0.5"
              )}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              View Portfolio
            </button>
          )}

          {/* Social icons */}
          <div className="flex justify-center gap-6">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:opacity-70 transition-opacity duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 text-foreground" />
              </a>
            )}
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:opacity-70 transition-opacity duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
            )}
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:opacity-70 transition-opacity duration-300"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
            )}
            {twitterUrl && (
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:opacity-70 transition-opacity duration-300"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-5 h-5 text-foreground" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
