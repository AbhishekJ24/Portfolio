"use client"
import React from 'react'
import {motion} from 'framer-motion'
import Experience from '@/app/Components/Experience'

const Experiences = () => {
  return (
    <>
      <motion.div className='mt-8' initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 10, duration: 4000, ease: 'easeInOut' }}>
        <Experience
          company="The High Energy Accelerator Research Organization (KEK)"
          position="Grid Computing R&D Intern"
          duration="Jan 2024 - Present"
          imgpath="kek.jpg"
        />
      </motion.div>

      {/* <motion.div className='mt-8' initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 10, duration: 8000, ease: 'easeInOut' }}>
        <Experience
          company="The High Energy Accelerator Research Organization (KEK)"
          position="Grid Computing R&D Intern"
          duration="Jan 2024 - Present"
          imgpath="kek.jpg"
        />
      </motion.div> */}

    </>
  )
}

export default Experiences
