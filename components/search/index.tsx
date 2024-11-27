"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MoviesResultsType } from "@/types/FeaturedMovieTypes";
import Image from "next/image";
import Link from "next/link";
import { GoPlusCircle } from "react-icons/go";
import { FaPlayCircle } from "react-icons/fa";
import styles from './style.module.scss';
import { FaTimes } from "react-icons/fa";

function SearchInput() {
  const [searchValue, setsearchValue] = useState<string>();
  const [searchMovieResults, setsearchMovieResults] =
    useState<MoviesResultsType[]>();
  const [isSearchOpen, setisSearchOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!searchValue) {
      setisSearchOpen(false);
      document.body.style.overflow = "";
      return;
    }

    setisSearchOpen(true);
    document.body.style.overflow = "hidden";

    async function fetchData() {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/search/movie",
          {
            params: {
              query: searchValue,
              language: "en-US",
              page: "1",
            },
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            },
          }
        );
        setsearchMovieResults(res.data.results);
      } catch (error) {
        console.error("API call is missing", error);
      }
    }

    fetchData();

    return () => {
      document.body.style.overflow = "";
    };
  }, [searchValue]);

  const handleLinkClick = () => {
    setsearchValue("");
    setisSearchOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <div>
      <input
        className="w-[25vw] placeholder:text-[#fff] md:flex relative z-[999] border-[1px] border-solid border-[#fff] bg-transparent text-[#fff] rounded-full ps-3 pe-[2.5rem] py-2 focus:outline-none"
        type="text"
        placeholder="Search.."
        value={searchValue}
        onChange={(e) => setsearchValue(e.target.value)}
      />
      {searchValue?.length! > 0 && (
        <button onClick={() => setsearchValue("")} className="py-2 px-2 absolute z-[999] right-[41.2%] top-[30%]"><FaTimes className="text-white text-[1.3rem]" /></button>
      )}

      {searchValue && (
        <div className="absolute pt-[7rem] overflow-scroll top-0 left-0 bg-black text-white w-[100vw] h-screen flex flex-col items-center h-auto z-[3]">
          <div className="flex justify-center items-center">
            {searchValue} - ile ilgili arama sonuçları:
          </div>
          {searchMovieResults?.length! <= 0 && (
            <div className="py-[5rem]">
              Bu arama ile ilgili sonuç bulunamadı!
            </div>
          )}
          <div className="mt-[36px] w-[100%]">
            <div className="gap-[24px] items-center justify-center flex flex-wrap">
              {searchMovieResults?.map((movie) => (
                <div
                  key={movie.id}
                  className="flex-[0_0_268px] h-[440px] overflow-hidden rounded-[8px] relative shadow-[0_5px_10px_0_rgba(0,0,0,.5)] transition hover:z-[9] hover:scale-[1.1]"
                >
                  <Link
                    onClick={handleLinkClick}
                    href={`/movie/details/${movie.id}`}
                    className="group"
                  >
                    {movie.poster_path ? (
                      <Image
                        fill
                        unoptimized
                        alt={"POSTER"}
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      />
                    ) : (
                      <Image
                        fill
                        unoptimized
                        alt={"POSTER"}
                        src={`https://i.imgur.com/uhniVzp.png`}
                      />
                    )}
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
                        <div
                          className={`${styles["button-wrapper"]} flex gap-[5px] items-center relative`}
                        >
                          <div
                            className={`${styles["play-button"]} after:rounded-full`}
                          >
                            <FaPlayCircle
                              className={`text-white text-[3rem]`}
                            />
                          </div>
                          <div
                            className={`${styles["add-favorite"]} after:rounded-full`}
                          >
                            <GoPlusCircle
                              className={`text-[3rem] text-white`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchInput;
