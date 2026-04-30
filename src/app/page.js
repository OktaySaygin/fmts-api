import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center antialiased overflow-hidden">
      <Hero />
    </div>
  );
}
