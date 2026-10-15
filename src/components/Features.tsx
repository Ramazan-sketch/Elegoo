"use client";

import React from 'react';
import { Zap, ShieldCheck, Cpu, Globe } from 'lucide-react';

const features = [
  {
    icon: <Zap className="text-blue-600" size={32} />,
    title: "Ultra-Fast Printing",
    description: "Experience speeds up to 600mm/s with our CoreXY and CoreXZ technologies, reducing print time by 70%."
  },
  {
    icon: <Cpu className="text-blue-600" size={32} />,
    title: "AI-Powered Precision",
    description: "Integrated AI cameras and sensors monitor your prints in real-time, ensuring perfect results every time."
  },
  {
    icon: <ShieldCheck className="text-blue-600" size={32} />,
    title: "Industrial Reliability",
    description: "Built with premium components designed for 24/7 operation and consistent high-quality output."
  },
  {
    icon: <Globe className="text-blue-600" size={32} />,
    title: "Global Community",
    description: "Join over 5 million users worldwide sharing designs, tips, and innovations in the Creality Cloud."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4 p-6 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="p-4 bg-blue-50 rounded-2xl mb-2">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;