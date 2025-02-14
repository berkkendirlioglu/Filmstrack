"use client";
import MoviesSection from "@/components/movies-section";
import { AddRemoveWatchlist, GetWatchlist } from "@/services/FetchProcess";
import { MoviesResultsType, MovieTypes } from "@/types/FeaturedMovieTypes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';

const WatchlistPage = () => {
  const [watchlistMovies, setWatchlistMovies] = useState<MovieTypes>();
  const session_id = Cookies.get("accessToken");

  const getMyWatchlist = async () => {
    if (!session_id) return;

    const response = await GetWatchlist(session_id);
    setWatchlistMovies(response);
  };

  useEffect(() => {
    getMyWatchlist();
  }, [getMyWatchlist]);

  const removeFromWatchlist = async (
    movie: MoviesResultsType,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (!session_id) return;

    const data = {
      media_type: "movie",
      media_id: movie.id,
      watchlist: false,
    };

    await AddRemoveWatchlist(data, session_id);

    setWatchlistMovies((prev) => ({
      ...prev,
      results: prev.results.filter((item) => item.id !== movie.id),
    }));
  };
  return (
    <div>
      {watchlistMovies?.results?.length > 0 ? (
        <MoviesSection
          title="My Watchlist"
          movies={watchlistMovies?.results || []}
          urlParams="/movie/details"
          removeFromWatchlist={removeFromWatchlist}
        />
      ) : (
        <div className="flex flex-col justify-center items-center w-[100%] pt-[5rem] gap-[2rem]">
          <p className="text-[1.5rem]">Listenize henüz bir film eklemediniz.</p>
          <Link className="py-2 px-4 bg-[#fff] text-[#000] text-[1.5rem] rounded-[25px]" href={"/"}>Anasayfa</Link>
        </div>
      )}
    </div>
  );
};

export default WatchlistPage;
