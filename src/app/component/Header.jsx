import React from 'react'
import Image from 'next/image'
import pic from '../images/log-head.svg'
import Link from 'next/link'


export default async function Header() {
  
  return (
    <header className='flex justify-between items-center py-0 px-4 shadow-xl static'>
        <div>
            <Image src={pic} alt='logo' width={100} height={70} className='hover:animate-[ping_3s_ease-in-out_infinite]' />
        </div>
        <div>
            <ul className='flex space-x-5 pr-24 uppercase'>
                <Link href='/'>
                <li className='hover:border-b-2 border-[#00d2ff] hover:ease-in-out duration-300'>Home</li>
                </Link>
                <Link href='/about'>
                <li className='hover:border-b-2 border-[#00d2ff] hover:ease-in-out duration-300'>Our Services</li>
                </Link>
                <Link href='/doctors'>
                <li className='hover:border-b-2 border-[#00d2ff] hover:ease-in-out duration-300'>Our Team</li>
                </Link>
                <Link href='/contact'>
                <li className='hover:border-b-2 border-[#00d2ff] hover:ease-in-out duration-300'>Contact</li>
                </Link>
                <li className='flex items-center'>
                        <select className='outline-none'>
                          <option value="English" selected>En</option>
                          <option value="French">Fr</option>
                          <option value="German">De</option>
                        </select>
                </li>
            </ul>
        </div>
    </header>
  )
}
