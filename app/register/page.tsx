import LoginPageBackground from "@/components/login-page-bg";
import { getAllMovies } from "@/services/FetchProcess";
import { randomInt } from "crypto";
import Link from "next/link";
import React from "react";

async function RegisterPage() {
  const { results: Movie } = await getAllMovies();
  return (
    <div>
      <LoginPageBackground movies={Movie[randomInt(0, 19)]} />

      <div className="fixed flex justify-center items-center top-[50%] left-[50%] translate-x-[-50%] w-[100%] translate-y-[-50%]">

        <div className="flex w-[70%] max-[1901px]:w-[85%] max-[1565px]:w-[95%] max-[1403px]:w-[99%] max-[1026px]:w-[60%] max-[768px]:w-[75%] max-[466px]:w-[98%] rounded-xl h-auto">

          <div className="flex-[45%_0_0] max-[1026px]:flex-[100%_0_0] px-5 bg-[#333] rounded-l-xl max-[1026px]:rounded-xl text-white flex gap-[2rem] flex-col justify-center py-[5rem] items-center register-form">
            
            <div className="register-title-wrapper">
              <h2 className="text-[2rem] font-bold tracking-[2px]">Üye Ol!</h2>
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

            <form action="#" className="flex flex-[100%_0_1] flex-wrap gap-[.5rem] max-[768px]:px-[0] px-[5rem] justify-between">
              <label htmlFor="firstName" className="order-1 flex-[49%_0_1] max-[1345px]:flex-[100%_0_1]">Ad</label>
              <input required className="text-black px-4 py-2 rounded-[20px] focus:outline-none max-[1345px]:flex-[100%_0_1] max-[1345px]:order-2 flex-[49%_0_1] order-3 min-w-[10px]" id="firstName" type="text" />
              <label htmlFor="lastName" className="order-2 flex-[49%_0_1] max-[1345px]:flex-[100%_0_1] max-[1345px]:order-3">Soyad</label>
              <input required className="text-black px-4 py-2 rounded-[20px] focus:outline-none flex-[49%_0_1] max-[1345px]:flex-[100%_0_1] order-4 min-w-[10px]" id="lastName" type="text" />
              <label htmlFor="email" className="order-5 flex-[100%]">E-Posta</label>
              <input required className="text-black px-4 py-2 rounded-[20px] focus:outline-none flex-[100%] order-6" id="email" type="email" />
              <label htmlFor="password" className="order-7 flex-[100%]">Şifre</label>
              <input required className="text-black px-4 py-2 rounded-[20px] focus:outline-none flex-[100%] order-8" id="password" type="password" />
              <button className="order-10 bg-blue-600 hover:bg-blue-500 transition text-white font-bold text-[1rem] text-center flex-[100%] py-2 mt-2 rounded-full">Üye Ol!</button>
              <Link className="order-11 w-[100%] text-center border-[1px] transition border-solid border-[#fff] py-2 rounded-full mt-3 hover:bg-white hover:text-black" href={"/login"}>Giriş Yap!</Link>
            </form>

          </div>

          <div className="flex flex-col justify-center gap-[2rem] items-center flex-[55%_0_0] backdrop-blur-xl max-[1026px]:hidden rounded-r-xl">
            <div className="overview flex flex-col items-center justify-center px-[5rem] gap-[5rem]">
              <h2 className="title text-[1.5rem] font-bold">Sonsuz Eğlenceye Kapı Açın!</h2>
              <p className="text-center text-[1.3rem] leading-[40px]">
                Favori dizileriniz, heyecan dolu filmler, nefes kesen belgeseller ve çok daha fazlası tek bir platformda! Size özel öneriler, her cihazda sorunsuz deneyim ve kesintisiz izleme keyfi.
              </p>
              <strong className="text-center text-[1.3rem]">İstediğiniz zaman, istediğiniz yerde.</strong>
              <p className="font-bold text-[1.3rem] text-center">
                Şimdi üye olun, sınırsız eğlence dünyasına adım atın!
              </p>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default RegisterPage;
