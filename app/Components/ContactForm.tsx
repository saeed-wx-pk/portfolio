'use client'
import React, { useState } from 'react';
import { toast } from 'react-toastify';


import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const handleChange = (e:any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        let name = formData.firstName;
        if (formData.lastName) {
            name += ` ${formData.lastName}`;
        }

        const sendData = {
            name,
            email: formData.email,
            message: formData.message,
            ...(formData.phoneNumber && { phoneNumber: formData.phoneNumber }),
        };
        
        
        try {
            const result = await emailjs.send('service_bh2i2dl', 'template_ewas0qj', sendData, '2T1LDpmKykQFeGxce');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                message: '',
            })
            toast.success("Message Sented Successfully");
        } catch (error) {
            toast.error("An Error Occured Please Try Again");
        }
    };
  return (
            <div className="mt-1">
                
				<div className="isolate bg-transparent px-6 py-10 sm:py-15 lg:px-8	">
                
					<form action="#" method="POST" className="mx-auto mt-5 max-w-xl sm:mt-5" onSubmit={handleSubmit}>
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
							<div>
                                <label  htmlFor="last-name" className="text-xs  font-normal leading-6 text-transparent flex justify-end">
								    Optional
								</label>
								<div className="mt-2.5">
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        autoComplete="given-name"
                                        placeholder='First name'
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1  ring-gray-300    placeholder:text-gray-400  sm:text-sm sm:leading-6 bg-transparent"
                                        required
                                    />
								</div>
							</div>
							<div>
								
                                <label htmlFor="last-name" className="text-xs font-normal leading-6 text-gray-300 flex justify-end">
								    Optional
								</label>
								<div className="mt-2.5">
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        autoComplete="family-name"
                                        placeholder='Last name'
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1  ring-gray-300    placeholder:text-gray-400  sm:text-sm sm:leading-6 bg-transparent"
                                        
                                    />
								</div>
							</div>
							
							<div className="sm:col-span-2">
								{/* <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
								Email
								</label> */}
								<div className="mt-2.5">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        placeholder='Email'
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1  ring-gray-300    placeholder:text-gray-400  sm:text-sm sm:leading-6 bg-transparent"
                                        required
                                    />
								</div>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="phone-number" className="text-xs font-normal leading-6 text-gray-300 flex justify-end">
								    Optional
								</label>
								<div className="relative mt-2.5">
								<div className="absolute inset-y-0 left-0 flex items-center">
									<label htmlFor="country" className="sr-only">
									Country
									</label>
									<select
										id="country"
										name="country"
										className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-2 text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm"
										>
										{/* <option>US</option>
										<option>CA</option>
										<option>EU</option> */}
                                        <option>IND</option>
									</select>
										
								</div>
                                    <input
                                        id="phone-number"
                                        name="phoneNumber"
                                        type="tel"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        autoComplete="tel"
                                        placeholder='Phone number'
                                        className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-300 shadow-sm ring-1  ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 bg-transparent"
                                    />
								</div>
							</div>
							<div className="sm:col-span-2">
								{/* <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
								Message
								</label> */}
								<div className="mt-2.5">
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder='How can i help you?'
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1  ring-gray-300    placeholder:text-gray-400  sm:text-sm sm:leading-6 bg-transparent"
                                        
                                        required
                                    />
								</div>
							</div>
						
						</div>
						<div className="mt-10">
							<button
								type="submit"
								className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Let's talk
							</button>
						</div>
					</form>
				</div>
			</div>
  )
}

export default ContactForm
