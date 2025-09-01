"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

const timelineData = [
  {
    year: "2014",
    milestones: [
      "Obtained RBI Licence",
      "Opened our first branch in Karampura, Delhi, a bustling area for microenterprises",
      "Expanded to Uttar Pradesh",
    ],
  },
  {
    year: "2015",
    milestones: [
      "Disbursed loans of Rs. 500 lakhs",
      "Expanded to Rajasthan, Punjab, and Haryana",
      "Presence grew to 16 branches",
    ],
  },
  {
    year: "2016",
    milestones: [
      "Expanded our presence to South India - Karnataka and Tamil Nadu",
      "Digital journey begins with automated loan origination and decisioning",
    ],
  },
  {
    year: "2017",
    milestones: [
      "Reached 50000 customers",
      "Loan portfolio crossed Rs. 400 Cr",
      "Achieved running breakeven",
    ],
  },
  {
    year: "2018",
    milestones: [
      "Presence grew to 100 branches across 18 states",
      "Honored with Economic Times BFSI Award",
      "Conferred with Super Startup Asia Award",
    ],
  },
  {
    year: "2019",
    milestones: [
      "Systemically important NBFC by RBI",
      "Reached 2,00,000+ customers",
      "Embedded Data Science and AI as core way of doing business",
      "Digi-Dhan Fintech Award from MeitY, Government of India",
    ],
  },
  {
    year: "2020",
    milestones: [
      "Branch network crossed 200",
      "Health Committee set up to support Ayetians during the pandemic",
      "Crossed 50,000 followers on LinkedIn",
    ],
  },
  {
    year: "2021",
    milestones: [
      "Branch network crossed 300",
      "Ranked 9th Best Place to Work in Asia by the GPTW Institute",
      "SME Financier of The Year - Asia (Gold) By SME Finance Forum",
    ],
  },
  {
    year: "2022",
    milestones: [
      "Branch network touched 400",
      "2nd among the 100 Best Companies to Work for in India",
      "Most Impactful Leadership at Business World Unicorn Summit & Awards",
    ],
  },
  {
    year: "2023",
    milestones: [
      "Total disbursement crossed Rs 10,000cr",
      "Inclusive Enterprise Lending by NBFC at Inclusive Finance India Award",
      "Sanjay Sharma, MD, awarded India's Most Trusted Leaders 2023 by GPTW",
      "FIDC NBFC & Fintech Award for Best Data Driven NBFC of the Year",
    ],
  },
  {
    year: "2024",
    milestones: [
      "Reached 5000 Crore AUM",
      "Recognized as Technology Innovation Leader by Frost & Sullivan",
      "AI powered digital transformation in Debt Collection",
    ],
  },
  {
    year: "2025",
    milestones: [
      "Branch network crossed 500",
      "Aye family grew to 10,000+ employees",
      "3rd among the 100 Best Companies to Work for in India",
    ],
  },
];

export function DetailedTimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const { scrollXProgress } = useScroll({
    container: containerRef,
    axis: "x",
  });

  const timelineProgress = useTransform(scrollXProgress, [0, 1], [0, 100]);

  const toggleCardExpansion = (index: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const getVisibleMilestones = (milestones: string[], isExpanded: boolean) => {
    const maxVisible = 3; // Show only 3 milestones initially
    return isExpanded ? milestones : milestones.slice(0, maxVisible);
  };

  return (
    <section className="py-20 bg-foreground">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-1 bg-white rounded-full mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Journey Timeline
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Key milestones and achievements that shaped our path from a startup
            to a leading NBFC
          </p>
        </motion.div>

        {/* Horizontal Scroll Timeline */}
        <div className="relative">
          {/* Timeline Container */}
          <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
            <div
              className="flex space-x-8 pb-8"
              style={{ width: "max-content" }}
            >
              {/* Timeline Line */}
              <div
                className="absolute top-24 left-0 right-0 h-0.5 bg-gray-700"
                style={{ width: "100%" }}
              />

              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative flex-shrink-0 py-8 w-80"
                >
                  {/* Year Badge */}
                  <div className="relative flex justify-center mb-8">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="px-6 py-3"
                    >
                      <Badge
                        variant="outline"
                        className="text-white font-bold text-lg"
                      >
                        {item.year}
                      </Badge>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    layout
                  >
                    <Card className="bg-transparent border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden min-h-[240px] flex flex-col">
                      <CardContent className="p-6 flex-1 flex flex-col">
                        <motion.div layout className="space-y-4 flex-1">
                          {/* Milestones */}
                          <div className="space-y-3 flex-1">
                            <AnimatePresence mode="popLayout">
                              {getVisibleMilestones(
                                item.milestones,
                                expandedCards.has(index)
                              ).map((milestone, milestoneIndex) => (
                                <motion.div
                                  key={`${index}-${milestoneIndex}`}
                                  initial={{ opacity: 0, x: -20, height: 0 }}
                                  animate={{ opacity: 1, x: 0, height: "auto" }}
                                  exit={{ opacity: 0, x: -20, height: 0 }}
                                  transition={{
                                    duration: 0.4,
                                    delay: expandedCards.has(index)
                                      ? milestoneIndex * 0.05
                                      : 0,
                                  }}
                                  layout
                                  className="flex items-start space-x-3 overflow-hidden"
                                >
                                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-white mt-2" />
                                  <p className="text-gray-300 leading-relaxed text-sm">
                                    {milestone}
                                  </p>
                                </motion.div>
                              ))}
                            </AnimatePresence>
                          </div>

                          {/* Read More/Less Button */}
                          {item.milestones.length > 3 && (
                            <motion.div
                              layout
                              className="pt-3 mt-auto border-t border-gray-700"
                            >
                              <button
                                onClick={() => toggleCardExpansion(index)}
                                className="text-white text-sm hover:text-gray-300 transition-colors duration-200 flex items-center space-x-1 group"
                              >
                                <span>
                                  {expandedCards.has(index)
                                    ? "Show Less"
                                    : `Show ${item.milestones.length - 3} More`}
                                </span>
                                <motion.svg
                                  animate={{
                                    rotate: expandedCards.has(index) ? 180 : 0,
                                  }}
                                  transition={{ duration: 0.2 }}
                                  className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </motion.svg>
                              </button>
                            </motion.div>
                          )}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center justify-center mt-8 text-gray-400"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span className="text-sm">Drag to navigate timeline</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The Journey Continues...
            </h3>
            <p className="text-lg text-gray-300">
              With over a decade of innovation and growth, we continue to
              empower micro-entrepreneurs across India, building a more
              inclusive financial ecosystem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
