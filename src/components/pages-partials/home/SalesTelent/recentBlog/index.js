import React from 'react'

const RecentBlog = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-10 lg:justify-start lg:space-x-10 mt-[20px]'>
                <div>
                    <h1 className='font-semibold text-[35px] text-center '>Recent Blogs</h1>
                    <p className='text-[20px] font-medium text-center'>A curated list of blogs to help you land your next big internship</p>
                </div>
                <div className='md:grid md:grid-cols-3 xl:gap-5 gap-4 mt-[40px]'>
                    <div className='flex justify-center'>
                        <div className='blogbg flex md:justify-start justify-center rounded flex-col h-[450px] p-3 sm:item'>
                            <div className='flex justify-center'>
                                <img src='../img/b1.png' className='justify-self-center'></img>
                            </div>
                            <div className='self-end  ml-2'>
                                <h5 className='xl:lg:md:text-[18px] sm:text-[15px] font-semibold'>How AI enabled tech platform
                                    The TEACHLANCER™ is game changer for
                                    today’s sales workforce and enterprise!</h5>
                                <p className='xl:lg:md:text-[15px] sm:text-[15px]'>The DriveSales is an online, on-demand platform
                                    where startups and enterprises, both large and
                                    small, are provided....</p>
                                <div className='text-right align-text-bottom font-semibold mb-0'>
                                    <button>Continue Reading :)</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='blogbg flex md:justify-start justify-center rounded flex-col h-[450px] p-3'>
                            <div className='flex justify-center'>
                                <img src='../img/b2.png' className=''></img>
                            </div>
                            <div className='self-end  ml-2'>
                                <h5 className='xl:lg:md:text-[18px] sm:text-[15px] font-semibold'>The TEACHLANCER™ | Salespeople regularly
                                    work on their Soft Skills: Here’s how to
                                    sharpen yours!</h5>
                                <p className='xl:lg:md:text-[15px] sm:text-[15px]'>This can only be achieved if a sales rep is a
                                    hundred percent confident in his conversing and
                                    situation-handling skills. As per a sales report
                                    published in 2020...</p>
                                <div className='text-right'>
                                    <button>Continue Reading :)</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='blogbg flex md:justify-start justify-center rounded flex-col h-[450px] p-3'>
                            <div className='flex justify-center'>
                                <img src='../img/b3.png' className=''></img>
                            </div>
                            <div className='self-end  ml-2'>
                                <h5 className='xl:lg:md:text-[18px] sm:text-[15px] font-semibold'>The TEACHLANCER™ | More Sales
                                    Professionals are working from home
                                    than ever: How to be productive without
                                    working weekends!</h5>
                                <p className='xl:lg:md:text-[15px] sm:text-[15px]'>Everyday work of office with 9–5 working hours
                                    and the daily commute was replaced by remote
                                    work and lots of Zoom calls...</p>
                                <div className='text-right'>
                                    <button>Continue Reading :)</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentBlog