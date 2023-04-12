import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { userProfileUpadte } from '../../../../store/action/user/UpdateData'
import { fetchUserView } from '../../../../store/action/user/GetData'
import {code} from './phone';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfileSide from '../Profile/Index'


const MainPersonaldetails = ({ dispatch, res, updateres }) => {

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        phone_code: "",
        mobile: "",
        city: "",
        second_city: "",
        mother_tongue: "",
        language: "",
        linkedin_profile: "",
        about_yourself: "",
        password: ""
    })
   

    const handleInput = (e) => {
        
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    
    }

    const upadteUser = (e) => {
        e.preventDefault()
        dispatch(userProfileUpadte(data))
    }

    useEffect(() => {
        dispatch(fetchUserView())
    }, [])

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        data && setData(data)

    }, [res])

    return (
        <>
        <div>
            <ToastContainer />
            <div className='max-w-8xl mx-auto justify-between  items-center px-20 sm:px-6 sm:py-4  lg:justify-start lg:space-x-10 '>
                <div className='row flex gap-5'>
                    <ProfileSide />

                    <div className='mainpr max-w-2xl mx-auto justify-between items-center px-0 py-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10 mt-[50px] mb-[50px] border-1'>
                <div className='border lg:px-[30px]  px-[20px] py-10'>
                    <h1 className='text-center text-[35px] font-semibold'>Personal Details</h1>
                    <div className='newac1 grid grid-cols-2 gap-5'>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>First Name</label><br></br>
                            <input type="text" className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" onChange={handleInput} value={data.first_name} name="first_name" />
                        </div>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>Last Name</label><br></br>
                            <input type="text" className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" onChange={handleInput} value={data.last_name} name="last_name" />
                        </div>
                    </div>
                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                        <div className='feild1 py-3'>

                            <div className='grid grid-cols-4'>
                                <label className='mx-2 text-[18px] font-semibold ml-4'>Gender</label>
                                <div className='flex'>
                                    {
                                        data.gender =='male'?<><input id="link-radio" type="radio" checked name="gender" value="male" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mx-2" onChange={handleInput} /><p>Male</p></>:<><input id="link-radio" type="radio" name="gender" value="male" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mx-2" onChange={handleInput} /><p>Male</p></>
                                    }
                                </div>
                                <div className='flex'>
                                    {
                                        data.gender =='female' ? <><input id="link-radio" type="radio" checked name="gender" value="female" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mx-2" onChange={handleInput} /><p>Female</p></> :<><input id="link-radio" type="radio" name="gender" value="female" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mx-2" onChange={handleInput} /><p>Female</p></>
                                    }
                                </div>
                                <div className='flex'>
                                   {
                                    data.gender =='other' ?<> <input id="link-radio" type="radio" name="gender" checked value="other" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mx-2" onChange={handleInput} /><p>other</p></>:<> <input id="link-radio" type="radio" name="gender" value="other" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mx-2" onChange={handleInput} /><p>other</p></>
                                   }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='newac1'>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>Mobile number</label><br></br>
                            <div className='flex gap-3'>
                              
                                <select className="w-[30%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control  border-t-0 border-l-0 border-r-0 border-b-0" onChange={handleInput} value={data.phone_code} name="phone_code" >
                                <option >Choose</option>
                                    {
                                        code.map((val) => {
                                            return <>
                                                <option value={val.code}>{val.iso}+{val.code}</option>
                                            </>
                                        })
                                    }

                                </select>
                                <input type="text" className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" placeholder='Your 10 Digit Mobile Number' onChange={handleInput} value={data.mobile} name="mobile" />
                            </div>
                        </div>
                    </div>
                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>Current location</label><br></br>
                            <input type="text" className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" placeholder='Please Enter the City Where You Currently Live' onChange={handleInput} value={data.city} name="city" />
                        </div>
                    </div>
                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>Second location</label><br></br>
                            <p className='text-[#A5A5A5] text-[15px] px-2 ml-2'>If you study in one location but are from different location, fill
                                this to be considered for opportunities in both</p>
                            <input type="text" className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" placeholder='Second City' onChange={handleInput} value={data.second_city} name="second_city" />
                        </div>
                    </div>
                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>Mother tongue</label><br></br>
                            <input type="text" className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" placeholder='Enter Language' onChange={handleInput} value={data.mother_tongue} name="mother_tongue" />
                        </div>
                    </div>
                    <div className='newac1 flex flex-col gap-3 py-2'>
                        <label className='mx-2 text-[18px] font-semibold ml-4'>Preferred language of learning</label>
                        <div className='grid grid-cols-2'>

                        <div className='flex'>
                                    {
                                        data.language =='1'?<><input id="link-radio" type="radio" checked name="language" value="1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mx-2" onChange={handleInput} /><p>English</p></>:<><input id="link-radio" type="radio" name="language" value="1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mx-2" onChange={handleInput} /><p>English</p></>
                                    }
                                </div>
                                <div className='flex'>
                                    {
                                        data.language =='2' ? <><input id="link-radio" type="radio" checked name="language" value="2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mx-2" onChange={handleInput} /><p>Mother tongue</p></> :<><input id="link-radio" type="radio" name="language" value="2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mx-2" onChange={handleInput} /><p>Mother tongue</p></>
                                    }
                                </div>

                        </div>
                    </div>
                    <div className='newac1 grid grid-cols-1 cols-span-2 py-2'>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold ml-4 capitalize'>Your linkedin profile</label><br></br>
                            <input type="text" className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" placeholder='Your Linkedin URL' onChange={handleInput} value={data.linkedin_profile} name="linkedin_profile" />
                        </div>
                    </div>
                    <div className='feild1 py-3'>
                        <label className='mx-2 text-[18px] font-semibold ml-4'>About yourself (Word limit: 250)</label><br></br>
                        <textarea rows="8" cols="50" className='w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' onChange={handleInput} value={data.about_yourself} name="about_yourself"></textarea>
                    </div>
                    <div className='text-center mt-[50px]'>
                        <button className='bg-[#202040] text-[#fff] px-4 my-5 rounded-full uppercase font-semibold hover:bg-[#3DC0DF] hover:text-[#202040] py-1' onClick={(e) => { upadteUser(e) }}>Save & Next</button>
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
    res: state.fetchUserView,
    updateres: state.userProfileUpadte
})
export default connect(mapStateToProps)(MainPersonaldetails)
