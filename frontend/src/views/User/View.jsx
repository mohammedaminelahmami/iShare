import React from 'react'
import Avatar from '../../imgs/avatar.svg'
import github from '../../imgs/github.png'
import facebook from '../../imgs/facebook1.png'
import twitter from '../../imgs/twitter1.png'
import linkdin from '../../imgs/linkdin.png'
import logoiShare3 from '../../imgs/logoiShare3.png'

function view(props) {

  const embedVideo = ()=>{
    alert('Clickked');
  }

  return (
    <div className='parentView'>
        <div className='flex flex-col items-center w-full bg-blue-50'>
            {/* Avatar */}
            <img src={Avatar} className='w-32 md:w-20 sm:w-10 rounded-full m-3' />

            {/* @username */}
            <center className='underline font-bold md:text-xs text-black'>@{props.username}</center>

            {/* Description */}
            <p className='m-8 text-black text-xl font-semibold md:text-md sm:text-xs md:m-3'>Hey, I'm Amine Welcome to ...</p>

            {/* Links */}
            <button className='bg-ffirstColor text-white text-medium font-semibold mt-7 px-5 py-3 w-1/3 md:text-xs md:mt-2 md:w-52 rounded-md hoverButtonTheme1'>Listen to my Album !</button>
            <button onClick={embedVideo} className='bg-firstColor text-white text-medium font-semibold mt-7 px-5 py-3 w-1/3 md:text-xs md:w-52 md:mt-2 rounded-md hoverButtonTheme1'>Streaming Live On Youtube !</button>
            <button className='bg-firstColor text-white text-medium font-semibold mt-7 px-5 py-3 w-1/3 md:text-xs md:w-52 md:mt-2 rounded-md hoverButtonTheme1'>Lorem ipsum dolur uncut !</button>
            <button className='bg-firstColor text-white text-medium font-semibold mt-7 px-5 py-3 w-1/3 md:text-xs md:w-52 md:mt-2 rounded-md hoverButtonTheme1'>Lorem ipsum dolur uncut !</button>

            {/* social media icons */}
            <div className='flex m-10 gap-2 md:mb-4 md:mt-8'>
                <button className='w-7 h-full md:w-6'><img src={github} /></button>
                <button className='w-7 h-full md:w-6'><img src={facebook} /></button>
                <button className='w-7 h-full md:w-6'><img src={twitter} /></button>
                <button className='w-7 h-full md:w-6'><img src={linkdin} /></button>
            </div>

            {/* Logo iShare */}
            <img src={logoiShare3} className='p-1 md:w-24 md:p-5' />
        </div>
    </div>
  )
}

export default view