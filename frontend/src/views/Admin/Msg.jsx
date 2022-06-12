import React from 'react'
import { useState, useEffect } from 'react'
import NavAdmin from '../../components/NavAdmin'
import axios from 'axios'

const Msg = () => {

    const [messages, setMessages] = useState([])

    const resMessage = async ()=>{
        let response = await axios.get('http://localhost/ishare/backend/contact/getContacts')
        let data = response.data
        setMessages(data)
    }

    useEffect(()=>{
        resMessage();
    }, [])

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
                        <button className="font-medium text-green-600 hover:underline">Respond</button>
                      </td>
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