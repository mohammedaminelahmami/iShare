import React, { useState } from 'react'
import Nav from '../../components/Nav'
import UserAnalyticsBar from '../../components/UserAnalyticsBar'
import explore from '../../imgs/explore.png'
import shopify from '../../imgs/shopify.png'
import music from '../../imgs/music.png'
import youtube from '../../imgs/youtube.png'
import add from '../../imgs/add.png'

function Links() {

  const [showModal, setShowModal] = useState(false);

  const test = ()=>{
    alert('Clicked !!!!')
  }

  const HandleClick = ()=>{
    window.open('http://localhost:3000/'+localStorage.getItem('username'), '_blank')
  }

  return (
    <div className='bg-gray-100 font-["poppins"]'>
      <Nav />
      <UserAnalyticsBar />

      <div className='flex justify-around mt-10'>
        <div className='flex flex-col'>
          {/* Links */}
          <div className='flex'>
            <button className='px-20 py-4 rounded-md bg-firstColor text-white font-bold  mr-5'>Add New Link</button>
            <button onClick={() => setShowModal(true)} className='px-24 py-4 rounded-md bg-firstColor text-white font-bold'><img src={explore} className='inline mb-1' width='15' /> Explore</button>
          </div>

            {/* Description */}
            <div className='mt-5 p-4 bg-white shadow-lg rounded-md'>
              <textarea name="body" id="body" cols="15" rows="3" className="bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Description"></textarea>
              {/* Add */}
              <label className="switch">
                <input type="checkbox" />
                <span className="slider mt-2"></span>
              </label>
              {/* <button className='self-start px-8 py-2 rounded-md mt-2 bg-white text-white'>Add</button> */}
            </div>

            {/* Link */}
            <div className='mt-5 p-4 bg-white shadow-lg rounded-md'>
              <textarea name="body" id="body" cols="15" rows="1" className="mt-2 mb-2 bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Title"></textarea>
              <textarea name="body" id="body" cols="15" rows="3" className="bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Url"></textarea>

              {/* Add */}
              <label className="switch">
                <input type="checkbox" />
                <span className="slider mt-2"></span>
              </label>
              {/* <button className='self-start px-8 py-2 rounded-md mt-5 bg-white text-white'>Add</button> */}
            </div>

            {/* Link */}
            <div className='mt-5 p-4 bg-white shadow-lg rounded-md'>
              <textarea name="body" id="body" cols="15" rows="1" className="mt-2 mb-2 bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Title"></textarea>
              <textarea name="body" id="body" cols="15" rows="3" className="bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Url"></textarea>
              
              {/* Add */}
              <label className="switch">
                <input type="checkbox" />
                <span className="slider mt-2"></span>
              </label>
              {/* <button className='self-start px-8 py-2 rounded-md mt-5 bg-white text-white'>Add</button> */}
            </div>

            {/* Link */}
            <div className='mt-5 p-4 bg-white shadow-lg rounded-md'>
              <textarea name="body" id="body" cols="15" rows="1" className="mt-2 mb-2 bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Title"></textarea>
              <textarea name="body" id="body" cols="15" rows="3" className="bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Url"></textarea>
              
              {/* Add */}
              <label className="switch">
                <input type="checkbox" />
                <span className="slider mt-2"></span>
              </label>
              {/* <button className='self-start px-8 py-2 rounded-md mt-5 bg-white text-white'>Add</button> */}
            </div>

            {/* Link */}
            <div className='mt-5 p-4 bg-white shadow-lg rounded-md'>
              <textarea name="body" id="body" cols="15" rows="1" className="mt-2 mb-2 bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Title"></textarea>
              <textarea name="body" id="body" cols="15" rows="3" className="bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Url"></textarea>
              
              {/* Add */}
              <label className="switch">
                <input type="checkbox" />
                <span className="slider mt-2"></span>
              </label>
              {/* <button className='self-start px-8 py-2 rounded-md mt-5 bg-secondColor text-white'>Add</button> */}
            </div>
        </div>
        
        {/* Show Mobile */}
        <div>
          {/* Share */}
          <div className='mt-4 absolute top-36'>
              <button onClick={HandleClick} className='text-xs font-bold underline' target='_blank'>http://localhost:3000/{localStorage.getItem('username')}</button>
              <button className='ml-3 border-4 px-2 py-1 rounded-md'>Share</button>
          </div>
          <iframe className='myIframe responsive-iframe mt-10' src="http://localhost:3000/amine0029" />
        </div>
      </div>

      {/* Modal --- Explore */}
      {showModal ? (
          <div className="p-20 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none  bg-colorOpacity bg-blackfocus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="p-10 border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-6 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-black text-xl font-bold">Add to iShare</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="h-8 w-8 text-xl block bg-firstColor text-white font-medium rounded-md">
                      x
                    </span>
                  </button>
                </div>
        
                <div>

                  <button onClick={test}>
                    <div className='flex'>
                      <img src={shopify} className='m-5' width='40'/>
                      <p className='self-center text-secondColor font-medium'>Share your product to sell online</p>
                    </div>
                  </button>

                  <hr />

                  <button onClick={test}>
                    <div className='flex'>
                      <img src={music} className='m-5' width='40'/>
                      <p className='self-center text-secondColor font-medium'>Share your latest or favorite music</p>
                    </div>
                  </button>

                  <hr />

                  <button onClick={test}>
                    <div className='flex'>
                      <img src={youtube} className='m-5' width='40'/>
                      <p className='self-center text-secondColor font-medium'>Share Youtube videos on your iShare</p>
                    </div>
                  </button>

                </div>
              </div>
            </div>
          </div>
      ) : null}

    </div>
  )
}

export default Links