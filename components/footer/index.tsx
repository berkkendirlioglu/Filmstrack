import Image from 'next/image'
import React from 'react'
import Sign from '@/assets/image/sign.png'

function Footer() {
  return (
    <footer className='flex justify-center items-center'>
      Made with ❤︎ by
      <Image width={200} alt='Creator İrem Kübra APAYDIN' title='Creator İrem Kübra APAYDIN' src={Sign}/>
    </footer>
  )
}

export default Footer
