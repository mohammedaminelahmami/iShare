import React, { useRef, useState } from 'react'
import axios from 'axios'
import logoiShare4 from '../../imgs/logoiShare4.png'

function LoginAdmin() {

  const [loggedIn, setLoggedIn] = useState(false);

  const email = useRef('');
  const password = useRef('');

  const formData = new FormData();
  const HandleSubmit = (e)=>{
    e.preventDefault();

    formData.append('email', email.current.value);
    formData.append('password', password.current.value);

    axios.post('http://localhost/ishare/backend/admin/login', formData)
    .then(function(response){
      // console.log(response.data.token);
      localStorage.setItem('tokenAdmin', response.data.token)
      if(localStorage.getItem('tokenAdmin') === response.data.token)
      {
        setLoggedIn(true);
      }
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const logout = ()=>{
    window.location.replace('http://localhost:3000/loginadmin')
    localStorage.removeItem('tokenAdmin')
  }

  return (
    <>
    {loggedIn&&
      <>
        Welcome Admin
        <br></br>
        <button onClick={logout}>Logout</button>
      </>
    }
      <div className="parentLoginUser font-['poppins'] h-auto p-5 bg-gray-50">
        <form onSubmit={HandleSubmit} className='flex flex-col items-center mt-32'>
            <img src={logoiShare4} className='absolute bottom-100' />
            <p className='text-secondColor font-bold text-2xl ml-5'>Admin</p>
            <input type="text" ref={email} className='bg-inputColor mt-14 px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='Email'/>
            <input type="password" ref={password} className='bg-inputColor mt-6 px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='Password'/>
            
            <button type='submit' className='bg-secondColor text-white font-bold mt-7 px-5 py-3 w-1/3 md:w-1/2'>Login</button>
        </form>

        <center><p className='p-3 mt-52 text-gray-500 text-xs'>Copyright © 2022 iShare. All rights reserved.</p></center>
      </div>
    </>
  )
}

export default LoginAdmin