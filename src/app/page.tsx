import Hero from "@/components/Hero";
import AgentShowcase from "@/components/AgentShowcase";
import Features from "@/components/Features";
import MemoryPreview from "@/components/MemoryPreview";
import HowItWorks from "@/components/HowItWorks";
import OpenSource from "@/components/OpenSource";

export default function Home() {
  return (
    <main>
      <Hero />
      <AgentShowcase />
      <Features />
      <MemoryPreview />
      <HowItWorks />
      <OpenSource />
    </main>
  );
}
