import React, { useRef } from 'react'
import axios from 'axios'

const ChangePwd = () => {

    const currentPassword = useRef('');
    const newPassword = useRef('');

    const HandleSubmitPwd = async (e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('username', localStorage.getItem('username'))
        formData.append('currentPassword', currentPassword.current.value)
        formData.append('newPassword', newPassword.current.value)

        await axios.post('http://localhost/ishare/backend/user/changePwd', formData)
    }

  return (
    <div className='flex flex-col items-center mt-14 w-full'>
        <form onSubmit={HandleSubmitPwd} className='flex flex-col ml-96 w-full'>
            <input type="password" ref={currentPassword} className='bg-inputColor px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='current password' required/>
            <input type="password" ref={newPassword} className='bg-inputColor mt-6 px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='new password' required/>

            <button type='submit' className='bg-firstColor mt-7 px-5 py-3 w-1/3 z-10 md:w-1/2 text-white font-bold'>Edit password</button>
        </form>
    </div>
  )
}

export default ChangePwd