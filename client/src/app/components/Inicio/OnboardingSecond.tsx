import Image from 'next/image';

const OnboardingSecond = () => {
  return (
    <div className='flex flex-col items-center'>
      <Image width={300} height={300} src='/img/recipe.png' alt='imagen de comida rapida' />
      <span className='font-sans font-semibold text-center'>
        podras guardar y sugerir una receta las que sea que te halla gustado.
      </span>
    </div>
  );
};

export default OnboardingSecond;
