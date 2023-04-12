import React from 'react'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const CourseDetail = () => {
    return (
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5  sm:py-4 lg:px-8 lg:justify-start lg:space-x-10">
            <div className='mainlist grid grid-cols-4'>

                <div className='listdetail bg-[#fff]  shadow-2xl rounded pl-5 py-5 pr-[50px]' >
                    <h5 className='text-[18px] font-semibold pb-2'>Full Stack Web
                        Development - Full Time</h5>
                    <hr className=' pb-3'></hr>
                    <p className='text-[20px] font-medium'>Next Batch</p>
                    <p className='text-[20px] font-medium'>Course Details</p>
                    <p className='text-[20px] font-medium'>Eligibility</p>
                    <p className='text-[20px] font-medium'>What You'll Learn</p>
                    <p className='text-[20px] font-medium'>What You Could Become</p>
                    <p className='text-[20px] font-medium'>Student Testimonials</p>
                    <p className='text-[20px] font-medium'>Fees & ISA</p>
                    <p className='text-[20px] font-medium'>Hiring Partners</p>
                    <p className='text-[20px] font-medium'>Admission Process</p>
                    <p className='text-[20px] font-medium'>FAQS</p>
                    <div className='text-center ml-[20px]'>
                        <button className='bg-[#3DC0DF] text-[#fff] text-[16px] font-semibold px-3 py-2 rounded'>APPLY NOW FOR FREE</button>
                    </div>
                </div>
                <div className='listtime col-span-3 ml-8 mt-10'>
                    <div className='mainbatch flex gap-[50px]'>
                        <div className='b1 flex flex-col float-right'>
                            <p className='text-[20px] font-semibold'>Next Batch</p>
                            <div className='insidebatch flex border border-[#3DC0DF] rounded px-3 justify-between w-[375px] py-3'>
                                <div className='batch1'>
                                    <p className='mb-0 text-[15px] font-medium'>Web 24</p>
                                    <p className='mb-0 text-[10px]'>Starts 14 November 2022</p>
                                </div>
                                <div className='batchbtn'>
                                    <button className='bg-[#3DC0DF] text-[#fff] text-[15px] font-semibold px-3 py-2 rounded'>APPLY NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className='b2 flex flex-col float-left mt-[30px]'>
                            <p className='text-[10px]'>Upcoming Batches</p>
                            <div className='up1 flex justify-between gap-5'>
                                <p className='text-left text-[15px] font-medium mb-0'>Web 25</p>
                                <p className='text-right text-[10px] font-medium mb-0'>Starts 14 November 2022</p>
                            </div>
                            <div className='up1 flex justify-between'>
                                <p className='text-left text-[15px] font-medium'>Web 25</p>
                                <p className='text-right text-[10px] font-medium'>Starts 14 November 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='cdel'>
                        <p className='text-[20px] font-semibold mb-0 mt-8'>Course Details</p>
                        <p className='text-[15px] font-medium mr-[200px]'>In a duration of 30 weeks, the course requires a commitment from 9am to 9pm for 6 days a week in
                            an intensive and immersive curriculum.</p>
                    </div>
                    <div className='timeing flex gap-4'>

                        <div className='week bg-[#3DC0DF] w-[230px] h-[154px] rounded'>
                            <p className='text-center mt-[50%] text-[20px] font-semibold '>30 Weeks(7 Months)</p>
                        </div>
                        <div className='mtos bg-[#3DC0DF]  w-[230px] h-[154px] rounded'>
                            <p className='text-center mt-[35%] text-[20px] font-semibold'>9 am to 9 pm<br></br>
                                Monday to Saturday</p>
                        </div>
                        <div className='placements bg-[#3DC0DF]  w-[230px] h-[154px] rounded'>
                            <p className='text-center mt-[50%] text-[20px] font-semibold'>96% Placements</p>
                        </div>
                    </div>
                    <div className='mt-[30px]'>
                        <p className='text-[20px] font-semibold mb-0'>Minimum Criteria</p>
                        <p className='text-[15px] font-medium'>You should meet the following requirements to be eligible for this course.</p>
                    </div>
                    <div className='needed flex ml-10 gap-10'>
                        <div className='need1 flex flex-col'>
                            <div className='n1 my-2'>
                                <p className='text-[15px] font-medium'>Qualification</p>
                                <p className='text-[10px] font-medium mr-[50px]'>Cleared 12th Standard or are diploma holders,Ready To Take a Job Immediately After Course Finishes</p>
                            </div>
                            <div className='n1 my-2'>
                                <p className='text-[15px] font-medium'>ID</p>
                                <p className='text-[10px] font-medium'>Valid PAN Card and Aadhar Card</p>
                            </div>
                            <div className='n1 my-2'>
                                <p className='text-[15px] font-medium'>Communication Skills</p>
                                <p className='text-[10px] font-medium'>Basic English - speaking, reading and writing</p>
                            </div>
                        </div>
                        <div className='need2'>
                            <div className='n1 my-2'>
                                <p className='text-[15px] font-medium'>Age</p>
                                <p className='text-[10px] font-medium'>Min .18 yrs,
                                    Max. 28 yrs</p>
                            </div>
                            <div className='n1 my-2'>
                                <p className='text-[15px] font-medium'>Hardware</p>
                                <p className='text-[10px] font-medium mr-[200px]'>A laptop, uninterrupted internet connection (Internet
                                    Requirement - Minimum 2GB / 4GB of data per day. Download speed
                                    recommended 20mbps, minimum 10mbps).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail