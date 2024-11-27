import FeaturedTvSeries from "@/components/featured-tvSeries";
import MoviesSection from "@/components/movies-section";

import { getCategoryTvSeries, getTvSerieCategories } from "@/services/FetchProcess";
import {  GenresTypes } from "@/types/CategoriesTypes";
import { TvSeriesType } from "@/types/FeaturedMovieTypes";

import { randomInt } from "crypto";
import React from "react";

async function page({params}:{params:{genres:string}}) {
    const { genres } = await params
    const [{results:categoryTvSeries}, {genres:tvSeriesCategory}]:[TvSeriesType, GenresTypes] = await Promise.all([getCategoryTvSeries(genres), getTvSerieCategories()])
  return (
    <div>
        <FeaturedTvSeries tvSeries={categoryTvSeries[randomInt(0,19)]} isCompact={true}/>
        <MoviesSection title={tvSeriesCategory.find((category) => `${category.id}` === genres)?.name} movies={categoryTvSeries} urlParams="/tv-series/details" />
    </div>
  );
}

export default page;
