import FeaturedMovie from '@/components/featured-movie'
import { MoviesResultsType } from '@/types/FeaturedMovieTypes'
import React from 'react'

function MovieContainer({movie}:{movie:MoviesResultsType}) {
  return (
    <FeaturedMovie movies={movie} isCompact={false}/>
  )
}

export default MovieContainer
