'use client';
import Link from 'next/link';
import React from 'react'

function Movie404() {
  return (
    <div className='flex items-center justify-center flex-col h-[100%] bg-black'>
      <h1 className='text-[24px]'>An error has occurred. Sorry for that!</h1>
      <Link className='underline text-[20px] mt-[8px]' href="/">Go Home</Link>
    </div>
  )
}

export default Movie404
