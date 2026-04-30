"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "./ui/spotlight";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { AuroraText } from "@/components/magicui/aurora-text";

const Hero = () => {
  const words =
    "Geleceğin yazılım çözümlerini bugün inşa ediyoruz. Modern teknolojiler ve yaratıcı yaklaşımlarla işinizi dijital dönüşümde öne çıkarıyoruz.";

  return (
    <div className="w-full h-screen">
        <BackgroundBeams />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <Badge variant="outline" className="bg-black/50 text-white border-white/20 backdrop-blur-sm px-4 py-2">
              Yazılım Geliştirme Uzmanları
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-8 space-y-4">
            <span className="block">Dijital</span>
            <AuroraText className="text-4xl md:text-6xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-8 space-y-4">Dünyanın Yeni</AuroraText>
            <span className="block">Lideri</span>
          </h1>

          <div className="max-w-3xl mx-auto mb-10">
            <TextGenerateEffect
              words={words}
              className="text-lg md:text-xl text-neutral-300 leading-relaxed"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <InteractiveHoverButton>Projene Başla</InteractiveHoverButton>

            <InteractiveHoverButton className="bg-transparent border-white text-white hover:bg-white/10 backdrop-blur-sm">Portföyümüzü Gör</InteractiveHoverButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                100+
              </div>
              <div className="text-neutral-400">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                50+
              </div>
              <div className="text-neutral-400">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                5+
              </div>
              <div className="text-neutral-400">Yıllık Deneyim</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
