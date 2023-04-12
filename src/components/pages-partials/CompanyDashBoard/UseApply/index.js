import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import NextLink from 'next/link'
import ProfileSide from '../Profile/Index'
import { fetchAllapplyList } from '../../../../store/action/compuny/GetData'
import { internviewLinkGenrate, hiredUser } from "../../../../store/action/compuny/AddData"
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const UserApply = ({ dispatch, res, link, hire }) => {

    const [applydata, setApplydata] = useState([]);


    useEffect(() => {
        const id = localStorage.getItem('jobId')
        dispatch(fetchAllapplyList(id))

    }, [])

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        if (data) {
            setApplydata(data)
        }
    }, [res])

    useEffect(() => {
        const data = hire.data && hire.data.data
    
        if (data && data.code == 200) {
            if (data.code == 200) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
                const idd = localStorage.getItem('jobId')
                dispatch(fetchAllapplyList(idd))

            }

        }
    }, [hire])

    const genrateLinkForInterview = (id) => {
        dispatch(internviewLinkGenrate(id))
        const idd = localStorage.getItem('jobId')
        dispatch(fetchAllapplyList(idd))
    }


    const hirde = (id,data)=>{
        dispatch(hiredUser(id,data))
  
    }
    return (
        <>
            <div className='max-w-8xl  justify-between items-center sm:px-6 sm:py-4 lg:justify-start lg:space-x-10 '>
                <ToastContainer />
                <div className='row flex gap-4'>
                    <ProfileSide />
                    <div className='w-[100%]'>
                        <div className='h-[30vh] bg-gray-50 relative py-40 '>
                            <h1 className=' text-center text-[30px] font-bold capitalize'>Appled User</h1>
                        </div>
                        <div className='grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1  gap-6'>
                            {
                                applydata && applydata.map((val, index) => {
                                    return (
                                        <>
                                            <div className='flex px-4 sm:py-6 mt-6 w-[100%] my-3 border rounded shadow-lg'>
                                                <div className='w-[20%] flex justify-center self-center pr-2 '>
                                                    <img src={val.profile} alt="" className='w-[100px] h-[90px]' />
                                                </div>
                                                <div className='w-[60%] border-l-2 px-5 sm:py-4 py-4'>
                                                    <div className='capitalize  flex w-[100%]' >
                                                        <div className='font-semibold text-[20px] self-center '>{val.first_name}</div>
                                                        <div className='self-center mx-2 '>{val.types == 1 ? <p className='text-[red] capitalize bg-green-200'>Part Time</p> : <p className='text-[green] capitalize bg-green-200 py-1 sm:px-2 rounded'>full Time</p>}
                                                        </div>
                                                    </div>
                                                    <h2 className='text-[18px] text-gray-900 mt-1'>{val.mobile}</h2>
                                                    <p className='text-[14px] mb-4 text-gray-700'>{val.email}</p>
                                                    <div>
                                                        {val.hired_status == 1 && <button className='px-3 py-2 text-gray-600 bg-[#212A41] text-[#ffff] rounded  '>Apply</button>}
                                                        {val.hired_status == 2 && <button className='px-3 py-2 text-gray-600 bg-blue-700 text-[#ffff] rounded  ' onClick={() => dispatch(hiredUser(val.applied_id))}>process</button>}
                                                        {val.hired_status == 3 && <button className='px-3 py-2 text-gray-600 bg-green-600 text-[#ffff] rounded ' onClick={() => dispatch(hiredUser(val.applied_id))}>Hired</button>}
                                                        {val.hired_status == 4 && <button className='px-3 py-2 text-gray-600 bg-green-600 text-[#ffff] rounded ' onClick={() => dispatch(hiredUser(val.applied_id))}>Reject</button>}
                                                    </div>

                                                </div>
                                                <div className='flex self-start justify-items-end w-[20%] sm:py-4 py-4 relative'>
                                                        <div className=' absolute top-3 left-10 z-20 duration-150 ease-in-out shadow-lg border opacity-0 hover:opacity-100 py-2 px-1 bg-[#fff] shadow'>
                                                            <Link href="https://meet.google.com" target="_blank" onClick={() => genrateLinkForInterview(val.applied_id)}>Process</Link><hr></hr>
                                                            <button onClick={()=>hirde(val.applied_id,3)} className="text-start">Hired</button><hr></hr>
                                                            <button onClick={()=>hirde(val.applied_id,4)} className="text-start">Reject</button>
                                                        </div>  <button className='my-2 ml-10 absolute'><MoreVertIcon /></button>
                                                </div>

                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    res: state.fetchAllapplyList,
    link: state.internviewLinkGenrate,
    hire: state.hiredUser
})

export default connect(mapStateToProps)(UserApply)