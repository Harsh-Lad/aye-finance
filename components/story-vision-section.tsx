import { Button } from "@/components/ui/button";
import { CometCard } from "@/components/ui/comet-card";
import Image from "next/image";
import Link from "next/link";

export function StoryVisionSection() {
  return (
    <section className="min-h-screen py-20 lg:min-h-[80svh] flex items-center justify-center px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 h-full items-center max-w-full">
          {/* Our Story Card */}
          <CometCard className="w-full max-w-full">
            <div className="relative overflow-hidden rounded-2xl h-[400px] md:h-[450px]">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center"
                alt="AyeFin founding team brainstorming innovative financial solutions"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-accent-foreground">
                  Our Story
                </h2>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 md:px-6 py-2 md:py-3 w-fit text-sm md:text-base"
                >
                  <Link href="#" className="inline-flex items-center gap-2">
                    Read Our Journey
                    <svg
                      className="w-4 h-4"
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
                </Button>
              </div>
            </div>
          </CometCard>

          {/* Our Vision Card */}
          <CometCard className="w-full max-w-full">
            <div className="relative overflow-hidden rounded-2xl h-[400px] md:h-[450px]">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center"
                alt="Strategic vision board showing AyeFin's future roadmap and values"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-accent-foreground">
                  Our Vision
                </h2>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black font-semibold px-4 md:px-6 py-2 md:py-3 w-fit bg-transparent text-sm md:text-base"
                >
                  <Link href="#" className="inline-flex items-center gap-2">
                    Explore Our Vision
                    <svg
                      className="w-4 h-4"
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
                </Button>
              </div>
            </div>
          </CometCard>
        </div>
      </div>
    </section>
  );
}
