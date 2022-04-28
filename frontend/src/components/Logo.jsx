import React from 'react'
import { Link } from 'react-router-dom'
import logoiShare from '../imgs/logoiShare.svg'

function Logo() {
  return (
    <Link to='/'>
        <div className='flex flex-row gap-3 mr-3'>
            <img src={logoiShare} />
            <div className='text-xl font-normal'> iShare </div>
        </div>
    </Link>
  )
}

export default Logo