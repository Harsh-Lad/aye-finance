"use client";

import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { useEffect, useRef } from "react";

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

export function HorizontalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(Observer);

    const sections = sectionsRef.current;
    if (!sections.length) return;

    // Create horizontal scroll animation
    const animation = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      paused: true,
    });

    const progressTo = gsap.quickTo(animation, "progress", {
      duration: 1,
      ease: "expo",
    });

    // Create observer for scroll behavior
    const observer = Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => {
        progressTo(Math.max(0, animation.progress() - 0.1));
      },
      onUp: () => {
        progressTo(Math.min(1, animation.progress() + 0.1));
      },
      tolerance: 10,
      preventDefault: true,
    });

    return () => {
      observer.kill();
      animation.kill();
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="timeline-wrapper h-screen overflow-hidden">
      <div
        ref={containerRef}
        className="timeline-container flex h-full"
        style={{ width: `${(timelineData.length + 1) * 100}%` }}
      >
        {/* Introduction Panel */}
        <div
          ref={addToRefs}
          className="panel flex-shrink-0 w-screen h-full flex items-center justify-center bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white relative overflow-hidden"
        >
          <div className="text-center z-10 max-w-4xl px-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-balance">
              Our Journey
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-pretty opacity-90 leading-relaxed">
              From a single branch in Delhi to becoming a leading NBFC across
              India. Scroll to explore our decade-long journey of growth,
              innovation, and impact.
            </p>
            <div className="scroll-indicator">
              <p className="text-lg mb-4">Scroll to explore timeline</p>
              <div className="w-6 h-10 border-2 border-white rounded-full mx-auto relative">
                <div className="w-1 h-3 bg-white rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Timeline Panels */}
        {timelineData.map((yearData, index) => (
          <div
            key={yearData.year}
            ref={addToRefs}
            className="panel flex-shrink-0 w-screen h-full flex items-center justify-center relative"
            style={{
              background:
                index % 2 === 0
                  ? "linear-gradient(135deg, var(--background) 0%, #f8fafc 100%)"
                  : "linear-gradient(135deg, #f1f5f9 0%, var(--background) 100%)",
            }}
          >
            <div className="max-w-6xl mx-auto px-8 py-16">
              {/* Year Header */}
              <div className="text-center mb-16">
                <div className="inline-block">
                  <h2 className="text-8xl md:text-9xl font-bold text-[#46aee2] mb-4 relative">
                    {yearData.year}
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#5ccf8a] rounded-full"></div>
                  </h2>
                  <p className="text-[#0f2740] text-xl font-medium">
                    Milestones & Achievements
                  </p>
                </div>
              </div>

              {/* Milestones Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {yearData.milestones.map((milestone, milestoneIndex) => (
                  <div
                    key={milestoneIndex}
                    className="milestone-card group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 hover:border-[#46aee2]/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#46aee2] rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                        {milestoneIndex + 1}
                      </div>
                      <p className="text-[#0f2740] leading-relaxed text-pretty group-hover:text-[#214c73] transition-colors duration-300">
                        {milestone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="flex justify-center mt-16">
                <div className="flex gap-2">
                  {Array.from({ length: timelineData.length + 1 }).map(
                    (_, i) => (
                      <div
                        key={i}
                        className={`progress-dot w-3 h-3 rounded-full transition-all duration-300 ${
                          i === index + 1
                            ? "active bg-[#46aee2] scale-125"
                            : "bg-gray-300 hover:bg-[#46aee2]/50"
                        }`}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
