import { ParamsProps } from '@/types/GlobalParamsType';
import React from 'react'
import MovieContainer from '@/containers/movie';
import { notFound } from 'next/navigation';
import { getMovie } from '@/services/FetchProcess';

async function MoviePage({params}:ParamsProps) {
  const { id } = await params;
  const filteredMovie = await getMovie(id)
  
  if(!filteredMovie){
    notFound();
  }
  return (
    <MovieContainer movie={filteredMovie}/>
  )
}

export default MoviePage
