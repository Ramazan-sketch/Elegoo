"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru' | 'kk';

interface Translations {
  [key: string]: {
    nav: {
      printers: string;
      contact: string;
    };
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    contact: {
      title: string;
      description: string;
      email: string;
      phone: string;
      visit: string;
      address: string;
      firstName: string;
      lastName: string;
      emailLabel: string;
      message: string;
      send: string;
      success: string;
      placeholders: {
        firstName: string;
        lastName: string;
        email: string;
        message: string;
      };
    };
  };
}

const translations: Translations = {
  en: {
    nav: {
      printers: "Printers",
      contact: "Contact"
    },
    hero: {
      title: "Next-Gen 3D Printing",
      subtitle: "Discover the power of precision with Creality's latest technology.",
      cta: "Explore Catalog"
    },
    contact: {
      title: "Get in Touch",
      description: "Have questions about our products or need a custom solution? Fill out the form and our team will contact you within 24 hours.",
      email: "Email Us",
      phone: "Call Us",
      visit: "Visit Us",
      address: "Almaty, Kazakhstan",
      firstName: "First Name",
      lastName: "Last Name",
      emailLabel: "Email Address",
      message: "Message",
      send: "Send Message",
      success: "Message sent! We'll get back to you soon.",
      placeholders: {
        firstName: "Adam",
        lastName: "Adil",
        email: "Adil@example.com",
        message: "How can we help you?"
      }
    }
  },
  ru: {
    nav: {
      printers: "Принтеры",
      contact: "Контакты"
    },
    hero: {
      title: "3D-печать нового поколения",
      subtitle: "Откройте для себя мощь точности с новейшими технологиями Creality.",
      cta: "В каталог"
    },
    contact: {
      title: "Свяжитесь с нами",
      description: "Есть вопросы о нашей продукции или нужно индивидуальное решение? Заполните форму, и наша команда свяжется с вами в течение 24 часов.",
      email: "Напишите нам",
      phone: "Позвоните нам",
      visit: "Посетите нас",
      address: "Алматы, Казахстан",
      firstName: "Имя",
      lastName: "Фамилия",
      emailLabel: "Электронная почта",
      message: "Сообщение",
      send: "Отправить сообщение",
      success: "Сообщение отправлено! Мы свяжемся с вами в ближайшее время.",
      placeholders: {
        firstName: "Адам",
        lastName: "Адиль",
        email: "Adil@example.com",
        message: "Чем мы можем вам помочь?"
      }
    }
  },
  kk: {
    nav: {
      printers: "Принтерлер",
      contact: "Контактілер"
    },
    hero: {
      title: "Жаңа буын 3D басып шығару",
      subtitle: "Creality-дің соңғы технологияларымен дәлдіктің күшін ашыңыз.",
      cta: "Каталогты қарау"
    },
    contact: {
      title: "Бізбен байланысыңыз",
      description: "Өнімдеріміз туралы сұрақтарыңыз бар ма немесе жеке шешім қажет пе? Форманы толтырыңыз, біздің команда 24 сағат ішінде сізбен байланысады.",
      email: "Бізге жазыңыз",
      phone: "Бізге қоңырау шалыңыз",
      visit: "Бізге келіңіз",
      address: "Алматы, Қазақстан",
      firstName: "Аты",
      lastName: "Тегі",
      emailLabel: "Электрондық пошта",
      message: "Хабарлама",
      send: "Хабарлама жіберу",
      success: "Хабарлама жіберілді! Жақын арада сізбен байланысамыз.",
      placeholders: {
        firstName: "Адам",
        lastName: "Әділ",
        email: "Adil@example.com",
        message: "Сізге қалай көмектесе аламыз?"
      }
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current[key] === undefined) return path;
      current = current[key];
    }
    
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};