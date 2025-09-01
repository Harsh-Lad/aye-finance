"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";

const storyMilestones = [
  {
    title: "Summer of 2013",
    subtitle: "The Beginning",
    description:
      "There was a Government of India report that talked about Rs 25 lakh crore credit deficit in MSME industry. The micro segment among these was the most disadvantaged when it came to access to formal credit. It was clear to us that India's growth will not be complete without the advancement of this sector.",
    image: "/assets/images/our-story/summer-of-2013.jpg",
    color: "from-blue-500/20 to-primary/10",
  },
  {
    title: "Indian Monsoons",
    subtitle: "Vision Crystallized",
    description:
      "Indian monsoons were lashing the plains in North India. Our business plan was far from complete, but our vision was clear – We wanted to be the most admired among finance businesses catering to micro businesses in India. Thus, Aye was born. Aye means 'Yes' in English and 'Income' in Hindi. Apt for what we wanted to do – say yes to the aspirations of micro enterprises.",
    image: "/assets/images/our-story/indian-monsoons.jpg",
    color: "from-green-500/20 to-accent/10",
  },
  {
    title: "Moving Mountains",
    subtitle: "First Steps",
    description:
      "As we started work, enthusiasm in the team was contagious. The initial capital for the company came from friends and angel investors. By end of 2013 we bought an NBFC so that we could start lending. In early 2014, we studied three micro enterprise clusters spread across few cities. This was the beginning of our unique cluster-based underwriting model. In March 2014, our first loan was given to a manufacturer of ladies' shoes, who employed 6 workers. In the next six months, we disbursed around 200 loans through 2 branches in Delhi.",
    image: "/assets/images/our-story/moving-mountains.png",
    color: "from-purple-500/20 to-secondary/10",
  },
  {
    title: "How Time Flies",
    subtitle: "Exponential Growth",
    description:
      "In 2015, we received funding from our first set of investors. By 2017, the small team had grown to a family of over 1000 people. In 2019, RBI classified us as a Systemically Important NBFC. Today we have 10,000 employees and a 500+ branch network spread across 21 states in India. We have disbursed over a million loans and we are on the leaderboard when it comes to customer satisfaction scores (NPS) and employee satisfaction scores (GPTW).",
    image: "/assets/images/our-story/how-time-flies.png",
    color: "from-orange-500/20 to-primary/10",
  },
];

export function StoryTimelineSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleCards((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll("[data-index]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/3 to-secondary/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Story in Two Scrolls
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a vision in 2013 to becoming a leading fintech company serving
            micro-entrepreneurs across India
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-24">
          {storyMilestones.map((milestone, index) => (
            <div
              key={index}
              data-index={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`${
                  index % 2 === 1 ? "lg:order-2" : ""
                } transform transition-all duration-1000 ${
                  visibleCards[index]
                    ? "translate-x-0 opacity-100"
                    : index % 2 === 1
                    ? "translate-x-8 opacity-0"
                    : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className={`w-12 h-1 rounded-full bg-primary`} />
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {milestone.title}
                    </h3>
                    <h4 className="text-xl text-primary font-semibold">
                      {milestone.subtitle}
                    </h4>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div
                className={`${
                  index % 2 === 1 ? "lg:order-1" : ""
                } transform transition-all duration-1000 ${
                  visibleCards[index]
                    ? "translate-x-0 opacity-100"
                    : index % 2 === 1
                    ? "-translate-x-8 opacity-0"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                <Card className="overflow-hidden shadow-2xl group p-0">
                  <CardContent className="p-0">
                    <div className="relative h-80 md:h-96 overflow-hidden">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />

                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${milestone.color} opacity-60`}
                      />

                      {/* Number Badge */}
                      <div className="absolute top-6 right-6">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white font-bold text-lg">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
