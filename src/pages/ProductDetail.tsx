"use client";

import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { showSuccess } from "@/utils/toast";
import { ShoppingCart, ChevronLeft, CheckCircle2, ShieldCheck, Truck, Share2 } from 'lucide-react';

// Полная база данных товаров с одной фотографией для каждого
const PRODUCTS_DB: Record<string, any> = {
  "k1-max-ai-fast": {
    title: "K1 Max AI Fast 3D Printer",
    price: "$899.00",
    oldPrice: "$999.00",
    tag: "Flagship",
    description: "The K1 Max is a high-speed FDM 3D printer with a massive build volume and AI-powered features. It reaches a staggering 600mm/s printing speed.",
    features: ["600mm/s Max Speed", "300x300x300mm Volume", "AI Camera & LiDAR"],
    images: ["/k1-max-new.png"]
  },
  "sparkx-i8": {
    title: "SPARKX i8",
    price: "$1,299.00",
    oldPrice: "$1,499.00",
    tag: "New",
    description: "Industrial-grade precision meets desktop convenience. The SPARKX i8 is designed for engineers who demand perfection.",
    features: ["Ultra-stable Frame", "High-temp Extruder", "Auto-leveling 2.0"],
    images: ["/sparkx-i8.png"]
  },
  "sparkx-i7": {
    title: "SPARKX i7",
    price: "$999.00",
    oldPrice: "$1,199.00",
    tag: "Professional",
    description: "The perfect balance of speed and reliability for small-scale production and prototyping.",
    features: ["CoreXY Motion", "Silent Stepper Drivers", "Touch Screen Interface"],
    images: ["/sparkx-i7.png"]
  },
  "k3": {
    title: "Creality K3",
    price: "$1,499.00",
    oldPrice: "$1,699.00",
    tag: "Next Gen",
    description: "The future of FDM printing. Multi-material support and industrial speeds in a sleek enclosure.",
    features: ["Multi-color Printing", "Active Chamber Heating", "AI Failure Detection"],
    images: ["/k3-printer.webp"]
  },
  "k1c": {
    title: "Creality K1C",
    price: "$599.00",
    oldPrice: "$659.00",
    tag: "Carbon Ready",
    description: "Optimized for carbon fiber filaments with a hardened nozzle and specialized extruder system.",
    features: ["Carbon Fiber Ready", "AI Camera Included", "Silent Mode"],
    images: ["/k1c.webp"]
  },
  "k2": {
    title: "Creality K2",
    price: "$799.00",
    oldPrice: "$899.00",
    tag: "CoreXY",
    description: "The standard-setter for high-speed desktop 3D printing. Reliable, fast, and easy to use.",
    features: ["600mm/s Speed", "Hands-free Leveling", "Quick-swap Nozzle"],
    images: ["/k2-printer.png"]
  },
  "k2-plus": {
    title: "Creality K2 Plus",
    price: "$1,099.00",
    oldPrice: "$1,299.00",
    tag: "Large Format",
    description: "Massive build volume meets high-speed CoreXY technology. Perfect for large industrial parts.",
    features: ["350x350x350mm Volume", "Dual-gear Extruder", "Fully Enclosed"],
    images: ["/k2-plus.png"]
  },
  "k2-pro": {
    title: "Creality K2 Pro",
    price: "$949.00",
    oldPrice: "$1,049.00",
    tag: "Pro Series",
    description: "Enhanced version of the K2 with professional-grade components for superior surface finish.",
    features: ["Precision Rails", "High-flow Hotend", "Vibration Compensation"],
    images: ["/k2-pro.png"]
  },
  "creality-hi": {
    title: "Creality Hi",
    price: "$349.00",
    oldPrice: "$399.00",
    tag: "Hi Series",
    description: "A smart, connected 3D printer designed for the modern home and classroom.",
    features: ["One-click Printing", "Cloud Integration", "Safe Enclosure"],
    images: ["/creality-hi.png"]
  },
  "ender-3-v3-plus": {
    title: "Ender-3 V3 Plus",
    price: "$479.00",
    oldPrice: "$529.00",
    tag: "New",
    description: "Experience the next generation of 3D printing with CoreXZ speed and unparalleled precision in a larger format.",
    features: ["600mm/s Speed", "CoreXZ Motion System", "Direct Drive Extruder"],
    images: ["https://img.creality.com/p/1200x1200/ender-3-v3-plus.png"]
  },
  "ender-3-v3-se": {
    title: "Ender-3 V3 SE",
    price: "$199.00",
    oldPrice: "$239.00",
    tag: "Best Seller",
    description: "The most accessible high-quality 3D printer on the market. Perfect for beginners and hobbyists.",
    features: ["250mm/s Speed", "Auto Leveling", "Compact Design"],
    images: ["/ender-3-v3-se.webp"]
  },
  "ender-3-v3-ke": {
    title: "Ender-3 V3 KE",
    price: "$279.00",
    oldPrice: "$299.00",
    tag: "Smart FDM",
    description: "Smart FDM printer with Creality OS, offering high speed and intelligent features.",
    features: ["500mm/s Speed", "Creality OS", "Dual Z-axis"],
    images: ["/ender-3-v3-ke.png"]
  },
  "ender-5-max": {
    title: "Ender-5 Max",
    price: "$549.00",
    oldPrice: "$599.00",
    tag: "Cube Frame",
    description: "Stable cube-frame design for large-scale prints with high precision and reliability.",
    features: ["Large Build Volume", "Stable Cube Frame", "Dual Y-axis"],
    images: ["/ender-5-max.webp"]
  },
  "halot-mage-pro": {
    title: "HALOT-MAGE PRO",
    price: "$599.00",
    oldPrice: "$699.00",
    tag: "8K High Speed",
    description: "The world's first 8K 10.3-inch resin printer with high-speed capabilities and smart connectivity.",
    features: ["8K Resolution", "170mm/h Speed", "Smart Connectivity"],
    images: ["https://img.creality.com/p/1200x1200/halot-mage-pro.png"]
  },
  "halot-x1-neo": {
    title: "HALOT X1-Neo",
    price: "$249.00",
    oldPrice: "$299.00",
    tag: "Entry Resin",
    description: "Compact and powerful resin printer, ideal for miniatures and detailed jewelry.",
    features: ["High Precision", "Integral Light Source", "Easy to Use"],
    images: ["/halot-x1-neo.webp"]
  },
  "halot-mage": {
    title: "HALOT-MAGE",
    price: "$399.00",
    oldPrice: "$449.00",
    tag: "8K Resin",
    description: "Large 8K resin printer for high-detail models and professional prototyping.",
    features: ["8K LCD Screen", "Large Build Volume", "Air Purifier"],
    images: ["/halot-mage.webp"]
  },
  "cr-10-se": {
    title: "CR-10 SE",
    price: "$459.00",
    oldPrice: "$499.00",
    tag: "Classic Pro",
    description: "The evolution of the legendary CR-10 series, now with high-speed printing and auto-leveling.",
    features: ["600mm/s Speed", "Linear Rails", "Direct Drive"],
    images: ["https://img.creality.com/p/1200x1200/cr-10-se.png"]
  },
  "falcon2-40w": {
    title: "Falcon2 40W",
    price: "$1,299.00",
    oldPrice: "$1,499.00",
    tag: "Powerful Laser",
    description: "Industrial-grade laser engraver and cutter with 40W power for thick materials.",
    features: ["40W Laser Power", "Adjustable Beam", "Air Assist"],
    images: ["https://img.creality.com/p/1200x1200/falcon2-40w.png"]
  },
  "hyper-series-pla": {
    title: "Hyper Series PLA",
    price: "$25.00",
    oldPrice: "$29.00",
    tag: "High Speed",
    description: "Optimized filament for high-speed printing up to 600mm/s without quality loss.",
    features: ["High Fluidity", "Fast Cooling", "Eco-friendly"],
    images: ["https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1974&auto=format&fit=crop"]
  },
  "sonic-pad": {
    title: "Creality Sonic Pad",
    price: "$159.00",
    oldPrice: "$189.00",
    tag: "Smart Tablet",
    description: "Klipper-based 3D printing tablet that speeds up your printer and adds smart features.",
    features: ["Klipper Firmware", "7-inch Touchscreen", "Multi-printer Control"],
    images: ["https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"]
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const product = useMemo(() => {
    return PRODUCTS_DB[id || ""] || PRODUCTS_DB["k1-max-ai-fast"];
  }, [id]);

  const [activeImage, setActiveImage] = useState(product.images[0]);

  React.useEffect(() => {
    setActiveImage(product.images[0]);
  }, [product]);

  const handleAddToCart = () => {
    showSuccess(`Added ${quantity} x ${product.title} to cart!`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors"
        >
          <ChevronLeft size={20} /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-4">
            <div className="aspect-square rounded-[40px] overflow-hidden bg-gray-50 border border-gray-100">
              <img src={activeImage} alt={product.title} className="w-full h-full object-contain p-8" />
            </div>
            
            {/* Показываем миниатюры только если изображений больше одного */}
            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.images.map((img: string, idx: number) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 ${activeImage === img ? 'border-blue-600' : 'border-transparent bg-gray-50'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <div className="mb-6">
              <Badge className="bg-blue-600 mb-4">{product.tag}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-blue-600">{product.price}</span>
                <span className="text-xl text-gray-400 line-through">{product.oldPrice}</span>
              </div>
            </div>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">{product.description}</p>

            <div className="space-y-4 mb-10">
              {product.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center border-2 border-gray-100 rounded-full px-4 h-14">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 text-xl font-bold">-</button>
                <span className="px-6 font-bold text-lg">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-3 text-xl font-bold">+</button>
              </div>
              <Button 
                className="flex-1 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-lg font-bold shadow-lg shadow-blue-200"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2" size={20} /> Buy Now
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck className="text-blue-600" size={24} />
                <span className="text-xs font-medium text-gray-500">1 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="text-blue-600" size={24} />
                <span className="text-xs font-medium text-gray-500">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Share2 className="text-blue-600" size={24} />
                <span className="text-xs font-medium text-gray-500">Share</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;