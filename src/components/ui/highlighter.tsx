import React, { useEffect, useRef, useState } from "react"

type HighlighterAction =
  | "highlight"
  | "circle"
  | "box"
  | "bracket"
  | "crossed-off"
  | "strike-through"
  | "underline"

interface HighlighterProps {
  readonly children: React.ReactNode
  readonly color?: string
  readonly action?: HighlighterAction
  readonly strokeWidth?: number
  readonly animationDuration?: number
  readonly iterations?: number
  readonly padding?: number
  readonly multiline?: boolean
  readonly isView?: boolean
}

export const Highlighter: React.FC<HighlighterProps> = ({
  children,
  color = "#ffd1dc",
  action = "highlight",
  strokeWidth = 1.5,
  animationDuration = 500,
  iterations = 1,
  padding = 2,
  multiline = true,
  isView = false,
}) => {
  const wrapperRef = useRef<HTMLSpanElement | null>(null)
  const [isActive, setIsActive] = useState(!isView)

  // Trigger animation when element enters viewport if isView is true
  useEffect(() => {
    if (!isView || !wrapperRef.current) return

    const el = wrapperRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [isView])

  const lineTransition = `${animationDuration}ms ease-out`

  const baseWrapperStyle: React.CSSProperties = {
    position: "relative",
    display: multiline ? "inline" : "inline-block",
    whiteSpace: multiline ? "normal" : "nowrap",
    paddingInline: padding,
    paddingBlock: action === "highlight" ? padding : 0,
  }

  if (action === "highlight") {
    return (
      <span
        ref={wrapperRef}
        style={{
          ...baseWrapperStyle,
          backgroundColor: isActive ? color : "transparent",
          transition: `background-color ${animationDuration}ms ease-out`,
          borderRadius: 2,
        }}
      >
        {children}
      </span>
    )
  }

  if (action === "underline" || action === "strike-through" || action === "crossed-off") {
    return (
      <span ref={wrapperRef} style={baseWrapperStyle}>
        <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
        {/* Main line */}
        <span
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: strokeWidth,
            backgroundColor: color,
            bottom: action === "underline" ? 0 : "50%",
            top: action === "strike-through" ? "50%" : undefined,
            transform: isActive ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left center",
            transition: `transform ${lineTransition}`,
          }}
        />
        {/* Second line for crossed-off */}
        {action === "crossed-off" && (
          <span
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: strokeWidth,
              backgroundColor: color,
              top: "50%",
              transform: isActive ? "scaleX(1) rotate(-8deg)" : "scaleX(0) rotate(-8deg)",
              transformOrigin: "left center",
              transition: `transform ${lineTransition}`,
            }}
          />
        )}
      </span>
    )
  }

  if (action === "box" || action === "circle" || action === "bracket") {
    const borderRadius = action === "circle" ? 9999 : 4

    const boxStyle: React.CSSProperties = {
      position: "absolute",
      inset: -padding,
      borderRadius,
      border:
        action === "bracket"
          ? undefined
          : `${strokeWidth}px solid ${color}`,
      borderLeft: action === "bracket" ? `${strokeWidth}px solid ${color}` : undefined,
      borderRight: action === "bracket" ? `${strokeWidth}px solid ${color}` : undefined,
      borderTop: action === "bracket" ? "none" : undefined,
      borderBottom: action === "bracket" ? "none" : undefined,
      transform: isActive ? "scale(1)" : "scale(0.9)",
      opacity: isActive ? 1 : 0,
      transition: `transform ${lineTransition}, opacity ${lineTransition}`,
      pointerEvents: "none",
    }

    return (
      <span ref={wrapperRef} style={baseWrapperStyle}>
        <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
        <span style={boxStyle} />
      </span>
    )
  }

  // Fallback
  return (
    <span ref={wrapperRef} style={baseWrapperStyle}>
      {children}
    </span>
  )
}

