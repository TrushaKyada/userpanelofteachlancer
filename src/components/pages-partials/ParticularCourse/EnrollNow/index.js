import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { addEnroll, addPayment } from "../../../../store/action/user/AddData"
import { fetchTimeLecture, fetchPaymentDetailsById } from '../../../../store/action/user/GetData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillClipboard2CheckFill } from 'react-icons/bs'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Cookies from "js-cookie";

const user_id = Cookies.get('userId')

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}
const EnrollNow = ({ dispatch, res, adderoll, paymentData, paybyID }) => {

    const [massage, setMassge] = useState([]);
    const [time, setTime] = useState([]);
    const [alreadyPay, setAlreadyPay] = useState()
    const [showModel1, setShowModel1] = useState(false);
    const [payment, setPayment] = useState({
        username: "",
        email: "",
        description: "",
        amount: "",
        cardNumber: "",
        cvc: "",
        exMonth: "",
        exYear: ""
    });

    const [enroll, setEnroll] = useState({})
    var fees;

    useEffect(() => {
        fees = localStorage.getItem("fees")
    }, [])

    //already paied

    useEffect(() => {
        dispatch(fetchPaymentDetailsById());
    }, [])

    useEffect(() => {
        const feesData = paybyID.data && paybyID.data.data
        console.log("feesssData", feesData)
        if (feesData) {
            feesData.code ? setAlreadyPay(feesData.code) : ""
        }
    }, [paybyID])

    console.log(alreadyPay)

    const paymentHandle = async (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setPayment({ ...payment, [name]: value })
    }

    const handleClose = () => setShowModel1(false);

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        data && setTime(data);
    }, [res])

    useEffect(() => {
        const course_id = localStorage.getItem("courseId")
        dispatch(fetchTimeLecture(course_id))
    }, []);

    const EnrollAdd = (e, id, code, userId) => {
        e.preventDefault();
        const token = Cookies.get("token")
        if (!token) {
            window.location = "/student-login";
        }
        else {
            setShowModel1(true);
            setEnroll({ "course_id": id, "code": code, "userId": userId })
        }
    }

    const pay = async (e) => {
        e.preventDefault();
        await dispatch(addPayment(payment, enroll))
        await dispatch(addEnroll(enroll))
        handleClose()
    }

    useEffect(() => {
        const data = paymentData.data && paymentData.data
        data && setMassge(data)
    }, [paymentData])

    useEffect(() => {
        const data = adderoll.data && adderoll.data.data
        data && setMassge(data)
    }, [adderoll])

    useEffect(() => {
        if (massage) {
            if (massage.code === 201) {
                toast.success(massage.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
            }
            else if (massage.code === 406) {
                toast.warning(massage.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
            }
            if (massage.code == 403) {
                toast.warning("YOU DON'T HAVE ACCESS WITHOUT LOGIN ", {
                    position: toast.POSITION.TOP_CENTER,

                });
                setTimeout(() => {
                    window.location = "/student-login"
                }, 1500)
            }
        }
    }, [massage])

    return (
        <>
            <div>
                <ToastContainer />
                <div className='max-w-7xl mx-auto justify-between items-center px-2 py-5 sm:px-6 sm:py-4 lg:px-6 lg:justify-start  mt-[20px]'>
                    <h1 className='text-left text-[35px] font-semibold'>Enroll Now!</h1>
                    <div className="schedual1">
                        <div className="">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                                <div className="sm:px-4 pt-4 flex-auto">
                                    <div className="tab-content tab-space">
                                        <div id="link1">
                                            <div className='grid grid-cols-7  sm:place-content-center'>
                                                <div className='col-span-2 sm:place-self-center'>
                                                    <p className='text-[18px] font-semibold'>DATES</p>
                                                </div>
                                                <div className='col-span-2 sm:place-self-center'>
                                                    <p className='text-[18px] font-semibold'>HOURS</p>
                                                </div>
                                                <div className='col-span-2 sm:place-self-center'>
                                                    <p className='text-[18px] font-semibold'>COURSE NAME</p>
                                                </div>
                                            </div>
                                            <hr className='m-0'></hr>
                                            {
                                                time.map((val, key) => {
                                                    return (
                                                        <>
                                                            <div className='grid grid-cols-7  py-2 sm:place-content-center gap-2'>
                                                                <div className='col-span-2 sm:place-self-center '>
                                                                    <div className='flex flex-col'>
                                                                        <p className='md:text-[18px] font-semibold text-[15px] mb-2' >{val.start_date} to {val.end_date}</p>
                                                                        <p className='md:text-[15px] text-[12px] mb-0'><span className='font-bold capitalize'>{val.day[0]}</span> to <span className='font-bold capitalize'>{val.day[1]}</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className='col-span-2 sm:place-self-center'>
                                                                    <div className='flex flex-col'>
                                                                        <p className='md:text-[18px] font-semibold text-[15px] mb-2'>{val.start_time}PM to {val.end_time}PM</p>
                                                                        <p className='md:text-[15px] text-[12px] mb-0 capitalize'>{val.timezone}</p>
                                                                    </div>
                                                                </div>
                                                                <div className='col-span-2'>
                                                                    <div className='text-center py-3'>
                                                                        <p className='md:text-[15px] font-semibold text-[12px] mb-0 capitalize'>{val.course_name}</p>
                                                                    </div>
                                                                </div>
                                                                <div className='col-span-1'>
                                                                    <div className='mt-3'>
                                                                        {
                                                                            val.slot <= 0 ? <button className='float-start bg-[#3DC0DF] text-[#fff] text-[15px] md:px-3 md:py-2 rounded text-center hover:bg-[#fff] hover:text-[#3DC0DF] hover:border hover:border-[#3DC0DF] capitalize' onClick={(e) => EnrollAdd(e, val.course_id, val.code)}>SOLD OUT</button> : alreadyPay === 404 ? <button className='float-start bg-[#3DC0DF] text-[#fff] text-[15px] md:px-3 md:py-2 rounded text-center hover:bg-[#fff] hover:text-[#3DC0DF] hover:border hover:border-[#3DC0DF] capitalize' onClick={(e) => EnrollAdd(e, val.course_id, val.code, user_id)}>Enroll now</button> : alreadyPay === 200 && <button><BsFillClipboard2CheckFill className='text-[35px] text-[green]'/>  </button>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div >
                                                            <hr></hr>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Modal
                open={showModel1}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        <p class="text-xl font-semibold text-center uppercase">Payment Details</p>
                    </Typography>
                    <Typography id="transition-modal-description">
                        <div class="flex justify-center items-center rounded-3xl">
                            <div class="h-auto w-full bg-white p-3 rounded-lg space-y-2">
                                <div class="input_text flex flex-col">
                                    <lable className=" text-[#212a41] text-sm  font-semibold">Cardholder Name</lable>
                                    <input type="text" class="rounded" name='username' placeholder="John Row" onChange={(e) => { paymentHandle(e) }} value={payment.username} />
                                </div>
                                <div class="input_text flex flex-col">
                                    <label className=" text-[#212a41] text-sm  font-semibold">Cardholder Email</label>
                                    <input type="text" class="rounded" placeholder="Johnrow@gmail.com" name='email' onChange={(e) => { paymentHandle(e) }} value={payment.email} />
                                </div>
                                <div class="input_text flex flex-col">
                                    <label className='text-[#212a41] text-sm  font-semibold'>Description</label>
                                    <input type="text" class="rounded" placeholder="description" name='description' onChange={(e) => { paymentHandle(e) }} value={payment.description} />
                                </div>
                                <div class="input_text flex flex-col">
                                    <label className='text-[#212a41] text-sm  font-semibold'>Card Number</label>
                                    <input type="text" class="rounded" placeholder="0000 0000 0000 0000" name='cardNumber' data-slots="0" data-accept="\d" size="19" onChange={(e) => { paymentHandle(e) }} value={payment.cardNumber} />
                                </div>
                                <div class="input_text flex flex-col">
                                    <label className='text-[#212a41] text-sm  font-semibold'>Amount</label>
                                    <input type="text" class="rounded" placeholder="12000" name='amount' data-slots="0" data-accept="\d" size="19" onChange={(e) => { paymentHandle(e) }} value={payment.amount} />
                                </div>
                                <div class="mt-8 flex gap-2 ">
                                    <div class="input_text flex flex-col">
                                        <label className='text-[#212a41] text-sm  font-semibold'>Expiry month</label>
                                        <input type="text" class="rounded outline-none px-2 focus:border-[#212a41] transition-all w-full border-b" placeholder="mm" name='exMonth' data-slots="my" onChange={(e) => { paymentHandle(e) }} value={payment.exMonth} />
                                    </div>
                                    <div class="input_text flex flex-col">
                                        <label className='text-[#212a41] text-sm  font-semibold'>Expiry year</label>
                                        <input type="text" class="rounded outline-none px-2 focus:border-[#212a41] transition-all w-full border-b" placeholder="yy" name='exYear' data-slots="my" onChange={(e) => { paymentHandle(e) }} value={payment.exYear} />
                                    </div>
                                    <div class="input_text flex flex-col">
                                        <label className='text-[#212a41] text-sm  font-semibold'>CVV</label>
                                        <input type="text" class="rounded outline-none px-2 focus:border-[#212a41] transition-all w-full border-b" placeholder="000" name='cvc' data-slots="0" data-accept="\d" size="3" onChange={(e) => { paymentHandle(e) }} value={payment.cvc} />
                                    </div>
                                </div>
                                <div class="flex justify-center mt-4"> <button class="outline-none pay h-12 bg-[#3dc0df] text-white mb-3 hover:bg-orange-700 rounded-lg w-1/2 cursor-pointer transition-all" onClick={pay}>Pay</button> </div>
                            </div>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

const mapStateToProps = (state) => ({
    res: state.fetchTimeLecture,
    adderoll: state.addEnroll,
    paymentData: state.addPayment,
    paybyID: state.fetchPaymentDetailsById
})

export default connect(mapStateToProps)(EnrollNow)