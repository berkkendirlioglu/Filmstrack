import { CategoriesTypes } from '@/types/CategoriesTypes'
import Link from 'next/link'
import React from 'react'

function Categories({categories,urlParams}:{categories:CategoriesTypes[],urlParams:string}) {
  return (
      <div className='flex gap-[10px] flex-1 flex-wrap items-center justify-center'>
        {categories.map((category) => (
          <Link className='category flex items-center justify-center bg-[rgba(0,0,0,.75)] border border-solid border-[#333] shadow-[0_5px_10px_0_rgba(0,0,0,.5)] py-[1rem] px-[1.5rem] rounded-[6px] font-bold transition hover:bg-[#eee] hover:text-[#000]' key={category.id} href={`${urlParams}/${category.id}`}>
              <div className='name'>{category.name}</div>
          </Link>
        ))}
      </div>
  )
}

export default Categories
