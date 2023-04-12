import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { jobPrefrenceViewById } from '../../../../store/action/compuny/GetData'
import { CompanyJobPostUpdate } from '../../../../store/action/compuny/UpdateData'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfileSide from '../Profile/Index'


const UpdateJob = ({ dispatch, res, updateres }) => {

    const [data, setData] = useState({
        type: "",
        position: "",
        description: "",
        technology: "",
        salary: "",
        active: "",
        vacancy: ""
    });

    const handleInput = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const Jobpost = () => {
        const id = localStorage.getItem('jobId')
        dispatch(CompanyJobPostUpdate(data, id))
    }

    useEffect(() => {
        const id = localStorage.getItem('jobId')
        dispatch(jobPrefrenceViewById(id))

    }, [])

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        data && setData(data)
    }, [res])

    useEffect(() => {
        const data = updateres.data && updateres.data.data
        if (data) {
            if (data.code == 200) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
            }
        }
    }, [updateres])

    return (
        <>
            <ToastContainer />
            <div className='max-w-8xl  justify-between items-center  sm:px-12 sm:py-4  lg:justify-start lg:space-x-10 '>
                <div className='row flex gap-4'>
                    <ProfileSide/>
                    <div className='w-[100%] '>
                        <div className='max-w-2xl mx-auto justify-between items-center px-0 py-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10 my-[90px]'>
                            <div className='border-2 px-10 rounded-2xl'>
                                <h1 className='text-[35px] font-semibold text-center mt-[40px]'>Job Update</h1>

                                <div className='py-2 ml-3'>
                                    <p className='text-[18px] font-semibold py-2'>Types of Internships</p>
                                    <div className='lookfor flex gap-[67px]'>
                                        <div className='flex gap-3'>
                                            {
                                                data.type == '1' ? <input type="radio" name="type" checked value="1" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput}></input> : <input type="radio" name="type" value="1" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput}></input>
                                            }
                                            <p className='text-[18px] font-medium'>In-office</p>
                                        </div>
                                        <div className='flex gap-3'>
                                            {
                                                data.type == '2' ? <input type="radio" name="type" checked value="2" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput}></input> : <input type="radio" name="type" value="2" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput}></input>
                                            }
                                            <p className='text-[18px] font-medium'>Remote</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-3'>
                                    <label className='mx-3  text-[18px] font-semibold'>position</label><br></br>
                                    <input type="text" placeholder="Select your position" name="position" value={data.position} className='rounded-3xl bg-[#DBDBDB] mt-3 form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput} />
                                </div>
                                <div className='py-3'>
                                    <label className='mx-3  text-[18px] font-semibold'>description</label><br></br>
                                    <input type="text" placeholder="description" name="description" value={data.description} className='rounded-3xl bg-[#DBDBDB] mt-3 form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput} />
                                </div>
                                <div className='py-3'>
                                    <label className='mx-3  text-[18px] font-semibold'>technology</label><br></br>
                                    <input type="text" placeholder="technology" name="technology" value={data.technology} className='rounded-3xl bg-[#DBDBDB] mt-3 form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput} />
                                </div>
                                <div className='py-3'>
                                    <label className='mx-2 text-[18px] font-semibold '>salary</label><br></br>
                                    <input type="text" placeholder='Enter Amount' name="salary" value={data.salary} className="rounded-3xl mt-3 bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" onChange={handleInput} />
                                </div>
                                

                                <div className='py-3'>
                                    <label className='mx-3  text-[18px] font-semibold'>Active</label><br></br>
                                    <div className='mx-3 lookfor flex gap-[67px]'>
                                        <div className='flex gap-3'>
                                            {
                                                data.active == '0' ? <input type="radio" name="active" value="0" checked className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput}></input> : <input type="radio" name="active" value="0" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput}></input>
                                            }
                                            <p className='text-[18px] font-medium'>not-active</p>
                                        </div>
                                        <div className='flex gap-3'>
                                            {
                                                data.active == '1' ? <input type="radio" name="active" checked value="1" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput}></input> : <input type="radio" name="active" value="1" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput}></input>
                                            }
                                            <p className='text-[18px] font-medium'>active</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-3'>
                                    <label className='mx-3  text-[18px] font-semibold'>vacancy</label><br></br>
                                    <input type="text" placeholder="vacancy" name='vacancy' value={data.vacancy} className='rounded-3xl mt-3 bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput} />
                                </div>
                                <div className='text-center my-10'>
                                    <button className='text-[18px] font-semibold text-[#fff] bg-[#202040] rounded-3xl py-1 px-3 hover:bg-[#3DC0DF] hover:text-[#202040]' onClick={(e) => Jobpost(e)}>Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    res: state.jobPrefrenceViewById,
    updateres: state.CompanyJobPostUpdate
})
export default connect(mapStateToProps)(UpdateJob)