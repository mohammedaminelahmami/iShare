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

function Themes(props) {

  const [userPro, setUserPro] = useState(false);
  const [idTheme, setIdTheme] = useState(1);
  const [themeDB, setThemeDB] = useState([]);

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

  // const getThemeByTitle = async ()=>{
  //   let formDataTheme = new FormData();
  //   formDataTheme.append('title', title);

  //   let response = await axios.post('http://localhost/ishare/backend/theme/getThemeByTitle', formDataTheme)
  //   console.log(response.data)
  // }

  // useEffect(()=>{
  //   getThemeByTitle();
  // }, [title])

  useEffect(()=>{
    getUser();
    // getThemes();
  }, [])

  const changeTheme = async ()=>{
    let formDataTheme = new FormData();
    formDataTheme.append('idTheme', idTheme);
    formDataTheme.append('username', localStorage.getItem('username'));

    await axios.post('http://localhost/ishare/backend/theme/changeTheme', formDataTheme)
  }

  const themeHandler = (e)=>{
    if(e === 1)
    {
      setIdTheme(1)
    }
    else if(e === 2)
    {
      setIdTheme(2)
    }
    else if(e === 3)
    {
      setIdTheme(3)
    }
    props.getTheme(idTheme)
  }

  
    useEffect(()=>{
      changeTheme();
    }, [idTheme])

  return (
    <div className='parentThemes'>
        <Nav />

        <div className='myBg flex flex-col items-center'>
            <center><p className='mt-12 text-firstColor text-3xl font-bold md:text-xl'>Free Link In Bio Templates To Help You Share Content Online</p></center>

            <div className='flex flex-wrap m-20 gap-10 sm:ml-24'>
              {userPro ?
                <button onClick={()=>{themeHandler(3)}} type='submit' className='myTansition rounded-xl sm:mr-8'>
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
                <button onClick={()=>{themeHandler(2)}} type='submit' className='myTansition rounded-xl sm:mr-8'>
                  <img src={use2} />
                </button>
                :
                <Link to='/pricing'>
                  <button className='myTansition rounded-xl sm:mr-8'>
                    <img src={img2} />
                  </button>
                </Link>
              }

              <button onClick={()=>{themeHandler(1)}} type='submit' className='myTansition rounded-xl sm:mr-8'>
                <img src={img1} />
              </button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Themes