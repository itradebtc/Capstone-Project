import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Luckiest_Guy } from 'next/font/google'

const kan = Luckiest_Guy({subsets: ['latin'],
weight: ['400']})


        async function fetchdoctors(){
          const response = fetch('https://itradebtc.github.io/dentistsdata/dentist.json')
        
          const data = await (await response).json()
        
          return data
        }
        
        export default async function Page() {
          const data2 = await fetchdoctors()
        
          const doctorslist = data2.doctors.map(doctors =>(
            <section key={doctors.id} className='px-4 hover:shadow-xl'>
              <Link href={`/doctors/${doctors.name}`} title={`Get more information on ${doctors.name} ${doctors.surname}`} passHref>
                <Image src={doctors.photo} 
                  alt={doctors.name} 
                  width="600" 
                  height="600" 
                  className='pb-2'
                />
                <h2 className='text-lg '>{doctors.name} {doctors.surname}</h2>
                <h3 className='text-sm text-slate-500'>{doctors.qualification} , {doctors.specialization}</h3>
              </Link>
              
            </section>
          ))
          return (
            <div className='py-10 px-8 md:px-24'>
                <h2 className={`${kan.className} text-center text-4xl py-2 uppercase`}>Our Doctors</h2>
                <div className='grid md:grid-cols-3 gap-4 text-black  py-7 px-4'>
                    {doctorslist}
                </div>
         </div>
          )
        }
        