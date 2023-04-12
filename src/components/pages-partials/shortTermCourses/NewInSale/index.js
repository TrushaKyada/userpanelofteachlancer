import React from 'react'

const   NewInSale = () => {
    return (
        <div>
            <div className='max-w-5xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10'>
                <div className='mainnew flex justify-between bg-[#D9D9D9] py-5 rounded px-3 xl:lg:md:flex-row sm:flex-col'>
                    <h1 className='text-[35px] font-semibold xl:lg:md:text-start sm:text-center'>WHAT'S NEW IN SALES ?</h1>
                    <button className='bg-[#3DC0DF] text-[#fff] uppercase rounded px-4 py-2 hover:bg-[white] hover:text-[#3DC0DF] hover:border hover:border-[#3DC0DF]'>Check out our Sales Videos</button>
                </div>
            </div>
        </div>
    )
}

export default NewInSale