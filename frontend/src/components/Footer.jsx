import React from 'react'
import { Link } from 'react-router-dom'
import logoiShare2 from '../imgs/logoiShare2.svg'

const footer = () => {
  return (
    <div className='parentFooter'>
        <footer className='bg-footerBgColor mt-20'>
            <div className='flex justify-evenly p-24 font-medium text-favColor sm:flex-col sm:items-center sm:mt-0 md:gap-8'>
                <ul>
                    <li><Link to='/' className='hover:text-thirdColor hover:underline'>iShare</Link></li>
                    <li><Link to='/' className='hover:text-thirdColor hover:underline'>Contact</Link></li>
                    <li><Link to='/' className='hover:text-thirdColor hover:underline'>Pokos</Link></li>
                    <li><Link to='/' className='hover:text-thirdColor hover:underline'>Gareth</Link></li>
                </ul>

                <ul>
                    <li><Link to='/' className='hover:text-thirdColor hover:underline'>Contact</Link></li>
                    <li><Link to='/' className='hover:text-thirdColor hover:underline'>Pokos</Link></li>
                    <li><Link to='/' className='hover:text-thirdColor hover:underline'>iShare</Link></li>
                    <li><Link to='/' className='hover:text-thirdColor hover:underline'>Gareth</Link></li>
                </ul>

                <ul>
                    <li><Link to='/terms' className='hover:text-thirdColor hover:underline'>Terms</Link></li>
                    <li><Link to='/' className='hover:text-thirdColor hover:underline'>Contact</Link></li>
                    <li><Link to='/' className='hover:text-thirdColor hover:underline'>Pokos</Link></li>
                    <li><Link to='/' className='hover:text-thirdColor hover:underline'>iShare</Link></li>
                </ul>

                <ul>
                    <li><Link to='/' className='hover:text-thirdColor hover:underline'>Pokos</Link></li>
                    <li><Link to='/' className='hover:text-thirdColor hover:underline'>Contact</Link></li>
                    <li><Link to='/terms' className='hover:text-thirdColor hover:underline'>Terms</Link></li>
                    <li><Link to='/terms' className='hover:text-thirdColor hover:underline'>Condition</Link></li>
                </ul>
            </div>
        
            <div className='bg-footerBgColor2'>
                <div className='flex justify-evenly text-white p-5 gap-48 sm:gap-16'>
                    <div className='flex flex-row gap-3 mr-3 '>
                        <img src={logoiShare2} className='responLogo'/>
                        <div className='text-xl font-normal'> iShare </div>
                    </div>
                    <p className='text-base sm:text-sm'>Copyright © 2022 iShare. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default footer