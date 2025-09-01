"use client";

import { Button } from "@/components/ui/button";
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
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Image Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/50" />

        {/* Content */}
        <div className="h-full w-full justify-end flex items-center">
          <div className="max-md:mx-auto md:ml-auto px-6 md:px-12 lg:px-16">
            <div className="max-w-xl">
              {/* Animated Elements */}
              <div className="space-y-8">
                <div
                  className={`transform transition-all duration-1000 delay-500 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <div className="w-16 h-1 bg-white rounded-full mb-6" />
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                    Our Story
                  </h1>
                </div>

                <div
                  className={`transform transition-all duration-1000 delay-700 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 font-light text-justify">
                    Aye is built on a vision to support small and medium
                    business in India. We do not want to be merely recognized
                    for what we have done but also for how we have done it.
                  </p>
                </div>

                <div
                  className={`transform transition-all duration-1000 delay-1000 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <Link
                      href="/our-story/md-message"
                      className="inline-flex items-center gap-3"
                    >
                      Read Sanjay Sharma's Message
                      <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white">
                        <svg
                          className="w-3 h-3"
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
                      </div>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
