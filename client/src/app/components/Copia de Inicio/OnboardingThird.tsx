import React, { useState } from 'react'
import 'boxicons'
import OnboardingSecond from './OnboardingSecond'

const OnboardingThird = () => {
  const [viweSecond, setViewSecond] = useState(false)
  const [login, setLogin] = useState(false)
  
  const handleClickLeft = () =>{
    setViewSecond(!viweSecond)
  }

  const handleClickRight = () =>{
    setLogin(!login)
  }

  return (
    <>
      { 
        // viweSecond ? <OnboardingSecond/> : login ? <Loginf/> :
         viweSecond ? <OnboardingSecond/> : 
        <div className='w-screen h-screen my-2 flex flex-col justify-between items-center realtive'>
          <span className='self-end mr-10 text-gray-400'>omitir</span>
          <div className='flex flex-col items-center'>
            <img className='max-w-xs mb-4' src='./img/fast-food.png' alt='imagen de comida rapida'/>
            <span className='font-sans font-semibold text-center' >recuerda que podras clasificar tus recetas por categoria y tambien buscar cualquier plato de comida que se te ocurra.</span>
          </div>
          <div className='flex flex-row mb-20'>
              <div className='flex flex-row gap-1 justify-center items-center' >
                  <div className='w-4 h-4 bg-gray-400 rounded-3xl'></div>
                  <div className='w-4 h-4 bg-gray-400 rounded-3xl'></div>
                  <div className='w-4 h-4 bg-black rounded-3xl'></div>
              </div>
              <div>
                <div onClick={handleClickLeft} className='absolute left-5 bottom-2'> 
                  <box-icon name='chevron-left'/>
                </div>
                <div onClick={handleClickRight} className='absolute right-5 bottom-2'>
                  <box-icon name='chevron-right'/>
                </div>
              </div>
          </div>
        </div>

      }
    </>
  )
}

export default OnboardingThird