import { MoviesResultsType } from "@/types/FeaturedMovieTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import styles from './style.module.scss';

export default async function MoviesSection({title,movies,urlParams,}: {title: string | undefined;movies: MoviesResultsType[];urlParams: string;}) {
  return (
    <div className="mt-[36px]">
      <h3 className="mb-[12px] uppercase font-bold text-[24px] tracking-[-1px]">
        {title}
      </h3>
      <div className="gap-[24px] flex flex-wrap">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-[0_0_268px] h-[440px] overflow-hidden rounded-[8px] relative shadow-[0_5px_10px_0_rgba(0,0,0,.5)] transition hover:z-[9] hover:scale-[1.1]"
          >
            <div className="group">
              <Link href={`${urlParams}/${movie.id}`}>
                <Image
                  fill
                  unoptimized
                  alt={"POSTER"}
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />

                <div className="overlay bg-[rgba(0,0,0,.7)] w-[100%] transition opacity-0 group-hover:opacity-100 h-[100%] px-3 absolute flex flex-col justify-between items-start">
                  <div className="flex items-center justify-center w-[100%]">
                    <p className="font-bold text-[1.5rem] text-center pt-[2rem] pb-4">
                      {movie.title || movie.name}
                    </p>
                  </div>
                  <div className="overview line-clamp-5">
                    {movie.overview ? movie.overview : "There's no announcement for this TV series."}
                  </div>
                  <div className="flex flex-wrap flex-col gap-[.8rem] py-5">
                    {movie.vote_average > 7 && (
                      <span className="bg-transparent border-[1px] text-center border-solid border-[#fff] px-3 py-1 rounded-full text-white">
                        Çok Beğenildi!
                      </span>
                    )}
                    {movie.popularity > 1000 && (
                      <span className="bg-white px-3 py-1 text-center rounded-full text-black">
                        Çok Popüler!
                      </span>
                    )}
                    <div className={`${styles["button-wrapper"]} flex gap-[5px] items-center relative`}>

                      <div className={`${styles["play-button"]} after:rounded-full`}>
                        <FaPlayCircle className={`text-white text-[3rem]`}/>
                      </div>
                      <div className={`${styles["add-favorite"]} after:rounded-full`}>
                        <GoPlusCircle className={`text-[3rem] text-white`} />
                      </div>

                    </div>
                  </div>
                </div>
                
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
