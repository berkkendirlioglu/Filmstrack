import React from 'react'
import Skeleton from '../skeleton'

function MovieSectionLoading() {
  return (
    <div className='mt-[36px]'>
      <Skeleton width={140} height={30}/>
      <div className='gap-[24px] flex flex-wrap'>
        {Array(10)
        .fill(null)
        .map((_,index) => (
            <Skeleton key={index} width={268} height={440}/>
        ))}
      </div>
    </div>
  )
}

export default MovieSectionLoading
