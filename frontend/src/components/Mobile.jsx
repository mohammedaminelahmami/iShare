import React from 'react'

function Mobile(props) {
  return (
    <div>
      {/* Show Mobile */}
      <div>
        {/* Share */}
        <div className='mt-2 text-white absolute right-48 top-20'>
            <button onClick={props.HandleClick} className='text-md underline' target='_blank'>iShare.com/{localStorage.getItem('username')}</button>
            <button className='ml-6 border-4 px-2 py-1 rounded-md'>Share</button>
        </div>
        <iframe className='myIframe responsive-iframe mt-2 mr-3' src={"http://localhost:3000/"+localStorage.getItem('username')} />
      </div>
    </div>
  )
}

export default Mobile