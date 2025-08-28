import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function ThreeColumnSection() {
  const cards = [
    {
      title: "Our Team",
      description:
        "Meet the brilliant minds behind AyeFin's innovative financial solutions",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=center",
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
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&crop=center",
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
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop&crop=center",
      alt: "News and media coverage featuring AyeFin's latest announcements",
      href: "#",
      cta: "Read Latest News",
      gradient: "from-secondary/20 via-transparent to-accent/10",
      accent: "secondary",
    },
  ];

  return (
    <section className="w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/3 to-secondary/5">
      {/* Cards Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 min-h-[70vh]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group relative overflow-hidden transition-all duration-700 hover:z-10"
          >
            <Card className="h-full min-h-[70vh] border-0 rounded-none shadow-none bg-transparent py-0">
              <CardContent className="p-0 h-full">
                <div className="relative h-full overflow-hidden">
                  {/* Background Image */}
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-75"
                    sizes="(max-width: 1024px) 100vw, 33vw"
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

                      {/* CTA Button */}
                      <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                        <Link
                          href={card.href}
                          className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl group/btn"
                        >
                          <span className="text-lg">{card.cta}</span>
                          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-current group-hover/btn:text-white">
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
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/20 transition-all duration-500 pointer-events-none" />
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
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-${card.accent} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom`}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
