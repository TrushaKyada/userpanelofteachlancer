import React from 'react'
import NextLink from 'next/link'
const AcademyLogin = () => {
    return (
        <div>
            <div className=' max-w-2xl mx-auto justify-between items-center px-10 xl:lg:md:sm:px-0 lg:justify-start lg:space-x-10 border-4 rounded my-[150px]'>
                <div>
                    <div className=" flex flex-col justify-center sm:px-6 ">
                        <div className="sm:mx-auto sm:w-full sm:max-w-md">
                            <h2 className=" text-center text-3xl font-extrabold text-gray-900  pt-[50px]">
                                Sign in
                            </h2>
                        </div>

                        <div className="flex justify-center pt-2">
                            {/* {auth.errorMessage && (
                                <Alert message={auth.errorMessage} type="error" />
                            )} */}
                        </div>
                        <div className="mt-8">
                            <div className="saleacSign bg-white   sm:rounded-lg sm:px-10">
                                <form className="space-y-6">
                                    <div className=''>
                                        <label className='mx-3  text-[18px] font-semibold'>Email*</label><br></br>
                                        <input type="text" placeholder="Your Email Adress" className='rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' />
                                    </div>
                                    <div className=''>
                                        <label className='mx-3  text-[18px] font-semibold'>Password*</label><br></br>
                                        <input type="text" placeholder="Enter Password" className='rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' />
                                    </div>
                                    <div className='rememberme flex justify-between ml-2'>
                                        <div className='flex gap-3'>
                                            <input type="checkbox" className="rounded bg-[#DBDBDB] form-control w-[20px] h-[20px] border-t-0 border-l-0 border-r-0 border-b-0"></input>
                                            <p>Remember Me</p>
                                        </div>
                                        <div className='mr-5'>
                                            <NextLink href="" className='text-[15px]'>Forgot Password?</NextLink>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <button className='btn bg-[#202040] text-[#fff] text-[18px] font-semibold py-1 uppercase px-[30px] rounded-3xl hover:bg-[#fff] hover:text-[#202040] hover:border-4 hover:border-[#202040]'>Log in</button>
                                    </div>

                                </form>
                                <div className='newaacount mt-[15px] flex gap-1 justify-center'>
                                    <NextLink href="" className='text-[12px] font-semibold'>New to TheDriveSales?</NextLink>
                                    <p className='text-[12px]'>|</p>
                                    <NextLink href="" className='text-[12px] font-semibold'>Create an Account</NextLink>
                                </div>
                                <div className='flex justify-center my-5 mt-[70px] mb-[50px]'>
                                    <img src='/img/logo.png'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcademyLogin