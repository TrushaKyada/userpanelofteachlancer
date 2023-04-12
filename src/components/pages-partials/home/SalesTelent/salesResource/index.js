import React from 'react'

const SalesResource = () => {
    return (
        <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-0 lg:justify-start lg:space-x-10 mt-[20px]'>
            <div className='my-5'>
                <div className="mt-6 grid grid-cols-5 py-3 flex  justify-center imgs md:sm:gap-2">
                    <div className='sr1 flex lg:gap-2 lg:col-span-3 md:col-span-5 sm:col-span-5  md:justify-center sm:justify-center'>
                        <div className='srline w-[5%] h-[100%] bg-[#3DC0DF]'></div>
                        <div className='srname justify-center'>
                            <h1 className='text-[35px] font-semibold'>Sales Resources, Delivered Daily.</h1>
                        </div>
                    </div>
                    <div className='s2 flex flex-col lg:gap-1 md:gap-1 lg:col-span-2 md:col-span-5 sm:col-span-5 sm:gap-2'>
                        <div className="flex p-0 m-0 leading-none lg:justify-start md:justify-center sm:justify-center">
                            <input type="search" id="form1" className="form-control res leading-none border-0 bg-[#E7E7E7] rounded-l-lg xl:lg:md:w-[350px]" placeholder='Enter your Email' />
                            <button className='bg-[#3DC0DF] px-2 rounded-r-lg text-[#fff]  hover:bg-[#fff] hover:text-[#3DC0DF] hover:border-2 hover:border-[#3DC0DF]'>Sign Me up</button>
                        </div>
                        <div className='md:justify-center sm:justify-center lg:justify-start'>
                        <p className='text-[#103D48] lg:text-[17px] lg:text-left md:text-center md:text-[13px] sm:text-center lg:xl:md:text-left'>Subscription implies consent to our privacy policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesResource