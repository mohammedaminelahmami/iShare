import React, { useState, useEffect } from 'react'
import green from '../imgs/green.png'
import blue from '../imgs/blue.png'
import lock from '../imgs/lock.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import ReactGa from 'react-ga';

const UserAnalyticsBar = ()=>{

  const [userPro, setUserPro] = useState(false);
  const [userViews, setUserViews] = useState(0);
  const [clicks, setClicks] = useState(0);

  const getUser = async ()=>{
    let formData = new FormData();
    formData.append('username', localStorage.getItem('username'));

    let response = await axios.post('http://localhost/ishare/backend/user/getUser', formData)
    // console.log(response.data.plan);
    let dataView = response.data.view
    let dataClick = response.data.click

    setUserViews(dataView)
    setClicks(dataClick)
    
    let data = response.data.plan

    if(data === 1)
    {
      setUserPro(true)
    }else{
      setUserPro(false)
    }
  }

  useEffect(()=>{
    getUser();
  }, [])

  // useEffect(()=>{
  //   ReactGa.initialize('G-B88DQZQ7CK');
  //   ReactGa.pageview('/');
  // }, [])

  return (
    <div className='parentUserAnalyticsBar'>
      <div className='flex text-white bg-secondColor w-full p-5 gap-10 sm:gap-5'>
        <div className='ml-12 text-md font-sm d_none'>Lifetime Analytics</div>

        <div className='flex gap-2 view_click gap'>
          <div className='self-center'><img src={green} /></div>
          <div className='text-md font-sm' >views : </div>
          {userPro ?
            <div>{userViews}</div>
            :
            <Link to='/pricing'><img src={lock} width='25' /></Link>
          }
        </div>

        <div className='flex gap-2 view_click'>
          <div className='self-center'><img src={blue} /></div>
          <div className='text-md font-sm'> clicks : </div>
          {userPro ?
            <div>{clicks}</div>
            :
            <Link to='/pricing'><img src={lock} width='25' /></Link>
          }
        </div>
      </div>
    </div>
  )
}

export default UserAnalyticsBar