import React from 'react'
import Link from 'next/link'

const projects = () => {
  return (
    <>
      <div className='flex justify-center'>

        <div id='project-cont' className='flex flex-wrap gap-10 justify-around'>

          <div className='project-card bg-slate-300 rounded-2xl w-80 h-96 p-5 overflow-y-clip flex flex-col'>
            <img src='hybridmodel.avif' className='object-cover h-32 w-72 rounded-2xl hover:scale-105' />
            <p className='mt-5 text-black font-semibold'> Hybrid model for accurate prediction of increasing temporal big data in the cloud for mining large collections of co-evolving sequences </p>
            <Link className='text-sm p-3 rounded-lg bg-orange-950 hover:bg-orange-900 mt-5 w-[10rem]' href='https://github.com/AbhishekJ24/Hybrid-Model-for-Mining-on-Co-Evolving-Sequences.git'>
              GitHub Repository
            </Link>
          </div>
          <div className='project-card bg-slate-300 rounded-2xl h-96 w-80 p-5 overflow-y-clip flex flex-col'>
            <img src='llm.jpg' className='object-cover h-32 w-72 rounded-2xl hover:scale-105' />
            <p className='mt-5 text-black font-semibold'> SummaEase: Text and Speech Summarization using BERT LLM </p>
            <Link className='text-sm p-3 rounded-lg bg-orange-950 hover:bg-orange-900 mt-5 w-[10rem]' href='https://github.com/AbhishekJ24/SummaEase-Text-And-Speech-Summarizer-using-LLM.git'>
              GitHub Repository
            </Link>
          </div>
          <div className='project-card bg-slate-300 rounded-2xl h-96 w-80 p-5 overflow-y-clip flex flex-col'>
            <img src='linguocheck.png' className='object-cover h-32 w-72 rounded-2xl hover:scale-105' />
            <p className='mt-5 text-black font-semibold'> LinguoCheck: NLP Grammar Checker using Python and Flask </p>
            <Link className='text-sm p-3 rounded-lg bg-orange-950 hover:bg-orange-900 mt-5 w-[10rem]' href='https://github.com/AbhishekJ24/LinguoCheck-NLP-Grammar-Checker.git'>
              GitHub Repository
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default projects
