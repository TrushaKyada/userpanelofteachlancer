import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { jobPrefrenceView, jobViewByLocation, jobViewByTechnology, jobViewByposition } from '../../../../store/action/compuny/GetData'
import { applyJob } from '../../../../store/action/user/AddData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ViewJob = ({ dispatch, res, searchres, searchtech, searchposi, apply }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        dispatch(jobPrefrenceView())
    }, [])

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        data && setData(data);
    }, [res])

    const handlelocation = (e) => {
        dispatch(jobViewByLocation({ [e.target.name]: e.target.value }))
    }

    const handleTech = (e) => {
        dispatch(jobViewByTechnology({ [e.target.name]: e.target.value }))
    }
    const handlePosition = (e) => {
        dispatch(jobViewByposition({ [e.target.name]: e.target.value }))
    }


    useEffect(() => {
        const data = searchres.data && searchres.data.data && searchres.data.data.data
        data && setData(data)
    }, [searchres])


    useEffect(() => {
        const data = searchtech.data && searchtech.data.data && searchtech.data.data.data
        data && setData(data)
    }, [searchtech])

    useEffect(() => {
        const data = searchposi.data && searchposi.data.data && searchposi.data.data.data
        data && setData(data)
    }, [searchposi])


    const ApplyJob = (id) => {
        dispatch(applyJob(id))
    }
    useEffect(()=>{
        const data= apply.data && apply.data.data 
        if(data)
        {
            if (data.code == 201) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
            }
            if (data.code == 401) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
            }
            if (data.code == 403) {
                toast.warning("YOU DON'T HAVE ACCESS WITHOUT LOGIN ", {
                    position: toast.POSITION.TOP_CENTER,

                });
                setTimeout(()=>{
                    window.location="/student-login"
                },1500)
            }   
            if (data.code == 500) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
            }
        }
      },[apply])

    return (
        <div className=''>
            <ToastContainer/>
            <div className='h-[30vh] bg-gray-50 relative py-40'>
                <h1 className=' text-center text-[30px] font-bold '>VIEW ALL JOB</h1>
            </div>

            <div className='xl:px-60 md:px-30 px-10'>
                <div className='grid grid-cols-3  justify-end py-3 gap-2'>
                    <input type='text' placeholder='search by city here...' className='rounded-lg py-2' name='location' onChange={handlelocation} ></input>
                    <input type='text' placeholder='search by position here' className='rounded-lg py-2' name='position' onChange={handlePosition} ></input>
                    <input type='text' placeholder='search by technology here...' className='rounded-lg py-2' name='technology' onChange={handleTech} ></input>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                    {
                        data.map((val, index) => {
                            return <>
                                <div className=' flex justify-between my-6 px-8 rounded-xl shadow-lg py-6'>
                                    <div className='capitalize'>
                                        <p className='text-[24px] text-gray-900 font-bold'>{val.company_name}</p>
                                        <p className='text-[18px] text-gray-600 pb-4'>{val.position}</p>
                                        <p>starting Salary : <span className='font-bold'>{val.salary}</span></p>
                                        <p>technology :<spna className="font-bold">{val.technology}</spna></p>
                                        <p className='mb-2 h-[100px] my-3 text-ellipsis overflow-hidden'>{val.description}</p>
                                        <div>
                                            {
                                                val.active == '1' && <button className='bg-blue-700 text-[#fff] px-3 py-2 mt-3 rounded' onClick={(e) => ApplyJob(val._id)}>Apply</button>
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        {
                                            val.active == '1' ?
                                                <button className='bg-green-500 px-3 py-1 mx-5 border-2  border-transparent  rounded text-[#fff] hover:bg-[#fff] hover:border-2 hover:border-green-500 hover:text-green-500'>
                                                    Active
                                                </button> : <button className='bg-red-500 px-3 py-1 mx-5 border-2  border-transparent  rounded text-[#fff] hover:bg-[#fff] hover:border-2 hover:border-red-500 hover:text-red-500'>
                                                    Unative
                                                </button>
                                        }
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    res: state.jobPrefrenceView,
    searchres: state.jobViewByLocation,
    searchtech: state.jobViewByTechnology,
    searchposi: state.jobViewByposition,
    apply: state.applyJob
})
export default connect(mapStateToProps)(ViewJob)