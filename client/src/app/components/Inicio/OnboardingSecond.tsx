import React, { useState } from 'react'
import OnboardingFirst from './OnboardingFirst'
import OnboardingThird from './OnboardingThird'
import 'boxicons'


const OnboardingSecond = () => {
  const [viewFirst, setViewFirst] = useState(false)
  const [viewThird, setViewThird] = useState(false)
  
  const handleClickLeft = () =>{
    setViewFirst(!viewFirst)
  }

  const handleClickRight = () =>{
    setViewThird(!viewThird)
  }
  return (
    <>
      { viewFirst ? <OnboardingFirst/> : viewThird ? <OnboardingThird/> :
        <div className='w-screen h-screen my-2 flex flex-col justify-between items-center realtive'>
          <span className='self-end mr-10 text-gray-400'>omitir</span>
          <div className='flex flex-col items-center'>
            <img className='max-w-xs mb-4' src='./img/recipe.png' alt='imagen de comida rapida'/>
            <span className='font-sans font-semibold text-center' >podras guardar y sugerir una receta las que sea que te halla gustado.</span>
          </div>
          <div className='flex flex-row mb-20'>
              <div className='flex flex-row gap-1 justify-center items-center' >
                  <div className='w-4 h-4 bg-gray-400 rounded-3xl'></div>
                  <div className='w-4 h-4 bg-black rounded-3xl'></div>
                  <div className='w-4 h-4 bg-gray-400 rounded-3xl'></div>
              </div>
              <div className=''>
                  <div onClick={handleClickLeft} className='absolute left-5 bottom-2'>
                    <box-icon name='chevron-left'/>
                  </div>
                  <div onClick={handleClickRight} className='absolute right-5 bottom-2'>
                    <box-icon name='chevron-right'/>
                  </div>
              </div>
          </div>
        </div>
        // : viewThird ? <OnboardingFirst/> :
        
      }
    </>
  )
}

export default OnboardingSecond