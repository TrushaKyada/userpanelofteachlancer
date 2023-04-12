import React, { useEffect, useState } from 'react'
import NextLink from 'next/link';
import { connect } from "react-redux";
import { forgetPassword } from '../../../../store/action/compuny/AddData'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassWord = ({ dispatch, res }) => {

    const [data, setData] = useState({
        email: "",
        role:""
    })
    const [message, setmessage] = useState("")

    const forgetpass = () => {
        dispatch(forgetPassword(data))
        setData("")
    }
    useEffect(() => {
        const data = res.data ? res.data.data : []
        res.data.status == 200 && setmessage(data)
    }, [res])
    useEffect(() => {


        if (message) {
            if (message.code == 200) {
                toast.success(message.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
        
                // setTimeout(()=>{
                //     window.location="/"

                // }, 1000);
            }
        }
    }, [message])

    return (
        <div>
            <ToastContainer />
            <div className=' max-w-2xl mx-auto px-5 lg:justify-start px-10 pt-10 pb-5 border-4 rounded my-[150px]'>
                <div className='space-y-6'>
                    <div className='fortitle text-center'>
                        <p className='text-[35px] font-semibold mb-[50px]'>Forgot Password</p>
                    </div>

                    <div className="chrole flex gap-[50px] ml-3">
                        <p className='text-[18px] font-semibold '>You are</p>
                        <div className='flex gap-2 mt-1'>
                        <input  id="disabled-radio-1" type="radio" value="1" name='role'  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setData({...data, role: e.target.value })}></input><p>Student</p>
                           
                        </div>
                        <div className='flex gap-2 mt-1'>
                        <input  id="disabled-radio-1" type="radio" value="3" name='role'  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setData({...data, role: e.target.value })}></input><p>Company</p>
                        </div>
                        <div className='flex gap-2 mt-1'>
                        <input  id="disabled-radio-1" type="radio" value="2" name='role'  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setData({...data, role: e.target.value })}></input><p>Academy</p>
                        </div>
                    </div>
                    <p className='xl:lg:md:mr-[200px] ml-3'>Please enter your e-mail address. You will receive an
                        e-mail along with a link which can be used to reset
                        your password.</p>
                    <div className=''>
                        <label className='mx-3  text-[18px] font-semibold'>Email*</label><br></br>
                        <input type="text" placeholder="Your Email Adress" name="email" onChange={(e) => setData({...data, email: e.target.value })} className='rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' />
                    </div>
                    <div className='text-center'>
                        <button className='btn bg-[#202040] text-[#fff] text-[18px] font-semibold py-1 px-[30px] rounded-3xl hover:bg-[#3DC0DF] hover:text-[#202040]' onClick={forgetpass}>SUBMIT</button>
                    </div>
                    <div className='text-center mb-0 pb-0 mt-[70px]'>
                        <NextLink href="">I am not receiving password reset email. Need help?</NextLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    res: state.forgetPassword,
});

export default connect(mapStateToProps)(ForgetPassWord);