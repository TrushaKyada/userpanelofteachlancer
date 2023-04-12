import React, { useEffect } from 'react'
import NextLink from 'next/link'
import { useState } from 'react'
import { connect } from "react-redux";
import { compunyLogin } from '../../../../store/action/compuny/AddData'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../../validation';
import AOS from 'aos';
import 'aos/dist/aos.css';


const LoginForm = ({ dispatch, res }) => {
  useEffect(() => {
    AOS.init();
  }, [])
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;


  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const onSubmit = async () => {
    dispatch(compunyLogin(data))
  }

  useEffect(() => {
    const data = res.data ? res.data.data : []
    if (data) {
      if (data.code == 200) {
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,

        });
        setInterval(() => {
          window.location = '/company'
        }, 1500);
      }
      if (data.code == 401) {
        toast.warning(data.message, {
          position: toast.POSITION.TOP_CENTER,

        });
      }


    }
  }, [res])


  return (
    <div>
      <ToastContainer />
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8" data-aos="zoom-in" data-aos-duration="2000">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-[150px] text-center text-3xl font-extrabold text-gray-900 ">
            Company Login
          </h2>
        </div>
        <div className="flex justify-center pt-2">
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4  sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className=''>
                <label>Email*</label><br></br>
                <input type="text" placeholder="email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''} rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0`} name='email' value={data.email} onChange={handleChange} autoComplete="off"/>
                <div className="invalid-feedback text-[red]">{errors.email?.message}</div>
              </div>
               
              <div className=''>
                <label>Password*</label><br></br>
                <input type="password" placeholder="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''} rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0`} name='password' value={data.password} onChange={handleChange} autoComplete="off"/>
               
              </div>
              <div className="invalid-feedback text-[red]">{errors.password?.message}</div>
              <NextLink href="/forget-password " className='text-[12px] hover:bg-[#3DC0DF] hover:text-[#202040] underline'>Forget Password ?</NextLink>
              <div className='text-center'>
                <button className='btn bg-[#202040] text-[#fff] py-1 px-[30px] rounded-3xl'>Login</button>
              </div>
            </form>
            <div className='newaacount mt-[15px] flex gap-1 justify-center'>
              <NextLink href="/" className='text-[12px]'>New to TheDriveSales?</NextLink>
              <p className='text-[12px]'>|</p>
              <NextLink href="/company-signup" className='text-[12px] hover:bg-[#3DC0DF] hover:text-[#202040]'>Create an Account</NextLink>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex justify-center ">
          <img src='/img/logo.png' className=' w-[215px] h-[46px] mt-[360px] '></img>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => ({
  res: state.compunyLogin,
});

export default connect(mapStateToProps)(LoginForm);
