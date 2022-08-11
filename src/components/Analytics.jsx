import React from 'react'
import Screen from '../screen.jpg'


const Analytics = () => {
  return (
    <div className='w-full bg-[#F5F5F5] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='width-[500px] mx-auto my-4 md:px-20' src={Screen}  alt="/"/>
            <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>
            We at CHAIRO SPACE focus on how to make people productive by fading away their phone/smart device which consume their entire time using smart Ai technology which monitors and helps you take better decision. 
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
        </div>
    </div>
  )
}

export default Analytics