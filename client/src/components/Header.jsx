import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span classname='text-slate-500'>Comfy</span>
        <span className='text-slate-700'>Villas</span>
        </h1>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-slate-500' />
        </form>
        <ul className='flex gap-4'>
             <Link to='/'>
              <li className='hidden sm:inline text-slate-500 hover:underline'>Home</li>
             </Link>
             <Link to='/mansignin'>
              <li className='text-slate-500 hover:underline'>Management SignIn</li>
             </Link>
             <Link to='ressignin'>
              <li li className='text-slate-500 hover:underline'>Resident SignIn</li>
             </Link>
        </ul>
        </div>
    </header>
  )
}
