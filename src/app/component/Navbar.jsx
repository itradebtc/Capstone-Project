"use client"
import React from 'react'
import Image from 'next/image'
import logo from '../images/log-head.svg'
import Link from 'next/link'
import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineClose} from 'react-icons/md'
import {TiSocialFacebookCircular} from 'react-icons/ti'
import {TbBrandInstagram} from 'react-icons/tb'
import {TiSocialTwitterCircular} from 'react-icons/ti'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

  return (
    <nav className='w-full h-24 shadow-xl bg-white'>
        <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
            <Link href='/'>
            <Image src={logo} alt='Logo' width="205" height="75"
            className='cursor-pointer'
            priority
            />
            </Link>
            <div className='hidden sm:flex'>
                <ul className='hidden sm:flex'>
                    <Link href='/'>
                    <li className='ml-10 uppercase hover:border-b-2 text-lg'>Home</li>
                    </Link>
                    <Link href='/about'>
                    <li className='ml-10 uppercase hover:border-b-2 text-lg'>Our Services</li>
                    </Link>
                    <Link href='/doctors'>
                    <li className='ml-10 uppercase hover:border-b-2 text-lg'>Our Team</li>
                    </Link>
                    <Link href='/contact'>
                    <li className='ml-10 uppercase hover:border-b-2 text-lg'>Contact</li>
                    </Link>
                    <li className='flex items-center mx-10 uppercase text-lg'>
                            <select className='outline-none'>
                              <option value="English" selected>En</option>
                              <option value="French">Fr</option>
                              <option value="German">De</option>
                            </select>
                    </li>
                </ul>
            </div>
            <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
                <GiHamburgerMenu size={25} />
            </div>
        </div>
        <div className={
            menuOpen
            ? 'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
            : 'fixed left-[100%] top-0 p-10 ease-in duration-500'
        }
        >
        <div className='flex w-full items-center justify-end'>
            <div onClick={handleNav} className='cursor-pointer'>
                <MdOutlineClose size={25} />
            </div>
        </div>
            <div className='flex-col py-4'>
                <ul>
                    <Link href='/'>
                    <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer'>
                        Home
                    </li>
                    </Link>
                    <Link href='/about'>
                    <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer'>
                        Our Services
                    </li>
                    </Link>
                    <Link href='/doctors'>
                    <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer'>
                        Our Team
                    </li>
                    </Link>
                    <Link href='/contact'>
                    <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer'>
                        Contact
                    </li>
                    </Link>
                </ul>
            </div>
            <div className='flex flex-row justify-around pt-4 items-center'>
                <TiSocialFacebookCircular size={30} className='cursor-pointer' />
                <TbBrandInstagram size={30} className='cursor-pointer' />
                <TiSocialTwitterCircular size={30} className='cursor-pointer' />
            </div>
            <Link href='/'>
            <Image src={logo} alt='Logo' width="305" height="95"
            className='cursor-pointer '
            priority
            />
            </Link>
        </div>
    </nav>
  )
}

export default Navbar