import React, { useEffect, useState } from 'react'
import Profile from "../Profile/Index"
import { fetchAssignmnetView } from "../../../../store/action/user/GetData";
import DownloadIcon from '@mui/icons-material/Download';
import { connect } from 'react-redux'
import jsPDF from 'jspdf'

const index = ({ dispatch, res }) => {

  const [data, setData] = useState("")
  useEffect(() => {
    dispatch(fetchAssignmnetView())
  }, []);

  useEffect(() => {
    const data = res.data && res.data.data && res.data.data.data
    data && setData(data)
    console.log("hello", data)
  }, [res])

  const generatepdf = (key) => {
    var doc = new jsPDF({
      orientation: "landscape",
    });
    doc.html(document.querySelector(`#content${key}`), {
      callback: function (pfd) {
        doc.save("file.pdf");
      },
      x: 40,
      y: 20,
      html2canvas: {
        scale: 1,
        width: 2700,
      },
    });
  };

  return (
    <div>
      <div className='max-w-8xl mx-auto justify-between items-center px-4 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 '>
        <div className='row flex gap-5'>
          <Profile />
          <div className='max-w-7xl  mx-auto md:w-[70%] w-[100%] items-center  sm:px-6 sm:py-14 lg:px-4 lg:justify-start lg:space-x-10 '>
            <div className='grid grid-cols-5 gap-4'>
              {
                data && data.map((val, key) => {
                  return <>
                    <div>
                      <div className='rounded border w-[200px] h-[200px] cursor-pointer Conatinerhover' >
                        <img src={val.image[0].res} alt='' className='w-[100%] h-[100%] imagehover' id={`content${key}`} />
                        <div class="middle">
                          <div className="text-center text-[white] bg-[#3DC0DF] rounded-full py-4 px-4">
                            <button className=''><DownloadIcon className='bg-[#212A41] rounded-full py-1 text-[35px]' onClick={() => generatepdf(key)} /></button>
                          </div>
                        </div>
                      </div>
                      <p>Practice Question {key}</p>
                    </div>
                  </>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  res: state.fetchAssignmnetView,
})
export default connect(mapStateToProps)(index) 