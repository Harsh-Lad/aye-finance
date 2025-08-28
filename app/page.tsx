import { AboutHeroSection } from "@/components/routes/about/about-hero-section";
import { StoryVisionSection } from "@/components/routes/about/story-vision-section";
import { ThreeColumnSection } from "@/components/routes/about/three-column-section";

export default function AboutPage() {
  const videoUrl =
    "https://res.cloudinary.com/drguz4jae/video/upload/v1756369787/ayefin-about-banner-video_zrkftf.mp4";

  return (
    <main className="min-h-screen">
      <AboutHeroSection videoSrc={videoUrl} />
      <StoryVisionSection />
      <ThreeColumnSection />
    </main>
  );
}
