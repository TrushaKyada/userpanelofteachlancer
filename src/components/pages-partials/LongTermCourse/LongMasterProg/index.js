import React from 'react'

const LongTermMasterProg = () => {
    const tanaydata = [
        {
            id: "1",
            text: "Are there any upfront recruiting or contractual costs?"
        },
        {
            id: "2",
            text: "How much time does it take to get candidates through The DriveSales™?"
        },
        {
            id: "3",
            text: "What type of sales talents are available at The DriveSales™?"
        },
        {
            id: "4",
            text: "Do you help in hiring part-time, sales consultants and sales trainers’ "
        },
        {
            id: "5",
            text: "Where are your sales talents located?"
        },
        {
            id: "6",
            text: "What are your charges?"
        }
    ]
    return (
        <div className='master'>
            <h1 className='text-center text-[35px] font-semibold'>What will you Master in the Program?</h1>
            <div className='max-w-4xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 mt-[20px]'>
                <div className="row d-flex justify-content-center  mb-3 gap-5">
                    {
                        tanaydata.map((val) => {
                            return (
                                <>

                                    <div className="col-md-5 masterp w-[370px]">
                                        <p className='px-5 py-3 text-center '>{val.text}</p>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default LongTermMasterProg