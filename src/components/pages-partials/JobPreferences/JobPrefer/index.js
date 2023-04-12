import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { jobPrefrenceAdd } from '../../../../store/action/compuny/AddData'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfileSide from '../../CompanyDashBoard/Profile/Index';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { JobvalidationSchema } from '../../../validation';

const JobPrefer = ({ dispatch, res }) => {
    const [data, setData] = useState({
        type: "",
        position: "",
        description: "",
        technology: "",
        salary: "",
        active: "",
        vacancy: ""

    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const onSubmit = () => {
        dispatch(jobPrefrenceAdd(data))
    }

    const formOptions = { resolver: yupResolver(JobvalidationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    useEffect(() => {

        const data = res.data && res.data.data
        if (data && data.code == 201) {
            if (data.code == 201) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,

                });

            }
            setTimeout(() => {
                window.location = "job-view"
            }, 1500);

        }
    }, [res])



    return (
        <div>
            <ToastContainer />
            <div className='max-w-8xl  justify-between items-center sm:px-12 px-10 sm:py-2  lg:justify-start lg:space-x-10 '>
                <div className='row flex gap-4'>
                    <ProfileSide />
                    <div className='w-[100%] '>
                        <div className='max-w-2xl mx-auto justify-between items-center px-0 py-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10 my-[50px]'>
                        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
                                <div className='border-2 px-10 rounded-2xl'>
                                    <h1 className='text-[35px] font-semibold text-center mt-[40px]'>Job Post</h1>

                                    <div className='py-2 ml-3'>
                                        <p className='text-[18px] font-semibold py-2'>Types of Internships</p>
                                        <div className='lookfor flex gap-[67px]'>
                                            <div className='flex gap-3'>
                                                <input type="radio" {...register('type')} name="type" value="1" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput}></input>
                                                <p className='text-[18px] font-medium'>In-office</p>
                                            </div>
                                            <div className='flex gap-3'>
                                                <input type="radio" {...register('type')} name="type" value="2" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput} autoComplete="off"></input>
                                                <p className='text-[18px] font-medium'>Remote</p>
                                            </div>  
                                        </div>
                                        <div className="invalid-feedback text-[red]">{errors.type?.message}</div>
                                    </div>
                                    <div className='py-2'>
                                        <label  className='mx-3 text-[18px] font-semibold capitalize'>position</label><br></br>
                                        <input type="text" {...register('position')} placeholder="enter the position" name="position" value={data.position} className='rounded-3xl bg-[#DBDBDB] mt-3 form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput} autoComplete="off"/>
                                        <div className="invalid-feedback text-[red]">{errors.position?.message}</div>
                                    </div>
                                    <div className='py-2'>
                                        <label className='mx-3  text-[18px] font-semibold capitalize'>description</label><br></br>
                                        <input type="text" {...register('description')} placeholder="enter the description" name="description" value={data.description} className='rounded-3xl bg-[#DBDBDB] mt-3 form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput} autoComplete="off"/>
                                        <div className="invalid-feedback text-[red]">{errors.description?.message}</div>
                                    </div>
                                    <div className='py-2'>
                                        <label className='mx-3  text-[18px] font-semibold capitalize'>vacancy</label><br></br>
                                        <input type="text" {...register('vacancy')} placeholder="enter the vacancy" name='vacancy' value={data.vacancy} className='rounded-3xl mt-3 bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput} autoComplete="off"/>
                                        <div className="invalid-feedback text-[red]">{errors.vacancy?.message}</div>
                                    </div>
                                    <div className='py-2'>
                                        <label className='mx-3  text-[18px] font-semibold capitalize'>technology</label><br></br>
                                        <input type="text" {...register('technology')} placeholder="enter the technology" name="technology" value={data.technology} className='rounded-3xl bg-[#DBDBDB] mt-3 form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput} autoComplete="off"/>
                                        <div className="invalid-feedback text-[red]">{errors.technology?.message}</div>
                                    </div>
                                    <div className='py-2'>
                                        <label className='mx-2 text-[18px] font-semibold capitalize'>salary</label><br></br>
                                        <input type="text" {...register('salary')} placeholder='Enter Amount' name="salary" value={data.salary} className="rounded-3xl mt-3 bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" onChange={handleInput} autoComplete="off"/>
                                        <div className="invalid-feedback text-[red]">{errors.salary?.message}</div>
                                    </div>
                                    <div className='py-2'>
                                        <label className='mx-3  text-[18px] font-semibold '>Active</label><br></br>
                                        <div className='mx-3 lookfor flex gap-[67px]'>

                                            <div className='flex gap-3'>
                                                <input type="radio"  {...register('active')} name="active" value="1" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput}></input>
                                                <p className='text-[18px] font-medium capitalize'>active</p>
                                            </div>
                                            <div className='flex gap-3'>
                                                <input type="radio"   {...register('active')} name="active" value="0" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput}></input>
                                                <p className='text-[18px] font-medium capitalize'>not-active</p>
                                                
                                            </div>
                                        </div>
                                        <div className="invalid-feedback text-[red]">{errors.active?.message}</div>
                                    </div>
                                    
                                    <div className='text-center my-4'>
                                        <button type='submit' className='text-[18px] font-semibold text-[#fff] bg-[#202040] rounded-3xl py-1 px-3 hover:bg-[#3DC0DF] hover:text-[#202040]' >Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    res: state.jobPrefrenceAdd
})
export default connect(mapStateToProps)(JobPrefer)