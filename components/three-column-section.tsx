import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function ThreeColumnSection() {
  const cards = [
    {
      title: "Our Team",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&crop=center",
      alt: "AyeFin team members collaborating in modern office environment",
      href: "#",
      cta: "Meet Our Team",
    },
    {
      title: "Fame",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&crop=center",
      alt: "Awards and recognition trophies showcasing AyeFin's achievements",
      href: "#",
      cta: "Explore Our Fame",
    },
    {
      title: "News",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop&crop=center",
      alt: "News and media coverage featuring AyeFin's latest announcements",
      href: "#",
      cta: "Read Latest News",
    },
  ];

  return (
    <section className="flex items-center justify-center px-6 overflow-hidden py-20 container mx-auto max-w-6xl">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-full">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30 bg-card overflow-hidden py-0"
            >
              <CardContent className="p-0">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-accent-foreground mb-4">
                    {card.title}
                  </h3>

                  <Link
                    href={card.href}
                    className="text-primary hover:text-accent flex gap-2 items-center text-xs lg:text-sm font-medium justify-start w-full"
                  >
                    {card.cta}
                    <svg
                      className="size-3 lg:size-4"
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
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
