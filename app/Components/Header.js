import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div className='flex justify-between p-10'>
        <a href='/'> <img id='logo' className='invert h-12' src='logo.png' alt='not found' /> </a>
        <div id="nav-links-lap" className='flex items-center gap-12'>
          <Link className='hover:scale-105' href="/">Home</Link>
          <Link className='hover:scale-105' href='/Projects'>Projects</Link>
          <Link className='hover:scale-105' href='/Experiences'>Experience</Link>
          <Link className='hover:scale-105' href='/Contact'>Contact</Link>
        </div>
        <div id='nav-links-mob' className='p-5 rounded-2xl backdrop-blur-3xl'>
          <Link className='n-li block mb-2 hover:scale-105' href="/">Home</Link>
          <Link className='n-li block mb-2 hover:scale-105' href='/Projects'>Projects</Link>
          <Link className='n-li block mb-2 hover:scale-105' href='/Experiences'>Experience</Link>
          <Link className='n-li block mb-2 hover:scale-105' href='/Contact'>Contact</Link>
        </div>
      </div>
    </>
  )
}

export default Header
