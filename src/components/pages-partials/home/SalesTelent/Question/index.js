import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { connect } from 'react-redux';
import { fetchfaq } from '../../../../../store/action/user/GetData'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Question = ({ dispatch, res }) => {

    const [data, setData] = useState("")

    useEffect(() => {
        dispatch(fetchfaq());
    }, [])

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        data && setData(data)

    }, [res])
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>

            <div className='max-w-6xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-3 md:px-3 lg:justify-start lg:space-x-10 mt-[20px]'>
                <div className='qmain mt-[50px]'>
                    <h1 className='text-center text-[35px] font-semibold' data-aos="zoom-out" data-aos-duration="3000">Frequently Asked Questions</h1>
                    <div className="flex flex-col gap-3 py-6" >
                        <Accordion className='flex flex-col gap-3'>
                            {
                               data &&  data.map((val, key) => {
                                    return <>
                                        <AccordionItem key={key}>
                                            <AccordionItemHeading>
                                                <AccordionItemButton className='flex justify-between bg-gray-200 py-3 px-2 border-slate-500 border-b text-[20px] rounded'>
                                                    <p className='text-[18px]'>{val.question}</p> <ExpandMoreIcon />
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className='bg-gray-100 text-[14px] p-2 rounded'>
                                                <p>
                                                   {val.answer}
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </>
                                })
                            }


                        </Accordion>

                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    res: state.fetchfaq
})
export default connect(mapStateToProps)(Question)