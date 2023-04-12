import React from 'react'

const LaunchCareer = () => {
    const data = [
        {
            id: "1",
            img: "../img/Saumya 1.png",
            name: "Saumya Gupta",
            role: "SYMB Technologies",
            text: "The DriveSales has trained me to close dynamically in the midmarket space. It is great to get trained by them as they support you to succeed, raises your leadership skills, and puts at your fingertips the  latest technology so you can reach customers  effectively and bring value at every step of the sale. The DriveSalesâ„¢ evolves your professional as well as personal growth too."
        },
        {
            id: "2",
            img: "../img/Monika 1.png",
            name: "Monika Malik",
            role: "LogicalFire",
            text: "Writing this gives me pleasure to share valuable experience working with The DriveSales. The DriveSales holds good knowledge to make sales  work for a company & equipped with well sales strategies. Best part of The DriveSales is to  provide flexible timings with my schedule & helped me to understand the business optimization strategies."
        },
        {
            id: "3",
            img: "../img/Kundan 1.png",
            name: "Kundan Kumar",
            role: "Dramantram",
            text: "The DriveSales has helped us find the right sales talent match in just 24 hours and talent was  well-versed with updates sales skill set. Talent was fresh but was aware of latest technology and market trends that helped our early-stage company to succeed. The DriveSales is my good to go platform for sales talent hiring now."
        },
        {
            id: "4",
            img: "../img/Saumya 1.png",
            name: "Saumya Gupta",
            role: "SYMB Technologies",
            text: "The DriveSales has trained me to close dynamically in the midmarket space. It is great to get trained by them as they support you to succeed, raises your leadership skills, and puts at your fingertips the  latest technology so you can reach customers  effectively and bring value at every step of the sale. The DriveSalesâ„¢ evolves your professional as well as personal growth too."
        },
        {
            id: "5",
            img: "../img/Monika 1.png",
            name: "Monika Malik",
            role: "LogicalFire",
            text: "Writing this gives me pleasure to share valuable experience working with The DriveSales. The DriveSales holds good knowledge to make sales  work for a company & equipped with well sales strategies. Best part of The DriveSales is to  provide flexible timings with my schedule & helped me to understand the business optimization strategies."
        },
        {
            id: "6",
            img: "../img/Kundan 1.png",
            name: "Kundan Kumar",
            role: "Dramantram",
            text: "The DriveSales has helped us find the right sales talent match in just 24 hours and talent was  well-versed with updates sales skill set. Talent was fresh but was aware of latest technology and market trends that helped our early-stage company to succeed. The DriveSales is my good to go platform for sales talent hiring now."
        }
    ]
return (
    <div>
        <div className="max-w-7xl mx-auto justify-between items-center px-4 py-5  sm:py-4 lg:px-8 lg:justify-start ">
            <h1 className='text-center text-[35px] font-semibold'>Thousands Trust TheDriveSales to Launch Their Career</h1>
            <div className='relative'>
                <div className='  md:hidden  '>
                    <img src='../img/quote.png' style={{ height: '60px' }}></img>
                </div>
                <div className='md:grid md:grid-cols-3 xl:gap-5 gap-4 mt-[100px]'>
                    {
                        data.map((val) => {
                            return (
                                <>
                                    <div>
                                        <div className='flex md:justify-start justify-center'>
                                            <div>
                                                <img src={val.img} className='rounded-full border-4 border-[#3DC0DF]'></img>
                                            </div>
                                            <div className='self-end  ml-2'>
                                                <p className='text-[20px] font-semibold  uppercase mb-0'>{val.name}</p>
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
                <div className='absolute xl:top-[-60px] xl:left-[-77px] xl:block hidden '>
                    <img src='../img/quote.png'></img>
                </div>
            </div>
        </div>
    </div>
)
}

export default LaunchCareer