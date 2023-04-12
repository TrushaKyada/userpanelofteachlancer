import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ClientSay = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    const data = [
        {
            id: "1",
            img: "../img/Saumya 1.png",
            name: "Saumya Gupta",
            role: "SYMB Technologies",
            text: "The TEACHLANCER has trained me to close dynamically in the midmarket space. It is great to get trained by them as they support you to succeed, raises your leadership skills, and puts at your fingertips the  latest technology so you can reach customers  effectively and bring value at every step of the sale. The TEACHLANCERâ„¢ evolves your professional as well as personal growth too."
        },
        {
            id: "2",
            img: "../img/Monika 1.png",
            name: "Monika Malik",
            role: "LogicalFire",
            text: "Writing this gives me pleasure to share valuable experience working with The TEACHLANCER. The TEACHLANCER holds good knowledge to make sales  work for a company & equipped with well sales strategies. Best part of The TEACHLANCER is to  provide flexible timings with my schedule & helped me to understand the business optimization strategies."
        },
        {
            id: "3",
            img: "../img/Kundan 1.png",
            name: "Kundan Kumar",
            role: "Dramantram",
            text: "The TEACHLANCER has helped us find the right sales talent match in just 24 hours and talent was  well-versed with updates sales skill set. Talent was fresh but was aware of latest technology and market trends that helped our early-stage company to succeed. The TEACHLANCER is my good to go platform for sales talent hiring now."
        },
        // {
        //     id: "4",
        //     img: "../img/Saumya 1.png",
        //     name: "Saumya Gupta",
        //     role: "SYMB Technologies",
        //     text: "The TEACHLANCER has trained me to close dynamically in the midmarket space. It is great to get trained by them as they support you to succeed, raises your leadership skills, and puts at your fingertips the  latest technology so you can reach customers  effectively and bring value at every step of the sale. The TEACHLANCERâ„¢ evolves your professional as well as personal growth too."
        // },
    ]
    return (
        <div>
            <div className='max-w-6xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10 mt-[20px]'>
                <div>
                    <h1 className='font-semibold text-[35px] text-center mb-[50px] mt-[30px]' data-aos="fade-down" data-aos-duration="3000">What Clients Say About Us</h1>
                </div>
                <div className='relative'>
                    <div className='  md:hidden  '>
                        <img src='../img/quote.png' style={{ height: '60px' }}></img>
                    </div>
                    <div className='md:grid md:grid-cols-3 xl:gap-5 gap-4 mt-[20px]'>
                        {
                            data.map((val) => {
                                return (
                                    <>
                                        <div data-aos="zoom-in" data-aos-duration="2000">
                                            <div className='flex md:justify-start justify-center'>
                                                <div>
                                                    <img src={val.img} className='rounded-full border-4 border-[#3DC0DF]'></img>
                                                </div>
                                                <div className='self-end  ml-2'>
                                                    <p className='text-[20px] font-semibold  uppercase'>{val.name}</p>
                                                    <p className='text-[15px]'>{val.role}</p>
                                                </div>
                                            </div>
                                            <div className='mt-[20px]  mb-[20px] w-[100%] md:block' >
                                                <div className='border-l-[9px] border-[#3DC0DF] pl-3 text-[15px]  md:w-[100%] w-[70%] flex flex-col m-auto'>
                                                    <p className=''>{val.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className='absolute xl:top-[-50px] xl:left-[-77px] xl:block hidden '>
                        <img src='../img/quote.png'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientSay