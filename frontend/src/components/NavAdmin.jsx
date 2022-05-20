import React, { useState, useEffect } from 'react'
import admin from '../imgs/admin.png'
import overview from '../imgs/overview.png'
import analytics from '../imgs/analytics.png'
import ban from '../imgs/ban.png'
import loggout from '../imgs/logout.png'
import { Link } from 'react-router-dom'

function NavAdmin(props) {

    const pageUrl = window.location.href.slice(22)

    const logout = ()=>{
        window.location.replace('http://localhost:3000/loginadmin')
        localStorage.removeItem('tokenAdmin')
      }

    return (
        <div className='font-["poppins"]'>
            <div className='bg-secondColor w-72 fixed' style={{height:"45rem"}}>
                <div className='flex flex-col mt-4 gap-2' style={{marginLeft:"5.5rem"}}>
                    <img src={admin} width='100' />
                    <div className='ml-3 text-white font-bold'>@Admin</div>
                </div>
                {/* Side */}
                <nav className='mt-16'>
                    <div className='flex flex-col gap-4 text-white ml-16'>
                        <Link to='/dashboard' className={pageUrl == 'dashboard' ? 'flex gap-4 p-4 bg-ffirstColor rounded-md hoverTransition' : 'flex gap-4 p-4 hover:bg-ffirstColor hover:rounded-md hoverTransition'}>
                            <div><img src={overview} width='22' /></div>
                            <div className='font-semibold'>Overview</div>
                        </Link>

                        <Link to='/analytics' className={pageUrl == 'analytics' ? 'flex gap-4 p-4 bg-ffirstColor rounded-md hoverTransition' : 'flex gap-4 p-4 hover:bg-ffirstColor hover:rounded-md hoverTransition'}>
                            <div><img src={analytics} width='22' /></div>
                            <div className='font-semibold'>Analytics</div>
                        </Link>

                        <Link to='/ban' className={pageUrl == 'ban' ? 'flex gap-4 p-4 bg-ffirstColor rounded-md hoverTransition' : 'flex gap-4 p-4 hover:bg-ffirstColor hover:rounded-md hoverTransition'}>
                            <div><img src={ban} width='22' /></div>
                            <div className='font-semibold'>Banned</div>
                        </Link>

                        <button onClick={logout} type='submit' className='flex gap-4 p-4 mt-52 hover:bg-ffirstColor hover:rounded-md hoverTransition'>
                            <div><img src={loggout} width='22' /></div>
                            <div className='font-semibold'>Logout</div>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavAdmin