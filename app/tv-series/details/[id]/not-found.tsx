import Link from 'next/link'
import React from 'react'

function MovieNotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-[100%] bg-black'>
      <h1 className='text-[24px]'>We Couldn&apos;t find the movie you looking for!</h1>
      <Link className='mt-[8px] text-[20px] underline' href="/">
        Go Home
      </Link>
    </div>
  )
}

export default MovieNotFound
