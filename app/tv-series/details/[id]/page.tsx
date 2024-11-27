import { ParamsProps } from '@/types/GlobalParamsType';
import React from 'react'
import { notFound } from 'next/navigation';
import { getTvSerie } from '@/services/FetchProcess';
import FeaturedTvSeries from '@/components/featured-tvSeries';

async function MoviePage({params}:ParamsProps) {
  const { id } = await params;
  const filteredSerie = await getTvSerie(id)
  
  if(!filteredSerie){
    notFound();
  }
  return (
    <FeaturedTvSeries tvSeries={filteredSerie} isCompact={false}/> 
  )
}

export default MoviePage
