"use client"
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight;
      setShowFooter(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showFooter && (
        <footer className='text-center fixed bottom-0 left-0 w-full p-10 h-10 backdrop-blur-3xl'>
          <p>&copy; 2024 Abhishek Joshi</p>
        </footer>
      )}
    </>
  );
}

export default Footer;
