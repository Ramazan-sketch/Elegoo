"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { showSuccess } from "@/utils/toast";

const Hero = () => {
  const handleBuyNow = () => {
    showSuccess("Added Ender-3 V3 Plus to your cart!");
  };

  const handleLearnMore = () => {
    showSuccess("Redirecting to product specifications...");
  };

  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1631034307264-b17945633055?q=80&w=2070&auto=format&fit=crop" 
          alt="3D Printer Hero" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
        <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-left duration-1000">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-xs font-bold tracking-wider uppercase">
            New Arrival
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Ender-3 V3 Plus <br />
            <span className="text-blue-400">CoreXZ Speed</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg">
            Experience the next generation of 3D printing with 600mm/s speed and unparalleled precision.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="rounded-full bg-blue-600 hover:bg-blue-700 px-8"
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full border-white text-white hover:bg-white hover:text-black px-8"
              onClick={handleLearnMore}
            >
              Learn More <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;