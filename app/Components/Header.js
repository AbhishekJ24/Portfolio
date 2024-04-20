"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState('menu.svg');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMenuIcon(isMenuOpen ? 'menu.svg' : 'menu-clicked.svg');
  };

  return (
    <>
      <header className='flex justify-between p-8 text-gray-400 items-center'>
        <a href='/'> <img id='logo' className='invert h-12' src='logo.png' alt='not found' /> </a>
        <div id="nav-links-lap" className='flex items-center gap-12'>
          <Link className='hover:scale-105' href="/">Home</Link>
          <Link className='hover:scale-105' href='/Projects'>Projects</Link>
          <Link className='hover:scale-105' href='/Experiences'>Experience</Link>
          <Link className='hover:scale-105' href='/Contact'>Contact</Link>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <img className='h-12 invert' src={menuIcon} alt='Menu' />
          </button>
        </div>
        {isMenuOpen && (
          <div id='nav-links-mob' className='absolute right-14 top-14 w-28 h-40 p-5 rounded-xl shadow-lg z-10'>
            <Link className='block mb-2' href="/">Home</Link>
            <Link className='block mb-2' href='/Projects'>Projects</Link>
            <Link className='block mb-2' href='/Experiences'>Experience</Link>
            <Link className='block mb-2' href='/Contact'>Contact</Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;