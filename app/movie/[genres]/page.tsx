import FeaturedMovie from '@/components/featured-movie';
import MoviesSection from '@/components/movies-section';

import { getCategories, getCategoryMovies } from '@/services/FetchProcess';

import { GenresTypes } from '@/types/CategoriesTypes';
import { MovieTypes } from '@/types/FeaturedMovieTypes';
import { GenresParams } from '@/types/GlobalParamsType';

import { randomInt } from 'crypto';

import React from 'react'


async function page({params}:GenresParams) {
  const {genres} = await params;
  const [{results:singleMovies}, {genres:categories}]:[MovieTypes,GenresTypes] = await Promise.all([getCategoryMovies(genres), getCategories()])

  return (
    <div>
      <FeaturedMovie movies={singleMovies[randomInt(0,19)]} isCompact={true} />
      <MoviesSection title={categories.find((category) => `${category.id}` === genres)?.name} movies={singleMovies} urlParams='/movie/details' />
    </div>
  )
}

export default page
