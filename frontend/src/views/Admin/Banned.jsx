import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavAdmin from '../../components/NavAdmin'

function UsersAction() {
  
  const [Bans, setBans] = useState([])
  const [testReload, setTestReload] = useState(false)

  useEffect(()=>{
    axios.get('http://localhost/ishare/backend/user/getBanns')
    .then(response=>{
      setBans(response.data)
    })
    .catch(error=>{
      console.log(error);
    })
  }, [testReload])

  return (
    <div className='font-["poppins"]'>
        <NavAdmin />
        <center><h1 className='ml-64 p-4 mt-10 text-secondColor text-3xl font-bold mll sm:mt-14'>BANNED USERS</h1></center>

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
                        {ban.plan == '0' ? <div className='text-gray-600 font-medium'>FREE</div> : <div className='text-green-600 font-medium'>PREMIUM</div>}
                      </td>
                      <td className="px-6 py-4">
                        {ban.created_at}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button onClick={()=>{
                            setTestReload(!testReload)
                            let formData = new FormData();
                            formData.append('username', ban.username);
                            axios.post('http://localhost/ishare/backend/user/unban', formData)
                          }
                        } className="font-medium text-red-600 hover:underline">Unban</button>
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