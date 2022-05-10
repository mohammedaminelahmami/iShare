import React from 'react'

function Appearance() {
  return (
    <div className='font-["poppins"]'>
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
    </div>
  )
}

export default Appearance