import React, { useRef } from 'react'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import axios from 'axios'

function Contact() {

  const Name = useRef('')
  const Email = useRef('')
  const Message = useRef('')

  const HandleSubmitContact = async (e)=>{
    e.preventDefault();
    let formData = new FormData();
    formData.append('name', Name.current.value)
    formData.append('email', Email.current.value)
    formData.append('message', Message.current.value)

    await axios.post('http://localhost/ishare/backend/contact/contact', formData)
  }

  return (
    <div className="parentContact font-['poppins'] h-auto">
        <Nav />

        <form onSubmit={HandleSubmitContact} className='flex flex-col items-center mt-16'>
            <p className='text-firstColor font-bold text-3xl md:text-2xl'>How can we help you ?</p>
            
            <input type="name" ref={Name} className='bg-inputColor mt-14 px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='Name'/>
            <input type="email" ref={Email} className='bg-inputColor mt-6 px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='Email'/>
            <input type="text" ref={Message} className='bg-inputColor mt-6 px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='Message'/>
            
            <button type='submit' className='bg-firstColor text-white font-bold mt-7 px-5 py-3 w-1/3 md:w-1/2'>Send Message</button>
        </form>
        <Footer />
    </div>
  )
}

export default Contact