import React from 'react'

const ChangePwd = () => {
  return (
    <div className='flex flex-col items-center mt-14 w-full'>
        <form className='flex flex-col ml-96 w-full'>
            <input type="password" className='bg-inputColor px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='current password' required/>
            <input type="password" className='bg-inputColor mt-6 px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='new password' required/>

            <button type='submit' className='bg-firstColor mt-7 px-5 py-3 w-1/3 z-10 md:w-1/2 text-white font-bold'>Edit password</button>
        </form>
    </div>
  )
}

export default ChangePwd