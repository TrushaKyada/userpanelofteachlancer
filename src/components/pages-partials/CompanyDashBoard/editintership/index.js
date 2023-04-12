import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import { connect } from 'react-redux'
import { internshipPost } from '../../../../store/action/compuny/AddData'
import { internshipViewById } from '../../../../store/action/compuny/GetData'
import { CompanyIternshipPostUpdate } from '../../../../store/action/compuny/UpdateData'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfileSide from '../Profile/Index'

const EditInternship = ({ dispatch, res, updateres }) => {
    const [data, setData] = useState({
        type: "",
        vacancy: "",
        time: "",
        start_date: "",
        duration: "",
        description: "",
        technology: "",
        stipend: "",
        stipend_salary: "",
        perks: [],
        skills: "",
        active: ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
        if (name == "perks") {
            if (e.target.checked) {
                setData({ ...data, [name]: [...data.perks, value] })
            }
            else {
                setData({ ...data, [name]: [...data.perks].filter((val, index) => val !== value) })
            }
        }
    }

    const postIntanship = () => {
        const id = localStorage.getItem('InernshipId')
        dispatch(CompanyIternshipPostUpdate(data, id))
    }

    useEffect(() => {
        const id = localStorage.getItem('InernshipId')
        dispatch(internshipViewById(id))
    }, [])


    useEffect(() => {
        const data = updateres.data && updateres.data.data
        
        if (data) {
            if (data.code == 200) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,

                });

            }
            setTimeout(() => {
                window.location="/company-dashboard/internship-view"
            }, 2000);
        }
    }, [updateres])

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        data && setData(data)
    }, [res])


    return (
        <>
            <div>
                <ToastContainer />
                <div className='max-w-8xl  justify-between items-center sm:px-12 sm:py-4 lg:justify-start lg:space-x-10 '>
                    <div className='row flex gap-4'>
                        <ProfileSide />
                        <div className='w-[100%] '>
                            <div className='max-w-5xl mx-auto justify-between items-center px-0  sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10 mt-[50px] mb-[50px] rounded'>
                                <div className='border-2 rounded xl:lg:px-[70px] md:px-[30px] md:px-[20px] px-[20px] py-10'>
                                    <h1 className='text-center text-[35px] font-semibold'>Update an Internship</h1>
                                    <div className='py-2 ml-3'>
                                        <p className='text-[18px] font-semibold py-2'>Internship type</p>
                                        <div className='lookfor flex gap-[120px] py-4'>
                                            <div className='flex gap-8'>
                                                {
                                                    data.type == '1' ? <input type="radio" name="type" checked className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="1"></input> : <input type="radio" name="type" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="1"></input>
                                                }
                                                <p className='text-[18px] font-semibold' >Regular (In-office/On-field)</p>
                                            </div>
                                            <div className='flex gap-8'>
                                                {
                                                    data.type == '2' ? <input type="radio" checked name="type" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="2"></input> : <input type="radio" name="type" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="2"></input>
                                                }
                                                <p className='text-[18px] font-semibold' >Work from home</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='py-2 ml-3'>
                                        <p className='text-[18px] font-semibold py-2'>Part-time/Full-time</p>
                                        <div className='lookfor flex gap-[120px] py-4'>
                                            <div className='flex gap-8'>
                                                {
                                                    data.time == '1' ? <input type="radio" checked name="time" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="1"></input> : <input type="radio" name="time" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="1"></input>
                                                }
                                                <p className='text-[18px] font-semibold' >Part-time</p>
                                            </div>
                                            <div className='flex gap-8'>
                                                {
                                                    data.time == '2' ? <input type="radio" name="time" checked className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="2"></input> : <input type="radio" name="time" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="2"></input>
                                                }
                                                <p className='text-[18px] font-semibold' >Full-time</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                                        <div className='feild1 py-3'>
                                            <label className='mx-2 text-[18px] font-semibold ml-4'>Number of openings</label><br></br>
                                            <input type="text" placeholder='e.g. 04' className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-0" name="vacancy" onChange={handleInput} value={data.vacancy} />
                                        </div>
                                    </div>
                                    <div className='py-2 '>
                                        <div className='grid grid-cols-4 gap-2'>
                                            <div className='col-span-2'>
                                                <p className='text-[18px] font-semibold py-2 px-3'>Internship start date</p>
                                                <input type='date' name='start_date' className='rounded-3xl bg-[#DBDBDB] border-0 w-[100%]' onChange={handleInput} value={data.start_date.slice(0, 10)}></input>
                                            </div>
                                            <div className='col-span-2 '>
                                                <p className='text-[18px] font-semibold py-2'>Duration</p>
                                                <input type="text" name="duration" placeholder='Shorter the Duration, More the Applications' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-0" onChange={handleInput} value={data.duration} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                                        <div className='feild1 py-3'>
                                            <label className='mx-2 text-[18px] font-semibold ml-4'>Discription</label><br></br>
                                            <textarea type="text" name="description" placeholder="Selected Intern’s Day-to-Day Resposibility Include" className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[190px] form-control w-[100%] border-0" onChange={handleInput} value={data.description}></textarea>
                                        </div>
                                    </div>
                                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                                        <div className='feild1 py-3'>
                                            <label className='mx-2 text-[18px] font-semibold ml-4'>Technology</label><br></br>
                                            <input type="text" placeholder='technology' name="technology" className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-0" onChange={handleInput} value={data.technology} />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <label className='mx-2 text-[18px] font-semibold ml-4 py-1'>Stipend</label><br></br>
                                        <div className='stipend flex py-5 gap-[50px]'>
                                            <div className='stip1 flex gap-[50px] ml-4'>
                                                <div className='flex gap-8'>
                                                    {
                                                        data.stipend == 'fixed' ? <input type="radio" checked name="stipend" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0'
                                                            onChange={handleInput} value="fixed"></input> : <input type="radio" name="stipend" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0'
                                                                onChange={handleInput} value="fixed"></input>
                                                    }
                                                    <p className='text-[18px] font-semibold'>Fixed</p>
                                                </div>
                                                <div className=' flex gap-8'>
                                                    {
                                                        data.stipend == 'negotiable' ? <input type="radio" checked name="stipend" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0'
                                                            onChange={handleInput} value="negotiable"></input> : <input type="radio" name="stipend" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0'
                                                                onChange={handleInput} value="negotiable"></input>
                                                    }
                                                    <p className='text-[18px] font-semibold'>Negotiable</p>
                                                </div>
                                            </div>
                                            <div className='stip1 flex gap-[50px] ml-4'>
                                                <div className=' flex gap-8'>
                                                    {
                                                        data.stipend == 'performance based' ? <input type="radio" checked name="stipend" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0'
                                                            value="performance based" onChange={handleInput}></input> : <input type="radio" name="stipend" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0'
                                                                value="performance based" onChange={handleInput}></input>
                                                    }
                                                    <p className='text-[18px] font-semibold'>Performance based</p>
                                                </div>
                                                <div className='flex gap-8'>
                                                    {
                                                        data.stipend == 'unpaid' ? <input type="radio" checked name="stipend" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="unpaid" ></input> : <input type="radio" name="stipend" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="unpaid" ></input>
                                                    }
                                                    <p className='text-[18px] font-semibold'>unpaid</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        data.stipend == "fixed" && <div className='stip2 flex gap-3 ml-4 py-3'>
                                            <div className='stipend2 flex gap-3'>
                                                <div className='doller1 bg-[#DBDBDB] form-control w-[75px] pl-5 rounded text-[18px] font-semibold pt-1 text-start'>
                                                    <p className=''>$</p>
                                                </div>
                                                <input type="text" className='bg-[#DBDBDB] w-[165px] rounded form-control w-[20%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0' placeholder="e.g. 10000" name="stipend_salary" onChange={handleInput} value={data.stipend_salary}></input>
                                                <div className='doller1 bg-[#DBDBDB] w-[115px] form-control pl-5 rounded text-[18px] font-semibold pt-1'>
                                                    <p>/month</p>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    <div className='py-2 ml-4'>
                                        <label className='text-[18px] font-semibold'>Perks</label>
                                        <div className='perks flex gap-[100px]'>
                                            <div className='insideperks py-2'>
                                                <div className='flex gap-8 py-2'>
                                                    {
                                                        data.perks.includes("Certificate") ? <input type="checkbox" checked name="perks" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="Certificate"></input> : <input type="checkbox" name="perks" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="Certificate"></input>
                                                    }
                                                    <p className='text-[18px] font-semibold'  >Certificate</p>
                                                </div>
                                                <div className='flex gap-8 py-2'>
                                                    {
                                                        data.perks.includes("Flexible work hours") ? <input type="checkbox" checked name="perks" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="Flexible work hours"></input> : <input type="checkbox" name="perks" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="Flexible work hours"></input>
                                                    }
                                                    <p className='text-[18px] font-semibold' >Flexible work hours</p>
                                                </div>
                                                <div className='flex gap-8 py-2'>
                                                    {
                                                        data.perks.includes("Informal dress code") ? <input type="checkbox" checked name="perks" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="Informal dress code"></input> : <input type="checkbox" name="perks" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="Informal dress code"></input>
                                                    }
                                                    <p className='text-[18px] font-semibold'>Informal dress code</p>
                                                </div>
                                            </div>
                                            <div className='insideperks py-2'>
                                                <div className='flex gap-8 py-2'>
                                                    {
                                                        data.perks.includes("Letter of recommendation") ? <input type="checkbox" checked name="perks" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="Letter of recommendation"></input> : <input type="checkbox" name="perks" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="Letter of recommendation"></input>
                                                    }
                                                    <p className='text-[18px] font-semibold'>Letter of recommendation</p>
                                                </div>
                                                <div className='flex gap-8 py-2'>
                                                    {
                                                        data.perks.includes('5 Days a Week') ? <input type="checkbox" checked name="perks" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="5 Days a Week"></input> : <input type="checkbox" name="perks" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="5 Days a Week"></input>
                                                    }
                                                    <p className='text-[18px] font-semibold'>5 Days a Week</p>
                                                </div>
                                                <div className='flex gap-8 py-2'>
                                                    {
                                                        data.perks.includes('Free snacks & beverages') ? <input type="checkbox" checked name="perks" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="Free snacks & beverages"></input> : <input type="checkbox" name="perks" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="Free snacks & beverages"></input>
                                                    }
                                                    <p className='text-[18px] font-semibold' >Free snacks & beverages</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                                        <div className='feild1 py-3'>
                                            <label className='mx-2 text-[18px] font-semibold ml-4'>Skills required</label><br></br>
                                            <input type="text" placeholder='e.g. Java' name="skills" className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-0" onChange={handleInput} value={data.skills} />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 ml-4 py-3'>
                                        <div className='flex gap-8 '>
                                            {
                                                data.active == '1' ? <input type="radio" name="active" checked className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="1"></input> : <input type="radio" name="active" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="1"></input>
                                            }
                                            <p className='text-[18px] font-semibold sm:mr-[50px]' >Active</p>
                                        </div>
                                        <div className='flex gap-8'>
                                            {
                                                data.active == '2' ? <input type="radio" checked name="active" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="2"></input> : <input type="radio" name="active" className='w-[25px] h-[25px] bg-[#D9D9D9] rounded border-0' onChange={handleInput} value="2"></input>
                                            }
                                            <p className='text-[18px] font-semibold sm:mr-[50px]' >Non-Active</p>
                                        </div>
                                    </div>
                                    <div className='mainpostbtn flex mt-[80px] justify-center gap-5'>
                                        <div className=''>
                                            <button className='bg-[#202040] text-[#fff] text-[18px] font-semibold uppercase py-2 px-5 rounded-3xl' onClick={postIntanship}>POST internship</button>
                                        </div>
                                    </div>
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
    res: state.internshipViewById,
    updateres: state.CompanyIternshipPostUpdate
})
export default connect(mapStateToProps)(EditInternship)