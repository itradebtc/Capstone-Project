import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


async function fetchdoctors(){
  const response = fetch('https://itradebtc.github.io/dentistdata/olivia.json')

  const data = await (await response).json()

  return data
}

export default async function Page() {
  const data2 = await fetchdoctors()

  const doctorslist = data2.doctors.map(doctors =>(
    <section key={doctors.id} className='flex gap-10 p-6 rounded-md text-slate-500 bg-[#aeceee]'>
      <div className='container'>
        <Image src={doctors.photo} alt='pic' width={600} height={450} />
      </div>
      
      <div className='container space-y-4'>
        <div>
          <h2>{doctors.name} {doctors.surname}</h2>
          <h3>{doctors.age}</h3>
          <h3>{doctors.gender}</h3>
          <h3>{doctors.qualification}, {doctors.specialization}</h3>
        </div>
        <div>
          <h3>Specialization:</h3>
          <p>{doctors.specialization_description}</p>
        </div>
        <div>
          <Link href='/appointment'>
          <button className='py-3 px-6 rounded-md'>Book an appointment</button>
          </Link>
        </div>
      </div>
    </section>
  ))
  return (
    <div className='max-h-screen m-16'>
      {doctorslist}
    </div>
  )
}
