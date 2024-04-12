import React from 'react'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <>
      <div className='flex justify-between p-10'>
        <a href='/'> <img id='logo' className='invert h-12' src='logo.png' alt='not found' /> </a>
        <div className='flex items-center gap-12'>
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }} href="/">Home</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }} href='/Projects'>Projects</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }} href='/Experiences'>Experience</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }} href='/Contact'>Contact</motion.a>
        </div>
      </div>
    </>
  )
}

export default Header
