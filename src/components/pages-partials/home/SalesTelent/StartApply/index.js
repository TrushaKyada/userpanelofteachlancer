import React from 'react'

const StartApply = () => {
    return (
        <>
            <div className='max-w-6xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 mt-[20px] mb-[50px] rounded applynow'>
               <div className='apy mx-5'>
               <div className='atext text-center flex flex-col'>
                    <h1 className='text-[37px]'>Start Applying for <br />
                        Sales Jobs <span className='font-semibold'>NOW!</span></h1>
                </div>
                <div className='getbtn text-center'>
                    <button className='bg-[#3DC0DF] text-[#fff] py-2 px-3 my-3 rounded hover:bg-[#fff] hover:text-[#3DC0DF] hover:border-2 hover:border-[#3DC0DF]'>Get Started</button>
                </div>
               </div>
            </div>

        </>
    )
}

export default StartApply        