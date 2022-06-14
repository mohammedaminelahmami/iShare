import React from 'react'
import { useState, useEffect, useRef } from 'react'
import NavAdmin from '../../components/NavAdmin'
import emailjs from '@emailjs/browser'
import axios from 'axios'

const Msg = () => {

    const [messages, setMessages] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [email, setEmail] = useState('')
    const [to_name, setTo_name] = useState('')

    const resMessage = async ()=>{
      let response = await axios.get('http://localhost/ishare/backend/contact/getContacts')
      let data = response.data
      setMessages(data)
    }

    useEffect(()=>{
      resMessage();
    }, [])

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_svzjufz', 'template_ca5mzo9', e.target, 'suz19fhSiMSKRJRJU')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
      });
      setShowModal(false)
    };

  return (
    <div className='font-["poppins"]'>
        <NavAdmin />
        <center><h1 className='ml-64 p-4 mt-10 text-secondColor text-3xl font-bold mll sm:mt-14'>Contact</h1></center>

        <div className="shadow-md mt-24 sm:rounded-lg responTable" style={{width:"65%", marginLeft:"26%"}}>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Message
                </th>
                <th scope="col" className="px-6 py-3">
                  
                </th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, index)=>{
                return(
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      {msg.name}
                    </th>
                    <td className="px-6 py-4">
                      {msg.email}
                    </td>
                    <td className="px-6 py-4">
                      {msg.message}
                    </td>
                    <td className="px-6 py-4">
                      <button onClick={()=>{setShowModal(true); setEmail(msg.email); setTo_name(msg.name)}} className="font-medium text-green-600 hover:underline">Respond</button>
                    </td>
                    {showModal&&
                      <div className="p-20 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-colorOpacity bg-blackfocus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          <div className="animate-scale p-10 border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none modal">
                            <div className="flex items-start justify-between gap-5">
                              <h3 className="text-secondColor text-xl font-bold">Contact</h3>
                              <button
                                onClick={()=>{setShowModal(false)}}
                              >
                                <span className="h-8 w-8 text-xl block bg-secondColor text-white font-medium rounded-md">
                                  x
                                </span>

                              </button>
                            </div>
                            <div>
                              <form onSubmit={sendEmail} className='flex flex-col gap-2 mt-5'>
                                <input type="hidden" defaultValue={to_name} name='to_name' />
                                <input type='text' name='to_email' defaultValue={email} className='bg-inputColor px-5 py-3 border-2 w-96 placeHolderColor' readOnly />
                                <textarea cols='15' rows='3' type='text' name='msg' className="mt-2 mb-2 bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="msg ..."></textarea>

                                <button type='submit' className='bg-secondColor px-5 py-3 w-full z-10 text-white font-bold'>Send</button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  </tr>
                  )
              })}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Msg