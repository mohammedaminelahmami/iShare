import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StripeContainer from './StripeContainer'

function PlanPricing() {

    const [loggedIn, setLoggedIn] = useState(false)
    const [showModal, setShowModal] = useState(false)

    useEffect(()=>{
        if(localStorage.getItem('token'))
        {
            setLoggedIn(true)
        }
    }, [])

    const HandleClickModal = ()=>{
        setShowModal(true)
    }

  return (
    <div>
        <center><p className='myBg mt-12 text-firstColor font-bold text-3xl md:text-2xl'>Pick your plan, you can always change later.</p></center>
        <div className='flex flex-wrap justify-center gap-10'>
            {/* StartPrice {FREE} */}
            <div className="p-4 max-w-sm mt-16 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-4 text-3xl font-extrabold text-favColor dark:text-gray-400">FREE</h5>
                <div className="flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-xl font-bold text-favColor tracking-tight">Free, forever</span>
                </div>
                {/* <!-- List --> */}
                <ul role="list" className="my-7 space-y-5" style={{marginTop:"31px"}}>
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">API Access</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
                    </li>
                </ul>

                {loggedIn ?
                    <button type="button" disabled className="text-white bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Free</button>
                    :
                    <Link to='/register'><button type="button" className="text-white bg-firstColor hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Join for free</button></Link>
                }

            </div>
            {/* EndPrice */}

            {/* StartPrice {PRO} */}
            <div className="p-4 max-w-sm mt-16 bg-white rounded-lg border-4 border-firstColor shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-4 text-3xl font-extrabold text-favColor dark:text-gray-400">PRO</h5>
                <div className="flex items-baseline text-favColor dark:text-white">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-3xl font-extrabold tracking-tight">5</span>
                    <span className="ml-1 text-medium font-normal text-gray-500 dark:text-gray-400">/month</span>
                </div>
                {/* <!-- List --> */}
                <ul role="list" className="my-6 space-y-5">
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">API Access</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
                    </li>
                    <li className="flex space-x-3 line-through decoration-gray-500">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
                    </li>
                </ul>
                
                {loggedIn ?
                    <button type="button" onClick={HandleClickModal} className="text-white bg-firstColor hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Get PRO</button>
                    :
                    <Link to='/register'><button type="button" className="text-white bg-firstColor hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Get PRO</button></Link>
                }
            </div>
            {/* EndPrice */}

            {showModal ? (
                <div className="p-20 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none  bg-colorOpacity bg-blackfocus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <div className="p-10 border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-6">
                                <h3 className="text-stripeColor text-xl font-bold mr-10">Payment with stripe 👀</h3>
                                <button
                                    className="bg-transparent border-0 float-right"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="h-8 w-8 text-xl block bg-firstColor text-white font-medium rounded-md">
                                        x
                                    </span>
                                </button>
                            </div>

                            <div>
                                <StripeContainer />
                            </div>

                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    </div>
  )
}

export default PlanPricing