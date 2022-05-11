import React, { useRef } from 'react'
import Mobile from '../../components/Mobile'
import Nav from '../../components/Nav'
import UserAnalyticsBar from '../../components/UserAnalyticsBar'
import Avatar from '../../imgs/avatar.svg'

function Appearance() {

  const HandleClick = ()=>{
    window.open('http://localhost:3000/'+localStorage.getItem('username'), '_blank')
  }

  return (
    <div className='font-["poppins"]'>
        <Nav />
        <UserAnalyticsBar />
        
        <div className='flex justify-around mt-10'>
            <div className='flex flex-col justify-around gap-10'>
              <div className='flex flex-col items-center p-4 shadow-lg rounded-md w-full bg-gray-100'>
                  {/* Change Avatar */}
                  <img src={Avatar} className='block w-32 rounded-full m-3 md:w-20 sm:w-10' />
                  <label htmlFor="input" className="px-2 py-3 m-2 text-white text-xs bg-firstColor font-semibold rounded-sm cursor-pointer">Pick an image</label>
                  <input type="file" id='input' accept="image/*" hidden/>
              </div>

              <div className='p-4 w-full bg-gray-100 shadow-lg rounded-md'>
                <textarea name="body" id="body" cols="15" rows="4" className="bg-white border-2 w-full p-2 rounded-md" placeholder="Description"></textarea>
                <button className='mt-2 py-1 px-4 text-sm font-semibold text-firstColor bg-white border-2 border-firstColor rounded-md'>Add</button>
              </div>
            </div>

          <div className='-mr-24'>
            <Mobile HandleClick={HandleClick} />
          </div>
        </div>

        <div className='mt-10'>
          Hello
        </div>
    </div>
  )
}

export default Appearance