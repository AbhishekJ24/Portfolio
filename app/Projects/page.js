"use client"
import React from 'react'
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <>
      <div className='flex justify-center'>

        <div id='project-cont' className='flex flex-wrap gap-10 justify-around'>

          <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }} className='project-card rounded-2xl p-5 overflow-y-clip flex flex-col backdrop-blur-lg'>
            <img src='hybridmodel.png' className='object-cover rounded-2xl ' />
            <p className='mt-5 font-bold'> EvoCloudMineX: Unleashing Temporal Data Insights </p>
            <div class="mt-1 flex flex-wrap gap-2 items-center">
              <p class="text-[0.75rem] blue-text-gradient">#Python</p>
              <p class="text-[0.75rem] green-text-gradient">#HTML</p>
              <p class="text-[0.75rem] pink-text-gradient">#CSS</p>
              <p class="text-[0.75rem] blue-text-gradient">#Flask</p>
            </div>
            <motion.a whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }} className='text-sm p-3 rounded-lg text-white mt-5 w-[10rem] font-semibold' href='https://github.com/AbhishekJ24/Hybrid-Model-for-Mining-on-Co-Evolving-Sequences.git' target='_blank'>
              GitHub Repository
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }} className='project-card rounded-2xl p-5 overflow-y-clip flex flex-col'>
            <img src='summaease.png' className='object-cover rounded-2xl ' />
            <p className='mt-5 font-bold'> SummaEase: Text and Speech Summarization using BERT LLM </p>
            <div class="mt-1 flex flex-wrap gap-2 items-center">
              <p class="text-[0.75rem] blue-text-gradient">#Python</p>
              <p class="text-[0.75rem] green-text-gradient">#HTML</p>
              <p class="text-[0.75rem] pink-text-gradient">#CSS</p>
              <p class="text-[0.75rem] blue-text-gradient">#Flask</p>
              <p class="text-[0.75rem] green-text-gradient">#BART</p>
            </div>
            <motion.a whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }} className='text-sm p-3 rounded-lg text-white mt-5 w-[10rem] font-semibold' href='https://github.com/AbhishekJ24/SummaEase-Text-And-Speech-Summarizer-using-LLM.git' target='_blank'>
              GitHub Repository
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }} className='project-card rounded-2xl p-5 overflow-y-clip flex flex-col backdrop-blur-lg'>
            <img src='weatherapp.png' className='object-cover rounded-2xl ' />
            <p className='mt-5 font-bold'> FindMyWeather: A Weather App using RESTful API by VisualCrossing</p>
            <div class="mt-1 flex flex-wrap gap-2 items-center">
              <p class="text-[0.75rem] blue-text-gradient">#HTML</p>
              <p class="text-[0.75rem] green-text-gradient">#CSS</p>
              <p class="text-[0.75rem] pink-text-gradient">#JavaScript</p>
            </div>
            <motion.a whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }} className='text-sm p-3 rounded-lg text-white mt-5 w-[10rem] font-semibold' href='https://github.com/AbhishekJ24/FindMyWeather.git' target='_blank'>
              GitHub Repository
            </motion.a>
          </motion.div>

        </div>
      </div>
    </>
  )
}

export default Projects
