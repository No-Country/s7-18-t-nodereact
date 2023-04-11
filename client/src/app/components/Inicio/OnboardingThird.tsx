import Image from 'next/image';

const OnboardingThird = () => {
  return (
    <div className='flex flex-col items-center'>
      <Image width={300} height={300} src='/img/fast-food.png' alt='imagen de comida rapida' />
      <span className='font-sans font-semibold text-center'>
        recuerda que podras clasificar tus recetas por categoria y tambien buscar cualquier plato de comida que se te
        ocurra.
      </span>
    </div>
  );
};

export default OnboardingThird;
