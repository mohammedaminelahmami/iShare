import React, { useState, useRef, useEffect } from 'react'
import Nav from '../../components/Nav'
import UserAnalyticsBar from '../../components/UserAnalyticsBar'
import youtube from '../../imgs/youtube.png'
import spotify from '../../imgs/spotify.png'
import none from '../../imgs/none.png'
import edit from '../../imgs/edit.png'
import deletee from '../../imgs/deletee.png'
import Mobile from '../../components/Mobile'
import ShowModalEdit from '../../components/ShowModalEdit'
import Footer from '../../components/Footer'
import Img from '../../components/Img'
import axios from 'axios'
import AddSocialMedia from '../../components/AddSocialMedia'

const Links = (props)=>{

  const [showModalEdit, setShowModalEdit] = useState(false)
  const [links, setLinks] = useState([])
  const [myIdLink, setMyIdLink] = useState('')
  const [mytitle, setMyTitle] = useState('')
  const [myUrl, setMyUrl] = useState('')

  const [requestNewLink, setRequestNewLink] = useState(false)
  const [newDescription, setNewDescription] = useState(false)
  const [newDelete, setNewDelete] = useState(false)

  //
  const [clickedNone, setClickedNone] = useState(true)
  const [clickedYoutube, setClickedYoutube] = useState(false)
  const [clickedSpotify, setClickedSpotify] = useState(false)

  const title = useRef('');
  const linkUrl = useRef('');
  const description = useRef('');

  const HandleClick = ()=>{
    window.open('/'+localStorage.getItem('username'))
  }

  const HandleClickLink = (e)=>{
    e.preventDefault();
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
      setRequestNewLink(!requestNewLink)
      props.newLinkMobile(!requestNewLink);
      title.current.value = '';
      linkUrl.current.value = '';
    })
    .catch(function(error){
      console.log(error);
    })
  }

  useEffect(()=>{
    let myFormData = new FormData();
    myFormData.append('username', localStorage.getItem('username'))

    axios.post('http://localhost/ishare/backend/link/getLinks', myFormData)
    .then(function(response){
      setLinks(response.data)
    })
    .catch(function(error){
      console.log(error);
    })
  }, [requestNewLink, newDelete])

  const HandleClickDesc = (e)=>{
    e.preventDefault();
    let formDataDesc = new FormData();
    formDataDesc.append('description', description.current.value)
    formDataDesc.append('username', localStorage.getItem('username'))

    axios.post('http://localhost/ishare/backend/user/addDescription', formDataDesc)
    .then(function(response){
      props.newDescription(!newDescription);
      description.current.value = '';
    })
    .catch(function(error){
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

            <Img />

            {links.length > 0 &&
            links.map((link, index)=>{
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
                        onClick={async (e)=>{
                          e.preventDefault();
                          let formDataDelete = new FormData();
                          formDataDelete.append('idLink', link.idLink)
                          await axios.post('http://localhost/ishare/backend/link/deleteLink', formDataDelete)
                          setNewDelete(!newDelete)
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
          <AddSocialMedia socialM="Add Facebook" media='facebook' />
          <AddSocialMedia socialM="Add Twitter" media='twitter' />
          <AddSocialMedia socialM="Add instagram" media='instagram' />
        </div>
        {/* Share */}
        <div className='display_none mt-2 text-white absolute right-48 top-20 share'>
          <button onClick={HandleClick} className='text-md underline' target='_blank'>iShare.com/{localStorage.getItem('username')}</button>
          <button className='ml-6 border-4 px-2 py-1 rounded-md'>Share</button>
        </div>
        <div className='w-1/5'>
          <div className='fixed'>
            <Mobile />
          </div>
        </div>
      </div>

      <ShowModalEdit showModalEdit={showModalEdit} close={()=>{setShowModalEdit(false)}} idLink={myIdLink} title={mytitle} linkUrl={myUrl} />

      <div className='mt-36'>
        <Footer />
      </div>
    </div>
  )
}

export default Links