"use client"

import { useEffect, useState } from "react"

interface AnimatedLogoProps {
  onAnimationComplete: () => void
}

export function AnimatedLogo({ onAnimationComplete }: AnimatedLogoProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Start the animation after a brief delay
    const timer = setTimeout(() => {
      setIsVisible(false)
      // Call completion callback after animation finishes
      setTimeout(onAnimationComplete, 1000)
    }, 5000) // Show for 5 seconds, then fade out

    return () => clearTimeout(timer)
  }, [onAnimationComplete])

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-center">
        <h1
          className="text-8xl md:text-9xl font-bold text-white globe-animation"
          style={{
            fontFamily: "Impact, Arial Black, sans-serif", // Fallback for custom font
            textShadow: "0 0 30px rgba(0,0,0,0.8), 0 0 60px rgba(139,92,246,0.3)",
            letterSpacing: "0.1em",
          }}
        >
          AyeFin
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mt-4 fade-in-up font-light tracking-wide">
          Global Finance Expertise
        </p>
      </div>
    </div>
  )
}
