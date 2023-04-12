import React, { useEffect, useState } from 'react'
import { fetchCompanyView } from '../../../../store/action/compuny/GetData'
import { addCompanyProfile } from '../../../../store/action/compuny/AddData'
import { CompanyProfileRemove } from '../../../../store/action/compuny/UpdateData'
import NextLink from 'next/link';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import FormData from "form-data"

const ProfileSide = ({ dispatch, res, imageAdd, removeImage, }) => {

    const [data, setData] = useState('');
    const [img, setImg] = useState('');
    const form = new FormData();
    form.append('image', img);

    useEffect(() => {
        dispatch(fetchCompanyView())
    }, [])

    useEffect(() => {
        const data = res.data.data && res.data.data.data

        data && setData(data)
    }, [res])

    const handleInput = (e) => {
        setImg(e.target.files[0])

    }

    useEffect(() => {
        img && dispatch(addCompanyProfile(form))
    }, [img])

    useEffect(() => {
        const data = imageAdd.data.data
        dispatch(fetchCompanyView())
        if (data) {
            if (data.code == 200) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
                window.location = "/company-dashboard";
            }
        }
    }, [imageAdd])


    useEffect(() => {
        const data = removeImage.data.data
        dispatch(fetchCompanyView())

        if (data) {
            if (data.code == 200) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
                window.location = "/company-dashboard";
            }
        }
    }, [removeImage])


    const deleteProfile = () => {
        dispatch(CompanyProfileRemove())

    }

    return (
        <div>
            <ToastContainer />
            <div className='md:pl-3 min-h-full sm:border-r-2'>
                <div className='flex'>
                    <div className=''>
                        <div className='d1' >
                            <div className='relative flex'>
                                <div className='absolute z-20  w-[110px] h-[110px] flex items-center top-3 md:left-[-40px] bg-[#E7E7E7] rounded-full border-4 border-[#212A41]' >
                                    {
                                        data.image && <img src={data.image} alt='' className='w-[100%] h-[100%] rounded-full' />
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
                                <div className='flex flex-col items-center xl:ml-[20px] ml-[50px] py-5 rounded'>
                                    <div className='teaname md:pl-[30px] xl:pl-[50px] lg:pl-[50px] sm:pl-[20px] pl-0 py-3 bg-[#EFEFEF]  w-[345px] h-[110px]  shadow z-10'>
                                        <p className='sm:text-[25px] px-4 text-[20px] font-semibold dashname uppercase'>
                                            {data.name}
                                        </p>
                                        <p className='text-[18px] px-4 font-medium mb-0 dashtwo'>{data.your_name}</p>
                                    </div>
                                    <div className='teadetail studdetail px-3 py-3 bg-[#EFEFEF]  w-[340px] h-[100%]  shadow ml-[-20px] '>
                                        <div className='mainstudbtn flex justify-center gap-4 py-3 '>

                                            <div className='studbtn1'>
                                                <NextLink href='/company-dashboard/edit'><button className='bg-[#212A41] text-[#fff] text-[18px] font-semibold px-5 py-2 rounded uppercase'>EDIT PROFILE</button></NextLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center my-4'>
                            <NextLink href='/company-dashboard/post-internship'> <button className='bg-[#212A41]  text-[#fff] text-[18px] font-semibold px-5 py-2 my-3 rounded uppercase'>NEW INTERNSHIP</button></NextLink>
                            <NextLink href='/company-dashboard/job-preferences'> <button className='bg-[#212A41] text-[#fff] text-[18px] font-semibold px-5 py-2 rounded uppercase'>NEW JOB</button></NextLink>
                        </div>
                        <div className='flex flex-col ml-[40px]  gap-4 pb-8'>
                            <NextLink href="/company-dashboard" className={`text-[20px] px-4 font-semibold hover:bg-[#212A41] hover:text-[#ffff] rounded py-2 active:bg-[gray] `}>Dashboard</NextLink>
                            <NextLink href="/company-dashboard/job-view" className='text-[20px] px-4 font-semibold hover:bg-[#212A41] hover:text-[#ffff] rounded py-2 active:bg-[gray]'>Jobs</NextLink>
                            <NextLink href="/company-dashboard/internship-view" className='text-[20px] px-4 font-semibold hover:bg-[#212A41] hover:text-[#ffff] rounded py-2 '>Internship</NextLink>
                            {/* <NextLink href="/company-dashboard/all-apply-user" className='text-[20px] px-4 font-semibold hover:bg-[#212A41] hover:text-[#ffff] rounded py-2 '>Appied User</NextLink> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    res: state.fetchCompanyView,
    imageAdd: state.addCompanyProfile,
    removeImage: state.CompanyProfileRemove

})
export default connect(mapStateToProps)(ProfileSide)
