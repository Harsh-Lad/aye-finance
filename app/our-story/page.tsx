import { DetailedTimelineSection } from "@/components/routes/our-story/detailed-timeline-section";
import { ScrollToTop } from "@/components/routes/our-story/scroll-to-top";
import { StoryHeroSection } from "@/components/routes/our-story/story-hero-section";
import { StoryTimelineSection } from "@/components/routes/our-story/story-timeline-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Aye Finance - Empowering Micro-Entrepreneurs Since 2013",
  description:
    "Discover Aye Finance's journey from a vision in 2013 to becoming India's leading fintech company serving micro-entrepreneurs. Read our story of innovation, growth, and impact.",
  keywords:
    "Aye Finance story, company history, micro-entrepreneurs, NBFC, fintech journey, India, financial inclusion",
  openGraph: {
    title: "Our Story | Aye Finance",
    description:
      "From a vision to support small businesses to empowering over a million micro-entrepreneurs across India",
    type: "website",
  },
};

export default function OurStoryPage() {
  return (
    <>
      <main className="min-h-screen">
        <StoryHeroSection />
        <StoryTimelineSection />
        <DetailedTimelineSection />
      </main>
      <ScrollToTop />
    </>
  );
}
