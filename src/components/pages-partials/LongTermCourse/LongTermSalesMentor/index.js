import React from 'react'

const LongTermSalesMentor = (props) => {
    return (
        <div>
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5  sm:py-4 lg:px-8 lg:justify-start lg:space-x-10">
                <div className='grid grid-cols-3 mt-[50px]'>
                    <div className='mentortextpart lg:md:col-span-2 flex flex-col gap-2 sm:col-span-3 sm:justify-center'>
                        <div className='mentorlogo flex'>
                            <img src='../img/mentorlogo.png' className='w-[73px] h-[113px]'></img>
                        </div>
                        <div className='mtit '>
                            <h1 className='xl:lg:text-[50px] md:text-[40px] sm:text-[37px] text-[32px] font-semibold '>{props.title}</h1>
                        </div>
                        <div className='mentorpra pb-[50px]'>
                            <p className='xl:lg:text-[22px] md:[17px] sm:text-[17px] mr-[30px]'>{props.secondtit}</p>
                        </div>
                       
                        <div className='enroll flex'>
                            <button className='text-[15px] font-semibold py-2 px-3'>ENROL NOW</button>
                        </div>
                    </div>
                    <div className='mentorimg  flex lg:md:col-span-1 sm:col-span-3 sm:place-content-center'>
                        <img src={props.img} alt='chirag sharma' className='self-center'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LongTermSalesMentor