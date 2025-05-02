
import React from 'react';
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import BotPreview from './BotPreview';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-950 opacity-90"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-zinc-950 to-transparent"></div>
      </div>
      
      <div className="container-section relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6 text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              🔥 <span className="highlight-text">FURIA</span> CS Bot
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-white font-medium">Feito por fãs, para fãs</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white font-medium max-w-2xl">
              Receba resultados, escalações, próximos jogos e muito mais diretamente no <span className="highlight-text">Telegram</span>.
            </p>
            
            <div className="pt-4">
              <a 
                href="https://t.me/furiaesportscs_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-block animate-pulse-glow"
              >
                <Bot className="h-5 w-5 mr-2" />
                Abrir no Telegram
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end animate-fade-in-right">
            <BotPreview />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
