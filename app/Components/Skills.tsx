import React from 'react'
import CircleBar from './CircleBar'
import { skills } from '@/constatnts/constants'

const Skills = () => {
  return (
        <div className="w-[100%] md:px-20 px-8 mt-20 ">
            <div className="animate-on-view hid">
                <p className='uppercase font-extralight text-xs'>Incredible</p>
                <h2 className='font-[900] tracking-wide text-4xl md:text-5xl mt-4 mx-auto '>Skills.</h2>
            </div>
            
            <section className="skills-section mt-10 animate-on-view hid">
                <div className="container">
                    <div className="grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
                        {
                            skills.map((skill)=>{
                                
                                return (
                                    <div className="flex flex-col items-center justify-center">
                                        <CircleBar
                                            percent = {skill.percent} 
                                            title={skill.title}
                                        />
                                    </div>
                                )
                            })
                        }
                        
                        
                    </div>
                </div>
            </section>
            
        </div>
  )
}

export default Skills
