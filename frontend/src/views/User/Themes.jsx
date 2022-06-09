import React, { useState, useEffect } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import img1 from '../../imgs/img1.png'
import img2 from '../../imgs/img2.png'
import img3 from '../../imgs/img3.png'
import use1 from '../../imgs/use1.png'
import use2 from '../../imgs/use2.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Themes() {

  const [userPro, setUserPro] = useState(false);
  const [title, setTitle] = useState('theme1');

  const getUser = async ()=>{
    let formData = new FormData();
    formData.append('username', localStorage.getItem('username'));

    let response = await axios.post('http://localhost/ishare/backend/user/getUser', formData)
    // console.log(response.data.plan);
    let data = response.data.plan

    if(data === 1)
    {
      setUserPro(true)
    }else{
      setUserPro(false)
    }
  }

  // const getThemes = async ()=>{
  //   let response = await axios.get('http://localhost/ishare/backend/theme/getAllThemes')
  //   setThemes(response.data)
  //   // console.log(response.data)
  // }

  const getThemeByTitle = async ()=>{
    let formDataTheme = new FormData();
    formDataTheme.append('title', title);

    let response = await axios.post('http://localhost/ishare/backend/theme/getThemeByTitle', formDataTheme)
    console.log(response.data)
  }

  useEffect(()=>{
    getThemeByTitle();
  }, [title])

  useEffect(()=>{
    getUser();
    // getThemes();
  }, [])

  return (
    <div className='parentThemes'>
        <Nav />

        <div className='myBg flex flex-col items-center'>
            <center><p className='mt-12 text-firstColor text-3xl font-bold md:text-xl'>Free Link In Bio Templates To Help You Share Content Online</p></center>

            <div className='flex flex-wrap m-20 gap-10 sm:ml-24'>
              {userPro ?
                <button onClick={()=>{setTitle('theme3')}} className='myTansition rounded-xl sm:mr-8'>
                  <img src={use1} />
                </button>
                :
                <Link to='/pricing'>
                  <button className='myTansition rounded-xl sm:mr-8'>
                    <img src={img3} />
                  </button>
                </Link>
              }

              {userPro ?
                <button onClick={()=>{setTitle('theme2')}} className='myTansition rounded-xl sm:mr-8'>
                  <img src={use2} />
                </button>
                :
                <Link to='/pricing'>
                  <button className='myTansition rounded-xl sm:mr-8'>
                    <img src={img2} />
                  </button>
                </Link>
              }

              <button onClick={()=>{setTitle('theme1')}} className='myTansition rounded-xl sm:mr-8'>
                <img src={img1} />
              </button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Themes