import BoxSocial from './BoxSocial';

const CardImage = () => {
  return (
    <div className='flex flex-col justify-between w-full h-[360px] bg-cover bg-no-repeat bg-left-top bg-[url("https://lacomidatipica.com/wp-content/uploads/2019/02/tacos1.jpg")]'>
      <header className='p-2 font-semibold'>Título de Receta</header>
      <BoxSocial />
      <footer className='w-full text-6xl text-center text-gray-200'>...</footer>
    </div>
  );
};
export default CardImage;
