import React from 'react'

const Friend = () => {
    return (
        <>
            <div className='max-w-6xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10 mt-[20px]'>
                <div>
                    <h1 className='font-semibold text-[35px] text-center mb-[50px]'>What your friend's have to say!</h1>
                </div>
                <div className='relative'>
                <div className='  md:hidden  '>
                <img src='../img/quote.png' style={{height: '60px'}}></img>
                </div>
                <div className='md:grid md:grid-cols-3 xl:gap-5 gap-4 mt-[20px]'>
                    <div>
                        <div className='flex md:justify-start justify-center'>
                            <div>
                                <img src='../img/Sarga 1.png' className='rounded-full border-4 border-[#3DC0DF]'></img>
                            </div>
                            <div className='self-end  ml-2'>
                                <p className='text-[20px] font-semibold uppercase'>Sarga S Nambia</p>
                                <p className='text-[15px]'>MBA (Manipal)</p>
                            </div>
                        </div>
                        <div className='mt-[20px]  mb-[20px] w-[100%] md:block' >
                            <div className='border-l-[9px] border-[#3DC0DF] pl-3 text-[15px]  md:w-[100%] w-[70%] flex flex-col m-auto'>
                            <p className=''>I express my immense gratitude to The TEACHLANCER™,
                                team for connecting with me to my first job.
                                TEACHLANCER™ is like a genie, who has fulfilled my wish
                                to work to work in my dream industry.
                                The passion, dedication, and the drive to fulfil the
                                dreams of MBA students and sales aspirants is
                                highly commendable. I wish all the success to the
                                team and keep fulling the dreams of many more.
                            </p>
                            <p className='text-[15px] mt-[10px]'> Thank you, The TEACHLANCER™!</p>
                            </div>
                          
                        </div>

                    </div>
                    <div>
                        <div className='flex md:justify-start justify-center'>
                            <div>
                                <img src='../img/Anish 1.png' className='rounded-full border-4 border-[#3DC0DF]'></img>
                            </div>
                            <div className='self-end  ml-2'>
                                <p className='text-[20px] font-semibold tracking-widest uppercase'>Anish B</p>
                                <p className='text-[15px]'>Working Sales Professional</p>
                            </div>
                        </div>
                        <div className='mt-[20px]  mb-[20px] w-[100%] md:block' >
                            <div className='border-l-[9px] border-[#3DC0DF] pl-3 text-[15px]  md:w-[100%] w-[70%] flex flex-col m-auto'>
                            <p className=''>Through, The TEACHLANCER™ I got placed, I am very
                                much satisfied with the process and I would like
                                to thank them for providing the platform. I wish
                                them All The Best!
                            </p>
                            </div>
                          
                        </div>
                    

                    </div>
                    <div>
                        <div className='flex md:justify-start justify-center'>
                            <div>
                                <img src='../img/Prangshu 1.png' className='rounded-full border-4 border-[#3DC0DF] '></img>
                            </div>
                            <div className='self-end  ml-2'>
                                <p className='text-[20px] font-semibold tracking-widest uppercase'>prangshu</p>
                                <p className='text-[15px]'>Working Sales Professional</p>
                            </div>
                        </div>
                        <div className='mt-[20px]  mb-[20px] w-[100%] md:block' >
                            <div className='border-l-[9px] border-[#3DC0DF] pl-3 text-[15px]  md:w-[100%] w-[70%] flex flex-col m-auto'>
                            <p className=''>I thank The TEACHLANCER™ for lending the
                                platform which lead to an opportunity to
                                work one of the leading EdTech to enhance
                                my skills, build a new experience and drive
                                me to a new path of my future.
                            </p>
                            </div>
                          
                        </div>
                      
                    </div>
                </div>
                <div className='absolute xl:top-[-50px] xl:left-[-77px] xl:block hidden '>
                <img src='../img/quote.png'></img>
                </div>
                </div>
                
            </div>
        </>
        // <div>
        //     <div className="mx-auto max-w-7xl lg:px-8">
        //         <div className='bg-[#fff]'>
        //             <h1 className='text-center text-[35px] py-5'>What your friend's have to say!</h1>
        //             <div className="mainfrd flex">
        //                 <div className='f1 lg:block md:hidden sm:hidden lg:p-0 lg:m-0'>
        //                     <img src='../img/quote.png' className='w-[250px] h-[100px]'></img>
        //                 </div>
        //                 <div className="mt-6 grid grid-cols-3 py-3 gap-5 justify-center imgs">
        //                     <div className="f2 col-span-1 flex justify-center md:col-span-3 lg:col-span-3 sm:col-span-3 lg:flex-row md:flex-row sm:flex-col sm:mx-[60px]">
        //                         <div className='insidefrd flex flex-col'>
        //                             <div className='profile flex gap-3'>
        //                                 <img src='../img/Sarga 1.png' className='rounded-full border-4 border-[#3DC0DF] img-fluid'></img>
        //                                 <div className='ptext my-auto'>
        //                                     <h5 className='text-[20px] font-bold'>Sarga S Nambia</h5>
        //                                     <p className='text-[15px]'>MBA (Manipal)</p>
        //                                 </div>
        //                             </div>
        //                             <div className='pdes flex gap-2'>
        //                                 <div className='line h-[100%] w-[5%] bg-[#3DC0DF]'></div>
        //                                 <div className='description'>
        //                                     <p className='text-[12px] md:mr-[80px] sm:mr-[40px]'>
        //                                         Through, The TEACHLANCER™ I got placed, I am very
        //                                         much satisfied with the process and I would like
        //                                         to thank them for providing the platform. I wish
        //                                         them All The Best!
        //                                     </p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className='insidefrd flex flex-col'>
        //                             <div className='profile flex gap-3'>
        //                                 <img src='../img/Anish 1.png' className='rounded-full border-4 border-[#3DC0DF] img-fluid'></img>
        //                                 <div className='ptext my-auto'>
        //                                     <h5 className='text-[20px] font-bold'>Anish B</h5>
        //                                     <p className='text-[15px]'>Working Sales Professional</p>
        //                                 </div>
        //                             </div>
        //                             <div className='pdes flex gap-2'>
        //                                 <div className='line h-[100%] w-[5%] bg-[#3DC0DF]'></div>
        //                                 <div className='description'>
        //                                     <p className='text-[12px] md:mr-[80px] sm:mr-[40px]'>
        //                                         Through, The TEACHLANCER™ I got placed, I am very
        //                                         much satisfied with the process and I would like
        //                                         to thank them for providing the platform. I wish
        //                                         them All The Best!
        //                                     </p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className='insidefrd flex flex-col'>
        //                             <div className='profile flex gap-3'>
        //                                 <img src='../img/Prangshu 1.png' className='rounded-full border-4 border-[#3DC0DF] img-fluid'></img>
        //                                 <div className='ptext my-auto'>
        //                                     <h5 className='text-[20px] font-bold'>prangshu</h5>
        //                                     <p className='text-[15px]'>Working Sales Professional</p>
        //                                 </div>
        //                             </div>
        //                             <div className='pdes flex gap-2'>
        //                                 <div className='line h-[100%] w-[5%] bg-[#3DC0DF]'></div>
        //                                 <div className='description'>
        //                                     <p className='text-[12px] md:mr-[80px] sm:mr-[40px]'>
        //                                         I thank The TEACHLANCER™ for lending the
        //                                         platform which lead to an opportunity to
        //                                         work one of the leading EdTech to enhance
        //                                         my skills, build a new experience and drive
        //                                         me to a new path of my future.
        //                                     </p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className='getstarted flex justify-center'>
        //                 <button className='bg-[#3DC0DF] text-[#fff] uppercase px-3 py-2 my-3 rounded'>getstarted</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Friend