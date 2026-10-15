"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Download, FileText, MessageSquare, Video } from 'lucide-react';

const Support = () => {
  const resources = [
    { icon: <Download size={32} />, title: "Download Center", desc: "Firmware, drivers, and slicing software." },
    { icon: <FileText size={32} />, title: "User Manuals", desc: "Step-by-step guides for all models." },
    { icon: <Video size={32} />, title: "Video Tutorials", desc: "Assembly and troubleshooting videos." },
    { icon: <MessageSquare size={32} />, title: "Community Forum", desc: "Get help from fellow creators." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">How can we help?</h1>
            <p className="text-xl text-gray-500">Find resources, downloads, and expert support for your Creality products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {resources.map((res, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-[32px] hover:bg-blue-50 transition-colors cursor-pointer group">
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">{res.icon}</div>
                <h3 className="text-xl font-bold mb-2">{res.title}</h3>
                <p className="text-gray-500">{res.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-600 rounded-[40px] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Still need assistance?</h2>
              <p className="text-blue-100 text-lg">Our technical support team is available 24/7 to help you with any issues.</p>
            </div>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-10 h-14 text-lg font-bold">
              Contact Support
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;