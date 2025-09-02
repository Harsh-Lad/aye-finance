"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroImages = [
  {
    src: "/assets/images/director-sanjay-sharma.jpg",
    alt: "Vision of supporting small businesses in India",
  },
  {
    src: "/assets/images/director-sanjay-sharma.jpg",
    alt: "Micro-entrepreneurs building dreams",
  },
  {
    src: "/assets/images/director-sanjay-sharma.jpg",
    alt: "Small businesses transforming communities",
  },
  {
    src: "/assets/images/director-sanjay-sharma.jpg",
    alt: "Financial inclusion for all",
  },
];

export function StoryHeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-foreground">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1 : 1.1,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover scale-x-[-1]"
              priority={index === 0}
              sizes="100vw"
            />
          </motion.div>
        ))}
      </div>

      {/* Gradient Overlays for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/40 to-foreground/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-foreground/40" />

      {/* Content - Compact and well-positioned */}
      <div className="absolute inset-0 flex items-center justify-end">
        <div className="max-w-xl mx-6 md:mx-12 lg:mx-16 lg:mr-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Category indicator */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-[2px] bg-accent rounded-full" />
              <span className="text-background/90 text-sm font-medium tracking-wider uppercase">
                Our Journey
              </span>
            </motion.div>

            {/* Main heading - more compact */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight"
            >
              Our Story
            </motion.h1>

            {/* Description - more concise */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg md:text-xl text-background/90 leading-relaxed max-w-lg"
            >
              Built on a vision to support small businesses across India.
              Discover how we've transformed from an idea to impact.
            </motion.p>

            {/* Modern CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button
                  asChild
                  size="lg"
                  className="
                    relative overflow-hidden
                    bg-gradient-to-r from-primary to-accent
                    hover:from-accent hover:to-primary
                    text-background font-semibold 
                    px-8 py-6 text-base
                    rounded-full
                    shadow-lg shadow-primary/25
                    hover:shadow-xl hover:shadow-accent/30
                    border-0
                    transition-all duration-500
                    group
                  "
                >
                  <Link
                    href="/our-story/md-message"
                    className="inline-flex items-center gap-3 relative z-10"
                  >
                    <span>Read Sanjay Sharma's Message</span>
                    <motion.div
                      className="w-5 h-5 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg
                        className="w-3 h-3 text-background"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-background/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_ease-in-out] transition-opacity duration-500" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Image indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2"
      >
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-accent w-8"
                : "bg-background/40 hover:bg-background/60"
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </motion.div>
    </section>
  );
}
