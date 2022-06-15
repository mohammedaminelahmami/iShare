import React, { useState, useRef } from 'react'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import axios from 'axios'

function Contact() {

  const [msgSubmit, setMsgSubmit] = useState(false)

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
    setMsgSubmit(true)
  }

  return (
    <div className="parentContact font-['poppins'] h-auto">
        <Nav />
        {msgSubmit&&
          <center>
            <div className="w-1/3 p-4 mt-10 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
              <span className="font-medium">Success alert!</span> Change a few things up and try submitting again.
            </div>
          </center>
        }
        <form onSubmit={HandleSubmitContact} className={msgSubmit ? 'flex flex-col items-center mt-4' : 'flex flex-col items-center mt-16'}>
            <p className='text-firstColor font-bold text-3xl md:text-2xl'>How can we help you ?</p>
            
            <input type="name" ref={Name} className='bg-inputColor mt-14 px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='Name' required/>
            <input type="email" ref={Email} className='bg-inputColor mt-6 px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='Email' required/>
            <input type="text" ref={Message} className='bg-inputColor mt-6 px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='Message' required/>
            
            <button type='submit' className='bg-firstColor text-white font-bold mt-7 px-5 py-3 w-1/3 md:w-1/2'>Send Message</button>
        </form>
        <Footer />
    </div>
  )
}

export default Contact