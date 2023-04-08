import React, { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'
import OnboardingFirst from './OnboardingFirst'

const Welcome = () => {
  const [band, setBand] = useState(false)
    useEffect(() => {
        setTimeout(() => {
          setBand(true)
        }, 5000);
    }, [])
  return (
    <>
       {!band &&
        <div className='w-full h-screen bg-yellow-500 flex flex-col justify-center justify-items-center'>
          <h1 className='text-center text-white text-2xl '>welcome</h1>
          <img src='./img/full-recipes-sf.png' alt='logo'/>
        </div>}
        {band && <OnboardingFirst/>}  
    </>
  )
}
export default Welcome