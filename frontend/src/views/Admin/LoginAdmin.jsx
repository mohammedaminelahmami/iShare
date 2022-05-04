import React from 'react'
import logoiShare4 from '../../imgs/logoiShare4.png'

function LoginAdmin() {
  return (
    <div className="parentLoginUser font-['poppins'] h-auto p-5 bg-gray-50">
      {/* <div className='mt-5' style={{marginLeft:"68px"}}>
          <Logo />
      </div> */}
      <div className='flex flex-col items-center mt-32'>
          <img src={logoiShare4} className='absolute bottom-100' />
          <p className='text-secondColor font-bold text-2xl ml-5'>Admin</p>
          <input type="text" className='bg-inputColor mt-14 px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='Username'/>
          <input type="password" className='bg-inputColor mt-6 px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='Password'/>
          
          <button type='submit' className='bg-secondColor text-white font-bold mt-7 px-5 py-3 w-1/3 md:w-1/2'>Login</button>
      </div>

      <center><p className='p-3 mt-52 text-gray-500 text-xs'>Copyright © 2022 iShare. All rights reserved.</p></center>
    </div>
  )
}

export default LoginAdmin