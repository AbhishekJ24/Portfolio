"use client"
import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      if (documentHeight - windowHeight - scrollPosition < 100) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`text-center fixed bottom-0 left-0 w-full p-10 h-10 ${showFooter ? 'block' : 'hidden'}`}>
      <p>&copy; 2024 Abhishek Joshi</p>
    </footer>
  );
};

export default Footer;
