import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SalesFriend = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
            <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 mt-[20px]'>
                <h1 className='text-[35px] font-semibold text-center'>What Your Friends have to Say</h1>
                <div className='mainfrd grid grid-cols-3'>
                    <div className='d1' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <div className='relative flex'>
                            <div className='flex flex-col items-center  ml-[50px] py-3 rounded'>
                                <div className='fridetail px-3 py-3 border-4 border-[#3DC0DF] w-[270px] h-[295px] rounded-xl  shadow ml-[-10px] flex-col pl-3'>
                                    <div className='qimg flex gap-1 mt-[20px] ml-2'>
                                        <img src='../img/qimg.png'></img>
                                    </div>
                                    <div className='ftext ml-2'>
                                        <p className='text-[12px]'>I thank The TEACHLANCER™ for
                                            lending the platform which lead to
                                            an opportunity to work one of the
                                            leading EdTech to enhance my
                                            skills, build a new experience and
                                            drive me to a new path of my
                                            future.</p>
                                    </div>
                                </div>
                                <div className='friname pl-[50px] py-3 bg-[#3DC0DF] rounded  w-[280px] h-[80px]  shadow'>
                                    <h5 className='text-[20px] font-semibold mx-5 my-3 uppercase  text-[#fff] flex'>
                                        Anish B
                                    </h5>
                                </div>
                            </div>
                            <div className=' absolute z-20  w-[110px] h-[110px] flex items-center bottom-0 xl:lg:md:left-[-10px]'>
                                <img src='../img/Ellipse 26.png' className=''></img>
                            </div>
                        </div>
                    </div>
                    <div className='d1 mt-[70px]' data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <div className='relative flex'>
                            <div className='flex flex-col items-center  ml-[50px] py-3 rounded'>
                                <div className='fridetail px-3 py-3 border-4 border-[#3DC0DF] w-[270px] h-[295px] rounded-xl  shadow ml-[-10px] flex-col pl-3'>
                                    <div className='qimg flex gap-1 mt-[20px] ml-2'>
                                        <img src='../img/qimg.png'></img>
                                    </div>
                                    <div className='ftext ml-2'>
                                        <p className='text-[12px]'>I express my immense gratitude to
                                            The TEACHLANCER™ team for
                                            connecting with me to my first job.
                                            The TEACHLANCER™ is like a genie,
                                            who has fulfilled my wish to work
                                            to work in my dream industry. The
                                            passion, dedication, and the drive
                                            to fulfil the dreams of MBA
                                            students and sales aspirants is
                                            highly commendable. I wish all the
                                            success to the team and keep fulling
                                            the dreams of many more. Thank
                                            you, The TEACHLANCER™</p>
                                    </div>
                                </div>
                                <div className='friname pl-[50px] py-3 bg-[#3DC0DF] rounded  w-[280px] h-[80px]  shadow'>
                                    <h5 className='text-[20px] font-semibold mx-5 my-3 uppercase  text-[#fff] flex'>
                                    Sarga S Nambia
                                    </h5>
                                </div>
                            </div>
                            <div className=' absolute z-20  w-[110px] h-[110px] flex items-center bottom-0 xl:lg:md:left-[-10px]'>
                                <img src='../img/Ellipse 27.png' className=''></img>
                            </div>
                        </div>
                    </div>
                    <div className='d1 ' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <div className='relative flex'>
                            <div className='flex flex-col items-center  ml-[50px] py-3 rounded'>
                                <div className='fridetail px-3 py-3 border-4 border-[#3DC0DF] w-[270px] h-[295px] rounded-xl  shadow ml-[-10px] flex-col pl-3'>
                                    <div className='qimg flex gap-1 mt-[20px] ml-2'>
                                        <img src='../img/qimg.png'></img>
                                    </div>
                                    <div className='ftext ml-2'>
                                        <p className='text-[12px]'>I would like to thank
                                            The TEACHLANCER™ for lending the
                                            platform which gave me the
                                            opportunity to work with leading
                                            EdTechs to improve my skills, build
                                            a new experience and guide me
                                            towards a new path for my future.</p>
                                    </div>
                                </div>
                                <div className='friname pl-[50px] py-3 bg-[#3DC0DF] rounded  w-[280px] h-[80px]  shadow'>
                                    <h5 className='text-[20px] font-semibold mx-5 my-3 uppercase  text-[#fff] flex'>
                                    Prangshu
                                    </h5>
                                </div>
                            </div>
                            <div className=' absolute z-20  w-[110px] h-[110px] flex items-center bottom-0 xl:lg:md:left-[-10px]'>
                                <img src='../img/Ellipse 28.png' className=''></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesFriend