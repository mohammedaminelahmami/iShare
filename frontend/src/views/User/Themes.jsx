import React from 'react'
import Nav from '../../components/Nav'
import imgTheme1 from '../../imgs/imgTheme1.svg'
// import img2 from '../../imgs/img2.jpg'
// import img3 from '../../imgs/img3.jpg'
import Footer from '../../components/Footer'

function Themes() {
  return (
    <div className='parentThemes'>
        <Nav />

        <div className='myBg flex flex-col items-center'>
            <center><p className='mt-12 text-firstColor text-3xl font-bold md:text-xl'>Free Link In Bio Templates To Help You Share Content Online</p></center>

            {/* Themes */}
            <div className='flex flex-wrap m-20 gap-2'>
                {/* Theme 1 */}
                <button className='myTansition rounded-xl sm:mr-8'>
                    <img src={imgTheme1} className='rounded-lg sm:w-96' width='300'/>
                </button>

                {/* Theme 2 */}
                <button className='myTansition rounded-xl sm:mr-8'>
                    <img src={imgTheme1} className='rounded-lg sm:w-96' width='300'/>
                </button>
                {/* Theme 3 */}
                <button className='myTansition rounded-xl sm:mr-8'>
                    <img src={imgTheme1} className='rounded-lg sm:w-96' width='300'/>
                </button>
            </div>

        </div>

        <Footer />
    </div>
  )
}

export default Themes