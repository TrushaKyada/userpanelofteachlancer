import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Partners = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='max-w-7xl mx-auto justify-between items-center px-4 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 '>
            <div className=" py-5 px-4  sm:px-6 lg:px-8 ">
                <h1 className='text-[35px] font-semibold' data-aos="fade-down" data-aos-duration="2000">Most Trusted Partners</h1>
                <div className=" mt-6 grid grid-cols-6 py-3 gap-3 justify-center imgs bg-[#3DC0DF] rounded" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 sm:col-span-2">
                        <img
                            className="h-[96px] self-center w-[96px] img-fluid xl:lg:mr-[40px]"
                            src="../img/par1.png"
                            alt="Tuple"
                        />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 sm:col-span-2">
                        <img
                            className="h-[95px] self-center w-[99px] img-fluid xl:lg:md:mr-[100px]"
                            src="../img/chai.png"
                            alt="StaticKit"
                        />
                    </div>
                    <div className="pad col-span-1 flex justify-center md:col-span-2 lg:col-span-1 sm:col-span-2">
                        <img
                            className="h-[50px] self-center w-[215px] img-fluid xl:lg:md:mr-[80px]"
                            src="../img/skill.png"
                            alt="Mirage"
                        />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2  lg:col-span-1 sm:col-span-2">
                        <img
                            className="h-[90px] self-center w-[173px] img-fluid"
                            src="../img/logic.png"
                            alt="Transistor"
                        />
                    </div>
                    <div className="col-span-1 self-center flex justify-center md:col-span-2  lg:col-span-1 sm:col-span-2">
                        <img
                            className="h-[86px] w-[86px] img-fluid xl:lg:md:ml-[50px]"
                            src="../img/doller.png"
                            alt="Workcation"
                        />
                    </div>
                    <div className="col-span-1 flex self-center justify-center md:col-span-2  lg:col-span-1 sm:col-span-2">
                        <img
                            className="h-[100px] w-[95px] img-fluid"
                            src="../img/symb 1.png"
                            alt="Transistor"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners