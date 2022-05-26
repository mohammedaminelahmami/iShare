import React, { useEffect, useState } from "react";
import axios from "axios";
import { HandleImg } from "./imgProfile";

function ImgProfile() {

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
          localStorage.setItem('img', response.data)
        })
        .catch(error =>{
          console.log(error);
        })
      }

    return (
        <div>
            {/* Change Avatar */}
            <div className='flex flex-col items-center p-4 shadow-lg rounded-md w-full bg-gray-100'>
                <HandleImg img={localStorage.getItem('img')} />
                <label htmlFor="input" className="px-2 py-3 m-2 text-white text-xs bg-firstColor font-semibold rounded-sm cursor-pointer">Pick an image</label>
                <input onChange={HandleChangeImg} type="file" id='input' accept="image/*" hidden/>
            </div>
        </div>
    )
}

export default ImgProfile