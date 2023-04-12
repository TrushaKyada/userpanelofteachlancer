import React, { useEffect, useState } from 'react'
import { fetchApplyJobData } from '../../../../store/action/user/GetData'
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from '../Profile/Index'

const StudDashboard = ({ dispatch, res }) => {
    const [data, setData] = useState("");


    useEffect(() => {
        dispatch(fetchApplyJobData())
    }, [])

    useEffect(() => {
        const data = res.data.data && res.data.data.data
       
        data && setData(data)
    }, [res])



    return (
        <div>
            <ToastContainer />
            <div className='max-w-8xl  mx-auto justify-between items-center px-4 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 '>
                <div className='row flex gap-5'>
                    <Profile />
                    <div className='sm:px-6 px-2 w-[100%]'>
                        <div className='h-[30vh] bg-gray-50 relative py-40 '>
                            <h1 className=' text-center text-[30px] font-bold capitalize'>YOU APPLYED FOR THIS JOBS</h1>
                        </div>
                        <div className=' grid grid-cols-2 gap-6'>
                            {
                                data ? data.map((val, key) => {
                                    return <>
                                        <div className='flex sm:px-10 px-4 py-4 mt-6 justify-between border-b-2 my-3  bg-gray-50 shadow-xl border'>
                                            <div className=''>
                                                <h2 className='text-[24px] font-bold text-gray-900'>{val.company_name}</h2>
                                                <p className='text-[16px] mb-2 text-gray-700'>{val.company_city}</p>

                                                <div className='flex gap-2'>
                                                <p className='text-[18px] mb-2'>{val.position}</p>
                                               {val.types == 1 ? <p className='text-[red] capitalize bg-green-200'>Part Time</p> : <p className='text-[green] capitalize bg-green-200 py-1 px-2 rounded'>full Time</p>}
                                                </div>
                                                
                                            </div>
                                            <div className='self-start'>
                                                {
                                                    val.status == 1 && <button className='px-3 py-2 text-gray-600 bg-slate-600 text-[#ffff] rounded'>Apply</button>
                                                }
                                                {
                                                    val.status == 2 && <button className='px-3 py-2 text-gray-600 bg-blue-600 text-[#ffff] rounded'>process</button>
                                                }
                                                {
                                                    val.status == 3 && <button className='px-3 py-2 text-gray-600 bg-green-600 text-[#ffff] rounded'>success</button>
                                                }
                                                 {
                                                    val.status == 4 && <button className='px-3 py-2 text-gray-600 bg-red-600 text-[#ffff] rounded'>success</button>
                                                }

                                            </div>
                                        </div></>
                                }) : <div className='text-center col-span-2 py-20' > 
                                        <h1 className='capitalize text-[30px]'>You are not applyed in any job</h1>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    res: state.fetchApplyJobData,

})
export default connect(mapStateToProps)(StudDashboard)
