import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavAdmin from '../../components/NavAdmin'

function UsersAction() {
  
  const [Bans, setBans] = useState([])

  useEffect(()=>{
    axios.get('http://localhost/ishare/backend/user/getBanns')
    .then(response=>{
      console.log(response.data);
      setBans(response.data)
    })
    .catch(error=>{
      console.log(error);
    })
  }, [])

  return (
    <div className='font-["poppins"]'>
        <NavAdmin />
        <h1 className='ml-52 mt-10 p-4 text-secondColor text-3xl font-bold'>BANNED USERS</h1>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg" style={{top:"6.5rem", left:"24.5rem", width:"65rem"}}>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Plan
                </th>
                <th scope="col" className="px-6 py-3">
                  created at
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Ban</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {Bans.map((ban, index)=>{
                return(
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        {ban.username}
                      </th>
                      <td className="px-6 py-4">
                        {ban.email}
                      </td>
                      <td className="px-6 py-4">
                        {ban.plan}
                      </td>
                      <td className="px-6 py-4">
                        {ban.created_at}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <a href="#" className="font-medium text-red-600 hover:underline">Ban</a>
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

export default UsersAction