import { socialMedia } from '@/constatnts/constants'
import Image from 'next/image'
import React from 'react'
import LiveTime from './LiveTime'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
				<div className="sm:text-center text-gray-400 text-sm">
					<span className="  sm:text-center text-gray-400">© 2024 Saeed Pk. All Rights Reserved.
					</span>
					<LiveTime />
				</div>
				<div className="flex mt-4 sm:justify-center sm:mt-0">
					{
						socialMedia.map((social,index)=>{
							if(social.title === 'mail'){
								return(
									''
								)
							}else{
								return(
									<a href={social.url} className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5" key={index}>
										<Image
											src={social.iconUrl}
											alt={social.title}
											width={20}
											height={20}
											className="pointer-events-none "
										/>
									</a>
								)
							}
						})
					}
				</div>
            </div>
			
        </div>
    </footer>
    
  )
}

export default Footer


