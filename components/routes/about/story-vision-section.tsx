"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

export function StoryVisionSection() {
  return (
    <section className="relative py-16 md:py-20 bg-background overflow-hidden">
      {/* Background Pattern using CSS variables */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.05),transparent_50%)] opacity-40" />

      <motion.div
        className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, staggerChildren: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Our Story Card */}
          <motion.article
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Eclipse Background Elements - Made more visible */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              {/* Large eclipse */}
              <motion.div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-secondary/15 blur-2xl"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ duration: 1.5 }}
              />
              {/* Medium eclipse */}
              <motion.div
                className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-gradient-to-tr from-accent/20 to-primary/15 blur-xl"
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.3, rotate: -20 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              {/* Small eclipse */}
              <motion.div
                className="absolute top-1/2 left-8 w-16 h-16 rounded-full bg-gradient-to-r from-secondary/25 to-transparent blur-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                whileHover={{ x: 16, y: 8 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              />
              {/* Additional floating elements */}
              <motion.div
                className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full bg-gradient-to-r from-primary/30 to-accent/25"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <Card className="relative overflow-hidden border-border bg-card backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="relative h-full p-8 md:p-10 flex flex-col justify-between">
                <div className="space-y-6">
                  <header className="space-y-4">
                    <motion.div
                      className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                      whileHover={{ width: 80 }}
                      transition={{ duration: 0.5 }}
                    />
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      Our Story
                    </h2>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full" />
                  </header>

                  <div className="space-y-4">
                    <p className="text-sm lg:text-base leading-relaxed">
                      Founded with a vision to democratize finance, AyeFin began
                      as a small team of passionate innovators determined to
                      bridge the gap between traditional banking and modern
                      digital solutions.
                    </p>
                    <p className="text-sm lg:text-base leading-relaxed">
                      From humble beginnings to serving thousands, our journey
                      reflects our commitment to making financial services
                      accessible and empowering for everyone.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold px-8 py-4 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link
                        href="/our-story"
                        className="inline-flex items-center gap-3"
                      >
                        Read Our Journey
                        <motion.div
                          className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center"
                          whileHover={{ x: 2 }}
                        >
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
                        </motion.div>
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.article>

          {/* Our Vision Card */}
          <motion.article
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Animated Eclipse Background Elements */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              {/* Large eclipse */}
              <motion.div
                className="absolute -top-20 -left-20 w-52 h-52 rounded-full bg-gradient-to-bl from-secondary/20 to-accent/15 blur-2xl"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.2, rotate: -15 }}
                transition={{ duration: 1.5, delay: 0.2 }}
              />
              {/* Medium eclipse */}
              <motion.div
                className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-gradient-to-tl from-primary/20 to-secondary/15 blur-xl"
                initial={{ scale: 0, rotate: 45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.3, rotate: 20 }}
                transition={{ duration: 1, delay: 0.4 }}
              />
              {/* Small eclipse */}
              <motion.div
                className="absolute top-1/3 right-12 w-20 h-20 rounded-full bg-gradient-to-l from-accent/25 to-transparent blur-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                whileHover={{ x: -16, y: -8 }}
                transition={{ duration: 1.2, delay: 0.6 }}
              />
              {/* Additional floating elements */}
              <motion.div
                className="absolute bottom-1/4 left-1/4 w-8 h-8 rounded-full bg-gradient-to-l from-secondary/30 to-accent/25"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>

            <Card className="relative overflow-hidden border-border bg-card backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="relative h-full p-8 md:p-10 flex flex-col justify-between">
                <div className="space-y-6">
                  <header className="space-y-4">
                    <motion.div
                      className="w-12 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"
                      whileHover={{ width: 80 }}
                      transition={{ duration: 0.5 }}
                    />
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      Our Vision
                    </h2>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-secondary/50 to-accent/50 rounded-full" />
                  </header>

                  <div className="space-y-4">
                    <p className="text-sm lg:text-base leading-relaxed">
                      We envision a world where financial freedom is not a
                      privilege but a fundamental right. Our mission is to
                      create innovative solutions that empower individuals and
                      businesses to achieve their financial goals.
                    </p>
                    <p className="text-sm lg:text-base leading-relaxed">
                      Through cutting-edge technology and human-centered design,
                      we're building the future of finance—one that's inclusive,
                      intelligent, and inspiring.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-secondary-foreground font-semibold px-8 py-4 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link
                        href="/our-vision"
                        className="inline-flex items-center gap-3"
                      >
                        Explore Our Vision
                        <motion.div
                          className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center"
                          whileHover={{ x: 2 }}
                        >
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
                        </motion.div>
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}
