import React from 'react'

const Learn = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto  justify-between items-center px-4 py-5  sm:py-4 lg:px-8 lg:justify-start lg:space-x-10">
                <p className='text-[35px] font-semibold'>What you'll learn</p>
                <div className='mainflex flex xl:lg:gap-[100px] md:[80px] sm:[60px]'>
                    <div className='learn1'>
                        <div className='w1 flex flex-col py-2'>
                            <p className='mb-0 text-[20px]'>Week 1-5</p>
                            <p className='text-[18px]'>Programming Basics in JavaScript, Developer tools and workflow,
                                Introduction to Web, JavaScript on the browser,
                                Data Structures and Algorithms</p>
                        </div>
                        <div className='w1 flex flex-col  py-2'>
                            <p className='mb-0 text-[20px]'>Week 11-15</p>
                            <p className='text-[18px]'>UI Libraries, Reusable Components, Routing and Advanced APIs,
                                Deployment, Unit Testing, and end to end testing,
                                Redux and Hooks, Data Structures and Algorithms</p>
                        </div>
                        <div className='w1 flex flex-col  py-2'>
                            <p className='mb-0 text-[20px]'>Week 21-25</p>
                            <p className='text-[18px]'>System design basics, How do they scale?
                                All about operating systems, Data Structures and Algorithms
                            </p>
                        </div>
                    </div>
                    <div className='learn1 ml-10 float-right'>
                        <div className='w1 flex flex-col  py-2'>
                            <p className='mb-0 text-[20px]'>Week 6-10</p>
                            <p className='text-[18px]'>Modern Javascript, Basics of Unit Testing, Advanced CSS,
                                Introduction to React and React Ecosystem,
                                Data Structures and Algorithms</p>
                        </div>
                        <div className='w1 flex flex-col  py-2'>
                            <p className='mb-0 text-[20px]'>Week 16-20</p>
                            <p className='text-[18px]'>Node.js and Express.js, Microservices, MongoDB,
                                Data Structures and Algorithms</p>
                        </div>
                        <div className='w1 flex flex-col  py-2'>
                            <p className='mb-0 text-[20px]'>Week 26-30</p>
                            <p className='text-[18px]'>Projects, Interview Preparation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Learn