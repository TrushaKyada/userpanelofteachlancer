import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate';
import { fetchTainerData } from '../../../../store/action/user/GetData'


const PER_PAGE = 8;
const Trainers = ({ dispatch, res }) => {

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const [value, setValue] = useState(true);

    
    useEffect(() => {
        dispatch(fetchTainerData())
    }, [])

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        setData(data)
    }, [res])
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const currentpage=data && data.slice(offset, offset + PER_PAGE).map((item, index) => {
        return (
            <>
                <div className='tt1 flex my-2 rounded'>
                    <div className='train1  bg-[#fff] flex flex-col w-[270px] h-[380px] shadow-md rounded'>
                        <div className='traimg '>
                            <img src={item.profile} className="w-[270px] h-[240px]"></img>
                        </div>
                        <div className='tratext px-3'>
                            <h5 className='uppercase text-[18px] font-semibold text-center pt-5'>{item.first_name} {item.last_name}</h5>
                            <p className='text-center text-[15px] mx-10 py-1'>{item.position}</p>
                            <hr className='mx-10'></hr>
                            <p className='text-center mx-10 text-[13px] py-1'>{item.experience} experience</p>
                        </div>
                    </div>
                </div>
            </>
        )
    })
    
  
    const pageCount =data &&  Math.ceil(data.length / PER_PAGE);

    return (
        <div>
            <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 mt-[20px]'>
                <h1 className='text-[35px] text-center font-semibold'>Meet Our Trainers</h1>
               
                    {
                      value ? <> <div className='maintrain grid xl:lg:grid-cols-4 flex justify-center '>{currentpage}</div></>  : data.map((item, index) => {
                            return (
                                <>
                                    <div className='tt1 flex my-2 rounded'>
                                        <div className='train1  bg-[#fff] flex flex-col w-[270px] h-[380px] shadow-md rounded'>
                                            <div className='traimg '>
                                                <img src={item.profile} className="w-[270px] h-[240px]"></img>
                                            </div>
                                            <div className='tratext px-3'>
                                                <h5 className='uppercase text-[18px] font-semibold text-center pt-5'>{item.first_name} {item.last_name}</h5>
                                                <p className='text-center text-[15px] mx-10 py-1'>{item.position}</p>
                                                <hr className='mx-10'></hr>
                                                <p className='text-center mx-10 text-[13px] py-1'>{item.experience} experience</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        previousLinkClassName={"pagination__link"}
                        nextLinkClassName={"pagination__link"}
                        disabledClassName={"pagination__link--disabled"}
                        activeClassName={"pagination__link--active"}>
                    </ReactPaginate>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    res: state.fetchTainerData
})


export default connect(mapStateToProps)(Trainers)
