import React, { useEffect, useState } from 'react'
import ProfileSide from '../Profile/Index';
import { fetchApplyCount } from "../../../../store/action/compuny/GetData"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { MdModelTraining } from 'react-icons/md';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { FaHireAHelper } from 'react-icons/fa'


ChartJS.register(ArcElement, Tooltip, Legend);


const MainCompDashBoard = ({ dispatch, res }) => {

    const [count, setCount] = useState("")


    useEffect(() => {
        dispatch(fetchApplyCount())
    }, [])

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        console.log("data:::", data)
        data && setCount(data)
    }, [res]);

    const data = {
        labels: ['Job', 'JobApplies', 'Internship', 'InternshipApplies', 'Hire'],
        datasets: [
            {
                label: '# of Votes',
                data: [count.jobCount, count.jobAppliesCount, count.internshipCount, count.internshipAppliesCount, count.hiredCount],
                backgroundColor: [
                    '#81cadb',
                    '#b5dde6',
                    '#a6b7e3',
                    '#728ccf',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    '#81cadb',
                    '#b5dde6',
                    '#a6b7e3',
                    '#728ccf',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <div className='max-w-8xl mx-auto justify-between items-center sm:px-12 px-10 sm:px-6 sm:py-4  lg:justify-start lg:space-x-10 '>
                <div className='row flex gap-8'>
                    <ProfileSide />
                    <div className='w-[100%] mt-8'>
                        <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 '>
                            <div className="w-[95%] m-auto  flex justify-between px-4 box-border  py-6 border-t-[6px] border-[#212A41] ease-in duration-500 hover:scale-105 rounded-lg shadow-lg items-center">
                                <div className="inner">
                                    <h3 className='font-bold text-[#212A41] text-[26px]'>{count.jobCount}</h3>
                                    <p className='text-[#212A41] text-[14px] uppercase'>Total Job</p>
                                </div>
                                <div className="icon">
                                    <WorkOutlineIcon className='bg-[#3DC0DF] text-[#fff] text-[48px] p-1 rounded ' />
                                </div>
                            </div>
                            <div className="w-[95%] m-auto  flex justify-between px-4 box-border  py-6 border-t-[6px] border-[#212A41] ease-in duration-500 hover:scale-105 rounded-lg shadow-lg items-center">
                                <div className="inner">
                                    <h3 className='font-bold text-[#212A41] text-[26px]'>{count.internshipCount}</h3>
                                    <p className='text-[#212A41] text-[14px] uppercase'>Total Internship</p>
                                </div>
                                <div className="icon">
                                    <MdModelTraining className='bg-[#3DC0DF] text-[#fff] text-[48px] p-1 rounded ' />
                                </div>
                            </div>
                            <div className="w-[95%] m-auto flex justify-between box-border px-4 py-6 border-t-[6px] border-[#212A41]  ease-in duration-500 hover:scale-105 rounded-lg shadow-lg items-center">
                                <div className="inner">
                                    <h3 className='font-bold text-[#212A41] text-[26px]'>{count.hiredCount}</h3>
                                    <p className='text-[#212A41] text-[14px] uppercase'>Total Hired</p>
                                </div>
                                <div className="icon">
                                    <FaHireAHelper className='bg-[#3DC0DF] text-[#fff] text-[48px] p-1 rounded ' />
                                </div>
                            </div>
                        </div>
                        <div className='chartpart flex justify-center my-[50px]'>
                            <Pie data={data} className='h-[120px]' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const mapStateToProps = (state) => ({
    res: state.fetchApplyCount
})

export default connect(mapStateToProps)(MainCompDashBoard)
