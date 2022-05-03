import React from 'react'
import imgTheme from '../../imgs/img1.jpg'
import Avatar from '../../imgs/avatar.webp'
import instagram from '../../imgs/instagram.png'
import facebook from '../../imgs/facebook.png'
import twitter from '../../imgs/twitter.png'
import logoiShare3 from '../../imgs/logoiShare3.png'

function view() {
  return (
    <div className='parentView'>
        <div className='flex flex-col items-center w-full' style={{backgroundImage:`url(${imgTheme})`, height:"45.1rem"}}>
            {/* Avatar */}
            <img src={Avatar} className='w-32 md:w-20 sm:w-10 rounded-full m-3' />

            {/* Description */}
            <p className='m-8 text-black text-xl md:text-md sm:text-xs sm:font-bold font-normal md:m-3'>Lorem ipsum dolor sit amet ? </p>

            {/* Links */}
            <button className='bg-theme1Color text-white text-medium font-semibold mt-7 px-5 py-3 w-1/3 md:w-1/2 md:text-xs md:mt-2 rounded-sm hoverButtonTheme1'>Listen to my Album !</button>

            <button className='bg-theme1Color text-white text-medium font-semibold mt-7 px-5 py-3 w-1/3 md:w-1/2 md:text-xs md:mt-2 rounded-sm hoverButtonTheme1'>Streaming Live On Youtube !</button>

            <button className='bg-theme1Color text-white text-medium font-semibold mt-7 px-5 py-3 w-1/3 md:w-1/2 md:text-xs md:mt-2 rounded-sm hoverButtonTheme1'>Lorem ipsum dolur uncut !</button>

            {/* social media icons */}
            <div className='flex m-10 gap-5 md:m-7'>
                <a href='#'><img src={instagram} className='w-7 h-full md:w-5' /></a>
                <a href='#'><img src={facebook} className='w-4 h-full md:w-2' /></a>
                <a href='#'><img src={twitter} className='w-8 h-full md:w-6' /></a>
            </div>

            {/* Logo iShare */}
            <img src={logoiShare3} className='mt-12 md:hidden' />

            {/* Share */}
            <div className='self-start ml-2 md:self-center'>
                <button className='bg-black text-white font-bold px-5 py-3 w-32 rounded-md'>Share</button>
            </div>
        </div>
    </div>
  )
}

export default view