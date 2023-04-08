'use client'

import React, { useEffect, useState } from 'react'
import Login from './Login';
import Welcome from './Welcome';
import 'tailwindcss/tailwind.css'


const Movil = () => {
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
      // console.log(windowWidth);
      const handleResize = () => {
        setWindowWidth(window.innerWidth)
        // console.log(windowWidth);
      };
      // handleResize();
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      // <div className='w-full h-full flex flex-col justify-center justify-item-center'>
      <div className=''>
        {windowWidth < 450 ? <Welcome/>
         : <Login/>}
      </div>
    );
}

export default Movil