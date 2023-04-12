import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from '../Profile/Index'

const StudDashboard = () => {
  

    return (
        <div>
            <ToastContainer/>
            <div className='max-w-8xl  mx-auto justify-between items-center px-4 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 '>
                <div className='row flex gap-5'>
                    <Profile/>

                    <div className=''>
                        <div className='mainwp flex bg-[#E6E6E6]  rounded justify-between py-5 ml-10'>
                            <div className='flex gap-3'>
                                <div className='bg-[#28B458] w-[8px] h-[75px] rounded'></div>
                                <div>
                                    <p className='text-[30px] font-semibold'>WhatsApp Permission</p>
                                    <p className='text-[20px] font-medium'>Allow companies to contact you on WhatsApp</p>
                                </div>
                            </div>
                            <div className='mainalw flex gap-2 mr-[30px] items-center'>
                                <div className='alwbtn'>
                                    <button className='bg-[#3DC0DF] text-[#fff] text-[18px] font-semibold px-5 py-2 rounded'>ALLOW</button>
                                </div>
                                <div className='alwbtn'>
                                    <button className='bg-[#3DC0DF] text-[#fff] text-[18px] font-semibold px-5 py-2 rounded'>LATER</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default StudDashboard
