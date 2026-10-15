"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">About Creality</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded in 2014, Creality is a global pioneer in 3D printing, dedicated to making high-quality 3D printers accessible to everyone.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                  alt="Creality Factory" 
                  className="rounded-[40px] shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">Our Mission</h2>
                <p className="text-lg text-gray-600">
                  We believe that 3D printing is a transformative technology that empowers individuals to bring their ideas to life. Our mission is to provide the tools and ecosystem that foster creativity and innovation across the globe.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">10M+</div>
                    <div className="text-gray-500">Users Worldwide</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                    <div className="text-gray-500">Countries Reached</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;