import React, { useState } from 'react'
import 'tailwindcss/tailwind.css'
import 'boxicons'
import OnboardingSecond from './OnboardingSecond'
const OnboardingFirst = () => {
  const [viewSecond, setViewSecond] = useState(false)
  const handleCLick = () => {
    setViewSecond(!viewSecond)
  }

  return (
    <>
      { viewSecond ? <OnboardingSecond/>:
        <div className='w-screen h-screen my-2 flex flex-col justify-between items-center realtive'>
            <span className='self-end mr-10 text-gray-400'>omitir</span>
            <div className='flex flex-col items-center'>
              <img className='max-w-xs mb-4' src='./img/recipes-v.png' alt='imagen de comida rapida'/>
              <span className='font-sans font-semibold text-center'>encuentra las mejores y mas deliciosas recetas de todo el mundo.</span>
            </div>
            <div className='flex flex-row mb-20'>
                <div className='flex flex-row gap-1 justify-center items-center' >
                    <div className='w-4 h-4 bg-black rounded-3xl'></div>
                    <div className='w-4 h-4 bg-gray-400 rounded-3xl'></div>
                    <div className='w-4 h-4 bg-gray-400 rounded-3xl'></div>
                </div>
                <div onClick={handleCLick} className='absolute right-5 bottom-2'>
                        <box-icon name='chevron-right'/>
                </div>
            </div>
        </div>
        
      }
    </>
  )
}
export default OnboardingFirst