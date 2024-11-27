import CategoriesLoading from '@/components/categories/loading';
import FeaturedMovieLoading from '@/components/featured-movie/loading';
import MovieSectionLoading from '@/components/movies-section/loading'
import React from 'react'

async function loading() {
  return (
    <div>
      <FeaturedMovieLoading/>
      <CategoriesLoading/>
      <MovieSectionLoading/>
    </div>
  )
}

export default loading
