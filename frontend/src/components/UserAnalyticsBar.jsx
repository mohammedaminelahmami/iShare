import React from 'react'
import green from '../imgs/green.png'
import blue from '../imgs/blue.png'
import lock from '../imgs/lock.png'

function UserAnalyticsBar() {
  return (
    <div className='parentUserAnalyticsBar'>
        <div className='flex text-white bg-secondColor w-full p-5 gap-10'>
            <div className='ml-12 text-md font-sm'>Lifetime Analytics</div>

            <div className='flex gap-2'>
                <div className='self-center'><img src={green} className='' /></div>
                <div className='text-md font-sm' >views : </div>
                <img src={lock} width='25' />
            </div>

            <div className='flex gap-2'>
                <div className='self-center'><img src={blue} className='' /></div>
                <div className='text-md font-sm'> clicks : </div>
                <img src={lock} width='25' />
            </div>
        </div>
    </div>
  )
}

export default UserAnalyticsBar