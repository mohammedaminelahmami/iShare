import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo'

function LoginUser() {
  return (
    <div className="parentLoginUser font-['poppins'] h-auto">
        <div className='mt-5' style={{marginLeft:"68px"}}>
            <Logo />
        </div>

        <div className='flex flex-col items-center mt-10'>
            <p className='text-firstColor font-bold text-2xl md:text-xl'>Log in to your iShare account</p>
            <input type="text" className='bg-inputColor mt-14 px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='Username'/>
            <input type="password" className='bg-inputColor mt-6 px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='Password'/>
            
            <button type='submit' className='bg-firstColor text-white font-bold mt-7 px-5 py-3 w-1/3 md:w-1/2'>Login</button>

            <p className='text-menuColor text-sm font-bold mt-14 md:text-xs'>Don't have an account? <Link to='/register' href='/test1' className='text-black hover:text-firstColor'>Create One</Link></p>
        </div>

        <svg className='absolute bottom-0 zIndex_N' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5463FF" fillOpacity="1" d="M0,288L60,266.7C120,245,240,203,360,197.3C480,192,600,224,720,213.3C840,203,960,149,1080,154.7C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>
  )
}

export default LoginUser