'use client'
import React from 'react'
import {MoviesResultsType} from '@/types/FeaturedMovieTypes'
import Image from 'next/image';

function LoginPageBackground({movies}:{movies:MoviesResultsType}) {
  const {poster_path} = movies;
  return (
    <div className='flex flex-col gap-[24px] mt-[56px] mb-[56px]'>
      <div className='movie-poster'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-[linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(0,0,0,.9)_30%,_rgba(0,0,0,.7)_50%,_rgba(255,255,255,0)_100%)] z-[-1]'></div>
        <Image 
        className='!h-auto z-[-2] max-h-[100vh] object-cover'
        unoptimized
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={"POSTER"}
        fill
        />
      </div>
    </div>
  )
}

export default LoginPageBackground
