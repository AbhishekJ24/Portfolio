"use client"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Page = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='justify-center w-6/12'>
          <div className='font-semibold text-2xl'>
            <span>Hey, I'm</span>
          <div className='grad-text1 text-8xl'>
            <span className='grad-text1 text-8xl'>
              Abhishek Joshi
            </span>
          </div>

          </div>
            <TypeAnimation id='name' className='grad-text2 text-5xl' sequence={[
              'Passionate about Coding',
              250,
              'Creating Memorable Designs',
              250,
              'Building Future Solutions',
              250
            ]} />
          <div className='text-xl mt-5'>
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
        <div className='w-1/2 mt-10 m-2 flex flex-wrap justify-center gap-8 items-center'>
          <img className='h-24 rounded-lg' src='java.svg' />
          <img className='h-24 rounded-lg' src='python.svg' />
          <img className='h-16 rounded-lg' src='sklearn.svg' />
          <img className='h-24 rounded-lg' src='pytorch.svg' />
          <img className='h-24 rounded-lg' src='javascript.svg' />
          <img className='h-16 rounded-lg' src='tailwind.svg' />
          <img className='h-28 rounded-lg' src='react.svg' />
          <img className='h-24 rounded-lg invert' src='next.svg' />
          <img className='h-20 rounded-lg invert' src='express.svg' />
          <img className='h-24 rounded-lg' src='postman.svg' />
        </div>
      </div>
    </>
  )
}

export default Page;
