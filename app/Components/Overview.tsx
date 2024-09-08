
import React from 'react'
import { about, services } from '@/constatnts/constants'

const Overview = () => {
    
  return (
    <div className='md:px-20 px-8 lg:mt-3 mt-20 ]' id='about'>
        <div className="w-[100%] ">
            <div className="animate-on-view hid">
                <p className='uppercase font-extralight'>Introduction</p>
                <h2 className='font-[900] tracking-wide text-4xl md:text-5xl mt-1'>Overview.</h2>
            </div>
            <div className="animate-on-view hid">
                <p className='ml-3 md:ml-16 mt-7 max-w-4xl'>
                    {about}
                </p>
            </div>
        </div>
        <div className="mt-10 animate-on-view hid">
            <div className="flex justify-center flex-wrap xs:justify-center">
                {
                    services.map((service,index)=>{
                        return(
                            <div className=" anima-card ml-10 mt-10 " key={index}>
                                <div className="inner-card flex  flex-col justify-center">
                                    
                                    <p>{service}</p>
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

export default Overview
