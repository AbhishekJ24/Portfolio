import React from 'react'
import { motion } from "framer-motion"

const projects = () => {
  return (
    <>
      <div className='flex justify-center'>

        <div id='project-cont' className='flex flex-wrap gap-10 justify-around'>

          <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }} className='project-card rounded-2xl p-5 overflow-y-clip flex flex-col backdrop-blur-lg'>
            <img src='hybridmodel.png' className='object-cover rounded-2xl hover:scale-105' />
            <p className='mt-5 font-bold'> Hybrid model for accurate prediction of increasing temporal big data in the cloud for mining large collections of co-evolving sequences </p>
            <motion.a whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }} className='text-sm p-3 rounded-lg text-white mt-5 w-[10rem] font-semibold' href='https://github.com/AbhishekJ24/Hybrid-Model-for-Mining-on-Co-Evolving-Sequences.git'>
              GitHub Repository
            </motion.a>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }} className='project-card rounded-2xl p-5 overflow-y-clip flex flex-col'>
            <img src='summaease.png' className='object-cover rounded-2xl hover:scale-105' />
            <p className='mt-5 font-bold'> SummaEase: Text and Speech Summarization using BERT LLM </p>
            <motion.a whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }} className='text-sm p-3 rounded-lg text-white mt-5 w-[10rem] font-semibold' href='https://github.com/AbhishekJ24/SummaEase-Text-And-Speech-Summarizer-using-LLM.git'>
              GitHub Repository
            </motion.a>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }} className='project-card rounded-2xl p-5 overflow-y-clip flex flex-col backdrop-blur-lg'>
            <img src='linguocheck.png' className='object-cover rounded-2xl hover:scale-105' />
            <p className='mt-5 font-bold'> LinguoCheck: NLP Grammar Checker using Python and Flask </p>
            <motion.a whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }} className='text-sm p-3 rounded-lg text-white mt-5 w-[10rem] font-semibold' href='https://github.com/AbhishekJ24/LinguoCheck-NLP-Grammar-Checker.git'>
              GitHub Repository
            </motion.a>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }} className='project-card rounded-2xl p-5 overflow-y-clip flex flex-col backdrop-blur-lg'>
            <img src='weatherapp.png' className='object-cover rounded-2xl hover:scale-105' />
            <p className='mt-5 font-bold'> FindMyWeather: A Weather App using RESTful API by VisualCrossing</p>
            <motion.a whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }} className='text-sm p-3 rounded-lg text-white mt-5 w-[10rem] font-semibold' href='https://github.com/AbhishekJ24/FindMyWeather.git'>
              GitHub Repository
            </motion.a>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default projects
