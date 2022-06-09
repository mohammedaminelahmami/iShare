import React, { useRef, useState } from 'react'
import axios from 'axios'

function ShowModalEdit(props) {

    const linkUrl_update = useRef('')
    const title_update = useRef('')

    const HandleSubmitEdit = (e)=>{
        e.preventDefault();
        let formDataEdit = new FormData();

        formDataEdit.append('title', title_update.current.value)
        formDataEdit.append('linkUrl', linkUrl_update.current.value)
        formDataEdit.append('idLink', props.idLink)

        axios.post('http://localhost/ishare/backend/link/updateLink', formDataEdit)
        .then(function(response){
            // console.log(response);
            window.location.reload()
        })
        .catch(function(error){
            console.log(error);
        })
        props.close();
    }
  return (
    <div>
    {/* Modal */}
      {props.showModalEdit ? (
          <div className="p-20 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-colorOpacity bg-blackfocus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="animate-scale p-10 border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none modal">
                <div className="flex items-start justify-between p-6 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-black text-xl font-bold">Edit Link</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={props.close}
                  >
                    <span className="h-8 w-8 text-xl block bg-firstColor text-white font-medium rounded-md">
                      x
                    </span>

                  </button>
                </div>
                <div>
                  {/* AddLink */}
                  <form onSubmit={HandleSubmitEdit} className='mt-5 p-4 bg-white shadow-md rounded-md'>
                    <textarea name="body" id="body" cols="15" rows="1" defaultValue={props.title} ref={title_update}  className="mt-2 mb-2 bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Title"></textarea>
                    <textarea name="body" id="body" cols="15" rows="3" defaultValue={props.linkUrl} ref={linkUrl_update} className="bg-gray-100 border-2 w-full p-2 rounded-md" placeholder="Url"></textarea>

                    <button type='submit' className='mt-2 py-1 px-4 text-sm font-semibold text-firstColor border-2 border-firstColor rounded-md'>Edit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
      ) : null}
    </div>
  )
}

export default ShowModalEdit