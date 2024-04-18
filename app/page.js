"use client"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Page = () => {
  return (
    <div className='flex flex-col items-center ml-5 mr-5'>
      <div className='w-full max-w-4xl px-4'>
        <div className=''>
          <span className='font-semibold text-lg'>Hey, I'm</span>
        </div>
        <div className='grad-text'>
          <TypeAnimation sequence={['Abhishek Joshi', 300]} />
        </div>
        <div className='text-justify mt-4'>
          <p>
            Experienced Computer Science Engineering student at UPES with a strong background in Python, Java, and web technologies. Proficient in AI, DBMS, Big Data, and NLP, demonstrated through hands-on work in grid computing and real-time data analysis.
          </p>
          <p>
            Skilled in scripting with Python and PowerShell for job scheduling and monitoring, optimizing development workflows with GitLab. Experienced in developing predictive models and leveraging Large Language Models for text and speech summarization, showcasing a knack for solving complex technical challenges. Passionate about driving innovation through technology and continuous learning in the ever-evolving tech landscape.
          </p>
        </div>
      </div>
      <div id="stack" className='w-full max-w-xl mt-10 m-2 flex flex-wrap justify-center items-center gap-3'>
        <img className='h-14' src='python.png' alt='Python' />
        <img className='h-12' src='pytorch.svg' alt='PyTorch' />
        <img className='h-14' src='java.svg' alt='Java' />
        <img className='md:h-28 h-14' src='cpp.png' />
        <img className='md:h-16 h-8' src='tailwind.png' />
        <img className='md:h-24 h-12' src='reactjs.png' />
        <img className='md:h-20 h-10' src='express.png' />
        <img className='md:h-24 h-12 invert' src='next.svg' />
        <img className='md:h-28 h-14' src='nodejs.png' />
        <img className='md:h-24 h-12' src='postman.svg' />
        <img className='md:h-32 h-16' src='git.png' />
        <img className='md:h-28 h-14' src='docker.png' />
        <img className='md:h-28 h-14' src='figma.png' />
      </div>
    </div>
  )
}

export default Page;
