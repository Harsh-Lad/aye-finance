"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

export function ThreeColumnSection() {
  const cards = [
    {
      title: "Team",
      description:
        "Meet the brilliant minds behind AyeFin's innovative financial solutions and discover our collaborative culture",
      href: "#",
      cta: "Meet Our Team",
      icon: "👥",
    },
    {
      title: "Fame",
      description:
        "Discover our achievements, recognition, and the impact we've made in the fintech industry worldwide",
      href: "#",
      cta: "Explore Our Fame",
      icon: "🏆",
    },
    {
      title: "News",
      description:
        "Stay updated with our latest developments, industry insights, and breakthrough innovations in finance",
      href: "#",
      cta: "Read Latest News",
      icon: "📰",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 bg-secondary overflow-hidden">
      {/* Decorative Background Elements using CSS variables */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-xl" />
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-tl from-accent/10 to-primary/5 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.header
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-4">
            Discover More
          </h2>
          <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            Explore different facets of AyeFin and learn what makes us unique
          </p>
        </motion.header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <motion.article
              key={index}
              className="group h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <Card className="relative h-full min-h-[480px] border-0 bg-card/90 backdrop-blur-lg rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Graphical Background using CSS variables */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {/* Animated background elements */}
                  <motion.div
                    className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/15 to-accent/10 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-tr from-accent/10 to-primary/8 rounded-full blur-xl"
                    animate={{
                      scale: [1, 0.8, 1],
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Geometric patterns */}
                  <div className="absolute inset-0 opacity-5">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 400 400"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id={`grad-${index}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="hsl(var(--primary))" />
                          <stop offset="100%" stopColor="hsl(var(--accent))" />
                        </linearGradient>
                      </defs>
                      <motion.path
                        d="M50,200 Q200,50 350,200 Q200,350 50,200"
                        fill="none"
                        stroke={`url(#grad-${index})`}
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: index * 0.3 }}
                      />
                      <motion.circle
                        cx="200"
                        cy="200"
                        r="80"
                        fill="none"
                        stroke={`url(#grad-${index})`}
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 1.5, delay: index * 0.4 }}
                      />
                    </svg>
                  </div>
                </div>

                <CardContent className="relative p-8 md:p-10 h-full flex flex-col justify-between">
                  {/* Content */}
                  <div className="space-y-6">
                    {/* Icon and Title */}
                    <header className="space-y-4">
                      <motion.div
                        className="text-4xl mb-2"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {card.icon}
                      </motion.div>
                      <div className="space-y-2">
                        <motion.div
                          className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                          whileInView={{ width: 60 }}
                          transition={{ duration: 0.8, delay: index * 0.2 }}
                        />
                        <h3 className="text-2xl md:text-3xl font-bold text-card-foreground">
                          {card.title}
                        </h3>
                        <div className="w-20 h-0.5 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full" />
                      </div>
                    </header>

                    {/* Description */}
                    <p className="text-card-foreground/80 text-base leading-relaxed">
                      {card.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-sm text-card-foreground/70">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span>Industry leading expertise</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-card-foreground/70">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span>Innovative solutions</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-card-foreground/70">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        <span>Proven track record</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={card.href}
                        className="inline-flex items-center gap-3 w-full justify-center bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-6 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                      >
                        <span>{card.cta}</span>
                        <motion.div
                          className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center"
                          whileHover={{ x: 4 }}
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
                    </motion.div>
                  </div>

                  {/* Hover Effect Border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-3xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Number Badge */}
                  <motion.div
                    className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center text-primary font-bold text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </motion.div>

                  {/* Side Accent Line */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-l-3xl"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                    style={{ originY: 1 }}
                  />
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
