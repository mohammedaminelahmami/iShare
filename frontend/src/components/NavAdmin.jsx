import React, { useState, useEffect } from 'react'
import admin from '../imgs/admin.png'
import overview from '../imgs/overview.png'
import ban from '../imgs/ban.png'
import loggout from '../imgs/logout.png'
import { Link } from 'react-router-dom'
import users from '../imgs/users.png'
import msg from '../imgs/msg.png'

function NavAdmin() {

    const pageUrl = window.location.href.slice(22)

    const logout = ()=>{
        window.location.replace('/loginadmin')
        localStorage.removeItem('tokenAdmin')
    }

    return (
        <div className='flex font-["poppins"]'>
            <div className='bg-secondColor w-72 h-full fixed nav_respon'>
                <div className='flex flex-col mt-4 gap-2 img_admin_respon' style={{marginLeft:"5.5rem"}}>
                    <img src={admin} width='100' />
                    <div className='ml-3 text-white font-bold'>@Admin</div>
                </div>
                {/* Side */}
                <nav className='mt-16'>
                    <div className='flex flex-col gap-4 text-white ml-16 respon_elem'>
                        <Link to='/dashboard' className={pageUrl == 'dashboard' ? 'flex gap-4 p-4 bg-ffirstColor rounded-md hoverTransition bgcolor_respon' : 'flex gap-4 p-4 hover:bg-ffirstColor hover:rounded-md hoverTransition'}>
                            <div><img src={overview} width='22' /></div>
                            <div className='font-semibold none_respon'>Overview</div>
                        </Link>

                        <Link to='/users' className={pageUrl == 'users' ? 'flex gap-4 p-4 bg-ffirstColor rounded-md hoverTransition bgcolor_respon' : 'flex gap-4 p-4 hover:bg-ffirstColor hover:rounded-md hoverTransition'}>
                            <div><img src={users} width='22' /></div>
                            <div className='font-semibold none_respon'>Users</div>
                        </Link>

                        <Link to='/ban' className={pageUrl == 'ban' ? 'flex gap-4 p-4 bg-ffirstColor rounded-md hoverTransition bgcolor_respon' : 'flex gap-4 p-4 hover:bg-ffirstColor hover:rounded-md hoverTransition'}>
                            <div><img src={ban} width='22' /></div>
                            <div className='font-semibold none_respon'>Banned</div>
                        </Link>

                        <Link to='/AdminContact' className={pageUrl == 'AdminContact' ? 'flex gap-4 p-4 bg-ffirstColor rounded-md hoverTransition bgcolor_respon' : 'flex gap-4 p-4 hover:bg-ffirstColor hover:rounded-md hoverTransition'}>
                            <div><img src={msg} width='22' /></div>
                            <div className='font-semibold none_respon'>Messages</div>
                        </Link>

                        <button onClick={logout} type='submit' className='flex gap-4 p-4 mt-36 sm:mt-0 hover:bg-ffirstColor hover:rounded-md hoverTransition bgcolor_respon'>
                            <div><img src={loggout} width='22' /></div>
                            <div className='font-semibold none_respon'>Logout</div>
                        </button>
                    </div>
                </nav>
            </div>
            {/* Nav-Mobile */}
            <div className='hidden md700:flex md700:justify-around md700:mx-auto md700:mt-3 md700:w-96 md700:z-10 fixed'>
                <Link to='/dashboard'>
                    <div><img src={overview} width='22' /></div>
                </Link>

                <Link to='/users'>
                    <div><img src={users} width='22' /></div>
                </Link>

                <Link to='/ban'>
                    <div><img src={ban} width='22' /></div>
                </Link>

                <button onClick={logout} type='submit'>
                    <div><img src={loggout} width='22' /></div>
                </button>
            </div>
        </div>
    )
}

export default NavAdmin