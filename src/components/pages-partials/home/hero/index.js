import AOS from 'aos';
import 'aos/dist/aos.css';
import Partners from './Partners'
import NextLink from 'next/link'
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (

    <main>
      <div className="bg-home bg-[#fff] lg:overflow-hidden ">
        <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 mt-[20px]'>
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center" data-aos="zoom-out-left" data-aos-duration="2500">
                <div className="lg:py-24">
                  <h1 className="mt-4  tracking-tight font-bold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block text-[50px] lg:text-[40px] md:text-[35px] sm:text-[32px]">Hired Top & Verified</span>
                    <span className="block  text-[50px] lg:text-[40px] md:text-[35px] sm:text-[32px] text-[#000]"><span className='text-[#3DC0DF]'> Sales Talent </span > in 7 x 24 Hours</span>
                  </h1>
                  <div>
                    <div className='bottomborder flex items-center flex-row w-[162px] h-[7px] bg-[#3DC0DF] my-3 lg:inline-flex items-center md:inline-flex items-center sm:inline-flex items-center'></div>
                  </div>
                  <div className=' flex items-center lg:inline-flex items-center md:inline-flex items-center sm:inline-flex items-center'>
                    <h6 className='text-[22px] w-[400px] leading-7 py-3'>India’s First Teaching Based and Freelancing Based Platform</h6>
                  </div>
                  <div className='homebtn flex items-center lg:inline-flex items-center md:inline-flex items-center sm:inline-flex items-center'>
                    <div className='apply text-[18px] font-extrablod text-[#fff] mr-3'>
                      <NextLink href="/sales-academy"> <button className='applybtn px-[10px] py-[8px]' >Apply as Sales Talent</button></NextLink>
                    </div>
                    <div className='apply text-[18px] font-extrablod text-[#fff] mr-3'>
                      <NextLink href="/company"><button className='applybtn px-[10px] py-[8px]'>Hire sales talent</button></NextLink>
                    </div>

                  </div>
                  <p className='text-[18px] leading-7 py-3'>
                    Welcome to The TEACHLANCER™!
                  </p>
                </div>

              </div>
              <div className='relative ' data-aos="zoom-out-right" data-aos-duration="2500">

                <div className='relative  flex justify-between gap-2  lg:h-[60%] h-[100%]'>
                  <div className='nameholder bg-[#3DC0DF] rounded h-[101px] w-[90px]  bottom-0 flex flex-col mt-[250px] lg:mt-[350px] lg:mx-[20px]  md:mt-[100px] md:ml-[150px]'>
                    <img className='img-fluid p-1 ' src='../img/Rectangle 7.png'></img>
                    <p className='text-[#000] text-[10px] text-center font-bold uppercase'>name holder</p>
                    <div className='triangle flex  self-center'></div>
                  </div>
                  <div className='nameholer2 holder rounded bg-[#3DC0DF] h-[168px] w-[160px] flex flex-col mt-[100px] lg:mt-[200px] md:mt-[00px] md:mb-[300px] sm:mb-[300px] mb-[300px]'>
                    <img className='img-fluid p-2 ' src='../img/Rectangle 7.png '></img>
                    <p className='text-[#000] text-[12px] text-center font-bold uppercase'>name holder</p>
                    <div className='triangle2 flex  self-center '></div>
                  </div>
                  <div className='nameholder bg-[#3DC0DF] rounded h-[101px] w-[90px] flex flex-col mt-[250px] md:mt-[100px] lg:mt-[350px] lg:mx-[20px] md:mr-[150px]'>
                    <img className='img-fluid p-1' src='../img/Rectangle 7.png'></img>
                    <p className='text-[#000] text-[10px] text-center font-bold uppercase'>name holder</p>
                    <div className='triangle flex  self-center '></div>
                  </div>
                </div>
                <div className='earth justify-center  flex m-auto '>
                  <img
                    className="absolute bottom-0 bg-center justify-center flex md:pt-[500px]"
                    src="../img/Mask group.png"
                    alt=""
                  />
                </div>
                <div className='bg-overlay absolute bottom-0'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Partners />


    </main>

  )
}
