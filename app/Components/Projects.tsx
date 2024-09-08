import { projectIntro, projects } from '@/constatnts/constants'
import Image from 'next/image'
import React from 'react';

const Projects = () => {
    
  return (
    <div className="w-[100%] md:px-20 px-8  mt-20 " id='portfolio'>
        <div className="animate-on-view hid">
            <p className='uppercase font-extralight text-xs'>My Awesome</p>
            <h2 className='font-[900] tracking-wide text-4xl md:text-5xl mt-3 mx-auto '>Projects.</h2>
        </div>
        <div className="mt-3 ml-3 max-w-4xl animate-on-view hid">
            <p>{projectIntro}</p>
        </div>
        <div className="mt-5 pb-5">
            
            <div className="flex flex-wrap justify-center">
                {
                    projects.map((project,index)=>{
                        return(
                            <div className="animate-on-view hid" key={index}>
                                <div className="bg-[#130e2f] rounded-2xl p-4 project-card  ml-4 mt-4   " >
                                    {
                                        project.github ? (
                                            <a href={project.github}>
                                                <div className="flex justify-end">
                                                    <div className="absolute rounded-full bg-gray-900 mr-2 mt-2 p-2">
                                                        <Image
                                                            src="/icons/github.svg"
                                                            alt='github'
                                                            width={15}
                                                            height={15}
                                                        />
                                                    </div>
                                                </div>
                                            </a>
                                        ) : ("")
                                    }
                                    <Image
                                        src={project.image}
                                        alt='Image'
                                        width={300}
                                        height={150}
                                        className='rounded-2xl'
                                    />
                                    <div className="mt-5 max-w-[300px]">
                                        <h4 className='font-extrabold text-lg'>{project.title}</h4>
                                        <p className='text-xs text-gray-300'>{project.description}</p>
                                        <div className="flex mt-5">
                                            {
                                                project.tools.map((tool,index)=>{
                                                    if(index === 0){
                                                        return(
                                                            <p className="text-[12px] mr-5 text-red-600" key={index}> # {tool}</p> 
                                                        )
                                                    }else if(index === 1){
                                                        return(
                                                            <p className="text-[12px] mr-5 text-blue-600" key={index}> # {tool}</p> 
                                                        )
                                                    }else if(index === 2){
                                                        return(
                                                            <p className="text-[12px] mr-5 text-green-600" key={index}> # {tool}</p> 
                                                        )
                                                    }
                                                } )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Projects
