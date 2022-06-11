import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

const Pinformation = () => {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")

    const editUsername = useRef('')
    const editEmail = useRef('')

    const resUser = async ()=>{
        let formData = new FormData()
        formData.append('username', localStorage.getItem('username'))
        let response = await axios.post('http://localhost/ishare/backend/user/getUser', formData)
        let data = response.data;
        setUsername(data.username)
        setEmail(data.email)
      }
    
      useEffect(()=>{
        resUser();
      }, [])

    const HandleSubmitEdit = async (e)=>{
        e.preventDefault()
        let formData = new FormData()
        formData.append('editUsername', editUsername.current.value)
        formData.append('editEmail', editEmail.current.value)
        formData.append('username_old', localStorage.getItem('username'))

        let response = await axios.post('http://localhost/ishare/backend/user/editUser', formData)
        console.log(response.data);
        if(response.data === 'Edit Sucssefully')
        {
            localStorage.setItem('username', editUsername.current.value)
        }
    }

  return (
    <div className='flex flex-col items-center mt-14 w-full'>
        <form onSubmit={HandleSubmitEdit} className='flex flex-col ml-96 w-full'>
            <input type="text" ref={editUsername} defaultValue={username} className='bg-inputColor px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='Username' />
            <input type="email" ref={editEmail} defaultValue={email} className='bg-inputColor mt-6 px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='Email' />

            <button type='submit' className='bg-firstColor mt-7 px-5 py-3 w-1/3 z-10 md:w-1/2 text-white font-bold'>Edit</button>
        </form>
    </div>
  )
}

export default Pinformation