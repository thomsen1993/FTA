import React from 'react'

import Image from 'next/image'
import logo from "../../public/logo/logo.png"
import heroPic from "../../public/logo/gero.png"

const Hero = () => {
  return (
    <header className=''>
        <Image src={logo} alt='FTA logo' width={150} className='my-10 ml-5'></Image>
        <div className='wrapper grid grid-cols-3 gap-10'>
            <p className='text-[#ed0000] text-3xl font-bold text-end my-auto'>Events</p>
            <Image src={heroPic} alt='FTA logo'></Image>
            <p className='text-[#ed0000] text-3xl font-bold my-auto'>Travels</p>
        </div>
    </header>
  )
}

export default Hero