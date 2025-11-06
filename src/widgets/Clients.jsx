import React from 'react'
import SectionHeading from './SectionHeading'
import image1 from '../assets/CoMSES.png'
import image2 from '../assets/CSDMS_high_res1.png'
import image3 from '../assets/openMI.png'
import image4 from '../assets/ogc.png'
import image5 from '../assets/NNSFC.png'
import image6 from '../assets/NJNU.png'
import image7 from '../assets/nsti_logo1.png'
import image8 from '../assets/NESSDC_logo.png'
import image9 from '../assets/vge.png'

function Clients() {
  return (
    <div>
      <SectionHeading title="合作机构" subTitle="合作事宜请与我们联系。" />
      <svg
        width="98"
        height="256"
        viewBox="0 0 98 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 -z-10 -translate-y-3/4"
      >
        <circle cx="128" cy="128" r="128" fill="url(#paint0_linear_0_386)" />
        <defs>
          <linearGradient
            id="paint0_linear_0_386"
            x1="0"
            y1="0"
            x2="0"
            y2="256"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="0.774017" stop-color="#EAEAEA" />
            <stop offset="1" stop-color="#DFDFDF" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col lg:flex-col items-center gap-8 my-16">
        <div className="grid grid-cols-3 gap-6 justify-items-center items-center">
          <img src={image1} className='w-124 h-24' />
          <img src={image2} className='w-124 h-24' />
          <img src={image3} className='w-124 h-24' />
        </div>
        <div className="grid grid-cols-3 gap-6 justify-items-center items-center">
          <img src={image4} className='w-124 h-24' />
          <img src={image5} className='w-124 h-24' />
          <img src={image6} className='w-124 h-24' />
        </div>
        <div className="grid grid-cols-3 gap-6 justify-items-center items-center">
          <img src={image7} className='w-124 h-24' />
          <img src={image8} className='w-124 h-24' />
          <img src={image9} className='w-124 h-24' />
        </div>
      </div>
    </div>
  )
}

export default Clients