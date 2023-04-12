import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ProfileSide from '../Profile/Index'
import { fetchApplyAllUser } from '../../../../store/action/compuny/GetData'


const InternshipApply = ({ dispatch, res }) => {

    const [applydata, setApplydata] = useState([]);
  

    useEffect(() => {
        dispatch(fetchApplyAllUser())
    }, [])

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        console.log(data)
        if (data) {
            setApplydata(data)
        }
    }, [res])
   

 
    return (
        <>
            <div className='max-w-8xl  items-center sm:px-6 sm:py-4   lg:justify-start lg:space-x-10 '>
                <div className='row flex gap-4'>
                    {/* <ProfileSide value="dashboard"/> */}
                    <div className='w-[100%]'>
                    <div className='h-[30vh] bg-gray-50 relative py-40 '>
                            <h1 className=' text-center text-[30px] font-bold capitalize'>Appled User</h1>
                        </div>
                        <div className='grid lg:grid-cols-2 gap-6'>
                        {
                            applydata.map((val) => {
                                return (
                                    <>
                                            <div className='flex  px-10 py-4 mt-6 w-[100%] my-3 border rounded shadow-lg'>
                                                <div className='w-[80%] px-5'>
                                                    <div className='capitalize  flex w-[100%]' >
                                                        <div className='font-semibold text-[20px] self-center '>{val.username}</div>
                                                        <div className='self-center mx-2 '>{val.types == 1 ? <p className='text-green-800 px-2 py-1 capitalize bg-green-200'>Part Time</p> : <p className='text-[green] capitalize bg-green-200 py-1 px-2 rounded'>full Time</p>}
                                                        </div>
                                                    </div>
                                                    <h2 className='text-[18px] text-gray-900 mt-4'>{val.position}</h2>
                                                    <p className='text-[14px] mb-4 text-gray-700'>{val.user_email}</p>
                                                   
                                                </div>
                                                <div>
                                                        {val.status == 1 && <button className='px-3 py-2 text-gray-600 bg-[#212A41] text-[#ffff] rounded  '>Apply</button>}
                                                        {val.status == 2 && <button className='px-3 py-2 text-gray-600 bg-blue-700 text-[#ffff] rounded  ' onClick={() => dispatch(hiredUser(val.applied_id))}>process</button>}
                                                        {val.status == 3 && <button className='px-3 py-2 text-gray-600 bg-green-600 text-[#ffff] rounded ' onClick={() => dispatch(hiredUser(val.applied_id))}>Hired</button>}
                                                        {val.status == 4 && <button className='px-3 py-2 text-gray-600 bg-green-600 text-[#ffff] rounded ' onClick={() => dispatch(hiredUser(val.applied_id))}>Reject</button>}
                                                    </div>

                                            </div>
                                        </>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    res: state.fetchApplyAllUser,
})

export default connect(mapStateToProps)(InternshipApply)