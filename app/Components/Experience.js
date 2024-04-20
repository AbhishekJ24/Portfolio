"use client"
import { motion } from 'framer-motion';
import React from 'react';
const Experience = ({ company, position, duration, imgpath }) => {
  return (
    <motion.div initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 10, duration: 4000, ease: 'easeInOut' }} className="exp-card max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-8">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src={imgpath} alt="Work Experience" />
        </div>
        <div className="p-8">
          <div className="comp tracking-wide text-lg font-semibold">{company}</div>
          <p className="block mt-1 text-sm leading-tight font-medium text-black">{position}</p>
          <p className="exp-card-p mt-1 text-sm">{duration}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
