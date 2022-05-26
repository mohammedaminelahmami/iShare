import React from 'react'
import CardAnalytic from '../../components/CardAnalytic'
import NavAdmin from '../../components/NavAdmin'

function Overview() {
  return (
    <div className='font-["poppins"]'>
        <NavAdmin />
        <h1 className='ml-52 p-4 mt-10 text-secondColor text-3xl font-bold'>ADMIN DASHBOARD</h1>

        <div className='flex justify-center ml-40' style={{marginTop:"6.5rem"}}>
          <CardAnalytic />
          <CardAnalytic />
          <CardAnalytic />
        </div>
    </div>
  )
}

export default Overview