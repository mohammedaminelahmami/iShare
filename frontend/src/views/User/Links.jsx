import React, { useState, useRef, useEffect } from 'react'
import Nav from '../../components/Nav'
import UserAnalyticsBar from '../../components/UserAnalyticsBar'
import explore from '../../imgs/explore.png'
import shopify from '../../imgs/shopify.png'
import music from '../../imgs/music.png'
import youtube from '../../imgs/youtube.png'
import edit from '../../imgs/edit.png'
import deletee from '../../imgs/deletee.png'
import Avatar from '../../imgs/avatar.svg'
import Mobile from '../../components/Mobile'
import axios from 'axios'

function Links() {

  let myContent = (
    <div className='mt-5 p-4 bg-white shadow-lg rounded-md'>
      <textarea name="body" id="body" cols="15" rows="1" className="mt-2 mb-2 bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Title"></textarea>
      <textarea name="body" id="body" cols="15" rows="3" className="bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Url"></textarea>

      <label className="switch">
        <input type="checkbox" />
        <span className="slider mt-2"></span>
      </label>
      {/* <button className='self-start px-8 py-2 rounded-md mt-5 bg-white text-white'>Add</button> */}
    </div>);

  const [showModal, setShowModal] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [content, setContent] = useState()
  const [links, setLinks] = useState([])

  const title = useRef('');
  const linkUrl = useRef('');
  const description = useRef('');
  const idLink = useRef('');
  const myTitle = useRef('')
  const myLinkUrl = useRef('')

  const test = ()=>{
    alert('Clicked !!!!')
  }

  const HandleClick = ()=>{
    window.open('http://localhost:3000/'+localStorage.getItem('username'), '_blank')
  }

  const HandleClickAdd = ()=>{
    setContent(<>{content} {myContent}</>)
  }

  // const HandleClickEdit = ()=>{
  //   let formDataEdit = new FormData();

  //   formDataEdit.append('link', )
  //   formDataEdit.append('idLink', idLink.current.value)

  //   axios.post('http://localhost/ishare/backend/link/updateLink', formDataEdit)
  //   .then(function(response){
  //     console.log(response);
  //   })
  //   .catch(function(error){
  //     console.log(error);
  //   })
  // }

  const HandleClickDelete = (e)=>{
    e.preventDefault();

    let formDataDelete = new FormData();
    formDataDelete.append('idLink', idLink.current.value)

    axios.post('http://localhost/ishare/backend/link/deleteLink', formDataDelete)
    .then(function(response){
      // console.log(idLink.current.value);
      // console.log(response);
      // window.location.reload()
    })
    .catch(function(error){
      console.log(error);
    })
  }

  const HandleClickLink = ()=>{
    let formData = new FormData();

    formData.append('title', title.current.value)
    formData.append('linkUrl', linkUrl.current.value)
    formData.append('username', localStorage.getItem('username'))
    formData.append('type', 'link')

    axios.post('http://localhost/ishare/backend/link/addLink', formData)
    .then(function(response){
      console.log(response);
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

    axios.post('http://localhost/ishare/backend/link/description', formDataDesc)
    .then(function(response){
      // console.log(response)
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
        <div className='flex flex-col'>
          {/* Add Links + Explore */}
          <div className='flex'>
            <button type='button' onClick={HandleClickAdd} className='px-20 py-4 rounded-md bg-firstColor text-white font-bold  mr-5'>Add New Link</button>
            <button type='button' onClick={() => setShowModal(true)} className='px-24 py-4 rounded-md bg-firstColor text-white font-bold'><img src={explore} className='inline mb-1' width='15' /> Explore</button>
          </div>

          <div className='flex flex-col justify-around gap-4'>
            {/* Change Avatar */}
            <div className='flex flex-col items-center p-4 shadow-lg rounded-md w-full bg-gray-100'>
                <img src={Avatar} className='block w-32 rounded-full m-3 md:w-20 sm:w-10' />
                <label htmlFor="input" className="px-2 py-3 m-2 text-white text-xs bg-firstColor font-semibold rounded-sm cursor-pointer">Pick an image</label>
                <input type="file" id='input' accept="image/*" hidden/>
          </div>

          {links.map((link, index)=>{
            return(
              <div key={index}>
                <div className='flex justify-between mt-2 p-4 shadow-lg rounded-md bg-firstColor text-white'>
                  <p className='ml-2'>{link.title}</p>
                  <div className='flex gap-4 mr-2'>
                    <input type='hidden' defaultValue={link.idLink} ref={idLink} />
                    <input type='hidden' defaultValue={link.title} ref={myTitle} />
                    <input type='hidden' defaultValue={link.linkUrl} ref={myLinkUrl} />
                    <button type='button' onClick={() => setShowModalEdit(true)}><img src={edit} width='25' className='block' /></button>
                    <button type='button' onClick={HandleClickDelete}><img src={deletee} width='25' className='block' /></button>
                  </div>
                </div>
              </div>
              )
            })
          }
            {/* Description */}
            <div className='p-4 w-full bg-white shadow-lg rounded-md'>
              <textarea ref={description} name="body" id="body" cols="15" rows="2" className="bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Description"></textarea>
              <button type='button' onClick={HandleClickDesc} className='mt-2 py-1 px-4 text-sm font-semibold text-firstColor bg-white border-2 border-firstColor rounded-md'>Add</button>
            </div>

          </div>

          {/* AddLink */}
          <div className='mt-5 p-4 bg-white shadow-lg rounded-md'>
            <textarea name="body" id="body" cols="15" rows="1" ref={title} className="mt-2 mb-2 bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Title"></textarea>
            <textarea name="body" id="body" cols="15" rows="3" ref={linkUrl} className="bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Url"></textarea>

            <button type='button' onClick={HandleClickLink} className='mt-2 py-1 px-4 text-sm font-semibold text-firstColor border-2 border-firstColor rounded-md'>Add</button>
          </div>

          <div>{content}</div>

        </div>
        
        <Mobile HandleClick={HandleClick} />
      </div>

      {/* Modal */}
      {showModalEdit ? (
          <div className="p-20 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none  bg-colorOpacity bg-blackfocus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="animate-scale p-10 border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-6 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-black text-xl font-bold">Edit Link</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModalEdit(false)}
                  >
                    <span className="h-8 w-8 text-xl block bg-firstColor text-white font-medium rounded-md">
                      x
                    </span>

                  </button>
                </div>
        
                <div>
                  {/* AddLink */}
                  <div className='mt-5 p-4 bg-white shadow-lg rounded-md'>
                    <textarea name="body" id="body" cols="15" rows="1" defaultValue={myTitle.current.value} className="mt-2 mb-2 bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Title"></textarea>
                    <textarea name="body" id="body" cols="15" rows="3" defaultValue={myLinkUrl.current.value} className="bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Url"></textarea>

                    <button type='button' onClick={HandleClickLink} className='mt-2 py-1 px-4 text-sm font-semibold text-firstColor border-2 border-firstColor rounded-md'>Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      ) : null}

      {/* Modal */}
      {showModal ? (
          <div className="p-20 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none  bg-colorOpacity bg-blackfocus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="p-10 border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-6 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-black text-xl font-bold">Add to iShare</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="h-8 w-8 text-xl block bg-firstColor text-white font-medium rounded-md">
                      x
                    </span>
                  </button>
                </div>
        
                <div>

                  <button onClick={test}>
                    <div className='flex'>
                      <img src={shopify} className='m-5' width='40'/>
                      <p className='self-center text-secondColor font-medium'>Share your product to sell online</p>
                    </div>
                  </button>

                  <hr />

                  <button onClick={test}>
                    <div className='flex'>
                      <img src={music} className='m-5' width='40'/>
                      <p className='self-center text-secondColor font-medium'>Share your latest or favorite music</p>
                    </div>
                  </button>

                  <hr />

                  <button onClick={test}>
                    <div className='flex'>
                      <img src={youtube} className='m-5' width='40'/>
                      <p className='self-center text-secondColor font-medium'>Share Youtube videos on your iShare</p>
                    </div>
                  </button>

                </div>
              </div>
            </div>
          </div>
      ) : null}

    </div>
  )
}

export default Links