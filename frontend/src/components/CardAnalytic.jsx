import React from 'react'

function CardAnalytic(props) {
  return (
    <div className='font-["poppins"]'>
        <div className='flex justify-center gap-4 items-center ml-10 w-64 h-36 shadow-lg bg-secondColor rounded-md'>
          <div className='flex flex-col gap-2'>
            <div className='text-white font-semibold '>
              {props.title}
            </div>
              <div className='flex gap-5'>
                <img src={require(`../imgs/${props.img}.png`)} width='25' />
                <p className='text-white text-xl font-semibold self-center'>{props.data}</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default CardAnalytic