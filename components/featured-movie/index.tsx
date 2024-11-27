import React from 'react'
import {MoviesResultsType} from '@/types/FeaturedMovieTypes'
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import Image from 'next/image';

function FeaturedMovie({movies,isCompact}:{movies:MoviesResultsType,isCompact:boolean}) {
    const {poster_path, title, overview} = movies;
  return (
    <div className='flex flex-col gap-[24px] mt-[56px] mb-[56px]'>
      <h1 className='text-[72px] uppercase tracking-[-1px] font-black leading-[72px] max-w-[25ch]'>{title}</h1>
      <p className={`text-[24px] max-w-[50ch] ${isCompact ? "line-clamp-2":""}`}>{overview}</p>

      <div className='flex gap-[12px]'>
        <Link className='flex items-center justify-center bg-[#eee] text-[#222] w-[300px] rounded-[9999px] text-[20px] font-bold transition hover:bg-[rgba(238,238,238,.8)]' href={`/movie/details/${movies.id}`}>
            Play
        </Link>
        <button className='flex items-center justify-center rounded-full border border-solid border-[#eee] w-[62px] h-[62px] text-[#eee] transition hover:bg-[#eee] hover:text-[#000]'>
            <FaPlus/>
        </button>
      </div>
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

export default FeaturedMovie
