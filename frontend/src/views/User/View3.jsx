import React, { useState, useEffect } from 'react'
import spt from '../../imgs/spt.png'
import ytt from '../../imgs/ytt.png'
import verified from '../../imgs/verified.png'
import axios from 'axios'
import YouTube from 'react-youtube';
import HandleImg from '../../components/HandleImg'
import SpotifyPlayer from 'react-spotify-player';
import SocialMediaIcons from '../../components/SocialMediaIcons'
import Div from '../../components/Div'
var getYouTubeID = require('get-youtube-id');

function View(props) {

  const [links, setLinks] = useState([])
  const [YTlink, setYTlink] = useState([])
  const [spotifyLink, setSpotifyLink] = useState('')
  const [desc, setDesc] = useState('')
  const [urlYoutube, setUrlYoutube] = useState('')
  const [img, setImg] = useState('')
  const [reload, setReload] = useState(false)
  const [click_100, setClick_100] = useState(false)
  const [users, setUsers] = useState([])
  const [linkReload, setLinkReload] = useState(props.newLinkMobile)
  const [descReload, setDescReload] = useState(props.newDescription)
  const [reloadImg, setReloadImg] = useState(false)
  const [stateClick, setStateClick] = useState(false)
  
  const [username, setUsername] = useState('');

  const usernameUrl = window.location.pathname.split('/')[1]

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
      setLinks(response.data)
      setLinkReload(!linkReload)
    })
    .catch(function(error){
      console.log(error);
    })
  }, [reload, linkReload])

  useEffect(()=>{
    let formData = new FormData();
    formData.append('username', username)

    axios.post('http://localhost/ishare/backend/user/getDescription', formData)
    .then(function(response){
      // console.log(response.data.description);
      setDesc(response.data.description)
      setDescReload(!descReload)
    })
    .catch(function(error){
      console.log(error);
    })
  }, [reload, descReload])
  
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
    setReloadImg(!reloadImg)
  }
  
  useEffect(()=>{
    getImg();
  }, [reload, reloadImg])
  
  const resAddView = async ()=>{
    let formDataView = new FormData();
    formDataView.append('username', usernameUrl);
    await axios.post('http://localhost/ishare/backend/user/viewPage', formDataView)
  }

  const getUsers = async ()=>{
    let response = await axios.get('http://localhost/ishare/backend/user/getUsers')
    // console.log(response.data);
    setUsers(response.data)
  }

  useEffect(()=>{
    getUsers();
  }, [])

  const clicks = async ()=>{
    let formData = new FormData();
    formData.append('username', username)
    let response = await axios.post('http://localhost/ishare/backend/user/clicks', formData)
  }

  useEffect(()=>{
    clicks();
  }, [stateClick])

  for(let i = 0; i < users.length; i++)
  {
    if(users[i].username === usernameUrl)
    {
      if(localStorage.getItem(usernameUrl) == usernameUrl)
      {
        // console.log('deja hsabto');
      }
      else{
        localStorage.setItem(usernameUrl, usernameUrl);
        resAddView();
        // console.log('function view++');
        break;
      }
    }
  }

  return (
    <div className='parentView myBgTheme3' style={click_100 ? {height:"100%"} : {height:"100vh"}}>
      <div className='flex flex-col items-center w-full'>

        {/* Avatar */}
        <HandleImg img={img&& img} />
        {/* @username */}
        <div className='flex gap-1'>
          <center className='underline font-bold md:text-xs text-black'>@{username}</center>
          <div className='self-center'><img src={verified} width='14' /></div>
        </div>
        {/* Description */}
        <p className='m-8 text-black text-xl font-semibold md:text-md sm:text-xs md:m-3'>{desc}</p>

        {/* <input type="text" onChange={HandleChange} defaultValue={youtubeUrl} placeholder='URL...' hidden/> */}

        {links&&
        Array.from(links).map((link, index)=>{
            return(
              <Div key={index}>
                <button
                  onClick={link.type === 'Normal Link' ? ()=>{window.open('http://'+link.linkUrl, '_blank'); setStateClick(!stateClick)} : 
                    (link.type === 'Youtube Link' ?
                      ()=>
                      {
                        setStateClick(!stateClick)
                        setClick_100(true) // click_100 = true -> height 100%
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
                        setStateClick(!stateClick)
                        setClick_100(true)
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
                  className='bg-firstColor text-white text-medium font-semibold rounded-sm mt-6 px-5 py-2.5 w-1/3 md:text-xs md:w-52 md:mt-2 hoverButtonTheme3'>
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
              </Div>
            )
          })
        }
      <SocialMediaIcons username={username} />
      </div>
    </div>
  )
}

export default View