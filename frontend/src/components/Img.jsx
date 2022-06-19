import axios from "axios";
import { useState, useEffect } from "react";
import HandleImg from "./HandleImg";

function Img() {

  const [img, setImg] = useState('')
  const [upload, setUpload] = useState(false)

  const HandleChangeImg = async (e)=>{
    let formDataImg = new FormData();
    formDataImg.append('img', e.target.files[0])
    formDataImg.append('username', localStorage.getItem('username'))

    await axios.post('http://localhost/ishare/backend/user/imgUpload', formDataImg, {
      headers:{
        "Content-Type": "multipart/form-data",
      },
    })
    setUpload(!upload)
  }

  const resImg = async ()=>{
    let formDataGetImg = new FormData();
    formDataGetImg.append('username', localStorage.getItem('username'))

    let response = await axios.post('http://localhost/ishare/backend/user/getImg', formDataGetImg)
    // console.log(getImg.data.imgProfile);
    setImg(response.data.imgProfile)
  }

  useEffect(()=>{
    resImg();
  }, [upload])

  return (
    <div>
      {/* Change Avatar */}
      <div className='flex flex-col items-center p-4 shadow-lg rounded-md w-full bg-gray-100'>
        <HandleImg img={img&& img} />
        <label htmlFor="input" className="px-2 py-3 m-2 text-white text-xs bg-firstColor font-semibold rounded-sm cursor-pointer">Pick an image</label>
        <input onChange={HandleChangeImg} type="file" id='input' accept="image/*" hidden/>
      </div>
    </div>
  )
}

export default Img