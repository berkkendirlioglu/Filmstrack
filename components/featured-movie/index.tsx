"use client";
import React, { useEffect, useState } from "react";
import { MoviesResultsType, MovieTypes } from "@/types/FeaturedMovieTypes";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import { AddRemoveWatchlist, GetWatchlist } from "@/services/FetchProcess";
import { FaCheck } from "react-icons/fa6";
import { session_id } from "../header";


function FeaturedMovie({
  movies,
  isCompact,
}: {
  movies: MoviesResultsType;
  isCompact: boolean;
}) {
  const [watchlistMovies, setWatchlistMovies] = useState<MovieTypes>();

  const addListMovie = async (
    movie: MoviesResultsType,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    
    const data = {
      media_type: "movie",
      media_id: movie.id,
      watchlist: true,
    };
    await AddRemoveWatchlist(data, session_id);
    getMyWatchlist();
  };
  const RemoveListMovie = async (
    movie: MoviesResultsType,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    
    const data = {
      media_type: "movie",
      media_id: movie.id,
      watchlist: false,
    };
    await AddRemoveWatchlist(data, session_id);
    getMyWatchlist();
  };

  const getMyWatchlist = async () => {
    
    if (!session_id) return;

    const response = await GetWatchlist(session_id);
    setWatchlistMovies(response);
  };

  useEffect(() => {
    getMyWatchlist();
  }, []);
  const { poster_path, title, overview } = movies;
  return (
    <div className="flex flex-col gap-[24px] mt-[56px] mb-[56px]">
      <h1 className="text-[72px] uppercase tracking-[-1px] font-black leading-[72px] max-w-[25ch]">
        {title}
      </h1>
      <p
        className={`text-[24px] max-w-[50ch] ${
          isCompact ? "line-clamp-2" : ""
        }`}
      >
        {overview}
      </p>

      <div className="flex gap-[12px]">
        <Link
          className="flex items-center justify-center bg-[#eee] text-[#222] w-[300px] rounded-[9999px] text-[20px] font-bold transition hover:bg-[rgba(238,238,238,.8)]"
          href={`/movie/details/${movies.id}`}
        >
          Play
        </Link>
        {watchlistMovies?.results?.some((e) => e.id === movies.id) ? (
          <button onClick={(e) => RemoveListMovie(movies, e)} className="flex items-center justify-center rounded-full border border-solid border-[#eee] w-[62px] h-[62px] text-[#eee] transition hover:bg-[#eee] hover:text-[#000]">
            <FaCheck className="text-[1.5rem]" />
          </button>
        ) : (
          <button onClick={(e) => addListMovie(movies, e)} className="flex items-center justify-center rounded-full border border-solid border-[#eee] w-[62px] h-[62px] text-[#eee] transition hover:bg-[#eee] hover:text-[#000]">
            <FaPlus className="text-[1.5rem]"/>
          </button>
        )}
      </div>
      <div className="movie-poster">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(0,0,0,.9)_30%,_rgba(0,0,0,.7)_50%,_rgba(255,255,255,0)_100%)] z-[-1]"></div>
        <Image
          className="!h-auto z-[-2] max-h-[100vh] object-cover"
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={"POSTER"}
          fill
        />
      </div>
    </div>
  );
}

export default FeaturedMovie;
