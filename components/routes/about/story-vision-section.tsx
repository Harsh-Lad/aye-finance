import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../../ui/card";

export function StoryVisionSection() {
  return (
    <section className="min-h-screen py-16 md:py-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
      {/* Container with breathing space */}
      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 h-full min-h-[80vh]">
          {/* Our Story Card */}
          <div className="w-full h-full relative group overflow-hidden rounded-2xl shadow-2xl">
            <Card className="w-full h-full border-0 rounded-2xl shadow-none py-0 overflow-hidden">
              <div className="relative overflow-hidden h-full min-h-[600px] lg:min-h-[700px]">
                <Image
                  src="/assets/images/about/our-story.png"
                  alt="AyeFin founding team brainstorming innovative financial solutions"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-50"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-transparent" />

                {/* Animated overlay particles */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <div
                    className="absolute top-3/4 right-1/3 w-1 h-1 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: "1s" }}
                  />
                  <div
                    className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-accent rounded-full animate-pulse"
                    style={{ animationDelay: "2s" }}
                  />
                </div>

                <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-between text-white">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="w-12 h-1 bg-accent rounded-full mb-4 transform translate-x-0 group-hover:translate-x-4 transition-transform duration-500" />
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                        Our Story
                      </h2>
                      <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                    </div>
                  </div>

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                    <Button
                      asChild
                      size="lg"
                      className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-base rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                      <Link
                        href="/our-story"
                        className="inline-flex items-center gap-3"
                      >
                        Read Our Journey
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
            </Card>
          </div>

          {/* Our Vision Card */}
          <div className="w-full h-full relative group overflow-hidden rounded-2xl shadow-2xl">
            <Card className="w-full h-full border-0 rounded-2xl shadow-none py-0 overflow-hidden">
              <div className="relative overflow-hidden h-full min-h-[600px] lg:min-h-[700px]">
                <Image
                  src="/assets/images/about/our-vision.png"
                  alt="Strategic vision board showing AyeFin's future roadmap and values"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-50"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-l from-secondary/30 via-transparent to-transparent" />

                {/* Animated overlay particles */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div
                    className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-accent rounded-full animate-bounce"
                    style={{ animationDelay: "1.5s" }}
                  />
                  <div
                    className="absolute top-2/3 right-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-pulse"
                    style={{ animationDelay: "2.5s" }}
                  />
                </div>

                <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-between text-white">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="w-12 h-1 bg-primary rounded-full mb-4 transform translate-x-0 group-hover:translate-x-4 transition-transform duration-500" />
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                        Our Vision
                      </h2>
                      <div className="w-24 h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full" />
                    </div>
                  </div>

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-base rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                      <Link href="#" className="inline-flex items-center gap-3">
                        Explore Our Vision
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white">
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
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
