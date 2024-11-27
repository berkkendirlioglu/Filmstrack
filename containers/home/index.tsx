import React from "react";

import FeaturedMovie from "@/components/featured-movie";
import MoviesSection from "@/components/movies-section";

import { MoviesResultsType } from "@/types/FeaturedMovieTypes";
import { randomInt } from "crypto";

function HomeContainer({
  popularMovies,
  topRatedMovies,
  topRatedTvSeries,
  popularTvSeries
}: {
  popularMovies: MoviesResultsType[];
  topRatedMovies: MoviesResultsType[];
  topRatedTvSeries: MoviesResultsType[];
  popularTvSeries:MoviesResultsType[];
}) {
  return (
    <div>
      <FeaturedMovie movies={popularMovies[randomInt(0,19)]} isCompact={true} />

      <MoviesSection title="Popular Movies" movies={popularMovies} urlParams="/movie/details" />

      <MoviesSection title="Top Rated Movies" movies={topRatedMovies} urlParams="/movie/details" />

      <MoviesSection title="Popular TV Series" movies={popularTvSeries} urlParams="/tv-series/details" />

      <MoviesSection title="Top Rated TV Series" movies={topRatedTvSeries} urlParams="/tv-series/details" />
    </div>
  );
}

export default HomeContainer;
