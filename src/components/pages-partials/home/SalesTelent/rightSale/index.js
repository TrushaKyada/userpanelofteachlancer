import React from 'react'

const RightSale = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10 mt-[20px]'>
                <div className=''>
                    <div className='bg-[#fff]'>
                        <h1 className='text-center text-[35px] py-5 mt-[50px] font-semibold'>How The TEACHLANCER™ Helps You Find the Right Sales Job?</h1>
                        <div className='mt-6 grid grid-cols-4 py-3  justify-center imgs'>
                            <div className='main1 relative flex flex-col items-center md:col-span-2 lg:col-span-1 sm:col-span-2'>
                                <div className='img absolute z-10 bg-[#202040] w-[100px] h-[100px] rounded-full  border-4 border-[#3DC0DF] flex items-center'>
                                    <img src='../img/Asset 33 1.png' className='px-5 slef-center'></img>
                                </div>
                                <div className='content  w-[245px] h-[265px] flex flex-col items-center py-[70px] rounded mt-[50px]'>
                                    <h5 className='text-center text-[25px] font-semibold'>
                                        Career
                                    </h5>
                                    <p className='text-center'>We are highly niche and only onboard selected jobs and talents to ensure you get top sales jobs</p>
                                </div>
                            </div>
                            <div className='main1 flex flex-col items-center md:col-span-2 lg:col-span-1 sm:col-span-2'>
                                <div className='img absolute z-10  bg-[#202040] w-[100px] h-[100px] rounded-full flex items-center'>
                                    <img src='../img/Asset 34 1.png' className='px-5 slef-center'></img>
                                </div> 
                                <div className='content w-[245px] h-[265px] flex flex-col items-center py-[70px] px-[10px] rounded mt-[50px]'>
                                    <h5 className='text-center text-[25px] font-semibold'>
                                        Master
                                    </h5>
                                    <p className='text-center'>Students enjoy a healthy mix of group activities, real-world case studies and hands-on mentorship to help you grow professionally.</p>
                                </div>
                            </div>
                            <div className='main1 flex flex-col items-center md:col-span-2 lg:col-span-1 sm:col-span-2'>
                                <div className='img absolute z-10  bg-[#202040] w-[100px] h-[100px] mb-0 rounded-full flex items-center'>
                                    <img src='../img/Asset 29 1.png' className='px-5 slef-center'></img>
                                </div>
                                <div className='content w-[245px] h-[265px] flex flex-col items-center py-[70px] px-[10px] rounded mt-[50px]'>
                                    <h5 className='text-center text-[25px] font-semibold'>
                                        Flexibility
                                    </h5>
                                    <p className='text-center'>With live flexible online courses, it’s easy to find an option that fits your schedule since classes are held in the evenings or on weekends.</p>
                                </div>
                            </div>
                            <div className='main1 flex flex-col items-center md:col-span-2 lg:col-span-1 sm:col-span-2'>
                                <div className='img absolute z-10  bg-[#202040] w-[100px] h-[100px] rounded-full flex items-center'>
                                    <img src='../img/Asset 25 1.png' className='px-5 slef-center'></img>
                                </div>
                                <div className='content w-[245px] h-[265px] flex flex-col items-center py-[70px] px-[10px] rounded mt-[50px]  '>
                                    <h5 className='text-center text-[25px] font-semibold'>
                                        Rewarding
                                    </h5>
                                    <p className='text-center'>Most of the opportunity are from leading startups and established enterprise.</p>
                                </div>
                            </div>
                        </div>
                        <div className='getstarted flex justify-center my-[40px]'>
                            <button className='bg-[#3DC0DF] text-[#fff] uppercase px-3 py-2 my-3 rounded hover:bg-[#fff] hover:text-[#3DC0DF] hover:border-2 hover:border-[#3DC0DF] uppercase'>getstarted</button>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='leanding flex gap-3'>
                        <div className="l1 w-[60px] h-[100px] bg-[#3DC0DF]"></div>
                        <div className='l2 flex flex-col justify-center'>
                            <h1 className='lg:text-[35px] md:text-[28px] sm:text-[22px]'>25+ leading companies hire through The TEACHLANCER™</h1>
                            <p className='lg:text-[18px] md:text-[15px] sm:text-[12px] text-[#908F8F] font-semibold'>Get the opportunity to learn from the best enterprises across the globe</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightSale