"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import contactpic from '../images/contactus.jpeg'
import contactpic2 from '../images/contactpic2.png'
import {TiSocialFacebookCircular} from 'react-icons/ti'
import {TbBrandInstagram} from 'react-icons/tb'
import {TiSocialTwitterCircular} from 'react-icons/ti'
import {SlLocationPin} from 'react-icons/sl'
import {BsTelephone} from 'react-icons/bs'
import {MdOutlineMailOutline} from 'react-icons/md'
import { Luckiest_Guy } from 'next/font/google'
import { PageWrapper } from '../page-wrapper'
import { motion } from 'framer-motion'

const kan = Luckiest_Guy({subsets: ['latin'],
weight: ['400']})

export default function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // You can perform additional validation or data processing here if needed

    // Display the response message
    setResponse('Thanks for contacting us');

    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');

  };
  return (
    <div className='px-7 md:px-24 md:py-10'>
        <PageWrapper>
        <div className='grid md:flex md:gap-10 py-8'>
            <div className='overflow-hidden md:relative'>
                <Image 
                    src={contactpic} 
                    alt='contactus' 
                    width="1131" 
                    height="1053" 
                    className='md:rounded-r-[200px] w-80 md:w-[1131px]' 
                />
                <motion.img 
                    initial={{x: -100, y: 0, opacity: 0 }}
                    animate={{x: 0, y: 0, opacity: 1 }}
                    transition={{duration: 1, delay: 1.5, type: "tween" }}
                    className='md:rounded-r-[200px] w-full md:w-[1131px] hidden md:flex absolute inset-0' 
                    src='https://img.freepik.com/free-photo/photo-smiling-dentist-standing-with-arms-crossed-with-her-colleague-showing-okay-sign_496169-1043.jpg?w=1480&t=st=1687696181~exp=1687696781~hmac=d0720d44be8b57e1a90141260e6c3a5277976c74fcce70d6afce26c879101bf7' 
                    alt='contactus' 
                    width="1131" 
                    height="1053" 
                />
            </div>
            <div className='md:space-y-4 w-80 md:w-fit'>
                <h2 className={`${kan.className} text-blue-800 text-2xl pt-3 md:pt-0`}>Contact Us</h2>
                <p>You have a question? We might just have answers. Send us a message to book an appointment</p>
                <form action='' className='space-y-4' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                      <label className='py-2'>Name</label>
                      <input type="text" placeholder="Enter your Name"  name="name" className="border-b-2 border-gray-25 outline-none" onChange={(event) => setName(event.target.value)} required />
                    </div>
                    <div className='flex flex-col'>
                      <label className='py-2'>Email</label>
                      <input type="email" placeholder="Enter a valid email address"  className="border-b-2 border-gray-25 outline-none" onChange={(event) => setEmail(event.target.value)} required />
                    </div>
                    <div className='flex flex-col u-form-group u-form-message mb-3'>
                      <label>Message</label>
                      <textarea placeholder="Enter your question/comment here" rows="4" cols="50" className="border-b-2 border-gray-25 outline-none h-[123px] pt-2" required ></textarea>
                    </div>
                    <button className='py-3 px-7 rounded-lg w-full md:w-full'>Submit</button>
                </form>

                {response && (
                <div className='px-1'>{response}</div>
                )}

            </div>
        </div>
        <div>
            <div className="md:py-16 md:flex md:gap-16">
                <div>
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.731982897961!2d-75.65839622442039!3d39.72320559755831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c701c7cd382ad3%3A0xf4e309d0af37fc1b!2sElgin%20St%2C%20Delaware%2019808%2C%20USA!5e0!3m2!1sen!2sng!4v1686768863400!5m2!1sen!2sng" 
                    width="850" 
                    height="450"
                    allowfullscreen="" 
                    loading="lazy" 
                    // referrerpolicy="no-referrer-when-downgrade"
                    className='w-full md:w-[850px]'
                    ></iframe>
                </div>
                    <div className='py-4 md:py-0'>
                        <div className='space-y-3'>
                            <div className='flex items-center space-x-4'>
                                <SlLocationPin size={20} className='text-blue-800 hover:text-[#00d2ff]'/>
                                <p>
                                6391 Elgin St. Celina, Delare 10299
                                </p>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <BsTelephone size={20} className='text-blue-800 hover:text-[#00d2ff]' />
                                <p><a href={`tel:${'(239) 555-0108'}`}>(239) 555-0108</a></p>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <MdOutlineMailOutline size={20} className='text-blue-800 hover:text-[#00d2ff]' />
                                <p><a href={`mailto:${'admin@kelubiadentalcare.com'}`}>admin@kelubiadentalcare.com</a></p>
                            </div>
                        </div>
                        <div className='pt-7 space-y-3'>
                            <p className={`${kan.className} uppercase text-blue-800`}>Go Social</p>
                            <p>Follow us on social media for special offers/package!</p>
                        </div>
                    
                        <div className='flex pt-4'>
                            <ul className="flex text-blue-800">
                                <li className='hover:scale-110 hover:ease-in duration-300 hover:text-[#00d2ff]'>
                                    <a href="https://www.facebook.com" target='_blank' rel='noreferrer' title='Our facebook page'>
                                    <TiSocialFacebookCircular size={50} />
                                    </a> 
                                </li>
                                <li className='hover:scale-110 hover:ease-in duration-300 hover:text-[#00d2ff]'>
                                    <a href="https://www.instagram.com" target='_blank' rel='noreferrer' title='Our instagram handle'>
                                    <TbBrandInstagram size={50} />
                                    </a>
                                </li>
                                <li className='hover:scale-110 hover:ease-in duration-300 hover:text-[#00d2ff]'>
                                    <a href="https://www.twitter.com" target='_blank' rel='noreferrer' title='Our twitter handle'> 
                                    <TiSocialTwitterCircular size={50} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
        </PageWrapper>
        
    </div>
  )
}
