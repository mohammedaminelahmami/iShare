import React from 'react'
import money from '../imgs/money.png'

function CardAnalytic() {
  return (
    <div className='font-["poppins"]'>
        <div className='flex justify-center gap-4 items-center ml-10 w-64 h-36 shadow-lg bg-secondColor rounded-md'>
            <img src={money} width='35' />
            <p className='text-white text-xl font-semibold'>$5400.25</p>
        </div>
    </div>
  )
}

export default CardAnalytic