"use client";

import React, { useState } from 'react';
import { Menu, Globe, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useTranslation } from '@/context/LanguageContext';
import PrinterMenu from './PrinterMenu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { language, setLanguage, t } = useTranslation();
  const [isPrinterMenuOpen, setIsPrinterMenuOpen] = useState(false);

  const navLinks = [
    { name: t("nav.contact"), path: "/contact", hasDropdown: false },
  ];

  return (
    <nav 
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100"
      onMouseLeave={() => setIsPrinterMenuOpen(false)}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-primary hover:opacity-80 transition-opacity">
            ELEGOO
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium h-16">
            {/* Кнопка принтеров теперь просто открывает меню без перехода в каталог */}
            <div 
              className="h-full flex items-center cursor-pointer"
              onMouseEnter={() => setIsPrinterMenuOpen(true)}
            >
              <span className="hover:text-blue-600 transition-colors flex items-center gap-1 py-2">
                {t("nav.printers")}
                <ChevronDown size={14} className={`transition-transform ${isPrinterMenuOpen ? 'rotate-180' : ''}`} />
              </span>
            </div>

            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="h-full flex items-center"
              >
                <Link 
                  to={link.path}
                  className="hover:text-blue-600 transition-colors flex items-center gap-1 py-2"
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="rounded-full gap-2">
                <Globe size={18} />
                <span className="uppercase text-xs font-bold">{language}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-xl">
              <DropdownMenuItem onClick={() => setLanguage('en')}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('ru')}>Русский</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('kk')}>Қазақша</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left text-2xl font-bold">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8">
                <span className="text-lg font-medium text-gray-400">{t("nav.printers")}</span>
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className="text-lg font-medium hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex gap-4 mt-4">
                  <Button variant="outline" size="sm" onClick={() => setLanguage('en')}>EN</Button>
                  <Button variant="outline" size="sm" onClick={() => setLanguage('ru')}>RU</Button>
                  <Button variant="outline" size="sm" onClick={() => setLanguage('kk')}>KK</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {isPrinterMenuOpen && <PrinterMenu />}
    </nav>
  );
};

export default Navbar;