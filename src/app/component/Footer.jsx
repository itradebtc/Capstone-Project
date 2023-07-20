import React from 'react'
import {TiSocialFacebookCircular} from 'react-icons/ti'
import {TbBrandInstagram} from 'react-icons/tb'
import {TiSocialTwitterCircular} from 'react-icons/ti'
import {TiSocialVimeoCircular} from 'react-icons/ti'
import Link from 'next/link'

export default function Footer() {
  return (
    <div>
        <div className='flex justify-between items-center px-3 py-2 md:py-16 md:px-36 bg-gray-100'>
            <div className='sm:grid hidden md:space-y-2'>
                <h2 className='md:text-lg'>Subscribe</h2>
                <p className='text-sm text-slate-500'>subscribe to get the latest news <br /> from us</p>
                <form >
                <input type="email" placeholder='your mail' className='py-2 px-3 bg-blue-100 rounded-l-md text-sm outline-none'/> 
                <button className='bg-blue-800 py-2 px-3 rounded-r-md'>
                    Submit
                </button>
                </form>
            </div>
            <div className='md:space-y-2'>
                <p className='text-slate-500'>Contact</p>
                <p className='text-[12px] md:text-lg'><a href={`tel:${'(239) 555-0108'}`}>(239) 555-0108</a></p>
                <p className='text-slate-500'>Address</p>
                <p className='text-[12px] md:text-lg'>6391 Elgin St. Celina, Delare <br />10299</p>
            </div>
            <div className='md:space-y-2'>
                <p className='text-slate-500'>Support</p>
                <Link href='../privacy' passHref>
                    <p className='text-[12px] md:text-sm'>privacy policy</p>
                </Link>
                <Link href='../terms&condition' passHref>
                    <p className='text-[12px] md:text-sm'>Terms & condition</p>
                </Link>
                <p className='text-slate-500'>Follow</p>
                <p className='flex space-x-3 cursor-pointer'>
                    <a href="https://www.facebook.com" target='_blank' rel='noreferrer' title='Our facebook page'>
                        <TiSocialFacebookCircular size={25} className='hover:text-[#00d2ff] hover:ease-in duration-300 hover:scale-110' />
                    </a>
                    <a href="https://www.instagram.com" target='_blank' rel='noreferrer' title='Our instagram handle'>
                        <TbBrandInstagram size={25} className='hover:text-[#00d2ff] hover:ease-in duration-300 hover:scale-110' />
                    </a>
                    <a href="https://www.twitter.com" target='_blank' rel='noreferrer' title='Our twitter handle'> 
                        <TiSocialTwitterCircular size={25} className='hover:text-[#00d2ff] hover:ease-in duration-300 hover:scale-110' />
                    </a>
                </p>
            </div>
        </div>
        <div className='bg-blue-950 text-center text-[8px] md:text-sm text-white py-2'>
            Copyright &copy; {new Date().getFullYear()} Kelubia&#39;s Dental Care - Yaba, Lagos - All rights Reserved
        </div>
    </div>
  )
}
