import Image from 'next/image'
import {TbDentalBroken} from  'react-icons/tb'
import {TbDentalOff} from 'react-icons/tb'
import {TbDental} from 'react-icons/tb'
import {FaTeethOpen} from 'react-icons/fa'
import {GrStatusGood} from 'react-icons/gr'
import pic from './images/mainpage.jpg'
import pica from './images/pexels.jpg'
import { Luckiest_Guy } from 'next/font/google'
import Link from 'next/link'
import Doc from './Doc'

const kan = Luckiest_Guy({subsets: ['latin'],
weight: ['400']})


export default function Home() {
  return (
    <div className='py-4 px-8 md:py-4 md:px-24'>
        {/* first div */}
        <div className='flex-col space-y-3 md:grid md:grid-cols-2 md:py-10 md:gap-6 md:space-x-0'>
          <p className={`${kan.className} text-blue-800 md:col-span-2 text-2xl md:text-7xl`}>
            we find the best <br /> doctors for your dental <br /> surgery
          </p>
          <p className='text-sm md:text-[18px] text-slate-800'>
              Welcome to Kelubia&#39;s Dental Care, your premier destination for comprehensive dental care. 
              With our experienced team of dedicated dental professionals, we are committed to providing 
              top-quality dental services to patients of all ages. Our goal is to create a positive and 
              comfortable environment where you can receive personalized care tailored to your unique oral 
              health needs.
          </p>
          <Image 
            src={pica} 
            alt='dentist' 
            width={1131} 
            height={650} 
            className='row-span-3'
          />
          <p className='md:col-span-1 text-sm md:text-[18px] text-slate-800'>
              At Kelubia&#39;s Dental Care, we understand the importance of a healthy and beautiful smile. 
              Our team consists of highly skilled and experienced dentists who stay abreast of the latest 
              advancements in dentistry. From routine check-ups and preventive care to advanced restorative 
              treatments, we offer a wide range of dental services to meet all of your oral health needs 
              under one roof.
          </p>
          <div className='flex md:col-span-1 items-center space-x-3 md:space-x-8'>
            <Link href='/appointment'>
            <button className='border bg-blue-800 text-white py-2 px-5 md:py-4 md:px-8 rounded-md'>Book Appointment</button>
            </Link>
            <p className='text-[14px] md:text-[18px] text-slate-800'>
              Call: (239) 555-0108 <br />
              Email: admin@dental.co.uk
            </p>
          </div>
        </div>
          {/* second div */}

        <div className='grid grid-cols-2 grid-rows-2 pt-16 gap-3 md:flex md:gap-8 md:py-10 md:w-[1131px] md:pt-0'>
          <div className='bg-indigo-300 grid justify-center items-center text-center md:h-[40vh] container hover:shadow-2xl hover:ease-in duration-300'>
            <div className='py-1 md:py-0 space-y-5 px-3'>
            <p className='flex justify-center items-center'> <TbDentalBroken size={30}/> </p>
            <p className='text-lg text-black font-semibold'>Cavity Filling</p>
            <p className='text-sm text-slate-500'>Cavities left untreated, leads to serious dental procedures, including root canals and tooth extractions.</p>
            </div>
          </div>
          <div className='bg-teal-300 grid justify-center items-center text-center md:h-[40vh] container hover:shadow-2xl hover:ease-in duration-300'>
            <div className='space-y-5 px-3'>
            <p className='flex justify-center items-center'> <TbDental size={30} /> </p>
            <p className='text-lg text-black font-semibold'>Fluoride Treatment</p>
            <p className='text-sm text-slate-500'>Fluoride joins the tooth structure when your teeth develop, making them less susceptible to bacteria & cavities.</p>
            </div>
          </div>
          <div className='bg-lime-200 grid justify-center items-center text-center md:h-[40vh] container hover:shadow-2xl hover:ease-in duration-300'>
            <div className='space-y-5 px-3'>
            <p className='flex justify-center items-center'> <FaTeethOpen size={30} /> </p>
            <p className='text-lg text-black font-semibold'>Dental Prevention</p>
            <p className='text-sm text-slate-500'>Preventive dentistry is the practice of caring for your teeth to keep them healthy, this prevents gum disease.</p>
            </div>
          </div>
          <div className='bg-rose-200 grid justify-center items-center text-center md:h-[40vh] container hover:shadow-2xl hover:ease-in duration-300'>
            <div className='space-y-5 px-3'>
            <p className='flex justify-center items-center'> <TbDentalOff size={30} /> </p>
            <p className='text-lg text-black font-semibold'>Tooth Extraction</p>
            <p className='text-sm text-slate-500'>A dental extraction (also referred to as tooth extraction) is the removal of teeth from the socket in the alveolar bone.</p>
            </div>
          </div>
        </div>
          {/* third div */}

        <h2 className={`${kan.className} pt-12 text-slate-500 text-sm pb-5`}>----- Our mission</h2>
          <div className='grid grid-cols-2'>
            <div className='text-xl md:text-4xl'>
                <h2> Serving whole <br /> Lagos and Delta State</h2>
            </div>
            <div className='text-slate-500 text-[13px] md:text-[15px] pt-8'>
                <p>
                  Dentistry isn&#39;t just our job it&#39;s our passion! At Kelubia&#39;s Dental Care,<br /> 
                  we do more than just treat our patients, we treat our patients with <br /> respect. 
                  Watch our video to learn more.
                </p>
            </div>
            <div className='col-span-2 pt-5 md:pt-12'>
              <iframe 
                width="1131" 
                height="490" 
                src="https://www.youtube.com/embed/Mi7LMyhLpAg" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                className='w-full'
              ></iframe>
            </div>
        </div>
          {/* fourth div */}

        <div className='pt-7 md:grid md:grid-cols-2 md:grid-rows-2 md:pt-24 md:w-[1131px] md:gap-7'>
          <div >
            <p className={`${kan.className} py-4 text-slate-500 text-sm`}>----- Post a question</p>
            <h2 className='text-lg md:text-4xl pb-6'>Post your questions <br /> our experts are ready to answer</h2>
            <p className='text-[12px] md:text-[15px] text-slate-500 pb-6'>We are available 24/7 to ensure 100% care</p>
          </div>
          <div className='row-span-2'>
            <Image src={pic} alt='main picture' width={600} height={496} />
          </div>
          <div className='pt-5 md:pt-0 space-y-3 md:space-y-5 text-[12px] md:text-[15px] text-slate-500 pl-4'>
            <ul className='mb-5 space-y-3'>
              <li className='flex items-center gap-2'>
                <GrStatusGood size={20} className='text-blue-800' /> 
                Can I eat and drink normally after hygiene treatment
              </li>
              <li  className='flex items-center gap-2'>
                <GrStatusGood size={20} className='text-blue-800' />
                Can I change my silver fillings for white ones
              </li>
              <li className='flex items-center gap-2'>
                <GrStatusGood size={20} className='text-blue-800' /> 
                What are the advantages over traditional braces
              </li>
            </ul>
            <Link href='/contact'>
            <button className='py-3 px-8 rounded-lg'>Contact us</button>
            </Link>

          </div>
        </div>
          {/* fifth div */}

        <div className='grid md:grid-cols-2 pt-10'>
            <div className='text-lg md:text-4xl'>
                <h2>Meet Our Qualified Doctors <br />& Get Treatment </h2>
            </div>
            <div className='text-[12px] md:text-[15px] text-slate-500 py-8'>
                <p>
                  Meet our diverse and highly skilled team of dental doctors. With expertise <br />
                  in various specialties. They are dedicated, compassionate, and committed <br />
                   to ensure top-notch dental services for our community.
                </p>
            </div>
            <div className='col-span-2'>
                <Doc />
            </div>
        </div>
        {/* sixth div */}

        <div className='flex justify-center items-center px-4 md:px-0 bg-[#aeceee] border rounded-xl w-fit h-[150px] md:h-[296px] md:w-[1131px] md:relative top-14'>
          <div className='flex -col md:flex justify-around items-center md:gap-14'>
            <p className='text-white text-[12px] md:text-4xl pr-14'>It&#39;s time to make that change <br /> in your life today</p> 
            <Link href='/appointment'>
            <button className='py-1 px-4 md:py-3 md:px-7 rounded-md'>Book Appointment</button>
            </Link>
          </div>
        </div>
    </div>
  )
}
