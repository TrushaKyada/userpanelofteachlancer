import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import NextLink from 'next/link';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { internshipViewAll ,internshipViewByLocation,internshipViewByTechnology,internshipViewById} from '../../../../store/action/compuny/GetData'
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import {applyInternship} from "../../../../store/action/user/AddData";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    boxShadow: 24,

};

const ViewInternship = ({ dispatch, res,searchres ,searchtech,resbyid,apply}) => {

    const Router = useRouter()
    const [data, setData] = useState([]);
    const [dropdown, setdropdown] = useState(0)
    const [open, setOpen] = useState(false);
    const [internship, setInternship] = useState([])
    const handleOpen = (id) => {
        dispatch(internshipViewById(id))
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const data = resbyid.data && resbyid.data.data && resbyid.data.data.data
        data && setInternship(data);
    }, [resbyid])

    useEffect(() => {
        dispatch(internshipViewAll())
    }, [])

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        data && setData(data);
    }, [res])

    const handleInput=(e)=>{
        dispatch(internshipViewByLocation({[e.target.name]:e.target.value}))
    }

    const handleTech=(e)=>{
        dispatch(internshipViewByTechnology({[e.target.name]:e.target.value}))
    }

  
    useEffect(()=>{
      const data= searchres.data && searchres.data.data && searchres.data.data.data
      data && setData(data)
    },[searchres])

    

    useEffect(()=>{
        const data= searchtech.data && searchtech.data.data && searchtech.data.data.data
        data && setData(data)
      },[searchtech])

      const ApplyIntership=(id)=>{
        dispatch(applyInternship(id))
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
        }
      },[apply])

    return (
        <div className=''>
            <ToastContainer/>
            <div className='h-[30vh] bg-gray-50 relative py-40'>
                <h1 className=' text-center text-[30px] font-bold '>VIEW ALL INTERNSHIP</h1>
            </div>
            <div className='xl:px-40 lg:px-20 md:px-20 '>
            <div className='flex sm:justify-end justify-center sm:py-3 gap-2'>
                <input type='text' placeholder='search by city here' className='rounded-lg sm:py-2' name='city' onChange={handleInput} ></input>
                <input type='text' placeholder='search by technology here' className='rounded-lg sm:py-2' name='technology' onChange={handleTech} ></input>
            </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                {
                                data.map((val, index) => {
                                    return <>
                                        <div className='grid grid-cols-4 place-content-between my-6 px-8 shadow-2xl py-6'>
                                            <div className='col-span-3 justify-items-center'>
                                                <div className='flex capitalize'>
                                                    <div>
                                                        <p className='text-[24px] font-bold '>{val.company_name}</p>
                                                        {
                                                            val.type == "1" ? <p className='text-[18px] text-gray-600 '>{val.address}</p> :<p></p>
                                                        }
                                                    </div>
                                                    <div>
                                                    </div>
                                                </div>
                                                <div className='mt-4'>
                                                    <span className=' font-bold'>Technology : </span><span>{val.technology}</span>
                                                </div>
                                                <div className='flex gap-2 mt-2'>
                                                    <div className='flex bg-green-200 text-[18px] py-1 px-2 rounded text-green-800 mb-2'>
                                                        <span>{val.stipend}   {val.stipend === 'fixed' && <span>{val.stipend_salary}</span>}</span>
                                                    </div>
                                                    <div className='flex bg-green-200 text-[18px] py-1 px-2 rounded text-green-800 mb-2'>
                                                        {val.time = '1' ? <span><HourglassFullIcon className='px-1' />Part-time</span> : <span><HourglassFullIcon className='px-1' />Full-time</span>}
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className='font-bold'>Vacancy :</span> <span>{val.vacancy}</span>
                                                </div>
                                                {/* <div className='flex xl:flex-row lg:flex-col md:flex-row sm:flex-row flex-col justify-between '>

                                                    <div className='mt-2'>
                                                        <p className='font-bold'>Skills:</p>
                                                        {val.skills[0] && <p><RadioButtonUncheckedIcon className='p-2' />{val.skills[0]}</p>}
                                                        {val.skills[1] && <p><RadioButtonUncheckedIcon className='p-2' />{val.skills[1]}</p>}
                                                        {val.skills[2] && <p><RadioButtonUncheckedIcon className='p-2' />{val.skills[2]}</p>}
                                                        {val.skills[3] && <p><RadioButtonUncheckedIcon className='p-2' />{val.skills[3]}</p>}
                                                        {val.skills[4] && <p><RadioButtonUncheckedIcon className='p-2' />{val.skills[4]}</p>}
                                                        {val.skills[5] && <p><RadioButtonUncheckedIcon className='p-2' />{val.skills[5]}</p>}
                                                        {val.skills[6] && <p><RadioButtonUncheckedIcon className='p-2' />{val.skills[6]}</p>}
                                                    </div>
                                                </div> */}
                                                <div>
                                                    {
                                                        val.active=='1' &&<button className='bg-blue-700 text-[#fff] px-3 py-2 mt-3 rounded' onClick={(e)=>ApplyIntership(val._id)}>Apply</button>
                                                    }
                                                </div>
                                            </div>
                                            <div className='py-3'>
                                                <div className='flex' >
                                                    {
                                                        val.active == '1' ? <>
                                                            <button className='bg-green-500 h-[40px] px-3 py-1 sm:mx-2 mx-2 border-2  border-transparent  rounded text-[#fff] hover:bg-[#fff] hover:border-2 hover:border-green-500 hover:text-green-500 box-border cursor-pointer'>
                                                                Active
                                                            </button> {dropdown == index + 1 ? <div className='flex flex-col shadow px-3 '>
                                                                <button onClick={() => handleOpen(val._id)} className="cursor-pointer">view</button>
                                                                <div onClick={() => setdropdown(0)}>
                                                                    Close
                                                                </div>
                                                            </div> : <div className='my-2' onClick={() => setdropdown(index + 1)}><MoreVertIcon /></div>}</> : <>
                                                            <button className='bg-red-500 h-[40px] px-1 py-1 sm:mx-2 mx-2 border-2  border-transparent  rounded text-[#fff] hover:bg-[#fff] hover:border-2 hover:border-red-500 hover:text-red-500 box-border cursor-pointer'>
                                                                Unactive
                                                            </button>
                                                            {dropdown == index + 1 ? <div className='flex flex-col shadow px-3'>
                                                                <button onClick={() => handleOpen(val._id)} className="cursor-pointer">view</button>
                                                                <div onClick={() => setdropdown(0)} className="cursor-pointer">
                                                                    Close
                                                                </div>
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
                        <h1 className='font-bold text-[30px] text-center'><span></span> {internship.company_name}</h1><hr></hr>
                        <div className='sm:px-20 px-10 py-6'>
                           
                        <span className=' font-bold'>City : </span><span>{internship.address}</span>
                            <div className='mt-2'>
                                <span className=' font-bold'>Technology : </span><span>{internship.technology}</span>
                            </div>
                            <div className='flex gap-2 mt-2'>
                                <div className='flex bg-green-200 text-[18px] py-1 px-2 rounded text-green-800 mb-2'>
                                    <span>{internship.stipend}   {internship.stipend === 'fixed' && <span>{internship.stipend_salary}</span>}</span>
                                </div>
                                <div className='flex bg-green-200 text-[18px] py-1 px-2 rounded text-green-800 mb-2'>
                                    {internship.time = '1' ? <span><HourglassFullIcon className='px-1' />Part-time</span> : <span><HourglassFullIcon className='px-1' />Full-time</span>}
                                </div>
                                
                            </div>
                            <div className='mt-2'>
                                <span className=' font-bold'>Vacancy : </span><span>{internship.vacancy}</span><br></br>
                                <span className=' font-bold'>Duration : </span><span>{internship.duration}</span>
                            </div>
                            <div className='grid sm:grid-cols-3'>
                                <div className='mt-2 col-span-2'>
                                    {
                                        internship.perks &&
                                        <div>
                                            <p className='font-bold'>perks:</p>
                                            {internship.perks[0] && <p><RadioButtonUncheckedIcon className='p-2' />{internship.perks[0]}</p>}
                                            {internship.perks[1] && <p><RadioButtonUncheckedIcon className='p-2' />{internship.perks[1]}</p>}
                                            {internship.perks[2] && <p><RadioButtonUncheckedIcon className='p-2' />{internship.perks[2]}</p>}
                                            {internship.perks[3] && <p><RadioButtonUncheckedIcon className='p-2' />{internship.perks[3]}</p>}
                                            {internship.perks[4] && <p><RadioButtonUncheckedIcon className='p-2' />{internship.perks[4]}</p>}
                                            {internship.perks[5] && <p><RadioButtonUncheckedIcon className='p-2' />{internship.perks[5]}</p>}
                                        </div>
                                    }
                                </div>
                                <div className='mt-2'>
                                    {
                                        internship.skills &&
                                        <div>
                                            <p className='font-bold'>Skills:</p>
                                            {internship.skills[0] && <p><RadioButtonUncheckedIcon className='p-2' />{internship.skills[0]}</p>}
                                            {internship.skills[1] && <p><RadioButtonUncheckedIcon className='p-2' />{internship.skills[1]}</p>}
                                            {internship.skills[2] && <p><RadioButtonUncheckedIcon className='p-2' />{internship.skills[2]}</p>}
                                            {internship.skills[3] && <p><RadioButtonUncheckedIcon className='p-2' />{internship.skills[3]}</p>}
                                            {internship.skills[4] && <p><RadioButtonUncheckedIcon className='p-2' />{internship.skills[4]}</p>}
                                            {internship.skills[5] && <p><RadioButtonUncheckedIcon className='p-2' />{internship.skills[5]}</p>}
                                            {internship.skills[6] && <p><RadioButtonUncheckedIcon className='p-2' />{internship.skills[6]}</p>}
                                        </div>
                                    }
                                </div>
                            </div>
                            <div>
                                <p className='font-bold'>description :</p>
                                {internship.description}
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}


const mapStateToProps = (state) => ({
    res: state.internshipViewAll,
    searchres:state.internshipViewByLocation,
    searchtech:state.internshipViewByTechnology,
    resbyid: state.internshipViewById,
    apply:state.applyInternship
   
})
export default connect(mapStateToProps)(ViewInternship)