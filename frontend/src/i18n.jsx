import { createContext, useContext, useState } from 'react';

const strings = {
  en: {
    home: 'Home',
    routeMap: 'Route Map',
    listings: 'Listings',
    blog: 'Blog & News',
    faq: 'FAQs',
    contact: 'Contact Us',
    exploreCTA: 'Explore Verified Properties',
    tagline: 'Connecting You to Verified Land along Ganga Expressway',
    highlight1: '594 km Expressway',
    highlight2: '12 Districts Connected',
    highlight3: 'Completion by 2025'
  },
  hi: {
    home: 'होम',
    routeMap: 'मार्ग मानचित्र',
    listings: 'सूचियाँ',
    blog: 'ब्लॉग / समाचार',
    faq: 'प्रश्नोत्तर',
    contact: 'संपर्क करें',
    exploreCTA: 'प्रमाणित संपत्तियाँ देखें',
    tagline: 'गंगा एक्सप्रेसवे के पास प्रमाणित जमीन से जुड़ें',
    highlight1: '594 किमी लंबा एक्सप्रेसवे',
    highlight2: '12 जिले जुड़ेंगे',
    highlight3: '2025 तक पूर्ण'
  }
};

const LangContext = createContext();

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');
  const t = strings[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}
