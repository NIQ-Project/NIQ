import React from 'react'
import BigLogoM from '../pictures/BigLogoM.png'

export default function Home () {
  return (
    <div className='text-center ' >
      <div style={{ height: '100vh' }} >
        <img id='big-m' src={BigLogoM} className='bob-down' />
        {/* <p>The Monthly Service Tracker.</p> */}
        <p className='animated animatedFadeInUp fadeInUp' style={{ marginTop: '12vh', color: 'lightgray' }} >The App That Helps You Track Your Monthly Tasks.</p>
      </div>
      <div style={{ height: '100vh' }} className='luxy-el' >
        <img id='big-m' src={BigLogoM} className='bob-down' />
        {/* <p>The Monthly Service Tracker.</p> */}
        <p className='animated animatedFadeInUp fadeInUp' style={{ marginTop: '12vh', color: 'lightgray' }} >The App That Helps You Track Your Monthly Tasks.</p>
      </div>
    </div>
  )
}
