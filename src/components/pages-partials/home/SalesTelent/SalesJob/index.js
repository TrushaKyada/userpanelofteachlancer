import React from 'react'
import AchieveMents from '../AchieveMent'

export default function SalesJob() {
  return (
    <div >
      <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10 mt-[20px]'>
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <h1 className="salestelent mt-4 font-bold text-black sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl">
                  <span className="block tracking-wider text-[30px] xl:lg:text-[41px] md:text-[35px] sm:text-[32px]">Get Top and Verified</span>
                  <span className="block text-indigo-400 text-[30px] xl:lg:text-[41px] md:text-[35px] sm:text-[32px]"><span className='text-[#3DC0DF]'> Sales Talent </span> <span className='text-[#000000]'>Opportunities in </span><span className='text-[#3DC0DF]'> 4 Easy Steps!</span></span>
                </h1>
                <div>
                  <div className='bottomborder flex items-center flex-row w-[162px] h-[7px] bg-[#3DC0DF] my-5 lg:inline-flex items-center md:inline-flex items-center sm:inline-flex items-center'></div>
                </div>
                <div className='flex jobp items-center lg:inline-flex items-center md:inline-flex items-center sm:inline-flex items-center'>
                  <p className='text-[15px] w-[400px] leading-7 pb-5'>Learn and earn by working on live projects with companies and startups across the globe</p>
                </div><br></br>
                <div className='homebtn flex flex-col items-center lg:inline-flex items-center md:inline-flex items-center sm:inline-flex items-center'>
                  <div className='apply text-[18px] font-extrablod text-[#fff] mr-3'>
                    <button className='px-[10px] py-[5px] hover:bg-[white] hover:text-[#3DC0DF]'>Get Started</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className='saleimg mx-auto'>
                <img src='../img/Frame.png' alt="" className='img-fluid'></img>
              </div>
            </div>
          </div>
          <AchieveMents job="100+" salary="30K+" companies="25 +" verijob="100%" title="Verified Sales Jobs" />
        </div>

      </div>
    </div>
  )
} 