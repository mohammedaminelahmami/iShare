import React from 'react'
import Mobile from '../../components/Mobile'
import Nav from '../../components/Nav'
import UserAnalyticsBar from '../../components/UserAnalyticsBar'

function Appearance() {

  const HandleClick = ()=>{
    window.open('/'+localStorage.getItem('username'), '_blank')
  }

  return (
    <div className='font-["poppins"]'>
        <Nav />
        <UserAnalyticsBar />
        
        <div className='flex justify-center gap-36 mt-10'>
          <div className='flex justify-around bg-gray-100 rounded-md w-1/2 h-96'>  
            <div className='self-center bg-gray-400 w-36 h-48 rounded-md'>
              {/* <img src={img1} className='w-full' /> */}
            </div>

            <div className='self-center bg-gray-400 w-36 h-48 rounded-md'>

            </div>

            <div className='self-center bg-gray-400 w-36 h-48 rounded-md'>

            </div>
          </div>

          <div className=''>
            <Mobile HandleClick={HandleClick} />
          </div>
        </div>
    </div>
  )
}

export default Appearance