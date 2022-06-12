import React, {useEffect, useState} from 'react'
import MsideMenu from '../../components/MsideMenu'
import Nav from '../../components/Nav'
import Pinformation from '../../components/Pinformation'
import ChangePwd from '../../components/ChangePwd'
import { useLocation } from 'react-router-dom'
import Img from '../../components/Img'

const Profile = ()=>{
  const [currentPage, setCurrentPage] = useState(window.location.href.split("=")[1])

  const location = useLocation();

  useEffect(()=>{
    setCurrentPage(window.location.href.split("=")[1])
  }, [location])

  return (
    <div className='font-["poppins"]'>
        <Nav />
        <div className='ml-1'><p className='text-xl font-semibold text-firstColor ml-96 mt-14'> Edit Profile </p></div>
        
        <div className='flex first-line: ml-96'>
            <MsideMenu />
            {currentPage == 'pwd' ?
              <ChangePwd />
              :
              (currentPage == 'img' ?
                <div className='mt-12 ml-72'>
                  <Img />
                </div>
                :
                <Pinformation />
                )
              }
        </div>

            {/* <AccountBannedModal /> */}
        <svg className='absolute bottom-0 zIndex_N xl:hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5463FF" fillOpacity="1" d="M0,288L60,266.7C120,245,240,203,360,197.3C480,192,600,224,720,213.3C840,203,960,149,1080,154.7C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

    </div>
  )
}

export default Profile