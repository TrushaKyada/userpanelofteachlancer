import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchtCourseDetail } from '../../../../store/action/Comman/getdata'

const SalesMentor = ({ dispatch, res }) => {

    const [data, setData] = useState("");
    const [skills, SetSkills] = useState("");
    const [criteria, setCriteria] = useState("");

    useEffect(() => {
        const id = localStorage.getItem('courseId')
        dispatch(fetchtCourseDetail(id))
    }, [])

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        data && setCriteria(data.criteria[0])
        data && SetSkills(data.skill)
        data && setData(data)

    }, [res])




    return (
        <div>

            <div className='max-w-7xl mx-auto  px-4 py-5  sm:py-4 lg:px-8 lg:justify-start lg:space-x-10'>
                <div className='grid lg:grid-cols-3 grid-cols-1'>
                    <div className='lg:col-span-2  place-content-center'>
                        <div className=''>
                            <div className='mentorlogo flex'>
                                <img src='/img/mentorlogo.png' className='w-[70px] h-[113px]'></img>
                            </div>
                            <div className='mtit '>
                                <h1 className='xl:lg:text-[45px] md:text-[40px] sm:text-[37px] text-[32px] font-semibold uppercase '>{data.title}</h1>
                            </div>
                            <div className='mentorpra '>
                                <p className='text-[18px] capitalize'>{data.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={data.teacher_profile} className=' w-[70%] h-[75%] rounded-lg'></img>
                        <p className='text-[24px] capitalize'>{data.teacher_name}</p>
                    </div>
                </div>
            </div>
            <div className='master'>
                <h1 className='text-center text-[35px] font-semibold'>What will you Master in the Program?</h1>
                <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 mt-[20px]'>

                    <div className="flex flex-wrap gap-4 justify-center w-[100%]">
                        {
                            skills && skills.map((val) => {
                                return (
                                    <>
                                        <div className='programlist xl:w-[30%] md:w-[40%] sm:w-[50%] w-[90%]  my-[15px] flex justify-center items-center gap-3 py-3'>
                                            <p className='px-1 py-3 text-center text-[18px] '>{val}</p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>

                </div>
                <div className='max-w-7xl mx-auto justify-between items-center px-4  sm:px-6  lg:px-4 lg:justify-start lg:space-x-10'>
                    <div className='getcurri  pr-[50px] sm:mt-40 mt-80 px-10 sm:py-10 pt-40'>
                        <h1 className='text-[35px] font-semibold text-center'>Minimum Criteria</h1>
                        <p className='text-center'>You should meet the following requirements to be eligible for this course.</p>
                        <div className='grid md:grid-cols-3 sm:grid-cols-2 my-10 gap-6 capitalize'>
                            <div >
                                <h2 className='text-[20px] font-semibold'>Qualification</h2>
                                <p className=''>{criteria.qualification} Ready To Take a Job Immediately After Course Finishes</p>
                            </div>
                            <div>
                                <h2 className='text-[20px] font-semibold'>Age</h2>
                                <p>{criteria.age} Year</p>
                            </div>
                            <div>
                                <h2 className='text-[20px] font-semibold'>ID</h2>
                                <p>Valid {criteria.id_proof}</p>
                            </div>
                            <div>
                                <h2 className='text-[20px] font-semibold'>Hardware</h2>
                                <p>{criteria.hardware}</p>
                            </div>
                            <div>
                                <h2 className='text-[20px] font-semibold'>Communication Skills</h2>
                                <p>{criteria.communication}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


const mapStateToProps = (state) => ({
    res: state.fetchtCourseDetail
})
export default connect(mapStateToProps)(SalesMentor)



