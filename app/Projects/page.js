"use client"
import React from 'react'

const projects = () => {
  return (
    <>
      <div className='flex justify-center'>

        <div id='project-cont' className='flex flex-wrap gap-10 justify-around'>

          <div className='project-card rounded-2xl p-5 overflow-y-clip flex flex-col'>
            <img src='hybridmodel.png' className='object-cover rounded-2xl hover:scale-105' />
            <p className='mt-5 font-bold'> Hybrid model for accurate prediction of increasing temporal big data in the cloud for mining large collections of co-evolving sequences </p>
            <a className='text-sm p-3 rounded-lg text-white mt-5 w-[10rem] font-semibold' href='https://github.com/AbhishekJ24/Hybrid-Model-for-Mining-on-Co-Evolving-Sequences.git'>
              GitHub Repository
            </a>
          </div>
          <div className='project-card rounded-2xl p-5 overflow-y-clip flex flex-col'>
            <img src='llm.jpg' className='object-cover rounded-2xl hover:scale-105' />
            <p className='mt-5 font-bold'> SummaEase: Text and Speech Summarization using BERT LLM </p>
            <a className='text-sm p-3 rounded-lg text-white mt-5 w-[10rem] font-semibold' href='https://github.com/AbhishekJ24/SummaEase-Text-And-Speech-Summarizer-using-LLM.git'>
              GitHub Repository
            </a>
          </div>
          <div className='project-card rounded-2xl p-5 overflow-y-clip flex flex-col'>
            <img src='linguocheck.png' className='object-cover rounded-2xl hover:scale-105' />
            <p className='mt-5 font-bold'> LinguoCheck: NLP Grammar Checker using Python and Flask </p>
            <a className='text-sm p-3 rounded-lg text-white mt-5 w-[10rem] font-semibold' href='https://github.com/AbhishekJ24/LinguoCheck-NLP-Grammar-Checker.git'>
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default projects
