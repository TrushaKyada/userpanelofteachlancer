import React from 'react'

const InternshipPrefer = () => {
    return (
        <div>
            <div className='max-w-2xl mx-auto justify-between items-center px-0 py-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10 my-[90px]'>
                <div className='border-2 px-10'>
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
                    <div className='py-2 ml-3'>
                        <p className='text-[18px] font-semibold py-2'>Types of Internships</p>
                        <div className='lookfor flex gap-[67px]'>
                            <div className='flex gap-3'>
                                <input type="checkbox" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded'></input>
                                <p className='text-[18px] font-medium'>In-office</p>
                            </div>
                            <div className='flex gap-3'>
                                <input type="checkbox" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded'></input>
                                <p className='text-[18px] font-medium'>Remote</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-2 ml-3'>
                        <p className='text-[18px] font-semibold py-2'>Are you willing to relocate?</p>
                        <div className='lookfor flex gap-[110px]'>
                            <div className='flex gap-3'>
                                <input type="checkbox" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded'></input>
                                <p>Yes</p>
                            </div>
                            <div className='flex gap-3'>
                                <input type="checkbox" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded'></input>
                                <p>No</p>
                            </div>
                        </div>
                    </div>
                    <div className='interest flex flex-col gap-3'>
                        <p className='text-[18px] font-semibold py-2 ml-3'>Fields of interest</p>
                        <select className='rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0 text-[#A5A5A5]'>
                            <option value="1">Select your 1st preference</option>
                            <option value="2">abcd</option>
                            <option value="3">abcd</option>
                            <option value="4">abcd</option>
                            <option value="5">abcd</option>
                        </select>
                        <select className='rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0 text-[#A5A5A5]'>
                            <option value="1">Select your 2nd preference</option>
                            <option value="2">abcd</option>
                            <option value="3">abcd</option>
                            <option value="4">abcd</option>
                            <option value="5">abcd</option>
                        </select>
                        <select className='rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0 text-[#A5A5A5]'>
                            <option value="1" className='text-[#A5A5A5]'>Select your 3rd preference</option>
                            <option value="2">abcd</option>
                            <option value="3">abcd</option>
                            <option value="4">abcd</option>
                            <option value="5">abcd</option>
                        </select>
                    </div>
                    
                    <div className='text-center my-10'>
                        <button className='text-[18px] font-semibold text-[#fff] bg-[#202040] rounded-3xl py-1 px-3 hover:bg-[#3DC0DF] hover:text-[#202040]'>UPDATE</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default InternshipPrefer