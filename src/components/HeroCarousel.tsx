"use client";

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from 'react-router-dom';

const HeroCarousel = () => {
  const navigate = useNavigate();
  const slides = [
    {
      id: "k1-max-ai-fast",
      title: "Продажа сайта и домена : +77786016967",
      subtitle: "",
      description: "600mm/s max speed, AI camera, and all-metal extruder for professional results.",
      image: "/carousel.jfif",
      tag: "Flagship"
    },
    {
      id: "ender-3-v3-plus",
      title: "Продажа сайта и домена : +77786016967",
      subtitle: "",
      description: "Large build volume with 600mm/s speed and unparalleled stability.",
      image: "/carousel.jfif",
      tag: "New Arrival"
    },
    {
      id: "halot-mage-pro",
      title: "Продажа сайта и домена : +77786016967",
      subtitle: "",
      description: "The new standard for resin printing with incredible detail and speed.",
      image: "/carousel.jfif",
      tag: "Resin Series"
    }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const handleBuyNow = (id: string) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="relative w-full overflow-hidden bg-gray-900">
      <Carousel 
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[85vh] w-full flex items-center">
                <div className="absolute inset-0">
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                  <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left duration-1000">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold tracking-wider uppercase">
                      {slide.tag}
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight">
                      {slide.title.split(':')[0]} <br />
                      <span className="text-blue-400">{slide.title.split(':')[1] || ""}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 font-medium">{slide.subtitle}</p>
                    <div className="flex flex-wrap gap-4 pt-6">
                      <Button 
                        size="lg" 
                        className="rounded-full bg-blue-600 hover:bg-blue-700 px-10 h-14 text-lg shadow-xl transform transition-transform hover:scale-105 active:scale-95"
                        onClick={() => handleBuyNow(slide.id)}
                      >
                        Buy Now
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="rounded-full px-10 h-14 text-lg border-2 border-white text-black hover:bg-white hover:text-black shadow-xl transform transition-transform hover:scale-105 active:scale-95"
                        onClick={() => handleBuyNow(slide.id)}
                      >
                        Learn More <ArrowRight className="ml-2" size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-8 bg-white/10 border-none text-white hover:bg-white/20" />
          <CarouselNext className="right-8 bg-white/10 border-none text-white hover:bg-white/20" />
        </div>
      </Carousel>
    </section>
  );
};

export default HeroCarousel;