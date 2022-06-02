import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavAdmin from '../../components/NavAdmin'
import ModalAreYouSure from '../../components/ModalAreYouSure'

function UsersAction() {
  
  const [Users, setUsers] = useState([])
  const [AreYouSure, setAreYouSure] = useState(false)
  const [username, setUsername] = useState('')

  const resGetUsers = async () => {
    let response = await axios.get('http://localhost/ishare/backend/user/getUsers')
    console.log(response.data);
    setUsers(response.data)
  }

  useEffect(()=>{
    resGetUsers();
  }, [AreYouSure])

  return (
    <div className='font-["poppins"]'>
        <NavAdmin />
        <h1 className='ml-52 mt-10 p-4 text-secondColor text-3xl font-bold'>USERS</h1>

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
                {Users.map((user, index)=>{
                  return(
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        {user.username}
                      </th>
                      <td className="px-6 py-4">
                        {user.email}
                      </td>
                      <td className="px-6 py-4">
                        {user.plan == '0' ? <div className='text-gray-600 font-medium'>FREE</div> : <div className='text-green-600 font-medium'>PREMIUM</div>}
                      </td>
                      <td className="px-6 py-4">
                        {user.created_at}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button onClick={()=>{
                          setAreYouSure(true);
                          setUsername(user.username);
                        }} className="font-medium text-red-600 hover:underline">Ban</button>
                      </td>
                      <ModalAreYouSure AreYouSure={AreYouSure} close={()=>{setAreYouSure(false)}} username={username} />
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