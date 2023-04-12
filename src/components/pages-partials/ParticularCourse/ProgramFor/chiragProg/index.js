import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchtCourseDetail } from '../../../../../store/action/Comman/getdata'

const ProgramFor = ({ dispatch, res }) => {

    const [data, setData] = useState("");

    useEffect(() => {
        const id = localStorage.getItem('courseId')
        dispatch(fetchtCourseDetail(id))
    }, [])

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        data && setData(data.candidate)


    }, [res])
   
    return (
        <>
            <h1 className='text-center text-[40px] font-semibold'>
                Who is this program for?
            </h1>
            <div className='max-w-7xl mx-auto px-4 sm:px-6  lg:px-4 lg:justify-center lg:space-x-10'>
                <div className='flex flex-wrap gap-4 justify-center w-[100%]'>
                    {
                        data && data[0].split(",").map((val, key) => {
                            return (
                                <div className="programlist xl:w-[30%] md:w-[40%] sm:w-[50%] w-[90%]  my-[15px] flex justify-center items-center gap-3 py-3 ">
                                    <img src='/img/Group 54.png' className='w-[24px] h-[24px] '></img>
                                    <p className='px-1 py-2  text-[20px] font-medium text-center'>{val}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    res: state.fetchtCourseDetail
})
export default connect(mapStateToProps)(ProgramFor)


