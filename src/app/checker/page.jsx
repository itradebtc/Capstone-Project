"use client"
import React from 'react'
import styles from './bmi.module.css'
import { Luckiest_Guy } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'
import { PageWrapper } from '../page-wrapper'

const kan = Luckiest_Guy({subsets: ['latin'],
weight: ['400']})


export default function Page() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

let calcBmi = (event) => {
  //prevent submitting
event.preventDefault()

  if (weight === 0 || height === 0) {
    alert('Please enter a valid weight and height')
  } else {
    let bmi = (weight / (height / 100) ** 2)
    setBmi(bmi.toFixed(2))

    
    if (bmi < 18.5) {
      setMessage('You are underweight')
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setMessage('You are a healthy weight')
    } else {
      setMessage('You are overweight')
    }
  }
}

let imgSrc;

  if (bmi < 1) {
    imgSrc = require('../images/qm.png')
  } 
  else {
  if(bmi < 18.5) {
    imgSrc = require('../images/underweight.png')
  } else if (bmi >= 18.5 && bmi < 24.9) {
    imgSrc = require('../images/healthy.png')
  } else {
    imgSrc = require('../images/overweight.png')
  }
}


  let reload = () => {
    window.location.reload()
  }

  return (
    <div className='w-auto md:h-[130vh] px-10 bg-[#00d2ff]'>
      <PageWrapper>
      <div>
        <h2 className={`${kan.className} text-4xl text-blue-800 pt-8`}>Adult BMI Calculator</h2>
        <p className='text-white text-[12px] md:text-xl pb-3 md:pb-0'>
          This calculator provides body mass index (BMI) and 
          the corresponding BMI <br className='hidden md:grid' /> weight status category for 
          adults 20 years and older. <br /> Try out our free 
          online BMI calculator. 
        </p>
      </div>

      <div className=''>
        <div>
          <div className={`${kan.className} bg-blue-900 h-[45vh] py-[5px] md:h-[70vh] md:py-[150px] md:top-[100px] relative text-white`}>
            <h1 className='pl-3 md:pl-10 text-[2.5rem] md:text-[8rem]'>BMI</h1>
            <h2 className='pl-3 md:pl-10 text-[o.3rem] md:text-[2rem] text-left'>body mass index</h2>
          </div>
        </div>
    
        <div>
          <div className={styles.bmi}>
            <form onSubmit={calcBmi} className='m-[5vh] md:pr-48 md:m-[8vh] md:py-[1vh] space-y-8'>
              <div className='border-b-2 border-slate-400 md:w-full'>
                <label className='text-xs uppercase'>Weight (kg)</label>
                <input value={weight} onChange={(e) => setWeight(e.target.value)} 
                className='text-xl bg-inherit outline-none'
                placeholder='| Weight in kilograms' required/>
              </div>
              <div className='border-b-2 border-slate-400 md:w-full'>
                <label className='text-xs uppercase'>Height (cm)</label>
                <input value={height} onChange={(event) => setHeight(event.target.value)} 
                className='text-xl bg-inherit outline-none' 
                placeholder='| Height in centimeters' required/>
              </div>
              <div className='space-y-1'>
                <button className='w-full uppercase py-2 px-4 bg-blue-800 rounded-md' type='submit'>Check Bmi</button>
                <button className='w-full uppercase py-2 px-4 bg-blue-800 rounded-md' onClick={reload} type='submit'>Reload</button>
              </div>
            </form>

            <div className='pl-16'>
              <h3 className={`${styles.pee} uppercase`}>Your BMI is: {bmi}</h3>
              <p className={styles.pee} >{message}</p>
            </div>

            <div className='pl-28'>
              <Image src={imgSrc} alt='bmiimage' width={50} height={50} />
            </div>
          </div>
        </div>  
      </div>
      </PageWrapper>
    
    </div>
  )
}
