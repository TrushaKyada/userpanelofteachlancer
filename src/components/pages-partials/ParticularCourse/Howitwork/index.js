import React from 'react'

const HowItWork = () => {
    return (
        <div className='my-5'>
            <div className='max-w-7xl mx-auto justify-between items-center px-4 py-10    sm:px-6 sm:py-4 lg:px-6 lg:justify-start lg:space-x-10 '>
                <h1 className='text-center text-[35px] font-semibold'>How it Works</h1>
                <div className='grid grid-cols-2'>
                    <div className=' flex border-r-4 border-[#3DC0DF]'>
                        <div className='worktext lg:md:mt-[100px] sm:mt-[50px] mr-[30px]'>
                            <h1 className='text-[35px] font-semibold text-right'>Select Course</h1>
                            <p className=' text-[20px] bold text-right font-medium'>Once you opt to register—bright move, by the way—here’s what happens: you decide on the course that works for you, full-time or part-time. Then, you enroll on our site. Next, you’ll complete the enrollment set-up and obtain the information you would need to go ahead.</p>
                        </div> 
                     
                    </div>
                   
                    <div className='flex justify-center '>
                        <div className='workimg mt-[70px] flex'>
                            <img src='/img/enroll 1.png'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWork