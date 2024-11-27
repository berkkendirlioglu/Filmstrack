import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='flex justify-center items-center'>
      Made with ❤︎ by&nbsp;
      <Link href="https://www.linkedin.com/in/berkkendirlioglu/">
        Berk Kendirlioğlu
      </Link>
    </footer>
  )
}

export default Footer
