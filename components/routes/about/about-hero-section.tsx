"use client";

import { useState } from "react";
import { AyeFinTextOverlay } from "./ayefin-text-overlay";
import { VideoBackground } from "./video-background";

interface AboutHeroSectionProps {
  videoSrc: string;
}

export function AboutHeroSection({ videoSrc }: AboutHeroSectionProps) {
  const [showTextOverlay, setShowTextOverlay] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleTextComplete = () => {
    setShowTextOverlay(false);
    setIsVideoPlaying(true);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 mb-8">
      <VideoBackground
        src={videoSrc}
        isPlaying={isVideoPlaying}
        opacity={showTextOverlay ? 0.4 : 1}
        onVideoReady={() => {}}
      />

      {showTextOverlay && <AyeFinTextOverlay onComplete={handleTextComplete} />}

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none" />

      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
    </section>
  );
}
