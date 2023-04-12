import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import NextLink from 'next/link';

const CourseOption = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
            <div className='max-w-5xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 mt-[20px]'>
                <h1 className='text-center text-[35px] font-semibold pb-10 pt-10'>Course Options</h1>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-2'>
                    <div className='firstc flex justify-center my-3' data-aos="zoom-out-down" data-aos-duration="2500">
                        <div className='maincourse flex flex-col w-[420px] h-[400px] bg-[#D9D9D9] rounded'>
                            <div className='coursetit flex bg-[#3DC0DF] gap-3 px-10 py-3 rounded'>
                                <h1 className='text-[35px] font-semibold '>Short Term
                                    Courses</h1>
                                <div className='coimg'>
                                    <img src='/img/stopwatch 1.png' className='my-4'></img>
                                </div>
                            </div>
                            <div className='coursetext'>
                                <p className='text-[18px] font-medium md:px-5 md:py-5 p-4'>The TEACHLANCER™ collaborates with top industry sales professionals who can help you get years ahead in your career. The TEACHLANCER™ courses allow you to start learning right away, so you can make progress on your own schedule.</p>
                                <div className='float-right mx-3'>
                                    <NextLink href='/shorterm-course/1' onClick={()=>localStorage.setItem("term",1)}><button className='font-semibold py-5'>View Details &gt;</button></NextLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='firstc flex justify-center my-3' data-aos="zoom-out-down" data-aos-duration="2500">
                        <div className='maincourse flex flex-col w-[420px] h-[400px] bg-[#D9D9D9] rounded'>
                            <div className='coursetit flex bg-[#3DC0DF] gap-3 px-10 py-3 rounded'>
                                <h1 className='text-[35px] font-semibold '>Long Term
                                    Courses</h1>
                                <div className='coimg'>
                                    <img src='/img/businessman 1.png' className='my-4'></img>
                                </div>
                            </div>
                            <div className='coursetext'>
                                <p className='text-[18px] font-medium md:px-5 md:py-5 p-4'>Whether you’re looking to start a new
                                    career, or change your current one,
                                    Professional Certificates on
                                    The TEACHLANCER™ help you become job
                                    ready. Learn at your own pace, whenever
                                    and wherever it’s most convenient for
                                    you. </p>
                                <div className='float-right mx-3'>
                                    <NextLink href='/shorterm-course/2' onClick={()=>localStorage.setItem("term",2)}><button className='font-semibold py-5'>View Details &gt; </button></NextLink>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseOption