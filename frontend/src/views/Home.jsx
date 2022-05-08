import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ins from '../imgs/ins.webp'
import { UserContext } from './UserContext'

function Home() {

  return (
    <div className="parentHome font-['poppins']">
      <Nav />
        <center>
            <p className='mt-20 text-firstColor font-extrabold text-5xl md:text-4xl textSmall'>The Only Link You'll Ever Need</p>
            <p className='mt-8 text-medium text-menuColor md:text-sm textSmall__sec'>iShare is a beautiful way to share your YouTube, Instagram, Twitter,<br /> and more content with just one bio link. Your bio is free. Get started today!</p>

            <Link to='/register'><button type='submit' className='btnGetStartedForFree text-white bg-firstColor px-10 py-4 mt-8 rounded-sm'>GET STARTED FOR FREE !</button></Link>
        </center>

        <svg className='svgHome' style={{position:"absolute", top:"300px", zIndex:"-999"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#464DDC" fillOpacity="1" d="M0,96L80,106.7C160,117,320,139,480,149.3C640,160,800,160,960,149.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <div className='wave'></div>

        {/* Section 1 */}
        <div className='flex flex-wrap justify-evenly mt-36'>
          <img src={ins} className='ins' />

          <div className='flex flex-col justify-around'>
            <div className='flex flex-col items-center self-center'>
              {/* P1 */}
              <div className='w-96 text-white font-normal p_1 md_lg:ml-10'>
                <div className='text-white font-extrabold text-3xl'>Easy to use</div>
                <div className='mt-5 text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio excepturi nemo sit eligendi quia dicta! Voluptas vitae veniam cum facilis fugiat.
                </div>
              </div>

            </div>

            <div className='flex flex-col items-center self-center'>
              {/* P2 */}
              <div className='w-96 text-white font-normal p_2'>
                <div className='text-white font-extrabold text-3xl'>Easy to use</div>
                <div className='mt-5 text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio excepturi nemo sit eligendi quia dicta! Voluptas vitae veniam cum facilis fugiat.
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Section 2 */}
        <div className='flex flex-wrap justify-evenly flex-row-reverse mt-56 mx-2 md_lg:mt-10'>
          <img src={ins} className='ins insRes'/>

          <div className='flex flex-col justify-around'>
            <div className='flex flex-col items-center self-center ml-36'>
              {/* P3 */}
              <div className='w-96 font-normal self-center md:w-80 md_lg:mr-36 md_lg:mt-10'>
                <div className='text-firstColor font-extrabold text-3xl'>Easy to use</div>
                <div className='mt-5 text-sm text-menuColor'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio excepturi nemo sit eligendi quia dicta! Voluptas vitae veniam cum facilis fugiat.
                  <Link to='/register'><button type='submit' className='btnGetStartedForFree text-white bg-firstColor px-10 py-4 mt-8 rounded-sm'>GET STARTED FOR FREE !</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default Home