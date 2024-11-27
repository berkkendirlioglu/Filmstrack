import React from "react";
import FeaturedMovieLoading from "@/components/featured-movie/loading";
import MovieSectionLoading from "@/components/movies-section/loading";
import CategoriesLoading from "@/components/categories/loading";

function Loading() {
  return <div>
    <FeaturedMovieLoading/>
    <MovieSectionLoading/>
    <MovieSectionLoading/>
    <MovieSectionLoading/>
  </div>;
}

export default Loading;
