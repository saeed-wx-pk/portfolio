import React from 'react';

import Image from 'next/image';
import ContactForm from './ContactForm';
import { contactIntro, socialMedia } from '@/constatnts/constants';

const Contact = () => {
  return (
    <div className='p-5 sm:p-10 lg:p-24' id='contact'>
      <div className="rounded-2xl bg-[#130e2f]  w-[100%] p-4 xs:p-8 sm:p-10 animate-on-view hid">
        <div className="flex flex-wrap ">
			<div className="mt-1 co-xl:w-[50%]">
				<div className="">
					<p className='uppercase font-extralight text-xs'>Get in touch</p>
					<h2 className='font-[900] tracking-wide text-3xl md:text-4xl mt-3 mx-auto '>Contact me.</h2>
				</div>
				<div className="mt-10 ">
					<p className="text-gray-300 ">
						{contactIntro}
					</p>
					<div className=" ">
						{
							socialMedia.map((social,index)=>{
								if(social.title === 'whatsapp'){
									return(
										<div className=" flex mt-10 ml-5 xs:ml-10 " key={index}>
											<Image
												src={social.iconUrl}
												alt='whatsapp'
												width={20}
												height={20}
												className="pointer-events-none mr-5"
											/>
											<a href={social.url} className="cursor-poiner ">+91 7510 830 593</a>
										</div>
									)
								}
								if(social.title === "mail"){
									return(
										<div className=" flex mt-10 ml-5 xs:ml-10" key={index}>
											<Image
												src={social.iconUrl}
												alt='mail'
												width={20}
												height={20}
												className="pointer-events-none mr-5"
											/>
											<a href={social.url} className="cursor-poiner">saeedpk781@gmail.com</a>
										</div>
									)
								}
							})
						}
						<div className=" flex mt-10 ml-10">
							{
								socialMedia.map((social,index)=>{
									if(social.title === 'mail'){
										return(
											''
										)
									}else{
										return(
											<a href={social.url} className="cursor-pointer mr-5" key={index}>
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
			</div>
            <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default Contact
