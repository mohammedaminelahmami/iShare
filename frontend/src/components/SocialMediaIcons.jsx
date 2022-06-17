import React from 'react'
import facebook from '../imgs/facebook1.png'
import twitter from '../imgs/twitter1.png'
import instagram from '../imgs/ig.png'
import axios from 'axios'

const SocialMediaIcons = (props) => {

    const HandleClick = async (e)=>{
        let formData = new FormData();
        formData.append('social', e);
        formData.append('username', props.username)
        let response = await axios.post(`http://localhost/ishare/backend/user/getSocialMedia`, formData)
        if(response.data.media === 'fb')
        {
          let string = response.data.data.fb;
          if(string.includes('https://'))
          {
            window.open(response.data.data.fb, '_blank');
          }else{
            window.open('https://'+response.data.data.fb, '_blank');
          }
        }else if(response.data.media === 'tw')
        {
          let string = response.data.data.tw;
          if(string.includes('https://'))
          {
            window.open(response.data.data.tw, '_blank');
          }else{
            window.open('https://'+response.data.data.tw, '_blank');
          }
        }else if(response.data.media === 'it')
        {
          let string = response.data.data.it;
          if(string.includes('https://'))
          {
            window.open(response.data.data.it, '_blank');
          }else{
            window.open('https://'+response.data.data.it, '_blank');
          }
        }
    }

  return (
    <div>
        {/* social media icons */}
        <div className='flex m-10 gap-2 md:mb-4 md:mt-8'>
          <button onClick={()=>HandleClick('fb')} className='w-7 h-full md:w-6'><img src={facebook} /></button>
          <button onClick={()=>HandleClick('tw')} className='w-7 h-full md:w-6'><img src={twitter} /></button>
          <button onClick={()=>HandleClick('it')} className='w-7 h-full md:w-6'><img src={instagram} /></button>
        </div>
    </div>
  )
}

export default SocialMediaIcons