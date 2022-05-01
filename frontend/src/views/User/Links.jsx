import React from 'react'
import Nav from '../../components/Nav'
import UserAnalyticsBar from '../../components/UserAnalyticsBar'
import explore from '../../imgs/explore.png'

function Links() {
  return (
    <div>
      <Nav />
      <UserAnalyticsBar />

      <div className='flex justify-around mt-10'>
        <div className='flex flex-col'>
          {/* Links */}
          <div className='flex'>
            <button className='px-20 py-4 rounded-md bg-firstColor text-white font-bold  mr-5'>Add New Link</button>
            <button className='px-24 py-4 rounded-md bg-firstColor text-white font-bold'><img src={explore} className='inline mb-1' width='15' /> Explore</button>
          </div>

            <textarea name="body" id="body" cols="15" rows="3" className="mt-10 bg-gray-100 border-2 w-full p-4 rounded-md" placeholder="Description"></textarea>
        </div>
        
        {/* Show Mobile */}
        <iframe className='myIframe responsive-iframe' src="http://localhost:3000/amine0029" title="W3Schools Free Online Web Tutorials" />
      </div>

    </div>
  )
}

export default Links