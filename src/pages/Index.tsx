import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { MisionVisionSection } from "@/components/home/MisionVisionSection";
import { LevelsSection } from "@/components/home/LevelsSection";
import { SedesPreviewSection } from "@/components/home/SedesPreviewSection";
import { StatsSection } from "@/components/home/StatsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MisionVisionSection />
      <LevelsSection />
      <StatsSection />
      <SedesPreviewSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
