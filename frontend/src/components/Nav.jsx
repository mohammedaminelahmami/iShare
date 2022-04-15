import React from 'react'
import logoiShare from '../imgs/logoiShare.svg'

function Nav() {
  return (
    <div className="parentNav font-['poppins']">
        <nav className='bg-navBg p-4'>
            <ul className='flex flex-row justify-between'>
                <div className="flex flex-row items-center ml-12 gap-10 font-semibold text-sm">
                    <div className='flex flex-row gap-3 mr-3'>
                        <img src={logoiShare} />
                        <div className='text-xl font-normal'> iShare </div>
                    </div>
                    <li><a href="#" className='text-menuColor'> Themes </a></li>
                    <li><a href="#" className='text-menuColor'> Pricing </a></li>
                    <li><a href="#" className='text-menuColor'> Community </a></li>
                    <li><a href="#" className='text-menuColor'> Contact </a></li>
                </div>

                <div>
                    <a href="#" className='mr-12 px-8 py-1 text-firstColor font-semibold border-2 border-firstColor' style={{display:"block"}}> Login </a>
                </div>
            </ul>
        </nav>
    </div>
  )
}
export default Nav