import React from 'react'

const Prefer = () => {
    return (
        <div>
            <div className='max-w-2xl mx-auto justify-between items-center px-0 py-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10 my-[90px]'>
                <div className='border-2 px-10 rounded-2xl'>
                    <h1 className='text-[35px] font-semibold text-center mt-[40px]'>Preferences</h1>

                    <div className='py-2 ml-3'>
                        <p className='text-[18px] font-semibold py-2'>Currently looking for</p>
                        <div className='lookfor flex gap-10'>
                            <div className='flex gap-3'>
                                <input type="checkbox" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded'></input>
                                <p className='text-[18px] font-medium'>Internships</p>
                            </div>
                            <div className='flex gap-3'>
                                <input type="checkbox" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded'></input>
                                <p className='text-[18px] font-medium'>Jobs</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-center my-10'>
                        <button className='text-[18px] font-semibold text-[#fff] bg-[#202040] rounded-3xl py-1 px-3 hover:bg-[#3DC0DF] hover:text-[#202040]'>UPDATE</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Prefer