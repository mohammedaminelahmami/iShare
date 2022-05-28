import React from "react"
import axios from "axios"

function ModalAreYouSure(props) {

  const HandleClickBan = ()=>{
    const formDataBan = new FormData();
    formDataBan.append('username', props.username)

    axios.post('http://localhost/ishare/backend/user/banUser', formDataBan)
    .then(response=>{
      console.log(response.data);
    })
    .catch(error=>{
      console.log(error);
    })
    props.close();
  }

  return (
    <div>
      {props.AreYouSure ? (
          <div className="p-20 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none  bg-colorOpacity bg-blackfocus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="p-10 border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none modal">
                <div>
                  <p className="flex justify-center text-2xl">Are You Sure ?</p>
                  <div className="flex justify-center gap-5 mt-5">
                    <button className="w-24 h-9  bg-red-600 text-white rounded-sm" onClick={HandleClickBan}>Ban</button>
                    <button className="w-24 h-9  bg-secondColor text-white rounded-sm" onClick={props.close}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      ) : null}
    </div>
  )
}

export default ModalAreYouSure