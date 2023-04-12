import React, { useEffect, useState } from 'react'
import NextLink from 'next/link';
import { fetchCompanyView } from "../../../../store/action/compuny/GetData"
import { CompanyProfileUpadte } from '../../../../store/action/compuny/UpdateData'
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfileSide from '../Profile/Index'

const Editprofile = ({ dispatch, res, update }) => {

    const [data, setData] = useState({
        name:"",
        type:"",
        industry_type:"",
        no_of_emp:"",
        your_name:"",
        your_role:"",
        email:"",
        country:"",
        state:"",
        city:"",
        mobile:"",
        wallet:"",
        whats_app:0,
        password:"",
        confirmPassword:""
    })
    const handleInput = (e) => {


        const { name, value } = e.target
        setData({ ...data, [name]: value })
        if (e.target.name == 'image') {
          
            setData({ ...data, [name]: e.target.files[0] })
        }
        if (e.target.name == 'whats_app') {
            if (event.target.checked) {
                setData({ ...data, [name]: 1 })
            }
            else {
                setData({ ...data, [name]: 0 })
            }

        }
    }

    useEffect(() => {
        dispatch(fetchCompanyView())
    }, [])

    useEffect(() => {
        const data = res.data.data && res.data.data.data
   
        data && setData(data)
    }, [res])


    const updateProfile = (e) => {
        e.preventDefault()
        dispatch(CompanyProfileUpadte(data))
    }

    useEffect(() => {
        const data = update.data && update.data.data
        if (data && data.code==200) {
            if (data.code == 200) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
            }
        }
    }, [update])


    return (
        <div>
            <ToastContainer />
            <div className='max-w-8xl mx-auto justify-between items-center px-20 sm:px-12 sm:py-4  lg:justify-start lg:space-x-10 '>
                <div className='row flex gap-5'>
                    <ProfileSide />

                    <div className='w-[100%] xl:px-40 sm:px-10 '>
                        <div className='w-[100%] border-2 p-6 mt-4 rounded '>
                            <h1 className='text-[30px] font-bold text-center'>Edit Profile</h1>
                            <form className='py-10' method='post' onSubmit={updateProfile}>
                                <div className='newac1 grid sm:grid-cols-2 grid-cols-1 gap-5'>
                                    <div className='feild1 py-3'>
                                        <label className='mx-2 text-[18px] font-semibold '>Company Name*</label><br></br>
                                        <input type="text" placeholder='Your Company Name' name='name' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" onChange={handleInput} value={data.name} />
                                    </div>
                                    <div className='feild1 py-3'>
                                        <label className='mx-2 text-[18px] font-semibold'>Company Type*</label><br></br>
                                        <select className='form-control w-[100%] rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px]  border-t-0 border-l-0 border-r-0 border-b-0' placeholder='Choose' name='type' onChange={handleInput} value={data.type}>
                                            <option value="1" className=''>Choose</option>
                                            <option value="Private Limited ">Private Limited </option>
                                            <option value="Public Limited ">Public Limited </option>
                                            <option value="Micro Companies">Micro Companies</option>
                                            <option value="Small Companies.">Small Companies.</option>
                                            <option value="Medium Companies.">Medium Companies. </option>
                                            <option value="Limited by Guarantee.">Limited by Guarantee.</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='newac1 grid sm:grid-cols-2 grid-cols-1 gap-5'>
                                    <div className='feild1 py-3'>
                                        <label className='mx-2 text-[18px] font-semibold'>Industry Type*</label><br></br>
                                        <select className='form-control w-[100%] rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px]  border-t-0 border-l-0 border-r-0 border-b-0' placeholder='Choose' name='industry_type' onChange={handleInput} value={data.industry_type}>
                                            <option value="1" className=''>Choose</option>
                                            <option value="Commercial">Commercial</option>
                                            <option value="it">it</option>

                                        </select>
                                    </div>
                                    <div className='feild1 py-3'>
                                        <label className='mx-2 text-[18px] font-semibold'>No. Of Employees</label><br></br>
                                        <input type="text" placeholder='No. Of Employees' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" name='no_of_emp' onChange={handleInput} value={data.no_of_emp} />
                                    </div>
                                </div>
                                <div className='newac1 grid sm:grid-cols-2 grid-cols-1 gap-5'>
                                    <div className='feild1 py-3'>
                                        <label className='mx-2 text-[18px] font-semibold'>Your Name*</label><br></br>
                                        <input type="text" placeholder='Your Company Name' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" name='your_name' onChange={handleInput} value={data.your_name} />
                                    </div>
                                    <div className='feild1 py-3'>
                                        <label className='mx-2 text-[18px] font-semibold'>Your Role*</label><br></br>
                                        <select className='form-control w-[100%] rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px]  border-t-0 border-l-0 border-r-0 border-b-0' placeholder='Choose' name='your_role' onChange={handleInput} value={data.your_role}>
                                            <option value="1" className=''>Choose</option>
                                            <option value="CEO">CEO</option>
                                            <option value="founder">founder</option>
                                            <option value="co-founder">co-founder</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='newac1 grid grid-cols-3 gap-2'>
                                    <div className='feild1 py-3'>
                                        <label className='mx-2 text-[18px] font-semibold'>Country*</label><br></br>
                                        <input type="text" placeholder='Enter Country' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" name='country' onChange={handleInput} value={data.country} />
                                    </div>
                                    <div className='feild1 py-3'>
                                        <label className='mx-2 text-[18px] font-semibold'>State*</label><br></br>
                                        <input type="text" placeholder='Enter State' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" name='state' onChange={handleInput} value={data.state} />
                                    </div>
                                    <div className='feild1 py-3'>
                                        <label className='mx-2 text-[18px] font-semibold'>City*</label><br></br>
                                        <input type="text" placeholder='Enter City' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" onChange={handleInput} name="city" value={data.city} />
                                    </div>
                                </div>
                                <div className='newac1 grid grid-cols-2 cols-span-2'>
                                    <div className='feild1 py-3'>
                                        <label className='mx-2 text-[18px] font-semibold '>Your Work Email*</label><br></br>
                                        <input type="text" placeholder='Your Work  Email' className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" name='email' onChange={handleInput} value={data.email} />
                                    </div>
                                    <div className='feild1 py-3'>
                                        <label className='mx-2 text-[18px] font-semibold '>Wallet*</label><br></br>
                                        <input type="text" placeholder='Your wallet' className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" name='wallet' onChange={handleInput} value={data.wallet} />
                                    </div>
                                </div>
                                <div className='newac1 grid grid-cols-2  gap-5'>
                                    <div className='feild1 py-3'>
                                        <label className='mx-2 text-[18px] font-semibold'>Mobile Number*</label><br></br>
                                        <input type="text" placeholder='Mobile Number*' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" name='mobile' onChange={handleInput} value={data.mobile} />
                                    </div>
                                    {
                                        data.whats_app == 0 ?
                                            <div className='feild1wp flex  lg:md:py-3 sm:py-3 lg:md:mt-[30px] sm:mt-[30px] gap-3'>
                                                <input type="checkbox" className="rounded bg-[#DBDBDB] form-control w-[20px] h-[20px] border-t-0 border-l-0 border-r-0 border-b-0" name='whats_app' onChange={handleInput} value={data.whats_app} /><p>WhatsApp</p>
                                            </div> :
                                            <div className='feild1wp flex  lg:md:py-3 sm:py-3 lg:md:mt-[30px] sm:mt-[30px] gap-3'>
                                                <input type="checkbox" className="rounded bg-[#DBDBDB] form-control w-[20px] h-[20px] border-t-0 border-l-0 border-r-0 border-b-0" name='whats_app' onChange={handleInput} value={data.whats_app} checked /><p>WhatsApp</p>
                                            </div>
                                    }
                                </div>
                                <div className='text-center '>
                                    <button className='btn btncompnew bg-[#202040] text-[#fff] py-2 mt-6 px-[45px] rounded-3xl hover:bg-[#3DC0DF] hover:text-[#202040] font-semibold' >update Account</button>
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
    res: state.fetchCompanyView,
    update: state.CompanyProfileUpadte
})
export default connect(mapStateToProps)(Editprofile)