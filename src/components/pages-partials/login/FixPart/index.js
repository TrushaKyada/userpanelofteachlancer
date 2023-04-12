import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const FixPart = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='bg-[#202040] pb-[150px]'>
            <div className='signblue pt-[40px]'>
                <h1 className='text-center text-[30px] font-semibold text-[#fff] pb-[20px] mt-[40px]' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Hire Top and Verified Sales Talent</h1>
                <div className='four flex justify-center pb-[70px]'>
                    <div className='four2 grid gap-4 grid-cols-2 justify-center'>
                        <div className='bg-[#3DC0DF] flex flex-col  items-center py-5 px-[50px] rounded' data-aos="fade-down-right" data-aos-easing="linear" data-aos-duration="1000">
                            <img src="../img/Asset 32 1.png" className='w-[60px] h-[71px]'></img>
                            <h4 className='text-[#fff] font-semibold text-[38px]'>500+</h4>
                            <p className='text-center uppercase text-[#fff]'>Sales Talents</p>
                        </div>
                        <div className='bg-[#3DC0DF] flex flex-col items-center py-5 rounded' data-aos="fade-down-left" data-aos-easing="linear" data-aos-duration="1000">
                            <img src="../img/Asset 30 1.png" className='w-[60px] h-[71px]'></img>
                            <h4 className='text-[#fff] font-semibold text-[38px]'>100+</h4>
                            <p className='text-center uppercase text-[#fff]'>Sales Skills</p>
                        </div>
                        <div className='bg-[#3DC0DF] flex flex-col items-center py-3 rounded' data-aos="fade-up-right" data-aos-easing="linear" data-aos-duration="1000">
                            <img src="../img/Asset 28 1.png" className='w-[60px] h-[71px]'></img>
                            <h4 className='text-[#fff] font-semibold text-[38px]'>100%</h4>
                            <p className='text-center uppercase text-[#fff]'>Verified Sales <br></br> Talents</p>
                        </div>
                        <div className='bg-[#3DC0DF] flex flex-col items-center py-3 rounded' data-aos="fade-up-left" data-aos-easing="linear" data-aos-duration="1000">
                            <img src="../img/Asset 38 1.png" className='w-[60px] h-[71px]'></img>
                            <h4 className='text-[#fff] font-semibold text-[38px]'>25+</h4>
                            <p className='text-center uppercase text-[#fff]'>Companies <br></br> Onboarded</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-center text-[30px] font-semibold text-[#fff]' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Trusted Partners</h1>
            <div className='mainpartner flex  justify-center' data-aos="flip-left"  data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div className='sign_partner gap-5   flex flex-col items-center rounded p-5' >
                    <div className='uppart grid gap-5 grid-cols-3 justify-center'>
                        <div className='sp1'>
                            <img src='../img/par1.png' alt='' className='w-[82px] h-[82px]' />
                        </div>
                        <div className='sp1'>
                            <img src='../img/chai.png' alt='' className='w-[79px] h-[75px]'></img>
                        </div>
                        <div className='sp1'>
                            <img src='../img/Group 19.png' alt='' className='w-[93px] h-[80px]'></img>
                        </div>
                    </div>
                    <div className='downpart grid gap-5 grid-cols-4 justify-center'>
                        <div className='sp1'>
                            <img src='../img/skill.png' alt='' className='w-[106px] h-[30px] self-center mt-[30px]' />
                        </div>
                        <div className='sp1'>
                            <img src='../img/logic.png' alt='' className='w-[119px] h-[63px] self-center mt-[15px]'></img>
                        </div>
                        <div className='sp1'>
                            <img src='../img/doller.png' alt='' className='w-[80px] h-[80px]'></img>
                        </div><div className='sp1'>
                            <img src='../img/symb 1.png' alt='' className='w-[90px] h-[85px]'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FixPart