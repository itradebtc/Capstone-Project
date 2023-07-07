"use client"
import React from 'react'
import { Luckiest_Guy } from 'next/font/google'
import Image from 'next/image'
import pic from '../images/services.jpg'
import { PageWrapper } from '../page-wrapper'
import { motion } from 'framer-motion'

const kan = Luckiest_Guy({subsets: ['latin'],
weight: ['400']})

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const images = {
  hidden: { 
    opacity: 0,
    x: 30,
   },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 3,
    },
  },
}; 

export default function page() {
  return (
    <div className='py-10 px-4 md:px-24'>
      <PageWrapper>
        <h1 className={`${kan.className} text-center text-blue-900 uppercase text-2xl md:text-4xl pb-4 md:pb-0`}>Our Services</h1>
        <div className='md:m-7 md:space-y-10 container text-[12px] md:text-[16px]'>
            <motion.div
              variants={variants}
              initial='hidden'
              animate='show'
              className='md:flex md:space-x-12'>
                <dl className='space-y-4 md:w-[70%]'>
                  <dd>
                    <span className={`${kan.className} md:text-lg text-blue-900`}>Preventive Dentistry:</span> We believe prevention is the key to maintaining optimal oral health.
                    Our preventive services include thorough dental exams, professional cleanings, fluoride 
                    treatments, sealants, and patient education to help you achieve and maintain a healthy smile.
                  </dd>
                  <dd>
                    <span className={`${kan.className} md:text-lg text-blue-900`}>Restorative Dentistry:</span> Whether you require a dental filling, crown, bridge, or implant, our 
                    skilled dentists use state-of-the-art techniques and high-quality materials to restore the 
                    function and aesthetics of your teeth, ensuring long-lasting results.
                  </dd>
                  <dd>
                    <span className={`${kan.className} md:text-lg text-blue-900`}>Cosmetic Dentistry:</span> Enhance the beauty of your smile with our cosmetic dental services. From
                    teeth whitening and porcelain veneers to orthodontic treatments and smile makeovers, we can 
                    help you achieve the smile of your dreams.
                  </dd>
                  <dd>
                    <span className={`${kan.className} md:text-lg text-blue-900`}>Periodontal Care:</span> Our team is experienced in diagnosing and treating gum disease. We offer 
                    non-surgical and surgical periodontal therapies to restore gum health and prevent further 
                    complications.
                  </dd>
                  <dd>
                    <span className={`${kan.className} md:text-lg text-blue-900`}>Oral Surgery:</span> When necessary, our oral surgeons perform extractions, including wisdom teeth 
                    extractions, as well as other oral surgical procedures with precision and care.
                  </dd>
                  <dd>
                    <span className={`${kan.className} md:text-lg text-blue-900`}>Prosthodontics:</span> Our prosthodontists specialize in the restoration and replacement of missing 
                    teeth. Whether you need dentures, dental implants, or implant-supported prosthetics, we can 
                    help you regain your smile&#39;s function and aesthetics.
                  </dd>
                </dl>
                <motion.div variants={images}>
                <Image 
                  src={pic} 
                  alt='who is your dentist' 
                  width="400" 
                  height="200" 
                  className='border-2 md:rounded-tr-[80px] md:rounded-bl-[80px]' />
                </motion.div>
            </motion.div>
            <p className='pt-4 md:pt-0'>
                <span className={`${kan.className} md:text-lg text-blue-900`}>At Kelubia&#39;s Dental Care</span>, we prioritize patient comfort and satisfaction. We understand that 
                visiting the dentist can cause anxiety for some individuals, which is why we strive to create 
                a welcoming and relaxing atmosphere. Our friendly staff is here to answer your questions, 
                address your concerns, and ensure you feel at ease throughout your dental visit.
                We are dedicated to staying at the forefront of dental technology and techniques. By investing in 
                state-of-the-art equipment and continuing education for our team, we can provide you with the highest 
                standard of care and deliver optimal results.Experience exceptional dental care with our experienced team of doctors at Kelubia&#39;s Dental Care. 
                Contact us today to schedule an appointment and take the first step towards achieving a healthy 
                and beautiful smile.
            </p>
        </div>
      </PageWrapper>
    </div>
  )
}
