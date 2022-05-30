import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CardAnalytic from '../../components/CardAnalytic'
import NavAdmin from '../../components/NavAdmin'

function Overview() {

  const [users, setUsers] = useState([]);
  const [revenue, setRevenue] = useState(0)

  useEffect(()=>{
    axios.get('http://localhost/ishare/backend/user/totalUsers')
    .then(response=>{
      // console.log(response.data)
      setUsers(response.data.totalUsers)
    })
    .catch(error=>{
      console.log(error)
    })
  }, [])

  useEffect(()=>{
    axios.get('http://localhost/ishare/backend/user/totalProfit')
    .then(response=>{
      // console.log(response.data)
      setRevenue(response.data.totalProfit)
    })
    .catch(error=>{
      console.log(error)
    })
  }, [])

  return (
    <div className='font-["poppins"]'>
        <NavAdmin />
        <h1 className='ml-52 p-4 mt-10 text-secondColor text-3xl font-bold'>ADMIN DASHBOARD</h1>

        <div className='flex justify-center ml-40' style={{marginTop:"6.5rem"}}>
          <CardAnalytic img='users' title='Total Users' data={users} />
          <CardAnalytic img='views' title='Total Views' data={'2450'}/>
          <CardAnalytic img='money' title='Total Revenue' data={'$'+revenue} />
        </div>
    </div>
  )
}

export default Overview