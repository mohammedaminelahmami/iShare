import React, { useState, useEffect } from 'react'
import Avatar from '../imgs/avatar.svg'

const HandleImg = (props)=>{

    const [img, setImg] = useState(Avatar)

    useEffect(()=>{
        if(props.img)
        {
            setImg(require(`../uploads/${props.img}`))
        }
    }, [props.img])

    return(
        <img src={img} className='block w-32 h-32 rounded-full m-3 md:w-20 md:h-20' />
    )
}
export default HandleImg