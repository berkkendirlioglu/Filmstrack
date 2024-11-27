import LoginPageBackground from '@/components/login-page-bg';
import { getAllMovies } from '@/services/FetchProcess'
import { randomInt } from 'crypto';
import Link from 'next/link';
import React from 'react'

async function LoginPage() {
    const {results:Movie} = await getAllMovies();
  return (
    <div>
      <LoginPageBackground movies={Movie[randomInt(0,19)]}/>

      <div className="fixed flex justify-center items-center top-[50%] left-[50%] translate-x-[-50%] w-[100%] translate-y-[-50%]">

        <div className="flex w-[70%] max-[1392px]:w-[80%] max-[1218px]:w-[95%] max-[1026px]:w-[70%] max-[628px]:w-[90%] rounded-xl h-auto">

          <div className="flex-[45%_0_0] max-[1026px]:flex-[100%_0_0] px-5 bg-[#333] rounded-l-2xl max-[1026px]:rounded-xl text-white flex gap-[2rem] flex-col justify-center py-[5rem] items-center register-form">
            
            <div className="register-title-wrapper">
              <h2 className="text-[2rem] font-bold tracking-[2px]">Giriş Yap!</h2>
            </div>
            <div className="flex gap-[1rem]">
              <Link className="hover:bg-white hover:text-black transition w-[50px] h-[50px] rounded-full flex items-center justify-center border-[1px] border-solid border-[#fff]" href={"/"}>
                <span className="text-[1.5rem] select-none">f</span>
              </Link>
              <Link className="hover:bg-white hover:text-black transition w-[50px] h-[50px] rounded-full flex items-center justify-center border-[1px] border-solid border-[#fff]" href={"/"}>
                <span className="text-[1.5rem] select-none">G</span>
              </Link>
              <Link className="hover:bg-white hover:text-black transition w-[50px] h-[50px] rounded-full flex items-center justify-center border-[1px] border-solid border-[#fff]" href={"/"}>
                <span className="text-[1.5rem] select-none">in</span>
              </Link>
            </div>

            <form action="#" className="flex flex-[100%_0_1] px-[5rem] flex-wrap gap-[.5rem] justify-between">
              <label htmlFor="email" className="flex-[100%]">E-Posta</label>
              <input required className="text-black px-4 py-2 rounded-[20px] focus:outline-none flex-[100%]" id="email" type="email" />
              <label htmlFor="password" className="flex-[100%]">Şifre</label>
              <input required className="text-black px-4 py-2 rounded-[20px] focus:outline-none flex-[100%]" id="password" type="password" />
              <button className="bg-blue-600 hover:bg-blue-500 transition text-white font-bold text-[1rem] text-center flex-[100%] py-2 my-4 rounded-full">Giriş Yap!</button>
              <Link className='w-[100%] text-center border-[1px] border-solid border-[#fff] py-2 rounded-full transition hover:bg-white hover:text-black' href={"/register"}>Üye Ol!</Link>
              <div className="text-end w-[100%] px-3"><Link className="underline" href={"/login"}>Şifremi Unuttum</Link></div>
            </form>

          </div>

          <div className="flex flex-col justify-center gap-[3rem] items-center px-[5rem] flex-[55%_0_0] backdrop-blur-xl max-[1026px]:hidden rounded-r-2xl">
            <div className="overview flex flex-col items-center justify-center gap-[4rem]">
              <h2 className="title text-[1.5rem] font-bold">Tekrar Hoş Geldiniz! 👋</h2>
              <p className="text-center text-[1.3rem]">
              Favori dizi ve filmlerinize kaldığınız yerden devam etmeye hazır mısınız?
              </p>
              <p className="font-bold text-[1.3rem] text-center">
                Giriş yapın ve kesintisiz eğlencenin tadını çıkarın.
              </p>
              <div className='text-center'><Link className='underline' href={"/"}>Şifrenizi mi unuttunuz?</Link>&nbsp;Sorun değil, birkaç saniyede sıfırlayabilirsiniz.</div>
            </div>

            <div>
              <h2 className='text-center text-[1.5rem] font-bold'>Eğlenceye kaldığınız yerden devam edin! 🎥</h2>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default LoginPage
