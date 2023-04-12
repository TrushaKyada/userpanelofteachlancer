import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Magic = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
            <div className='max-w-7xl mx-auto justify-between py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 mb-10'>
                <h1 className='text-center text-[35px] font-semibold my-2 pb-8'  data-aos="fade-down" data-aos-duration="3000">The TEACHLANCER™ Match Making Magic</h1>
                <div className="mt-6 grid grid-cols-2 py-3  justify-center mgic gap-5">
                    <div className='s1 flex gap-3' data-aos="fade-right" data-aos-duration="2000">
                        <div className='sline w-[2%] h-[120%] bg-[#3DC0DF]'></div>
                        <div className='mname'>
                            <p className='text-[#000] text-[30px] font-semibold  rounded my-3'>Post Your Sales Role Requirement</p>
                            <p className=' text-[30px] font-semibold my-3'>Get Verified Sales Talent Match</p>
                            <p className=' text-[30px] font-semibold my-3'>Check Sales Talent Credentials</p>
                            <p className=' text-[30px] font-semibold my-3'>Conduct Discussion</p>
                            <p className=' text-[30px] font-semibold my-3'>Select Right Match</p>
                        </div>
                    </div>
                    <div className='s2 bg-[#D9D9D9] w-[435px] h-[291px]' data-aos="fade-left" data-aos-duration="3000">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Magic