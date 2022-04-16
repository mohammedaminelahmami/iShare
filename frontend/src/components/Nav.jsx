import React from 'react'
import '../style.css'
import { Link } from 'react-router-dom'
import logoiShare from '../imgs/logoiShare.svg'
import hamburgerMenuImg from '../imgs/menu.png'
import { useState } from 'react'

function Nav() {

    const [isActive, setIsActive] = useState(false);
    const [menu_el, setMenu_el] = useState(false);

    const hamburgerMenuToggle = ()=>{
        setIsActive(!isActive);
        setMenu_el(!menu_el);
    }

  return (
    <div className="parentNav font-['poppins']">
        <nav className='bg-navBg p-4 w-full'>
            <div className='flex flex-row justify-between'>
                <div className="flex flex-row ml-12 gap-10 md:gap-0 font-semibold text-sm">
                    <Link to='/'>
                        <div className='flex flex-row gap-3 mr-3'>
                            <img src={logoiShare} />
                            <div className='text-xl font-normal'> iShare </div>
                        </div>
                    </Link>
                    <ul className={isActive ? "show flex gap-10" : "flex items-center gap-10 md:gap-0"}>
                        <li><Link to='/' className={menu_el ? "block text-menuColor md:text-white md:text-normal text-center mt-4" : "md:hidden text-menuColor"}>Themes</Link></li>
                        <li><Link to='/' className={menu_el ? "block text-menuColor md:text-white md:text-normal text-center mt-4" : "md:hidden text-menuColor"}>Pricing</Link></li>
                        <li><Link to='/' className={menu_el ? "block text-menuColor md:text-white md:text-normal text-center mt-4" : "md:hidden text-menuColor"}>Community</Link></li>
                        <li><Link to='/' className={menu_el ? "block text-menuColor md:text-white md:text-normal text-center mt-4" : "md:hidden text-menuColor"}>Contact</Link></li>
                        {/* Login-Web-mobile */}
                        <li><Link to='/' className={menu_el ? "block text-menuColor md:text-white md:text-normal text-center my-4 py-2 px-4 w-32 mx-auto rounded-full bg-secondColor" : "hidden text-menuColor"}> Login </Link></li>
                    </ul>
                </div>
                {/* Login-Web */}
                <Link to='/' className="btnLogin mr-12 px-8 py-1 bg-firstColor text-white font-semibold"> Login </Link>

                <button onClick={hamburgerMenuToggle} className='hamburgerMenuImg mr-12'><img src={hamburgerMenuImg} width='25' /></button>

            </div>
        </nav>
    </div>
  )
}
export default Nav