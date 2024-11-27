import React from 'react'
import Skeleton from '../skeleton';
import { getCategories } from '@/services/FetchProcess';


async function CategoriesLoading() {
  const Genres = await getCategories();
  return (
    <div className="flex gap-[10px] flex-1 flex-wrap items-center justify-center">
      {Array(Genres.genres.length)
      .fill(null)
      .map((_,index) => (
        <Skeleton key={index} width={120} height={60}/>
      ))}
    </div>
  )
}

export default CategoriesLoading
