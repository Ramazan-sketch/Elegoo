"use client";

import React, { useState } from 'react';
import { Scale } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 'sparkx', label: 'SPARKX' },
  { id: 'flagship', label: 'Flagship' },
  { id: 'hi-series', label: 'Hi Series' },
  { id: 'ender-series', label: 'Ender Series' },
  { id: 'halot-series', label: 'HALOT Series' },
];

const productsData: Record<string, any[]> = {
  sparkx: [
    { id: 'sparkx-i8', name: "SPARKX i8", image: "/sparkx-i8.png", isNew: true },
    { id: 'sparkx-i7', name: "SPARKX i7", image: "/sparkx-i7.png" }
  ],
  flagship: [
    { id: 'k1-max-ai-fast', name: "K1 Max AI Fast", image: "/k1-max-new.png", isNew: true },
    { id: 'k3', name: "K3", image: "/k3-printer.webp" },
    { id: 'k1c', name: "K1C", image: "/k1c.webp" },
    { id: 'k2', name: "K2", image: "/k2-printer.png" },
    { id: 'k2-plus', name: "K2 Plus", image: "/k2-plus.png" },
    { id: 'k2-pro', name: "K2 Pro", image: "/k2-pro.png" }
  ],
  'hi-series': [
    { id: 'creality-hi', name: "Creality Hi", image: "/creality-hi.png" }
  ],
  'ender-series': [
    { id: 'ender-3-v3-plus', name: "Ender-3 V3 Plus", image: "https://img.creality.com/p/1200x1200/ender-3-v3-plus.png", isNew: true },
    { id: 'ender-3-v3-se', name: "Ender-3 V3 SE", image: "/ender-3-v3-se.webp" },
    { id: 'ender-3-v3-ke', name: "Ender-3 V3 KE", image: "/ender-3-v3-ke.png" },
    { id: 'ender-5-max', name: "Ender-5 Max", image: "/ender-5-max.webp" }
  ],
  'halot-series': [
    { id: 'halot-mage-pro', name: "HALOT-MAGE PRO", image: "https://img.creality.com/p/1200x1200/halot-mage-pro.png", isNew: true },
    { id: 'halot-x1-neo', name: "HALOT X1-Neo", image: "/halot-x1-neo.webp" },
    { id: 'halot-mage', name: "HALOT-MAGE", image: "/halot-mage.webp" }
  ]
};

const ProductCard = ({ product, onClick }: { product: any, onClick: () => void }) => (
  <div 
    className="flex flex-col items-center group cursor-pointer w-[180px] flex-shrink-0"
    onClick={onClick}
  >
    <div className="w-full aspect-[4/5] bg-[#F7F8FA] rounded-sm flex items-center justify-center p-6 mb-4 transition-colors group-hover:bg-[#F0F1F3]">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <h4 className="text-[#1D1D1F] text-sm font-medium text-center line-clamp-2 h-10">{product.name}</h4>
    {product.isNew ? (
      <span className="text-[#00D07D] text-xs font-medium mt-1">New</span>
    ) : (
      <div className="h-[21px]" />
    )}
  </div>
);

const PrinterMenu = () => {
  const [activeTab, setActiveTab] = useState('sparkx');
  const navigate = useNavigate();

  const currentProducts = productsData[activeTab] || [];

  const handleProductClick = (id: string) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="fixed left-0 right-0 top-[64px] w-full bg-white shadow-2xl border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300 z-50">
      <div className="max-w-[1440px] mx-auto px-6 py-8">
        <div className="flex justify-center gap-8 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              onMouseEnter={() => setActiveTab(cat.id)}
              className={`relative pb-2 text-sm font-medium transition-colors ${
                activeTab === cat.id ? 'text-[#1D1D1F]' : 'text-[#86868B] hover:text-[#1D1D1F]'
              }`}
            >
              {cat.label}
              {activeTab === cat.id && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00D07D]" />
              )}
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-6 mb-12 min-h-[280px] overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-6">
            {currentProducts.map((product, idx) => (
              <ProductCard 
                key={`${activeTab}-${idx}`} 
                product={product} 
                onClick={() => handleProductClick(product.id)}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 border-t border-gray-50 pt-8">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-[#F5F5F7] hover:bg-[#E8E8ED] rounded-full text-sm font-medium text-[#1D1D1F] transition-colors">
            <Scale size={18} />
            Compare
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrinterMenu;