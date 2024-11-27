import React from 'react'

export default function Loading() {
  return (
    <div className='loadingWrapper min-h-[100%] min-w-[100%] flex items-center justify-center'>
      <div className='loading inline-block w-[50px] h-[50px] border-[3px] border-solid border-[rgba(255,255,255,.3)] rounded-[50%] border-t-[#fff] animate-spin'></div>
    </div>
  )
}
