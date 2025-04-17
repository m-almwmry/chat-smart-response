
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  dir: 'rtl' | 'ltr';
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  dir: 'ltr',
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState(i18n.language || 'en');
  const [dir, setDir] = useState<'rtl' | 'ltr'>('ltr');

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    // Set the document direction based on language
    const direction = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    setDir(direction as 'rtl' | 'ltr');
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
