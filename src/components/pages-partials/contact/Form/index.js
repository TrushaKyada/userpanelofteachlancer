import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getInToTouch } from '../../../../store/action/Comman/adddata';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({dispatch,res}) => {
    const navigation = {
        social: [
            {
                id: 1,
                name: 'Facebook',
                href: 'https://www.facebook.com/vaionex/',
                icon: (props) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
            {
                id: 2,
                name: 'Instagram',
                href: 'https://www.instagram.com/vaionex/',
                img: '../img/Asset 5 16.png'
            },
            {
                id: 3,
                name: 'facebook',
                href: 'https://www.facebook.com//vaionex_corp',
                img: '../img/Asset 5 15.png'
            },
            {
                id: 4,
                name: 'LinkedIn',
                href: 'https://www.linkedin.com/company/vaionex/',
                img: '../img/Asset 5 14.png'
            },
            {
                id: 5,
                name: 'LinkedIn',
                href: 'https://www.linkedin.com/company/vaionex/',
                img: '../img/Asset 5 13.png'
            },
            {
                id: 6,
                name: 'Twitter',
                href: 'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D',
                img: '../img/Asset 5 12.png'
            },
            {
                id: 7,
                name: 'youtube',
                href: 'https://www.youtube.com/company/vaionex/',
                img: '../img/Asset 5 10.png'
            },

        ],
    }



    const [data, setData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const onSubmit = ()=>{
        dispatch(getInToTouch(data))
    }

    useEffect(() => {
        const dataa = res.data && res.data.data && res.data.data.data
        console.log("data:::",dataa)
        if (dataa && dataa.code == 201) {
            if (dataa.code == 201) {
                toast.success(dataa.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            }
        }
    }, [res])


    return (
        <>
        <ToastContainer/>
            <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10 mt-[20px]'>
                <div className='grid xl:lg:md:grid-cols-2 sm:grid-cols-1'>
                    <div className='concate1 flex flex-col items-center'>
                        <img src="../img/image 21.png" className='con_imgs img-fluid w-[410px] h-[410px] self-center'></img>
                        <div className="con_icon flex  py-3 justify-center">
                            {navigation.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-400 hover:text-gray-500"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <img src={item.img} alt="" className='mx-[0px]'></img>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='concate2  sm:items-center'>
                        <div className='grid grid-cols-2'>
                            <div className='feild1 py-5'>
                                <label className='mx-2 text-[22px] font-semibold'>Name*</label><br></br>
                                <input type="text" placeholder='Name' className="w-[95%] mt-2 border-2 rounded-full" name="name" onChange={handleInput} value={data.name} />
                            </div>
                            <div className='feild1 py-5'>
                                <label className='mx-2 text-[22px] font-semibold'>Mobile*</label><br></br>
                                <input type="text" placeholder='Mobile' className="w-[90%] mt-2 border-2 rounded-full" name="mobile" onChange={handleInput} value={data.mobile} />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 cols-span-2'>
                            <div className='feild1 py-5'>
                                <label className='mx-2 text-[22px] font-semibold '>Email*</label><br></br>
                                <input type="text" placeholder='Email' className="w-[95%] mt-2  border-2 rounded-full" name="email" onChange={handleInput} value={data.email} />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 cols-span-2'>
                            <div className='feild1 py-5'>
                                <label className='mx-2 text-[22px] font-semibold'>Message*</label><br></br>
                                <textarea cols="50" rows="5" className="w-[95%] mt-2  border-2 rounded-lg" placeholder='Your Message' name="message" onChange={handleInput} value={data.message}></textarea>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button className='uppercase bg-[#3DC0DF] text-[#fff] rounded py-1 px-3' onClick={onSubmit}>send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    res:state.getInToTouch
})

export default connect(mapStateToProps)(Form)