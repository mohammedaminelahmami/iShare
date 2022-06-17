import React from 'react'

function Mobile(props) {
  return (
    <div className='display_none'>
      {/* Show Mobile */}
      <div>
        <iframe className='myIframe responsive-iframe mt-2 mr-3' src={"/"+localStorage.getItem('username')} />
      </div>
    </div>
  )
}

export default Mobile