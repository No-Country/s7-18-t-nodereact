'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { OnboardingFirst, OnboardingSecond, OnboardingThird, SkipLink, Slider } from '.';

const Welcome = () => {
  const [band, setBand] = useState(false);
  const [screen, setScreen] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setBand(true);
    }, 3000);
  }, []);

  const Slide = (key: number) => {
    const slides = {
      1: <OnboardingFirst />,
      2: <OnboardingSecond />,
      3: <OnboardingThird />,
    };

    return slides[key];
  };

  return (
    <>
      {!band && (
        <div className='w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#ff823f] to-[#ffd700]'>
          <h1 className='text-center text-white text-2xl '>Bienvenidos</h1>
          <Image width={300} height={300} src='/img/full-recipes-sf.png' alt='logo' />
        </div>
      )}
      {band && (
        <div className='flex flex-col justify-between w-screen h-screen bg-gradient-to-b from-[#ff823f] to-[#ffd700]'>
          <SkipLink />
          {Slide(screen)}
          <Slider screen={screen} screenChange={setScreen} />
        </div>
      )}
    </>
  );
};
export default Welcome;
