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
          <TypeAnimation sequence={['Abhishek Joshi', 350, 'Software Engineer', 350, 'Web Developer', 350, 'Abhishek Joshi', 350]} />
        </div>
        <div className='text-justify mt-2'>
          <p>
            Experienced Computer Science Engineering student at UPES with a strong background in Python, Java, and web technologies. Proficient in AI, DBMS, Big Data, and NLP, demonstrated through hands-on work in grid computing and real-time data analysis.
          </p>
          <p>
            Skilled in scripting with Python and PowerShell for job scheduling and monitoring, optimizing development workflows with GitLab. Experienced in developing predictive models and leveraging Large Language Models for text and speech summarization, showcasing a knack for solving complex technical challenges. Passionate about driving innovation through technology and continuous learning in the ever-evolving tech landscape.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page;
