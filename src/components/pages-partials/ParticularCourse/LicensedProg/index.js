import React from 'react'

const Licended = () => {
  return (
    <div className='my-10'>
      <div className="max-w-7xl mx-auto  justify-between items-center px-4 py-5  sm:py-4 lg:px-8 lg:justify-start lg:space-x-10">
        <h1 className='text-center text-[35px] font-semibold'>Yes,you will be licensed with this program</h1>
        <p className='text-center text-[20px] font-medium '>Yes! You will be certified for this program once you submit your assignment!</p>
      </div>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-5  sm:py-4 lg:px-8 lg:justify-start lg:space-x-10">
        <div className='grid md:grid-cols-2 sm:grid-cols-1 xl:lg:md:float-left sm:float-center gap-5 '>
          <div className='lice1 flex flex-col my-5'>
            <div className='offcial'>
              <h5 className='text-[20px] font-semibold'>Official and Verified</h5>
              <p className='text-[17px] font-medium tracking-wide '>Receive an instructor signed certificate with institution's logo to verify your achievements and increase your job prospects.</p>
            </div>
            <div className='shareable'>
              <h5 className='text-[20px] font-semibold'>Easily Shareable</h5>
              <p className='text-[17px] font-medium tracking-wide '>Add the certificate to your CV or your Resume or post it directly on LInkedin.
                You can even post it on instagram and twitter.</p>
            </div>
            <div className='credibility'>
              <h5 className='text-[20px] font-semibold'>Enhances Credibility</h5>
              <p className='text-[17px] font-medium tracking-wide '>Use your certificate to enhance your professional credibility and stand out
                among your peers!</p>
            </div>
          </div>
          <div className='liceimg flex xl:lg:md:justify-end sm:justify-center'>
            <img src='/img/image 4.png' className='w-[550px] h-[370px] md:float-right'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Licended