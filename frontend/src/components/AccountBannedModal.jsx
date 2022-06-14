import React from 'react'
import banned from '../imgs/banned.png'

const AccountBannedModal = () => {

    const HandleClickTerms = ()=>{
        window.open('/terms');
    }

    const HandleClickContact = ()=>{
      window.open('/contact');
    }

  return (
    <div>
        <div className="p-20 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none  bg-colorOpacity bg-blackfocus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="p-10 border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none modal">
                <div>
                    <div className='flex gap-4'>
                        <div className='self-center'><img src={banned} width="25" /></div>
                        <p className="flex justify-center text-xl">Your account has been banned</p>
                    </div>
                    <div className="flex justify-center gap-5 mt-2 text-sm text-gray-500 ml-10">
                      <p>Your account has been disabled<br></br> for violating our <button onClick={HandleClickTerms} type='submit'><span className='text-secondColor font-medium'>terms</span></button>. Learn how you <br></br> may be able to restore your account. <br></br> Think your account was banned or suspended by mistake?<br></br> Let us know so we can help. <button onClick={HandleClickContact} type='submit'><span className='text-secondColor font-medium'>contact</span></button></p>
                    </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default AccountBannedModal