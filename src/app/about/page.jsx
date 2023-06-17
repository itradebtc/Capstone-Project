import React from 'react'
import { Luckiest_Guy } from 'next/font/google'
import Image from 'next/image'
import pic from '../images/whoisyourdenist.webp'

const kan = Luckiest_Guy({subsets: ['latin'],
weight: ['400']})

export default function page() {
  return (
    <div className='py-10 px-24'>
        <h1 className={`${kan.className} text-center text-blue-800 uppercase text-4xl`}>Our Services</h1>
        <div className='m-7 space-y-10 w-fit'>
            <div className='flex gap-4'>
                <dl className='space-y-4 container'>
                  <dd>
                    <span className={`${kan.className} text-blue-800`}>Preventive Dentistry:</span> We believe prevention is the key to maintaining optimal oral health. 
                    Our preventive services include thorough dental exams, professional cleanings, fluoride 
                    treatments, sealants, and patient education to help you achieve and maintain a healthy smile.
                  </dd>
                  <dd>
                    <span className={`${kan.className} text-blue-800`}>Restorative Dentistry:</span> Whether you require a dental filling, crown, bridge, or implant, our 
                    skilled dentists use state-of-the-art techniques and high-quality materials to restore the 
                    function and aesthetics of your teeth, ensuring long-lasting results.
                  </dd>
                  <dd>
                    <span className={`${kan.className} text-blue-800`}>Cosmetic Dentistry:</span> Enhance the beauty of your smile with our cosmetic dental services. From
                    teeth whitening and porcelain veneers to orthodontic treatments and smile makeovers, we can 
                    help you achieve the smile of your dreams.
                  </dd>
                  <dd>
                    <span className={`${kan.className} text-blue-800`}>Periodontal Care:</span> Our team is experienced in diagnosing and treating gum disease. We offer 
                    non-surgical and surgical periodontal therapies to restore gum health and prevent further 
                    complications.
                  </dd>
                  <dd>
                    <span className={`${kan.className} text-blue-800`}>Oral Surgery:</span> When necessary, our oral surgeons perform extractions, including wisdom teeth 
                    extractions, as well as other oral surgical procedures with precision and care.
                  </dd>
                  <dd>
                    <span className={`${kan.className} text-blue-800`}>Prosthodontics:</span> Our prosthodontists specialize in the restoration and replacement of missing 
                    teeth. Whether you need dentures, dental implants, or implant-supported prosthetics, we can 
                    help you regain your smile's function and aesthetics.
                  </dd>
                </dl>
                <Image src={pic} alt='who is your dentist' width={650} height={400} />
            </div>
            <p>
                <span className={`${kan.className} text-blue-800`}>At Kelubia's Dental Care</span>, we prioritize patient comfort and satisfaction. We understand that 
                visiting the dentist can cause anxiety for some individuals, which is why we strive to create 
                a welcoming and relaxing atmosphere. Our friendly staff is here to answer your questions, 
                address your concerns, and ensure you feel at ease throughout your dental visit.
                We are dedicated to staying at the forefront of dental technology and techniques. By investing in 
                state-of-the-art equipment and continuing education for our team, we can provide you with the highest 
                standard of care and deliver optimal results.Experience exceptional dental care with our experienced team of doctors at Kelubia's Dental Care. 
                Contact us today to schedule an appointment and take the first step towards achieving a healthy 
                and beautiful smile.
            </p>
        </div>
    </div>
  )
}
