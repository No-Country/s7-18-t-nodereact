import Image from 'next/image';

const OnboardingFirst = () => (
  <div className='flex flex-col items-center'>
    <Image width={300} height={300} src='/img/recipes-v.png' alt='imagen de comida rapida' />
    <span className='font-sans font-semibold text-center'>
      encuentra las mejores y mas deliciosas recetas de todo el mundo.
    </span>
  </div>
);

export default OnboardingFirst;
