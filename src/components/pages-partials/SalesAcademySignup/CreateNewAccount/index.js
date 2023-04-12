import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import { connect } from 'react-redux'
import { userRagistration } from '../../../../store/action/user/AddData'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UservalidationSchema } from '../../../validation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CreateNewAccount = ({ dispatch, res }) => {
    useEffect(() => {
        AOS.init();
      }, [])
    const [data, setData] = useState({
        first_name: "",
        email: "",
        mobile: "",
        whats_app: "",
        password: "",
        confirmPassword: ""
    })
    const formOptions = { resolver: yupResolver(UservalidationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;


    const handleInput = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
        if (e.target.name == 'whats_app') {
            if (e.target.checked) {
                setData({ ...data, [name]: 1 })
            }
            else {
                setData({ ...data, [name]: 0 })
            }
        }
    }

    const onSubmit = () => {
       
        dispatch(userRagistration(data))
    }

    useEffect(() => {
        const data = res.data && res.data.data
        if (data) {
            if (data.code == 201) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                });
                setTimeout(()=>{
                    window.location="/student-login"
                }, 1000);
            }
            if (data.code == 409) {
                toast.warning(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                });
              
            }
        }
    }, [res])
    return (
        <div>
            <ToastContainer/>
            <div data-aos="zoom-in-down"  data-aos-duration="2000" className=' max-w-2xl mx-auto justify-between items-center px-10 xl:lg:md:sm:px-0 lg:justify-start lg:space-x-10 border rounded my-[150px] py-5 pb-[50px]'>
                <div className=" flex flex-col justify-center sm:px-6 ">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className=" text-center text-3xl font-extrabold text-gray-900  pt-[50px]">
                            Create New Account
                        </h2>
                    </div>

                    <div className="flex justify-center pt-2">
                    </div>
                    <div className="mt-8">
                        <div className="saleAcademynew bg-white sm:rounded-lg sm:px-10">
                            <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
                                <div className='newac1 grid grid-cols-2 gap-5'>
                                    <div className='feild1 py-2'>
                                        <label className='mx-2 text-[18px] font-semibold '>Your Name*</label><br></br>
                                        <input type="text" placeholder='Your Name' {...register('first_name')} className={`form-control ${errors.first_name ? 'is-invalid' : ''} rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-0`} name="first_name" onChange={handleInput} value={data.first_name} autoComplete="off" />
                                        <div className="invalid-feedback text-[red]">{errors.first_name?.message}</div>
                                    </div>
                                    <div className='feild1 py-2'>
                                        <label className='mx-2 text-[18px] font-semibold '>Your Work Email*</label><br></br>
                                        <input type="text" placeholder='Your Work  Email' {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''} rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-0`} name="email" onChange={handleInput} value={data.email} autoComplete="off"/>
                                        <div className="invalid-feedback text-[red]">{errors.email?.message}</div>
                                    </div>
                                </div>
                                <div className='newac1 grid grid-cols-2 gap-5'>
                                    <div className='feild1 py-3'>
                                        <label className='mx-2 text-[18px] font-semibold'>Mobile Number*</label><br></br>
                                        <input type="text" placeholder='Mobile Number*' {...register('mobile')} className={`form-control ${errors.password ? 'is-invalid' : ''} rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-0`} name="mobile" onChange={handleInput} value={data.mobile} autoComplete="off"/>
                                        <div className="invalid-feedback text-[red]">{errors.mobile?.message}</div>
                                    </div>
                                    <div className='feild1wp flex lg:md:py-3 sm:py-3 lg:md:mt-[30px] sm:mt-[30px] gap-3'>
                                        <input type="checkbox" placeholder='Mobile' className="rounded bg-[#DBDBDB] form-control w-[20px] h-[20px] border-0" name="whats_app" onChange={handleInput} value={data.whats_app} /><p>WhatsApp</p>
                                    </div>
                                </div>
                                <div className='newac1 grid grid-cols-2 gap-5'>
                                    <div className='feild1 py-3'>
                                        <label className='mx-2 text-[18px] font-semibold py-2'>Password*</label><br></br>
                                        <input type="password" placeholder='Enter Password' {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''} rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-0`} name="password" onChange={handleInput} value={data.password} autoComplete="off"/>
                                        <div className="invalid-feedback text-[red]">{errors.password?.message}</div>
                                    </div>
                                    <div className='feild1 py-3 '>
                                        <label className='mx-2 text-[18px] font-semibold'>Confirm Password*</label><br></br>
                                        <input type="password" placeholder='Confirm Password' {...register('confirmPassword')} className={`form-control ${errors.password ? 'is-invalid' : ''} rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-0`} name="confirmPassword" onChange={handleInput} value={data.confirmPassword} autoComplete="off"/>
                                        <div className="invalid-feedback text-[red]">{errors.confirmPassword?.message}</div>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button type='submit' className='btn btncompnew bg-[#202040] mt-8 text-[#fff] py-1 px-[45px] rounded-3xl hover:bg-[#3DC0DF] hover:text-[#202040]'>Create New Account</button>
                                </div>
                                <div className='newaacount mt-[12px] flex gap-1 justify-center'>
                                    <NextLink href="" className='text-[12px]'>Have an Account?</NextLink>
                                    <p className='text-[12px]'>|</p>
                                    <NextLink href="/student-login" className='text-[12px]'>Login Now</NextLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' max-w-2xl mx-auto flex place-content-center items-center px-10 xl:lg:md:sm:px-0 lg:justify-center lg:space-x-10 py-5 pb-[50px]'>
                <div className='w-[40%]'>
                    <img src='/img/logo.png'></img>
                </div>
            </div>
        </div>
    )
}



const mapStateToProps = (state) => ({
    res: state.userRagistration,
});

export default connect(mapStateToProps)(CreateNewAccount)