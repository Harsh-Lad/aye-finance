import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function ThreeColumnSection() {
  const cards = [
    {
      title: "Team",
      description:
        "Meet the brilliant minds behind AyeFin's innovative financial solutions",
      image: "/assets/images/about/team.png",
      alt: "AyeFin team members collaborating in modern office environment",
      href: "#",
      cta: "Meet Our Team",
      gradient: "from-primary/20 via-transparent to-secondary/10",
      accent: "primary",
    },
    {
      title: "Fame",
      description:
        "Discover our achievements and recognition in the fintech industry",
      image: "/assets/images/about/fame.png",
      alt: "Awards and recognition trophies showcasing AyeFin's achievements",
      href: "#",
      cta: "Explore Our Fame",
      gradient: "from-accent/20 via-transparent to-primary/10",
      accent: "accent",
    },
    {
      title: "News",
      description:
        "Stay updated with our latest developments and industry insights",
      image: "/assets/images/about/news.png",
      alt: "News and media coverage featuring AyeFin's latest announcements",
      href: "#",
      cta: "Read Latest News",
      gradient: "from-secondary/20 via-transparent to-accent/10",
      accent: "secondary",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/3 to-secondary/5">
      {/* Container with proper spacing */}
      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-8">
        {/* Cards Grid with better spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden transition-all duration-700 hover:z-10 rounded-2xl shadow-2xl"
            >
              <Card className="h-full min-h-[600px] lg:min-h-[700px] border-0 rounded-2xl shadow-none bg-transparent py-0 overflow-hidden">
                <CardContent className="p-0 h-full">
                  <div className="relative h-full overflow-hidden rounded-2xl">
                    {/* Background Image */}
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-50"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      priority={index === 0}
                    />

                    {/* Gradient Overlays */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-60`}
                    />

                    {/* Animated Elements */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent rounded-full animate-pulse"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      />
                      <div
                        className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: `${index * 0.3}s` }}
                      />
                      <div
                        className="absolute top-2/3 left-1/2 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"
                        style={{ animationDelay: `${index * 0.4}s` }}
                      />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-end text-white">
                      <div className="flex flex-col items-between transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 space-y-6">
                        {/* Title Section */}
                        <div className="space-y-4">
                          <div
                            className={`w-16 h-1 bg-${card.accent} rounded-full transition-all duration-500 group-hover:w-24`}
                          />
                          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                            {card.title}
                          </h3>
                          <div className="w-32 h-0.5 bg-gradient-to-r from-white/50 to-transparent rounded-full" />
                        </div>

                        {/* Description */}
                        <p className="text-lg text-white/90 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 max-w-sm">
                          {card.description}
                        </p>

                        {/* CTA Button */}
                        <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                          <Link
                            href={card.href}
                            className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl group/btn"
                          >
                            <span className="text-lg">{card.cta}</span>
                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300">
                              <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5"
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
                        </div>
                      </div>

                      {/* Hover Effect Border */}
                      <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/20 transition-all duration-500 pointer-events-none rounded-2xl" />
                    </div>

                    {/* Number Badge */}
                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                      <div
                        className={`w-12 h-12 rounded-full bg-${card.accent}/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white font-bold text-lg`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Side Accent Line */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-${card.accent} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom rounded-l-2xl`}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
