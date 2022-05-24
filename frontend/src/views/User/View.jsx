import React, {useState, useEffect, useRef} from 'react'
import Avatar from '../../imgs/avatar.svg'
import github from '../../imgs/github.png'
import facebook from '../../imgs/facebook1.png'
import twitter from '../../imgs/twitter1.png'
import linkdin from '../../imgs/linkdin.png'
import logoiShare3 from '../../imgs/logoiShare3.png'
import axios from 'axios'
import YouTube from 'react-youtube';
var getYouTubeID = require('get-youtube-id');

function View(props) {

  const [links, setLinks] = useState([])
  const [desc, setDesc] = useState('')
  const [youtubeId, setYoutubeId] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [YTlink, setYTlink] = useState([])
  const [urlYoutube, setUrlYoutube] = useState('')
  const [mobile, setMobile] = useState(false)
  
  useEffect(()=>{
    const myFormData = new FormData()
    myFormData.append('username', localStorage.getItem('username'))

    axios.post('http://localhost/ishare/backend/link/getLinks', myFormData)
    .then(function(response){
      // console.log(response)
      setLinks(response.data)
    })
    .catch(function(error){
      console.log(error);
    })
  }, [])

  useEffect(()=>{
    let formData = new FormData();
    formData.append('username', localStorage.getItem('username'))

    axios.post('http://localhost/ishare/backend/user/getDescription', formData)
    .then(function(response){
      // console.log(response.data.description);
      setDesc(response.data.description)
    })
    .catch(function(error){
      console.log(error);
    })
  }, [])

  const HandleChange = (e)=>{
    // console.log(e.target.value);
    setYoutubeId(getYouTubeID(e.target.value));
  }
  
  const optsWeb = {
    height: '320',
    width: '490',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
    
  };
  
  const optsMobile = {
    height: '150',
    width: '200',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
    
  };
  
  return (
    <div className='parentView'>
        <div className='flex flex-col items-center w-full bg-blue-50'>
            {/* Avatar */}
            <img src={Avatar} className='w-32 md:w-20 sm:w-10 rounded-full m-3' />

            {/* @username */}
            <center className='underline font-bold md:text-xs text-black'>@{props.username}</center>

            {/* Description */}
            <p className='m-8 text-black text-xl font-semibold md:text-md sm:text-xs md:m-3'>{desc}</p>

            {/* <input type="text" onChange={HandleChange} defaultValue={youtubeUrl} placeholder='URL...' hidden/> */}

            {links&&
              links.map((link)=>{
                return(
                  <>
                    <button
                      onClick={link.type === 'Normal Link' ? ()=>{window.open('http://'+link.linkUrl, '_blank')} : ()=>{
                        let formDataYTLinks = new FormData();

                        formDataYTLinks.append('idLink', link.idLink)
                        formDataYTLinks.append('username', localStorage.getItem('username'))
                      
                        axios.post('http://localhost/ishare/backend/link/getYoutubeLinks', formDataYTLinks)
                        .then(response =>{
                          // console.log(response.data);
                          let data = response.data
                          setYTlink(data)
                          let a = data.linkUrl.slice(24)
                          setUrlYoutube(a)
                        })
                        .catch(error=>{
                          console.log(error);
                        })
                      } }
                      className='bg-firstColor text-white text-medium font-semibold mt-7 px-5 py-3 w-1/3 md:text-xs md:w-52 md:mt-2 rounded-md hoverButtonTheme1'>{link.title}
                    </button>
                    {YTlink.idLink === link.idLink&&
                      <>
                        <div className='mt-1 border-8 border-firstColor rounded-md'>
                          <YouTube videoId={urlYoutube} opts={mobile ? optsMobile : optsWeb} />
                        </div>
                      </>
                    }
                  </>
                )
              })
            }


            {/* social media icons */}
            <div className='flex m-10 gap-2 md:mb-4 md:mt-8'>
              <button className='w-7 h-full md:w-6'><img src={github} /></button>
              <button className='w-7 h-full md:w-6'><img src={facebook} /></button>
              <button className='w-7 h-full md:w-6'><img src={twitter} /></button>
              <button className='w-7 h-full md:w-6'><img src={linkdin} /></button>
            </div>

            {/* Logo iShare */}
            <img src={logoiShare3} className='p-1 md:w-24 md:p-5' />
        </div>
    </div>
  )
}

export default View