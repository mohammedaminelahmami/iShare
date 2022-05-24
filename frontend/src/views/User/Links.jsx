import React, { useState, useRef, useEffect } from 'react'
import Nav from '../../components/Nav'
import UserAnalyticsBar from '../../components/UserAnalyticsBar'
import youtube from '../../imgs/youtube.png'
import spotify from '../../imgs/spotify.png'
import none from '../../imgs/none.png'
import edit from '../../imgs/edit.png'
import deletee from '../../imgs/deletee.png'
import Avatar from '../../imgs/avatar.svg'
import Mobile from '../../components/Mobile'
import ShowModalEdit from '../../components/ShowModalEdit'
import axios from 'axios'

let imgProfile = require('../../uploads/${imgProfile}');

function Links() {

  const [showModalEdit, setShowModalEdit] = useState(false)
  const [links, setLinks] = useState([])
  const [myIdLink, setMyIdLink] = useState('')
  const [mytitle, setMyTitle] = useState('')
  const [myUrl, setMyUrl] = useState('')
  const [imgProfile, setImgProfile] = useState('')

  const [clickedNone, setClickedNone] = useState(true)
  const [clickedYoutube, setClickedYoutube] = useState(false)
  const [clickedSpotify, setClickedSpotify] = useState(false)

  //
  const title = useRef('');
  const linkUrl = useRef('');
  const description = useRef('');

  const test = ()=>{
    alert('Clicked !!!!')
  }

  const HandleClick = ()=>{
    window.open('http://localhost:3000/'+localStorage.getItem('username'), '_blank')
  }

  const HandleClickLink = ()=>{
    let formData = new FormData();

    let typeLink = ''
    if(clickedNone)
    {
      typeLink = 'Normal Link'
    }else if(clickedYoutube)
    {
      typeLink = 'Youtube Link'
    }else if(clickedSpotify)
    {
      typeLink = 'Spotify Link'
    }

    formData.append('title', title.current.value)
    formData.append('linkUrl', linkUrl.current.value)
    formData.append('username', localStorage.getItem('username'))
    formData.append('type', typeLink)

    axios.post('http://localhost/ishare/backend/link/addLink', formData)
    .then(function(response){
      console.log(response);
      window.location.reload()
    })
    .catch(function(error){
      console.log(error);
    })
  }

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

  const HandleClickDesc = ()=>{
    const formDataDesc = new FormData();
    formDataDesc.append('description', description.current.value)
    formDataDesc.append('username', localStorage.getItem('username'))

    axios.post('http://localhost/ishare/backend/user/addDescription', formDataDesc)
    .then(function(response){
      window.location.reload()
      // console.log(response)
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const HandleChangeImg = (e)=>{
    let formDataImg = new FormData();
    formDataImg.append('img', e.target.files[0])
    formDataImg.append('username', localStorage.getItem('username'))

    axios.post('http://localhost/ishare/backend/user/imgUpload', formDataImg, {
      headers:{
        "Content-Type": "multipart/form-data",
      },
    })
    .then(response =>{
      // console.log(response.data);
      setImgProfile(response.data);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  return (
    <div className='bg-gray-100 font-["poppins"] backg'>
      <Nav />
      <UserAnalyticsBar />

      <div className='flex justify-around mt-10'>
        <div className='flex flex-col' style={{width:"31rem"}}>
          <div className='flex flex-col justify-around gap-4'>
            {/* Change Avatar */}
            <div className='flex flex-col items-center p-4 shadow-lg rounded-md w-full bg-gray-100'>
                <img src={imgProfile ? imgProfile : Avatar} className='block w-32 rounded-full m-3 md:w-20 sm:w-10' />
                <label htmlFor="input" className="px-2 py-3 m-2 text-white text-xs bg-firstColor font-semibold rounded-sm cursor-pointer">Pick an image</label>
                <input onChange={HandleChangeImg} type="file" id='input' accept="image/*" hidden/>
            </div>

          {links.map((link, index)=>{
            return(
              <div key={index}>
                <div className='flex justify-between mt-2 p-4 shadow-lg rounded-md bg-firstColor text-white'>
                  <p className='ml-2'>{link.title}</p>
                  <div className='flex gap-4 mr-2'>
                    <button type='button'
                      onClick={()=>{
                        setShowModalEdit(true)
                        setMyIdLink(link.idLink)
                        setMyTitle(link.title)
                        setMyUrl(link.linkUrl)
                      }}
                      >
                      <img src={edit} width='25' className='block' />
                    </button>

                    <button type='button'
                      onClick={(e)=>{
                        e.preventDefault();
                        let formDataDelete = new FormData();
                        formDataDelete.append('idLink', link.idLink)

                        axios.post('http://localhost/ishare/backend/link/deleteLink', formDataDelete)
                        .then(function(response){
                        window.location.reload()
                          // console.log(response);
                        })
                        .catch(function(error){
                          console.log(error);
                        })
                      }}><img src={deletee} width='25' className='block' />
                    </button>
                  </div>
                </div>
              </div>
              )
            })
          }
            {/* Description */}
            <div className='p-4 w-full bg-white shadow-lg rounded-md'>
              <textarea ref={description} name="body" id="body" cols="15" rows="2" className="bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Description"></textarea>
              <button type='button' onClick={HandleClickDesc} className='mt-2 py-1 px-4 text-sm font-semibold text-firstColor bg-white border-2 border-firstColor rounded-md'>Submit</button>
            </div>
          </div>

          {/* AddLink */}
          <div className='mt-5 p-4 bg-white shadow-lg rounded-md'>
            <div className='flex gap-3 m-2'>
              <div className='self-center text-xl text-firstColor font-semibold'>Links Type</div>
              <button type='submit' onClick={()=>{setClickedNone(true); setClickedYoutube(false); setClickedSpotify(false)}} className={clickedNone ? 'bg-blue-200 rounded-full p-3' : 'bg-gray-100 rounded-full p-3'}><img src={none} width='27' title='Normal Link' /></button>
              <button type='submit' onClick={()=>{setClickedYoutube(true); setClickedNone(false); setClickedSpotify(false)}} className={clickedYoutube ? 'bg-blue-200 rounded-full p-3' : 'bg-gray-100 rounded-full p-3'}><img src={youtube} width='27' title='Youtube Link' /></button>
              <button type='submit' onClick={()=>{setClickedSpotify(true); setClickedNone(false); setClickedYoutube(false);}} className={clickedSpotify ? 'bg-blue-200 rounded-full p-3' : 'bg-gray-100 rounded-full p-3'}><img src={spotify} width='27' title='Spotify Link' /></button>
            </div>
            <textarea name="body" id="body" cols="15" rows="1" ref={title} className="mt-2 mb-2 bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Title"></textarea>
            <textarea name="body" id="body" cols="15" rows="3" ref={linkUrl} className="bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Url"></textarea>

            <button type='button' onClick={HandleClickLink} className='mt-2 py-1 px-4 text-sm font-semibold text-firstColor border-2 border-firstColor rounded-md'>Add</button>
          </div>
        </div>
        <Mobile HandleClick={HandleClick} />
      </div>

      <ShowModalEdit showModalEdit={showModalEdit} close={()=>{setShowModalEdit(false)}} idLink={myIdLink} title={mytitle} linkUrl={myUrl} />
    </div>
  )
}

export default Links