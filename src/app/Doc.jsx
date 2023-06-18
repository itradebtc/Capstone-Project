import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BsArrowRightCircleFill} from 'react-icons/bs'


async function fetchdoctors(){
    const response = fetch('https://itradebtc.github.io/dentistdata/firstone.json')
  
    const data = await (await response).json()
  
    return data
  }
        
        export default async function Doc() {
            const myDentist = await fetchdoctors()

            const list = myDentist.doctors.map(doctors =>(
              <section key={doctors.id} className='py-1'>
                  <Link href={`/doctors/${doctors.name}`}>
                  <Image src={doctors.photo} alt='pic' width={300} height={300}  className='border-2'/>
                  <h2 className='md:text-lg pt-2'>{doctors.name} {doctors.surname}</h2>
                  <h3 className='text-[12px] md:text-sm text-slate-500'>{doctors.qualification} , {doctors.specialization}</h3>
                  </Link>
              </section>
            ))
          return (
            <div className='pb-12 md:pb-0'>
                <div className='grid grid-cols-3 gap-2 text-black'>
                    {list}
                    <Link href='./doctors'>
                      <div className='bg-red-200 hover:text-white sm:grid justify-center items-center w-fit hidden md:h-[200px] md:w-[300px] border-2'>
                          <div className='space-y-5'>
                              <p className='text-center'>View More <br /> Qualified Doctors</p>
                              <div className='flex justify-center items-center'>
                                 <BsArrowRightCircleFill size={65} className='border rounded-full text-blue-800 hover:border-blue-950 hover:animate-[pulse_3s_ease-in-out_infinite]' />
                              </div>
                          </div>
                      </div>
                      <div className='flex flex-col justify-center items-center md:hidden pt-2'>
                        <h3 className='text-lg text-center '>View More Doctors</h3>
                        <BsArrowRightCircleFill size={30} className='rounded-full hover:border-blue-950' />
                      </div>
                    </Link>
                </div>
            </div>
          )
        }
        