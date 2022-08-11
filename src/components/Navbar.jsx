import React,{useState} from 'react'
import {BsFillMenuButtonWideFill} from 'react-icons/bs'
import {AiOutlineClose,} from 'react-icons/ai'


export const Navbar = () => {
    const [nav,setNav]= useState(false)

    const handleNav=()=>{
        setNav(!nav)
    }

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240] mx-auto px-4'>
        <h1 className='w-full text-3xl font-serif text-[#00df9a]'>CHAIRO||SPACE</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Carrers</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>contactlist</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ?<AiOutlineClose size={25}/>:<BsFillMenuButtonWideFill size={22}/>}

        </div> 
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-700 ease-in-out duration-500' :'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-serif text-[#00df9a] m-4'>CHAIRO||SPACE</h1>
        <ul className='uppercase'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Carrers</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>contact</li>
        </ul>
        </div>
    </div>
  )
}
