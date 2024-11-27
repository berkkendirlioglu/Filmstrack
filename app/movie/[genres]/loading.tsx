import FeaturedMovieLoading from '@/components/featured-movie/loading'
import MovieSectionLoading from '@/components/movies-section/loading'
import React from 'react'

function GenresLoading() {
  return (
    <div>
      <FeaturedMovieLoading/>
      <MovieSectionLoading/>
    </div>
  )
}

export default GenresLoading