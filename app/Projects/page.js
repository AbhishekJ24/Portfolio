"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Project from '@/app/Components/Project'

const Projects = () => {
  return (
    <>
      <div className='flex justify-center'>

        <div id='project-cont' className='flex flex-wrap gap-10 justify-around'>
          <Project
            imgpath="hybridmodel.png"
            title="EvoCloudMineX: Unleashing Temporal Data Insights"
            stack1="#Python"
            stack2="#HTML"
            stack3="#CSS"
            stack4="#FLASK"
            githublink="https://github.com/AbhishekJ24/Hybrid-Model-for-Mining-on-Co-Evolving-Sequences.git"
            projlink="/" />
          <Project
            imgpath="summaease.png"
            title="SummaEase: Text and Speech Summarization using BERT LLM"
            stack1="#Python"
            stack2="#HTML"
            stack3="#CSS"
            stack4="#FLASK"
            stack5="#BART"
            githublink="https://github.com/AbhishekJ24/SummaEase-Text-And-Speech-Summarizer-using-LLM.git"
            projlink="/" />
          <Project
            imgpath="weatherapp.png"
            title="FindMyWeather: A Weather App"
            stack1="#HTML"
            stack2="#CSS"
            stack3="#JS"
            githublink="https://github.com/AbhishekJ24/FindMyWeather.git"
            projlink="https://findmyweather.vercel.app/" />
        </div>
      </div>
    </>
  )
}

export default Projects
