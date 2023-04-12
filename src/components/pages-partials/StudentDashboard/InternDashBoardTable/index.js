import React, { useEffect, useState } from 'react'
import { fetchDashboardDataOfUser } from '../../../../store/action/user/GetData';
import { connect } from 'react-redux';

const InternDashBoardTable = ({ dispatch, res }) => {

    const [intern, setIntern] = useState([]);

    useEffect(() => {
        dispatch(fetchDashboardDataOfUser())
    }, [])

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        if (data) {
            const courser = data.internshipData
            setIntern(courser);
        }
    }, [res]);
    return (
        <>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <p className='text-[20px] font-semibold ml-2 text-[#212A41]'>InternShip Data</p>
                            <table class="min-w-full text-center text-sm font-light">
                                <thead
                                    class="border-b bg-[#212A41] font-medium text-[#fff] dark:border-neutral-500 dark:bg-neutral-900">
                                    <tr>
                                        <th scope="col" class=" px-6 py-4 capitalize">S no</th>
                                        <th scope="col" class=" px-6 py-4 capitalize">company city</th>
                                        <th scope="col" class=" px-6 py-4 capitalize">company name</th>
                                        <th scope="col" class=" px-6 py-4 capitalize">status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        intern[0] ? intern.map((val, index) => {
                                            return (
                                                <>
                                                    <tr class="border-b dark:border-neutral-500">
                                                        <td class="whitespace-nowrap  px-6 py-4 font-medium">{index+1}</td>
                                                        <td class="whitespace-nowrap  px-6 py-4">{val.company_city}</td>
                                                        <td class="whitespace-nowrap  px-6 py-4">{val.company_name}</td>
                                                        <td class="whitespace-nowrap  px-6 py-4">{val.status === 1 ? <button className='bg-[green] px-2 py-1 text-[#fff] rounded font-semibold'>Active</button> : <button className='bg-[red] px-2 py-1 text-[#fff] rounded font-semibold'>inActive</button>}</td>
                                                    </tr>
                                                </>
                                            )
                                        }) :
                                            <tr className='my-3'>
                                                <th colspan="5" ><h1 className='text-[24px] mt-5 capitalize text-[#212A41]'>Data not found</h1></th>
                                            </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    res: state.fetchDashboardDataOfUser
})
export default connect(mapStateToProps)(InternDashBoardTable)