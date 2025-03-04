import React from 'react'
import MoviesSection from '@/components/movies-section';
import { getAllMovies, getCategories } from '@/services/FetchProcess';
import FeaturedMovie from '@/components/featured-movie';
import Categories from '@/components/categories';
import { Metadata } from 'next';
import { randomInt } from 'crypto';

export const metadata: Metadata = {
  title: "Movies",
  description: "Generated by create next app",
};

async function MovieBasePage() {

  const [{results:Movie}, {genres:movieCategories}] = await Promise.all([getAllMovies(), getCategories()])

  return (
    <div>
      <FeaturedMovie movies={Movie[randomInt(0,19)]} isCompact={true} />
      <Categories categories={movieCategories} urlParams={"movie"}/>
      <MoviesSection title={"All Movies"} movies={Movie} urlParams='/movie/details'/>
    </div>
  )
}

export default MovieBasePage
