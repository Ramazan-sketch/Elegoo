"use client";

import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { showSuccess } from "@/utils/toast";
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductProps {
  title: string;
  price: string;
  image: string;
  tag?: string;
}

const ProductCard = ({ title, price, image, tag }: ProductProps) => {
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    showSuccess(`Added ${title} to cart!`);
  };

  const handleViewDetails = () => {
    // В реальном приложении здесь был бы ID. Пока используем слаг из названия.
    const id = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/product/${id}`);
  };

  return (
    <Card 
      className="group overflow-hidden border-none shadow-none bg-gray-50 hover:bg-white transition-all duration-300 rounded-3xl cursor-pointer"
      onClick={handleViewDetails}
    >
      <CardContent className="p-0 relative">
        {tag && (
          <Badge className="absolute top-4 left-4 z-10 bg-blue-600 hover:bg-blue-600">
            {tag}
          </Badge>
        )}
        <div className="aspect-square overflow-hidden relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button 
              className="bg-white text-black hover:bg-blue-600 hover:text-white rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2" size={18} /> Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-6 gap-2">
        <h3 className="font-bold text-xl text-gray-900">{title}</h3>
        <p className="text-blue-600 font-bold text-lg">{price}</p>
        <Button 
          variant="link" 
          className="p-0 h-auto text-gray-500 group-hover:text-blue-600 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            handleViewDetails();
          }}
        >
          View Details →
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;