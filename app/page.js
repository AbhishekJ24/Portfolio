"use client"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Page = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='w-3/5'>
          <div id="intro" className='font-semibold'>
            <span>Hey, I'm</span>
          </div>
          <div id="name" className='grad-text'>
            <TypeAnimation sequence={['Abhishek Joshi', 300]} />
          </div>
          <div id="about" className='text-justify'>
            <p>Currently in my pre-final year of my bachelor's degree. Always eager to deepen my technical
              knowledge and skills. Honed proficiency in Java, Python and MERN stack while embracing problem-solving
              abilities vital to computer science.
            </p>
            <p>
              I've completed projects spanning complex algorithms and web development, reinforcing the value
              of efficient, scalable code. Active involvement in coding competitions which has fueled my
              passion for innovation and collaboration.
            </p>
            <p>
              I'm eager to secure internships to gain practical experience and work toward my goal of becoming
              a skilled software developer.
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div id="stack" className='w-1/2 mt-10 m-2 flex flex-wrap justify-center gap-3'>
          <img className='' src='python.png'/>
          <img className='' src='pytorch.svg'/>
          <img className='' src='java.svg'/>
          <img className='' src='cpp.png'/>
          <img className='' src='tailwind.png'/>
          <img className='' src='reactjs.png'/>
          <img className='' src='express.png'/>
          <img className=' invert' src='next.svg'/>
          <img className='' src='nodejs.png'/>
          <img className='' src='postman.svg'/>
          <img className='' src='git.png'/>
          <img className='' src='docker.png'/>
          <img className='' src='figma.png'/>
        </div>
      </div>
    </>
  )
}

export default Page;
