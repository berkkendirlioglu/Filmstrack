"use client";
import { MoviesResultsType, MovieTypes } from "@/types/FeaturedMovieTypes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import { BsCheckCircle } from "react-icons/bs";
import styles from "./style.module.scss";
import { AddRemoveWatchlist, GetWatchlist } from "@/services/FetchProcess";

export default function MoviesSection({
  title,
  movies,
  urlParams,
  removeFromWatchlist,
}: {
  title: string | undefined;
  movies: MoviesResultsType[] | undefined;
  urlParams: string;
  removeFromWatchlist?:(movie: MoviesResultsType, e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}) {
  const [watchlistMovies, setWatchlistMovies] = useState<MovieTypes>();

  const addListMovie = async (
    movie: MoviesResultsType,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const session_id = localStorage.getItem("session_id");
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
    const session_id = localStorage.getItem("session_id");
    const data = {
      media_type: "movie",
      media_id: movie.id,
      watchlist: false,
    };
    await AddRemoveWatchlist(data, session_id);
    getMyWatchlist();
  };

  const getMyWatchlist = async () => {
    const session_id = localStorage.getItem("session_id");
    if (!session_id) return;

    const response = await GetWatchlist(session_id);
    setWatchlistMovies(response);
  };

  useEffect(() => {
    getMyWatchlist();
  }, []);


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
                    {movie.overview
                      ? movie.overview
                      : "There's no announcement for this TV series."}
                  </div>
                  <div className="flex flex-wrap flex-col gap-[.8rem] py-5 w-[100%]">
                    {movie.vote_average > 7 && (
                      <span className="bg-transparent border-[1px] text-center border-solid border-[#fff] px-3 py-1 rounded-full text-white w-[60%]">
                        Çok Beğenildi!
                      </span>
                    )}
                    {movie.popularity > 1000 && (
                      <span className="bg-white px-3 py-1 text-center rounded-full text-black w-[60%]">
                        Çok Popüler!
                      </span>
                    )}
                    <div
                      className={`${styles["button-wrapper"]} flex gap-[5px] items-center relative`}
                    >
                      <button className={`${styles["play-button"]}`}>
                        <FaPlayCircle className={`text-white text-[3rem]`} />
                      </button>
                      <span className={`${styles["play-button-text"]}`}>
                        Play!
                      </span>

                      {watchlistMovies?.results?.some(
                        (e) => e.id === movie.id
                      ) ? (
                        <button
                          onClick={(e) => {RemoveListMovie(movie, e); removeFromWatchlist(movie,e)}}
                          className={`${styles["add-favorite"]}`}
                        >
                          <BsCheckCircle
                            className={`text-[2.9rem] text-white`}
                          />
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={(e) => addListMovie(movie, e)}
                            className={`${styles["add-favorite"]}`}
                          >
                            <GoPlusCircle
                              className={`text-[3rem] text-white`}
                            />
                          </button>
                          <span className={`${styles["addlist-button-text"]}`}>
                            Add List
                          </span>
                        </>
                      )}
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
