import React, { useEffect, useState } from 'react'
import ProfileSide from '../Profile/Index'
import { fetchDashboardDataOfUser } from '../../../../store/action/user/GetData';
import { connect } from 'react-redux';
import { FaHireAHelper } from 'react-icons/fa'
import DashBoardTable from '../DashBoardTable';
import InternDashBoardTable from '../InternDashBoardTable';
import { FaDiscourse } from 'react-icons/fa'

const MainCompDashBoard = ({ dispatch, res }) => {

    const [course, setCourse] = useState();
    const [hire, setHire] = useState();

    useEffect(() => {
        dispatch(fetchDashboardDataOfUser())
    }, [])

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        if (data) {
            const courser = data.coursesData
            const hire = data.hiredData
            setCourse(courser);
            setHire(hire);
        }
        console.log("CORSERRRRdTAAAA", course)
    }, [res]);

    return (
        <>
            <div className='max-w-8xl mx-auto justify-between items-center sm:px-6 px-10 sm:px-6 sm:py-4  lg:justify-start lg:space-x-10 '>
                <div className='row flex gap-8'>
                    <ProfileSide />
                    <div className='w-[100%] mt-8 px-5'>
                        <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 '>
                            <div className='flex py-5 justify-between px-10 items-center rounded-lg shadow-xl bg-slate-50 border-t-4 border-[#212A41] ease-in duration-500 hover:scale-105'>
                                <div className='my-4'>
                                    <h2 className='text-[30px] text-start text-[#212A41]'>Your Course</h2>
                                    {/* <p className='text-[#212A41] text-[18px]'>{course && course[0].course_title}</p> */}
                                </div>
                                <div><FaDiscourse className='text-[45px] text-[#212A41]' /></div>
                            </div>
                            <div className='flex  justify-between  py-5 px-10 items-center rounded-lg shadow-xl bg-slate-50 border-t-4 border-[#212A41] ease-in duration-500 hover:scale-105'>
                                <div className='my-4'>
                                    <h2 className='text-[30px] text-start text-[#212A41]'>Hired By</h2>
                                    {/* <p className='text-[#212A41] text-[18px]'>{hire && hire[0].compnay_name}</p> */}
                                </div>
                                <div><FaHireAHelper className='text-[45px] text-[#212A41]' /></div>
                            </div>
                        </div>
                        <div className='my-10 shadow-3xl rounded'>
                            <DashBoardTable />
                        </div>
                        <div className='my-10 shadow-3xl rounded'>
                            <InternDashBoardTable />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    res: state.fetchDashboardDataOfUser
})
export default connect(mapStateToProps)(MainCompDashBoard)
