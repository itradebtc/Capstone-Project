"use client"
import React from 'react'
import styles from './app.module.css';
import { PageWrapper } from '../page-wrapper';
import { useState } from 'react';

export default function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // You can perform additional validation or data processing here if needed

    // Display the response message
    setResponse('Your appointment has been booked.');

    // Clear the form fields
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');

  };
  return (
    <div className='py-2 md:py-0'>
      <PageWrapper>
        <div className={styles.div}>
            <h2 className='flex text-3xl text-white justify-center items-center pt-16'>Request an Appointment</h2>
        </div>
        <div className='space-y-3 px-3 md:py-14 md:px-36 md:mx-36 md:space-y-7'>
            <h3 className='text-2xl md:text-4xl'>Patients are seen by appointment only.</h3>
            <p className='border-t-4 border-purple-950 w-[65px]'>
            </p>
            <div className='border-b-2 border-dotted border-slate-300 w-fit'>
                <p className='mb-4 text-sm md:text-base'>
                We are an exceptional doctor&#39;s office in that we generally run on or close to schedule. 
                We ask that you arrive on time so we can maintain this commitment to keeping on schedule 
                for all our patients. We require 48-hours notice for a cancellation so that we may offer 
                the appointment to another patient.
                </p>
            </div>
            <div className='w-full md:w-[40vw] border-dashed border-2 border-blue-100 rounded-md md:mx-36'>
                <form action='' className='space-y-4 py-4 px-8' onSubmit={handleSubmit}>
                    <div className='flex flex-col space-y-3'>
                        <label>Are You a New or Existing Patient? <span className='text-red-900 text-sm'>*</span> </label>
                        <select className='border-l-4 border-l-green-700 bg-blue-50 h-[50px] rounded-md px-5 outline-none'>
                          <option value="blank" selected></option>
                          <option value="New" >New Patient</option>
                          <option value="Existing">Existing Patient</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                      <label className='py-2'>Full Name <span className='text-red-900 text-sm'>*</span></label>
                      <input type="text" placeholder="Full Name"  name="name" className="border-l-4 border-l-red-600 border-2 px-3 outline-none h-[50px] rounded-md bg-blue-50" onChange={(event) => setName(event.target.value)} required />
                    </div>
                    <div className='flex flex-col'>
                      <label className='py-2'>Email <span className='text-red-900 text-sm'>*</span></label>
                      <input type="email" placeholder="Email"  className="border-l-4 border-l-red-600 border-2 border-gray-25 px-3 outline-none h-[50px] rounded-md bg-blue-50" onChange={(event) => setEmail(event.target.value)} required />
                    </div>
                    <div className='flex flex-col'>
                      <label className='py-2'>Mobile Phone Number <span className='text-red-900 text-sm'>*</span></label>
                      <input type="tel" placeholder="Phone" minLength={11} maxLength={11}  className="border-l-4 border-l-red-600 border-2 border-gray-25 px-3 outline-none h-[50px] rounded-md bg-blue-50" onChange={(event) => setPhone(event.target.value)} required />
                    </div>
                    <div className='flex flex-col u-form-group u-form-message space-y-2 mb-3'>
                      <label>Why Are You Requesting an Appointment Today? <span className='text-red-900 text-sm'>*</span></label>
                      <textarea placeholder="" rows="4" cols="50" className="border-l-4 border-l-red-600 border-2 border-gray-25 px-3 py-1 outline-none h-[100px] rounded-md bg-blue-50" onChange={(event) => setMessage(event.target.value)} required ></textarea>
                    </div>
                    <button className='py-3 px-7 rounded-md'>Request Appointment</button>
                </form>

                {response && (
                <div className='px-7'>{response}</div>
                )}

            </div>
        </div>
      </PageWrapper>
    </div>
  )
}
