import React from 'react'

const TanayProgram = () => {
    return (
        <div>
            <h1 className='text-center text-[40px] font-semibold'>
                Who is this program for?
            </h1>
            <div className='max-w-6xl mx-auto px-4 sm:px-6  lg:px-4 lg:justify-start lg:space-x-10'>
                <div className='prg1 grid grid-cols-3 gap-4'>
                    <div className="programlist w-[100%] my-[15px] flex items-center gap-3">
                        <img src='../img/Group 54.png' className='w-[24px] h-[24px] ml-[15px]'></img>
                        <p className='px-1 py-3 mt-[15px] text-center'>Sales Professionals</p>
                    </div>
                    <div className="programlist w-[100%] my-[15px] flex items-center gap-3">
                        <img src='../img/Group 54.png' className='w-[24px] h-[24px] ml-[15px]'></img>
                        <p className='px-1 py-3 mt-[15px] text-center'>MBA students</p>
                    </div>
                    <div className="programlist w-[100%] my-[15px] flex items-center gap-3">
                        <img src='../img/Group 54.png' className='w-[24px] h-[24px] ml-[15px]'></img>
                        <p className='px-1 py-3 mt-[15px] text-center'>Digital Marketing Managers</p>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto items-center px-4 sm:px-6  xl:lg:mx-10 lg:justify-start lg:space-x-10 '>
                <div className='prg1 grid grid-cols-2 gap-4 mx-[200px]'>
                    <div className="programlist w-[70%] my-[15px] flex items-center gap-3 ml-[55px]">
                        <img src='../img/Group 54.png' className='w-[24px] h-[24px] ml-[15px]'></img>
                        <p className='px-1 py-3 mt-[15px] text-center'>Marketing Professionals</p>
                    </div>
                    <div className="programlist w-[%] my-[15px] flex items-center gap-3">
                        <img src='../img/Group 54.png' className='w-[24px] h-[24px] ml-[15px]'></img>
                        <p className='px-1 py-3 mt-[15px] text-center'>Content Creators</p>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto items-center px-4 sm:px-6  xl:lg:mx-10 lg:justify-start lg:space-x-10 '>
                <p className='text-center py-2'>Anyone who wants to learn more about sales or want to sell their products or services.</p>
            </div>

        </div>
    )
}

export default TanayProgram