import React from 'react'

const CompPersonal = () => {
    return (
        <div>
            <div className=' max-w-5xl mx-auto justify-between items-center px-0 pt-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10 mt-[100px] rounded'>
                <div className='border xl:lg:px-[30px] md:px-[20px] md:px-[20px] px-[20px] py-10'>
                    <h1 className='text-center text-[35px] font-semibold'>Personal Details</h1>
                    <div className='newac1 grid grid-cols-2 gap-5'>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>First Name</label><br></br>
                            <input type="text" className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" />
                        </div>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>Last Name</label><br></br>
                            <input type="text" className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" />
                        </div>
                    </div>
                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>E-mail</label><br></br>
                            <input type="text" className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" />
                        </div>
                    </div>
                    <div className='newac1'>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>Mobile number</label><br></br>
                            <div className='flex gap-3'>
                                <input type="text" className="w-[20%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" value="+91" />
                                <input type="text" className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" placeholder='Your 10 Digit Mobile Number' />
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-[20px]'>
                        <button className='bg-[#202040] text-[#fff] px-4 my-5 rounded-full uppercase font-semibold'>Done</button>
                    </div>
                </div>
                <p className='text-center text-[17px] font-semibold mt-[80px]'>
                    Need help? Call us at +xx xxxxxxxxxx, available from Mon to Fri, 10 AM - 6 PM.
                </p>
            </div>
        </div>
    )
}

export default CompPersonal