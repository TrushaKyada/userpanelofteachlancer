import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { changePassword } from '../../../../store/action/compuny/UpdateData'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangePassword = ({ dispatch, res }) => {

    const [data, setData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    })
    const [message,setmessage] = useState("")

    const changePass = () => {
        dispatch(changePassword(data))
    }

    const handleInput = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
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
                setData("")
                // setTimeout(()=>{
                //     window.location="/"

                // }, 1000);
            }
        }
    }, [message])

    return (
        <div>
            <ToastContainer />
            <div className='max-w-2xl mx-auto px-5 lg:justify-start px-10 pt-[70px] border rounded my-[150px]'>
                <div className='space-y-6'>
                    <div className='fortitle text-center'>
                        <p className='text-[35px] font-semibold'>Change Password</p>
                    </div>
                    <div className=''>
                        <label className='mx-3  text-[18px] font-semibold'>OldPassword*</label><br></br>
                        <input type="text" className='rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' name="oldPassword" onChange={handleInput} value={data.oldPassword} />
                    </div>
                    <div className=''>
                        <label className='mx-3  text-[18px] font-semibold'>New password*</label><br></br>
                        <input type="text" className='rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' name="newPassword" onChange={handleInput} value={data.newPassword} />
                    </div>
                    <div className=''>
                        <label className='mx-3  text-[18px] font-semibold'>Retype password*</label><br></br>
                        <input type="text" className='rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' name='confirmPassword' onChange={handleInput} value={data.confirmPassword} />
                    </div>
                    <div className='text-center py-10 pb-5'>
                        <button className='bg-[#202040] text-[#fff] text-[18px] font-semibold rounded-3xl px-5 py-1 hover:bg-[#3DC0DF] hover:text-[#202040]' onClick={changePass}>UPDATE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    res: state.changePassword
})

export default connect(mapStateToProps)(ChangePassword)