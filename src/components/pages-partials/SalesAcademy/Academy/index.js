import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Academy = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
            <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 mt-[20px]'>
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 xl:lg:gap-[150px] md:gap-[70px]">
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center" data-aos="zoom-in-right" data-aos-duration="2500">
                            <div className="lg:py-24">
                                <h1 className='text-[45px] font-semibold tracking-tighter'>A structured, in-demand & job proof sales learning program</h1>
                                <div>
                                    <div className='bottomborder flex items-center flex-row w-[162px] h-[7px] bg-[#3DC0DF] my-3 lg:inline-flex items-center md:inline-flex items-center sm:inline-flex items-center'></div>
                                </div>
                                <div className=' flex items-center lg:inline-flex items-center md:inline-flex items-center sm:inline-flex items-center'>
                                    <h6 className='text-[20px]  leading-7 py-3'>India’s first and largest Teaching and Freelancing Platform </h6>
                                </div>
                            </div>

                        </div>
                        <div className='relative tainerimgs flex' data-aos="zoom-in-left" data-aos-duration="2500">
                            <div className='  flex  gap-2  lg:h-[60%] h-[100%]'>
                                <div className='tanaymain rounded  flex justify-items-center'>
                                    <div className='tanay my-2 my-[150px]'>
                                        <h4 className='text-[18px] font-semibold text-center mt-[150px]'>Tanay Agarwal</h4>
                                        <p className='text-center text-[10px]'> Sales Mentor</p>
                                    </div>
                                </div>
                                <div className='monikamain flex flex-col justify-items-center my-[70px]'>
                                    <div className='monika  rounded my-2'>
                                        <h4 className='text-[18px] font-semibold text-center mt-[150px]'>Roshni Baronia</h4>
                                        <p className='text-center text-[10px]'> Sales Mentor</p>
                                    </div>
                                    <div className='nadam rounded z-10 my-2'>
                                        <h4 className='text-[18px] font-semibold text-center mt-[135px]'>Nadhmi Kebaieur</h4>
                                        <p className='text-center text-[10px] mb-[100px] '> Sales Mentor</p>
                                    </div>
                                </div>
                                <div className='annimain flex flex-col justify-items-center'>
                                    <div className='anni my-2'>
                                        <div className=''>
                                            <h4 className='text-[18px] font-semibold text-center mt-[140px] '>Aman Khajanchi</h4>
                                        </div>
                                        <p className='text-center text-[10px] mb-[50px]'> Sales Mentor</p>
                                    </div>
                                    <div className='chirag my-2'>
                                        <h4 className='text-[18px] font-semibold text-center mt-[150px]'>Chirag Sharma</h4>
                                        <p className='text-center text-[10px]'> Sales Mentor</p>
                                    </div>
                                    <div className='roshni my-2'>
                                        <h4 className='text-[18px] font-semibold text-center mt-[130px]'>Monika Upadhya</h4>
                                        <p className='text-center text-[10px] mb-[50px]'>Product & Sales</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Academy