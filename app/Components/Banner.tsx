
import React from 'react'
import Image from 'next/image'
import { socialMedia } from '@/constatnts/constants';


const Banner = () => {
  return (
    <div className='lg:min-h-[100vh]' id='home'>
      <div className='landing px-5 md:px-10' >
            <div className='left-sec  flex animate-on-view hid'>
              <h2 className='mx-auto text-main land-tex'>Let's create something amazing and timeless together.</h2>
            </div>
      </div>
      <div className='banner' >
          <div className='card mr-5 animate-on-view hid'>
            <div className='card-top'>
              <p className='hi-tag'>Hi I'm</p>
              <div className="icons">
                {
                  socialMedia.map((social)=>{
                    if(social.title === 'instagram'){
                      return(
                        <div className="icon ">
                          <a href={social.url}>
                            <Image
                              src={social.iconUrl}
                              alt="Image description"
                              width={15}
                              height={15}
                              
                            />
                          </a>
                        </div>
                      )
                    }
                    if(social.title === 'x'){
                      return(
                        <div className="icon ">
                          <a href={social.url}>
                            <Image
                              src={social.iconUrl}
                              alt="Image description"
                              width={15}
                              height={15}
                              
                            />
                          </a>
                        </div>
                      )
                    }
                    
                  })
                }
                

              </div>
              <a href="#contact" className="hire-btn">Get In Touch<span><svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#e8eaed"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></span></a>
            </div>
            <div className="card-bottom">
              <h1 className='text-2xl xs:text-4xl md:text-5xl '>Saeed Pk .</h1>
              <p className='profession mt-5'>I craft visually striking and user-friendly websites that stand out. Whether it's bringing a website to life or transforming an idea into digital reality, I make sure everything is customized to captivate and engage the audience.</p>
              <div className="icons-bottom ">
                
                <div className="icon-bot flex">
                {
                  socialMedia.map((social)=>{
                    if(social.title === 'instagram'){
                      return(
                        <div className="icon ">
                          <a href={social.url}>
                            <Image
                              src={social.iconUrl}
                              alt="Image description"
                              width={15}
                              height={15}
                              
                            />
                          </a>
                        </div>
                      )
                    }
                    if(social.title === 'x'){
                      return(
                        <div className="icon ">
                          <a href={social.url}>
                            <Image
                              src={social.iconUrl}
                              alt="Image description"
                              width={15}
                              height={15}
                              
                            />
                          </a>
                        </div>
                      )
                    }
                    
                  })
                }
                </div>

              </div>
            </div>
          </div>
          <div className="mt-[50px] co-xl:mt-[100px] side-card border  rounded-xl p-10 pb-5 co-xl:p-5 mr-5 animate-on-view hid">
            <h5 className='font-bold  md:text-4xl text-2xl co-xl:text-2xl'>How I can help you?</h5>
            <div className='mt-7 co-xl:mt-5 text-sm md:text-lg co-xl:text-sm co-xl:max-w-[90%] p-3 border border-gray-600 rounded-lg text-gray-200 '>
              <div className="flex ml-[-10px] items-center profession">
                <Image
                  src="/images/avatar-1.avif"
                  width={40}
                  height={40}
                  alt='avatar'
                />
                Let's Build a High-Converting Website
              </div>
              <p className='mt-5 ml-5 profession'><span className='co-xl:flex hidden'>Ready for a stunning, fully customized website designed to maximize conversions?</span><span className='co-xl:hidden flex'>Ready to take your online presence to the next level with a stunning, fully customized website that’s expertly designed to maximize conversions and drive results?</span></p>
            </div>

            <a href="#contact" className="hire-btn mt-5 co-xl:hidden">Get In Touch<span><svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#e8eaed"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg></span></a>
          </div>
      </div>
      <div className="flex justify-end mr-10 mt-10 ">
        <a className="rounded-full cursor-pointer banner-quit-btn " href='#about'>
          <Image
            src="/icons/arrow-down.svg"
            alt='arrow-down'
            width={40}
            height={40}
            className="hover:scale-125 transition-all duration-700 ease-in-out"
          />
        </a>

      </div>
      
    </div>
    
    
  )
}

export default Banner
