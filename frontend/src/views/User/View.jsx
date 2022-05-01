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
        <div className='flex flex-col items-center w-full' style={{backgroundImage:`url(${imgTheme})`, height:"45rem"}}>
            {/* Avatar */}
            <img src={Avatar} className='w-32 rounded-full m-3' />

            {/* Description */}
            <p className='m-8 text-black text-xl font-normal'>Lorem ipsum dolor sit amet veritatis ipsam alias eius ? </p>

            {/* Links */}
            <button className='bg-theme1Color text-white font-semibold mt-7 px-5 py-3 w-1/3 md:w-1/2 rounded-sm hoverButtonTheme1'>Listen to my Album !</button>

            <button className='bg-theme1Color text-white font-semibold mt-7 px-5 py-3 w-1/3 md:w-1/2 rounded-sm hoverButtonTheme1'>Streaming Live On Youtube !</button>

            <button className='bg-theme1Color text-white font-semibold mt-7 px-5 py-3 w-1/3 md:w-1/2 rounded-sm hoverButtonTheme1'>Lorem ipsum dolur uncut !</button>

            {/* social media icons */}
            <div className='flex m-10 gap-5'>
                <a href='#'><img src={instagram} className='w-7 h-full' /></a>
                <a href='#'><img src={facebook} className='w-4 h-full' /></a>
                <a href='#'><img src={twitter} className='w-8 h-full' /></a>
            </div>

            {/* Logo iShare */}
            <img src={logoiShare3} className='m-12' />

            {/* Share */}
            <div className='self-start ml-2'>
                <button className='bg-black text-white font-bold px-5 py-3 w-32 rounded-md'>Share</button>
            </div>

        </div>
    </div>
  )
}

export default view