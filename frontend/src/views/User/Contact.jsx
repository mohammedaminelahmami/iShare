import React from 'react'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'


function Contact() {
  return (
    <div className="parentContact font-['poppins'] h-auto">
        <Nav />

        <div className='flex flex-col items-center mt-16'>
            <p className='text-firstColor font-bold text-3xl md:text-2xl'>How can we help you ?</p>
            
            <input type="name" className='bg-inputColor mt-14 px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='Name'/>
            <input type="email" className='bg-inputColor mt-6 px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='Email'/>
            <input type="text" className='bg-inputColor mt-6 px-5 py-3 border-2 w-1/3 placeHolderColor md:w-1/2' placeholder='Message'/>
            
            <button type='submit' className='bg-firstColor text-white font-bold mt-7 px-5 py-3 w-1/3 md:w-1/2'>Send Message</button>
        </div>
        <Footer />
    </div>
  )
}

export default Contact