"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { showSuccess } from "@/utils/toast";

const EcosystemSection = () => {
  const items = [
    {
      title: "Hyper Series Filament",
      description: "Optimized for high-speed printing up to 600mm/s.",
      image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1974&auto=format&fit=crop",
      category: "Materials"
    },
    {
      title: "Creality Sonic Pad",
      description: "Highly integrated Klipper-based 3D printing tablet.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
      category: "Accessories"
    },
    {
      title: "Space Pi Filament Dryer",
      description: "Keep your materials dry for better print quality.",
      image: "https://images.unsplash.com/photo-1565034946487-077786996e27?q=80&w=2070&auto=format&fit=crop",
      category: "Accessories"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Complete Ecosystem</h2>
            <p className="text-gray-500 text-lg">
              Everything you need for a seamless 3D printing workflow, from high-speed filaments to smart monitoring tools.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            onClick={() => showSuccess("Redirecting to full catalog...")}
          >
            View All Accessories
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-[32px] aspect-[4/5] cursor-pointer">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <span className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-2">{item.category}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
                <Button 
                  className="w-fit bg-white text-black hover:bg-blue-600 hover:text-white rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    showSuccess(`Added ${item.title} to cart!`);
                  }}
                >
                  Shop Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;