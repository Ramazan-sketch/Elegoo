"use client";

import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <Link to="/" className="text-2xl font-bold text-white mb-6 block">CREALITY</Link>
            <div className="flex gap-4">
              <Facebook className="hover:text-white cursor-pointer transition-colors" size={20} />
              <Twitter className="hover:text-white cursor-pointer transition-colors" size={20} />
              <Instagram className="hover:text-white cursor-pointer transition-colors" size={20} />
              <Youtube className="hover:text-white cursor-pointer transition-colors" size={20} />
              <Github className="hover:text-white cursor-pointer transition-colors" size={20} />
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 Shenzhen Creality 3D Technology Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;