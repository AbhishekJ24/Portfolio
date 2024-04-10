"use client"
import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div className='flex justify-between p-10'>
        <div className='flex items-center gap-12'>
          <Link className='hover:scale-110' href="/">Home</Link>
          <Link className='hover:scale-110' href='/Projects'>Projects</Link>
          <Link className='hover:scale-110' href='/Experience'>Experience</Link>
          <Link className='hover:scale-110' href='/Contact'>Contact</Link>
        </div>
      </div>
    </>
  )
}

export default Header
