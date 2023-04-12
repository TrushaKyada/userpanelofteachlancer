import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import NextLink from 'next/link'
import { jobPrefrenceViewByCompany, jobPrefrenceViewById } from '../../../../store/action/compuny/GetData'
import {delatejobs} from "../../../../store/action/compuny/deleteData";
import ProfileSide from '../Profile/Index'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    boxShadow: 24,
    border:"none"

};

const ViewJob = ({ dispatch, res, resdata,delete:del}) => {

    const [data, setData] = useState([])
    const [dropdown, setdropdown] = useState(0)
    const [open, setOpen] = useState(false);
    const [deletebox, setDeleteBox] = useState(false);
    const [job, setJob] = useState([]);
    const [id,setId] = useState("");

    const handleOpen = (id) => {
        dispatch(jobPrefrenceViewById(id))
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handledeletOpen = (id) => {
        setId(id)
        setDeleteBox(true);
    };

    const handledeletClose = () => {
        setDeleteBox(false);
    }

    useEffect(() => {
        dispatch(jobPrefrenceViewByCompany())
    }, [])

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        data && setData(data);

    }, [res])

    useEffect(() => {
        const data = resdata.data && resdata.data.data && resdata.data.data.data
        data && setJob(data);
    }, [resdata])

    useEffect(()=>{
     const data = del.data && del.data.data 
     if(data){
        if (data.code === 200) {
            toast.success(data.message, {
                position: toast.POSITION.TOP_CENTER,

            });
            setTimeout(()=>{
                window.location="job-view"
            },1500)
        }
     }
    },[del])

    
    return (
        <div>
            <ToastContainer/>
            <div className='max-w-8xl justify-between items-center sm:px-12 sm:py-4 lg:justify-start lg:space-x-10 '>
                <div className='row flex gap-4'>
                    <ProfileSide />
                    <div className='w-[100%] '>
                        <div className='h-[30vh] bg-gray-50 relative py-40 '>
                            <h1 className=' text-center text-[30px] font-bold '>VIEW ALL JOB</h1>
                        </div>
                        <div className='grid xl:grid-cols-2 grid-cols-1 gap-8'>
                            {
                                data.map((val, index) => {
                                    return <>
                                        <div className='grid grid-cols-4 place-content-between transform transition duration-500 hover:scale-105 my-6 px-8 shadow-2xl py-6'>
                                            <div className='col-span-3 justify-items-center '>
                                                <div className='flex '>
                                                    <div>
                                                        <p className='text-[24px] font-bold '>{val.company_name}</p>
                                                        <p className='text-[18px] text-gray-600 '>{val.position}</p>

                                                    </div>
                                                    <div>
                                                    </div>
                                                </div>
                                                <div className='flex gap-2 mt-2'>
                                                    <div className=' bg-green-200 text-[18px] py-1 px-2 rounded text-green-800 mb-2'>
                                                        {val.type = '1' ? <span>In-Office</span> : <span>Remote</span>}
                                                    </div>
                                                    <div className=' bg-green-200 text-[18px] py-1 px-2 rounded text-green-800 mb-2'>
                                                        <span><CurrencyRupeeIcon className='mx-1' />{val.salary}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className='font-bold'>Vacancy :</span> <span>{val.vacancy}</span>
                                                </div>
                                                <div>
                                                    <span className='font-bold'>Description :</span> <span>{val.description}</span>
                                                </div>
                                            </div>
                                            <div className='py-2 lg-10'>
                                                <div className='flex ' >
                                                    {
                                                        val.active == '1' ? <>
                                                            <button className='bg-green-500 h-[40px] px-3 py-1 sm:mx-2 mx-2 border-2  border-transparent  rounded text-[#fff] hover:bg-[#fff] hover:border-2 hover:border-green-500 hover:text-green-500 box-border cursor-pointer'>
                                                                Active
                                                            </button>  {dropdown == index + 1 ? <div className='bg-[#fff] flex flex-col shadow px-3 '>

                                                                <NextLink href={`/company-dashboard/job-view/job-update/${val._id}`} onClick={() => localStorage.setItem("jobId", val._id)} className="cursor-pointer border-b-2">Edit</NextLink>
                                                                <button onClick={() => handleOpen(val._id)} className="cursor-pointer border-b-2">view</button>
                                                                <NextLink href={`/company-dashboard/job-view/job-apply/${val._id}`} onClick={() => localStorage.setItem("jobId", val._id)} className="cursor-pointer border-b-2">Apply</NextLink>
                                                                <div onClick={()=>handledeletOpen(val._id)} className="cursor-pointer border-b-2">Delete</div>
                                                                <div onClick={() => setdropdown(0)} className='cursor-pointer'>
                                                                    Close
                                                                </div>
                                                            </div> : <div className='my-2' onClick={() => setdropdown(index + 1)}><MoreVertIcon /></div>}</> : <>
                                                            <button className='bg-red-500 h-[40px] px-2 py-1  sm:mx-2 mx-0 border-2  border-transparent  rounded text-[#fff] hover:bg-[#fff] hover:border-2 hover:border-red-500 hover:text-red-500 box-border cursor-pointer'>
                                                                Unactive
                                                            </button>
                                                            {dropdown == index + 1 ? <div className=' bg-[#fff] flex flex-col shadow px-3'>
                                                                <NextLink href={`/company-dashboard/job-view/job-update/${val._id}`} onClick={() => localStorage.setItem("jobId", val._id)} className="cursor-pointer border-b-2">Edit</NextLink>
                                                                <div onClick={() => handleOpen(val._id)} className="cursor-pointer border-b-2">view</div>
                                                                <NextLink href={`/company-dashboard/job-view/job-apply/${val._id}`} onClick={() => localStorage.setItem("jobId", val._id)} className="cursor-pointer border-b-2">Apply</NextLink>
                                                                <div onClick={()=>handledeletOpen(val._id)} className="cursor-pointer border-b-2">Delete</div>
                                                                <div onClick={() => setdropdown(0)} className="cursor-pointer border-b-2">Close</div>
                                                            </div> : <div className='my-2' onClick={() => setdropdown(index + 1)}><MoreVertIcon /></div>}
                                                        </>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style }} className="sm:w-[600px] w-[400px] rounded">
                    <div>
                        <div className='flex justify-end'>
                            <CloseIcon onClick={handleClose} />
                        </div>
                        <h1 className='font-bold text-[30px] text-center'><span></span> {job.company_name}</h1><hr></hr>
                        <div className='sm:px-20 px-10 py-6'>

                            <span className=' font-bold'>City : </span><span>{job.location}</span>
                            <div className='mt-2'>
                                <span className=' font-bold'>position : </span><span>{job.position}</span>
                            </div>
                            <div className='mt-2'>
                                <span className=' font-bold'>Technology : </span><span>{job.technology}</span>
                            </div>
                            <div className='flex gap-2 mt-2'>
                                <div className='flex bg-green-200 text-[18px] py-1 px-2 rounded text-green-800 mb-2'>
                                    {job.type = '1' ? <span>In-Office</span> : <span>Remote</span>}
                                </div>
                                <div className='flex bg-green-200 text-[18px] py-1 px-2 rounded text-green-800 mb-2'>
                                    <span><CurrencyRupeeIcon className='mx-1' />{job.salary}</span>
                                </div>
                                {
                                    job.active == '1' ?
                                        <div className='flex bg-green-200 text-[18px] py-1 px-2 rounded text-green-800 mb-2'>
                                            Active
                                        </div> : <div className='flex bg-red-200 text-[18px] py-1 px-2 rounded text-red-800 mb-2'>
                                            Unactive
                                        </div>
                                }
                            </div>
                            <div className='mt-2'>
                                <span className=' font-bold'>Vacancy : </span><span>{job.vacancy}</span><br></br>
                                <span className=' font-bold'>description : </span><span>{job.description}</span>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>

            <Modal
                hideBackdrop
                open={deletebox}
                onClose={handledeletClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
                className="border-0"
            >
                <Box sx={{ ...style }} className="w-[250px] rounded border-0 py-5 px-3 ">
                    Are you sure for Delete a Job ?

                    <div className='flex justify-center gap-3 px-4 my-2 mt-8'>
                        <button className='bg-red-700 text-[white] px-7 py-1 rounded' onClick={handledeletClose}>No</button>
                        <button className='bg-green-700 text-[white] px-7 py-1 rounded' onClick={()=>dispatch(delatejobs(id))}>Yes</button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}


const mapStateToProps = (state) => ({
    res: state.jobPrefrenceViewByCompany,
    resdata: state.jobPrefrenceViewById,
    delete:state.delatejobs
})
export default connect(mapStateToProps)(ViewJob)












