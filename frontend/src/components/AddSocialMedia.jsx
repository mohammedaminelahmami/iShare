import React, { useRef } from 'react'
import it from '../imgs/ig.png'
import tw from '../imgs/twitter1.png'
import fb from '../imgs/facebook1.png'
import axios from 'axios'

const AddSocialMedia = (props) => {

    const facebook = useRef('');
    const twitter = useRef('');
    const instagram = useRef('');
    
    const HandleClick = async ()=>{
        let formData = new FormData();
        formData.append(props.media === 'facebook' ? 'facebook' : (props.media === 'twitter' ? 'twitter' : 'instagram'), props.media === 'facebook' ? facebook.current.value : (props.media === 'twitter' ? twitter.current.value : instagram.current.value))
        formData.append('username', localStorage.getItem('username'))
        await axios.post(`http://localhost/ishare/backend/user/${props.media === 'facebook' ? 'addFacebook' : (props.media === 'twitter' ? 'addTwitter' : 'addInstagram')}`, formData)
        props.media === 'facebook' ? facebook.current.value = '' : (props.media === 'twitter' ? twitter.current.value = '' : instagram.current.value = '')
    }

  return (
    <div>
        <div className='mt-5 p-4 bg-white shadow-lg rounded-md'>
            <div className='flex gap-3 m-2'>
              {props.media === 'facebook'?
                <div className='self-center'><img src={fb} width='25' /></div>
                :
                (
                    props.media === 'twitter'?
                        <div className='self-center'><img src={tw} width='25' /></div>
                    :
                        <div className='self-center'><img src={it} width='25' /></div>
                )
              }
              <div className='self-center text-xl text-firstColor font-semibold'>{props.socialM}</div>
            </div>
            {props.media === 'facebook' ?
                <textarea ref={facebook} name="body" id="body" cols="15" rows="1" className="bg-gray-100 border-2 w-full p-2 rounded-md" placeholder={props.media}></textarea>
                :
                (props.media === 'twitter' ?
                    <textarea ref={twitter} name="body" id="body" cols="15" rows="1" className="bg-gray-100 border-2 w-full p-2 rounded-md" placeholder={props.media}></textarea>
                :
                    <textarea ref={instagram} name="body" id="body" cols="15" rows="1" className="bg-gray-100 border-2 w-full p-2 rounded-md" placeholder={props.media}></textarea>
                )
            }
            <button onClick={HandleClick} type='submit' className='mt-2 py-1 px-4 text-sm font-semibold bg-white text-firstColor border-2 border-firstColor rounded-md'>Add</button>
          </div>
    </div>
  )
}

export default AddSocialMedia