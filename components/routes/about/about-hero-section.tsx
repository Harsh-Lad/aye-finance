"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { AyeFinTextOverlay } from "./ayefin-text-overlay";
import { VideoBackground } from "./video-background";

interface AboutHeroSectionProps {
  videoSrc: string;
}

export function AboutHeroSection({ videoSrc }: AboutHeroSectionProps) {
  const [showTextOverlay, setShowTextOverlay] = useState(true);

  const handleTextComplete = () => {
    setShowTextOverlay(false);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <VideoBackground
        src={videoSrc}
        opacity={showTextOverlay ? 0.4 : 1}
        onVideoReady={() => {}}
      />

      {showTextOverlay && <AyeFinTextOverlay onComplete={handleTextComplete} />}

      {/* Gradient Overlay for better text readability */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none",
          !showTextOverlay && "opacity-0 transition-opacity"
        )}
      />
    </section>
  );
}
