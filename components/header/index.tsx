'use client';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaPlayCircle } from 'react-icons/fa'
import { IoIosMenu } from "react-icons/io";
import SearchInput from '../search';

function Navbar() {
  const [isActive, setisActive] = useState<boolean>(false);
  
  useEffect(() => {
    if(isActive){
      document.body.style.overflow ="hidden";
    }else{
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    }

  }, [isActive]);

  return (
    <header className="bg-gradient-to-b from-[rgba(0,0,0,.8)] to-[rgba(0,0,0,0)] body-container w-[100%] fluid relative">
      <div className='flex items-center justify-between'>
        <Link className='flex items-center gap-[8px] text-[24px] font-bold text-zinc-50 transition hover:text-zinc-400 relative z-[999]' href="/">
            <FaPlayCircle/> FILMSTRACK2
        </Link>
        <div className='hidden md:flex'>
          <SearchInput/>
        </div>
        <button onClick={() => setisActive(prev => !prev)} className={`md:hidden flex z-[4] ${isActive ? "fixed right-[3%]":""}`}>
          <IoIosMenu className='text-[2rem]'/>
        </button>
        <nav className={`md:flex md:relative md:translate-x-0 md:flex-row md:bg-transparent md:h-auto md:w-auto gap-[2rem] text-zinc-50 font-bold tracking-[2px] w-[100vw] h-[100vh] items-center justify-center bg-black fixed z-[3] flex flex-col top-0 left-0 transform transition-transform duration-300 ${isActive ? "translate-x-0": "translate-x-full"}`}>
            <Link onClick={() => setisActive(false)} className='hover:text-zinc-400 transition' href="/movie">MOVIES</Link>
            <Link onClick={() => setisActive(false)} className='hover:text-zinc-400 transition' href="/tv-series">TV SERIES</Link>
            <Link onClick={() => setisActive(false)} href="/login" className='py-2 px-4 border-[1px] border-solid border-[#fff] rounded-full transition hover:bg-white hover:text-[#000]'>LOGIN</Link>
        </nav>
        
      </div>
    </header>
  )
}

export default Navbar
