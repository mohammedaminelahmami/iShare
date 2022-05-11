import React from 'react'
import Nav from '../../components/Nav'
import UserAnalyticsBar from '../../components/UserAnalyticsBar'
import Avatar from '../../imgs/avatar.svg'

function Appearance() {
  return (
    <div className='font-["poppins"]'>
        <Nav />
        <UserAnalyticsBar />
        
        <div className='flex first-line: mt-10 ml-16'>
            <div className='flex flex-col items-center mt-5 p-4 shadow-lg rounded-md w-1/4 bg-gray-100'>
                {/* Change Avatar */}
                <img src={Avatar} className='block w-32 rounded-full m-3 md:w-20 sm:w-10 ' />

                <p className=''>
                    @{localStorage.getItem('username')}
                </p>
            </div>
        </div>

    </div>
  )
}

export default Appearance