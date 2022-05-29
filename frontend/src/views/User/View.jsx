import React, {useState, useEffect} from 'react'
import github from '../../imgs/github.png'
import facebook from '../../imgs/facebook1.png'
import twitter from '../../imgs/twitter1.png'
import linkdin from '../../imgs/linkdin.png'
import spt from '../../imgs/spt.png'
import ytt from '../../imgs/ytt.png'
import logoiShare3 from '../../imgs/logoiShare3.png'
import axios from 'axios'
import YouTube from 'react-youtube';
import HandleImg from '../../components/HandleImg'
import SpotifyPlayer from 'react-spotify-player';
var getYouTubeID = require('get-youtube-id');

function View() {

  const [links, setLinks] = useState([])
  const [YTlink, setYTlink] = useState([])
  const [spotifyLink, setSpotifyLink] = useState('')
  const [desc, setDesc] = useState('')
  const [urlYoutube, setUrlYoutube] = useState('')
  const [img, setImg] = useState('')
  const [reload, setReload] = useState(false)

  const [username, setUsername] = useState('');

  const usernameUrl = window.location.href.slice(22)

  const username_res = async ()=>{
    let formDataUser = new FormData();
    formDataUser.append('username', usernameUrl);
    
    let response = await axios.post('http://localhost/ishare/backend/user/getUser', formDataUser)
    const dataUsername = response.data.username
    setUsername(dataUsername)
    setReload(true)
  }

  useEffect(()=>{
    username_res();
  }, [])
  
  useEffect(()=>{
    let myFormData = new FormData()
    myFormData.append('username', username)

    axios.post('http://localhost/ishare/backend/link/getLinks', myFormData)
    .then(function(response){
      // console.log(response)
      setLinks(response.data)
    })
    .catch(function(error){
      console.log(error);
    })
  }, [reload])

  useEffect(()=>{
    let formData = new FormData();
    formData.append('username', username)

    axios.post('http://localhost/ishare/backend/user/getDescription', formData)
    .then(function(response){
      // console.log(response.data.description);
      setDesc(response.data.description)
    })
    .catch(function(error){
      console.log(error);
    })
  }, [reload])
  
  const optsWeb = {
    width: '100%',
    height: '320',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
    
  };

  // size may also be a plain string using the presets 'large' or 'compact'
  const size = {
    width: '100%',
    height: 300,
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'

  const getImg = async ()=>{
    let formDataImg = new FormData();
    formDataImg.append('username', username)

    let getImg = await axios.post('http://localhost/ishare/backend/user/getImg', formDataImg)
    setImg(getImg.data.imgProfile)
    // console.log(getImg.data.imgProfile);
  }
  
  useEffect(()=>{
    getImg();
  }, [reload])
  
  return (
    <div className='parentView'>
      <div className='flex flex-col items-center w-full bg-blue-50' style={{height:"100vh"}}>
        {/* Avatar */}
        <HandleImg img={img&& img} />
        {/* @username */}
        <center className='underline font-bold md:text-xs text-black'>@{username}</center>
        {/* Description */}
        <p className='m-8 text-black text-xl font-semibold md:text-md sm:text-xs md:m-3'>{desc}</p>

        {/* <input type="text" onChange={HandleChange} defaultValue={youtubeUrl} placeholder='URL...' hidden/> */}

        {links&&
          links.map((link)=>{
            return(
              <>
                <button
                  onClick={link.type === 'Normal Link' ? ()=>{window.open('http://'+link.linkUrl, '_blank')} : 
                    (link.type === 'Youtube Link' ?
                      ()=>
                      {
                        let formDataYTLinks = new FormData();

                        formDataYTLinks.append('idLink', link.idLink)
                        formDataYTLinks.append('username', username)
                      
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
                      }
                      :
                      ()=>{
                        let formDataSpotify = new FormData();
                        formDataSpotify.append('idLink', link.idLink)
                        formDataSpotify.append('username', username)
                    
                        axios.post('http://localhost/ishare/backend/link/getSpotifyLinks', formDataSpotify)
                        .then(response=>{
                          setSpotifyLink(response.data)
                        })
                        .catch(error=>{
                          console.log(error);
                        })
                      }
                    )
                  }
                  className='bg-firstColor text-white text-medium font-semibold mt-7 px-5 py-3 w-1/3 md:text-xs md:w-52 md:mt-2 rounded-md hoverButtonTheme1'>
                    {link.type === 'Spotify Link' ?
                      <div className='flex'>
                        <div className=''><img src={spt} width="20" className='inline' /></div>
                        <div className='mx-auto'>{link.title}</div>
                      </div>
                      :
                      (link.type === 'Youtube Link' ?
                        <div className='flex'>
                          <div className=''><img src={ytt} width="20" className='inline' /></div>
                          <div className='mx-auto'>{link.title}</div>
                        </div>
                          :
                        <div className='mx-auto'>{link.title}</div>
                      )
                    }
                </button>
                {YTlink.idLink == link.idLink&&
                  <div className='w-1/3 sm:w-width_77 mt-1 border-8 border-firstColor rounded-md'>
                    <YouTube videoId={urlYoutube} opts={optsWeb} />
                  </div>
                }
                {spotifyLink.idLink == link.idLink&&
                  <div className='w-1/3 sm:w-width_77 mt-1 border-8 border-firstColor rounded-md'>
                    <SpotifyPlayer
                      uri={spotifyLink.linkUrl}
                      size={size}
                      view={view}
                      theme={theme}
                    />
                  </div>
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


        {/* {true ?    
          <div> Hi </div>
          :
          (
            1-1===1 ?
            <div> Hello </div>
          :

            (3+3===6&&

              <div> World </div>
            )
          )
        } */}
        
    </div>
  )
}

export default View