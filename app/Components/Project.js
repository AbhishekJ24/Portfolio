"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Project = ({ imgpath, title, stack1, stack2, stack3, stack4, stack5, stack6, githublink, projlink }) => {
    return (
        <>
            <div>

                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }} className='project-card rounded-2xl p-5 overflow-y-clip flex flex-col backdrop-blur-lg'>
                    <div className="img-container relative overflow-hidden rounded-2xl aspect-w-16 aspect-h-9 mb-5">
                        <motion.img
                            src={imgpath}
                            alt={title}
                            className="object-cover absolute inset-0 w-full h-full transition-transform duration-300 transform-gpu hover:scale-105"
                        />
                    </div>
                    <p className='mt-5 font-bold md:text-xl text-lg'>{title}</p>
                    <div class="mt-1 flex flex-wrap gap-2 items-center">
                        <p class="text-[0.75rem] blue-text-gradient">{stack1}</p>
                        <p class="text-[0.75rem] green-text-gradient">{stack2}</p>
                        <p class="text-[0.75rem] pink-text-gradient">#{stack3}</p>
                        <p class="text-[0.75rem] blue-text-gradient">{stack4}</p>
                        <p class="text-[0.75rem] green-text-gradient">{stack5}</p>
                        <p class="text-[0.75rem] pink-text-gradient">{stack6}</p>
                    </div>
                    <motion.a whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1 }} className='text-xs p-3 rounded-lg text-white mt-5 w-[10rem] font-semibold' href={githublink} target='_blank'>
                        GitHub Repository
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1 }} className='text-xs p-3 rounded-lg text-white mt-1 w-[10rem] font-semibold' href={projlink} target='_blank'>
                        Visit Project
                    </motion.a>
                </motion.div>
            </div>
        </>
    )
}

export default Project
