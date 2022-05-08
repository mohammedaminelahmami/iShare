import React from 'react'
import '../style.css'
import { Link } from 'react-router-dom'
import hamburgerMenuImg from '../imgs/menu.png'
import { useState, useEffect } from 'react'
import Logo from './Logo'
import profile from '../imgs/profile.png'
import MenuDropDown from './MenuDropDown'


function Nav() {
    const [isActive, setIsActive] = useState(false);
    const [menu_el, setMenu_el] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handlemediaChange = (e)=>{
        if(e.matches)
        {
            // console.log("media changed !!");
            setIsActive(false);
            setMenu_el(false);
        }
    }
    mediaQuery.addListener(handlemediaChange);

    const hamburgerMenuToggle = ()=>{
        setIsActive(!isActive);
        setMenu_el(!menu_el);
    }

    useEffect(()=>{
        if(localStorage.getItem('token'))
        {
          setLoggedIn(true);
        }
      })

  return (
    <div className="parentNav font-['poppins']">
        <nav className='bg-navBg p-5 w-full'>
            <div className='flex flex-row justify-between'>
                <div className="flex flex-row ml-12 gap-10 md:gap-0 font-semibold text-sm">
                    <Logo />
                    <ul className={isActive ? "show" : "flex items-center gap-10 md:gap-0"}>
                        <li><Link to='/Themes' className={menu_el ? "block text-menuColor md:text-white md:text-normal text-center mt-4" : "md:hidden text-menuColor hover:text-firstColor"}>Themes</Link></li>
                        <li><Link to='/Pricing' className={menu_el ? "block text-menuColor md:text-white md:text-normal text-center mt-4" : "md:hidden text-menuColor hover:text-firstColor"}>Pricing</Link></li>
                        <li><Link to='/' className={menu_el ? "block text-menuColor md:text-white md:text-normal text-center mt-4" : "md:hidden text-menuColor hover:text-firstColor"}>Community</Link></li>
                        <li><Link to='/Contact' className={menu_el ? "block text-menuColor md:text-white md:text-normal text-center mt-4" : "md:hidden text-menuColor hover:text-firstColor"}>Contact</Link></li>
                        {/* Login-Web-mobile */}
                        <li><Link to='/login' className={menu_el ? "block text-menuColor md:text-white md:text-normal text-center my-4 py-2 px-4 w-32 mx-auto rounded-full bg-secondColor" : "hidden text-menuColor"}> Login </Link></li>
                    </ul>
                </div>

                {!loggedIn&&
                    <Link to='/login' className="btnLogin mr-12 px-8 py-1 bg-firstColor text-white font-semibold rounded-sm"> Login </Link>
                }

                {loggedIn&&
                    <>
                        <div className='flex gap-6'>
                            {/* Profile */}
                            <button className='flex gap-2 self-center'>
                                <div><img src={profile} width='20' /></div>
                                <div className='text-firstColor text-sm'>{localStorage.getItem('username')}</div>
                            </button>

                            {/* Settings */}
                            <MenuDropDown />
                        </div>
                    </>
                }
                <button onClick={hamburgerMenuToggle} className='hamburgerMenuImg mr-12'><img src={hamburgerMenuImg} width='25' /></button>
            </div>
        </nav>
    </div>
  )
}
export default Nav