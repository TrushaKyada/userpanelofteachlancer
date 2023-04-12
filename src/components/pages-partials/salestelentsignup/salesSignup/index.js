import React from 'react'
import NextLink from 'next/link'

const SalesSignup = () => {
    return (
        <div>
            <div>
                <h1 className='telentnew text-center text-[35px] font-semibold mt-[250px]'>Create New Account</h1>
                <div className='SIGNUP1 mx-[100px] sm:items-center'>
                    <div className='newac1 grid grid-cols-2 gap-5'>
                        <div className='feild1 py-4'>
                            <label className='mx-2 text-[18px] font-semibold '>Company Name*</label><br></br>
                            <input type="text" placeholder='Your Company Name' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" />
                        </div>
                        <div className='feild1 py-4'>
                            <label className='mx-2 text-[18px] font-semibold '>Your Work Email*</label><br></br>
                            <input type="text" placeholder='Your Work  Email' className="w-[95%]  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" />
                        </div>
                    </div>
                    <div className='newac1 grid grid-cols-2 gap-5'>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold'>Mobile Number*</label><br></br>
                            <input type="text" placeholder='Mobile Number*' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" />
                        </div>
                        <div className='feild1wp flex  lg:md:py-3 sm:py-3 lg:md:mt-[30px] sm:mt-[30px] gap-3'>
                            {/* <label className='mx-2 text-[18px] font-semibold'>Your Role*</label><br></br> */}
                            <input type="checkbox" placeholder='Mobile' className="rounded bg-[#DBDBDB] form-control w-[20px] h-[20px] border-t-0 border-l-0 border-r-0 border-b-0" /><p>WhatsApp</p>
                        </div>
                    </div>
                    <div className='newac1 grid grid-cols-2 gap-5'>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold'>Password*</label><br></br>
                            <input type="text" placeholder='Enter Password' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" />
                        </div>
                        <div className='feild1 py-3 '>
                            <label className='mx-2 text-[18px] font-semibold'>Confirm Password*</label><br></br>
                            <input type="text" placeholder='Confirm Password' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" />
                        </div>
                    </div>
                    <div className='feild1chk flex  gap-3 py-3'>
                        <input type="checkbox" placeholder='Mobile' className="rounded bg-[#DBDBDB] form-control w-[20px] h-[20px] ml-[10px] border-t-0 border-l-0 border-r-0 border-b-0" /><p>I agree to Terms & Conditions</p>
                    </div>
                    <div className='text-center '>
                        <button className='btn btncompnew bg-[#202040] text-[#fff] py-1 px-[45px] rounded-3xl hover:bg-[#3DC0DF] hover:text-[#202040] font-semibold'>Create New Account</button>
                    </div>
                    <div className='newaacount mt-[12px] flex gap-1 justify-center'>
                        <NextLink href="" className='text-[12px]'>Have an Account?</NextLink>
                        <p className='text-[12px]'>|</p>
                        <NextLink href="/login" className='text-[12px]'>Login Now</NextLink>
                    </div>
                    <div className="relative flex justify-center py-3  items-center">
                        <img src='../img/Group 10.png' className='bottomimg absolute w-[215px] h-[46px] lg:mt-[600px]'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesSignup