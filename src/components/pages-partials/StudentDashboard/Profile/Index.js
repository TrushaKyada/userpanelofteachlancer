import React, { useEffect, useState } from 'react'
import NextLink from 'next/link';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { fetchUserView } from '../../../../store/action/user/GetData'
import { addUserProfile } from '../../../../store/action/user/AddData'
import { UserProfileRemove } from '../../../../store/action/user/UpdateData'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormData from "form-data"


const ProfileSide = ({ dispatch, res, imageAdd, removeImage ,value}) => {

    const [data, setData] = useState('');
    const [img, setImg] = useState('');
    const [toggle, setToggle] = useState(false)
    const form = new FormData();
    form.append('profile', img);

    useEffect(() => {
        dispatch(fetchUserView())
    }, [])

    useEffect(() => {
        const data = res.data.data && res.data.data.data
        data && setData(data)
        data && localStorage.setItem("userId", data._id)
    }, [res])

    const handleInput = (e) => {
        setImg(e.target.files[0])

    }

    useEffect(() => {
        img && dispatch(addUserProfile(form))
    }, [img])

    useEffect(() => {
        const data = imageAdd.data.data

        dispatch(fetchUserView())
        if (data) {
            if (data.code == 200) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,

                });

            }
        }
    }, [imageAdd])

    useEffect(() => {
        const data = removeImage.data.data
        dispatch(fetchUserView())
        if (data) {
            if (data.code == 200) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,

                });

            }
        }
    }, [removeImage])


    const deleteProfile = () => {
        dispatch(UserProfileRemove())
       
    }

    return (
        <>
            <div>
                <ToastContainer />
                <div className='md:pl-10 min-h-full sm:border-r-2'>
                    <div className='flex'>
                        <div className=''>
                            <div className='d1' >
                                <div className='relative flex'>
                                    <div className='absolute z-20  w-[110px] h-[110px] flex items-center top-3 md:left-[-40px] bg-[#E7E7E7] rounded-full border-4 border-[#212A41]' >
                                        {
                                            data.profile && <img src={data.profile} alt='' className='w-[100%] h-[100%] rounded-full' />
                                        }

                                        <div className='py-5 absolute bottom-[5%]  right-[10%] z-10 opacity-0 hover:opacity-100'>
                                            <div className='bg-[#fff] border-b-2 px-1'>
                                                <input type="file" id="upload" hidden name='image' onChange={handleInput} />
                                                <label for="upload" className='h-[36px] cursor-pointer '>ADD </label>
                                            </div>
                                            <div className='bg-[#fff] px-1' ><button onClick={deleteProfile}>REMOVE</button> </div>
                                        </div>
                                        <div className=' absolute bottom-[5%] right-[0%]  rounded-full '>
                                            <div className='bg-[#fff] w-[100%] p-2 rounded-full'>
                                                <AddAPhotoIcon />
                                            </div>
                                        </div>

                                    </div>
                                    <div className='flex flex-col items-center ml-[50px] py-5 rounded'>
                                        <div className='teaname md:pl-[30px] xl:pl-[50px] lg:pl-[50px] sm:pl-[20px] pl-0 py-3 bg-[#EFEFEF]  w-[345px] h-[110px]  shadow z-10'>
                                            <p className='text-[30px] font-semibold dashname'>
                                                {data?.first_name} {data?.last_name}
                                            </p>
                                            <p className='text-[18px] font-medium mb-0 dashtwo'>{data?.email}</p>
                                        </div>
                                        <div className='teadetail studdetail px-3 py-3 bg-[#EFEFEF]  w-[340px] h-[100%]  shadow ml-[-20px]'>
                                            <div className='mainstudbtn flex justify-center gap-4 py-3'>
                                                <div className='studbtn1'>
                                                    <NextLink href='/student-dashboard/edit'><button className='bg-[#212A41] text-[#fff] text-[18px] font-semibold px-5 py-2 rounded uppercase'>EDIT PROFILE</button></NextLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col ml-[60px] gap-4 pb-8'>
                                <NextLink href="/student-dashboard" className={`text-[20px] font-semibold hover:bg-[#212A41] hover:text-[#ffff] rounded py-2  `}>Dashboard</NextLink>
                                <NextLink href="" className='text-[20px] font-semibold hover:bg-[#212A41] hover:text-[#ffff] rounded py-2' onClick={() => setToggle(!toggle)}>Applys {toggle ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} </NextLink>
                                {
                                    toggle &&
                                    <div className='insideinter flex flex-col ml-10 gap-2'>
                                        <NextLink href="/student-dashboard/apply-job" className='hover:bg-[#212A41] hover:text-[#ffff] rounded py-2 text-[20px] font-medium '>Jobs</NextLink>
                                        <NextLink href="/student-dashboard/apply-internship" className='hover:bg-[#212A41] hover:text-[#ffff] rounded py-2 text-[20px] font-medium'>Internship</NextLink>
                                    </div>
                                }
                                <NextLink href="/student-dashboard/career-details" className='text-[20px] font-semibold hover:bg-[#212A41] hover:text-[#ffff] rounded py-2'>Career</NextLink>
                                <NextLink href="/student-dashboard/prectice" className='text-[20px] font-semibold hover:bg-[#212A41] hover:text-[#ffff] rounded py-2'>Practice Question</NextLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const mapStateToProps = (state) => ({
    res: state.fetchUserView,
    imageAdd: state.addUserProfile,
    removeImage: state.UserProfileRemove,
 


})
export default connect(mapStateToProps)(ProfileSide)

