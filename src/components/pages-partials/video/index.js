import React, { useEffect, useState } from 'react'
import { fetchAllVideoView } from "../../../store/action/user/GetData"
import { connect } from 'react-redux'

const index = ({ dispatch, res }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        dispatch(fetchAllVideoView())
    }, []);

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        data && setData(data)
    }, [res])

    return (
        <div className='my-10 min-h-[44vh]'>
            <h1 className='text-[28px] text-center md:w-[30%] w-[60%] m-auto capitlize font-semibold '>Some Pepole dream of success while others Workd on it</h1>

            <div className='grid grid-cols-4 gap-6 md:px-40 px-10 py-10'>
                {
                    data[0] ? data.map((val, key) => {
                        return (
                            <div className='h-[100%] p-2 rounded shadow-lg' key={key}>
                                <video width="750" height="500" controls >
                                    <source src={val.video[0].res} type="video/mp4" />
                                </video>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h1 className='text-[#212A41] uppercase font-bold text-start text-[20px]'>{val.title}</h1>
                                        <p className='text-[#000]  text-start'>{val.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : <div className='col-span-4'>
                        <h1 className='text-center text-[30px] uppercase bg-gray-100 py-40'>enroll first than see the course video</h1>
                        </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    res: state.fetchAllVideoView

});
export default connect(mapStateToProps)(index)
