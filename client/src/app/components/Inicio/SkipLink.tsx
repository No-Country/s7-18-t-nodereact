import Link from 'next/link';

const SkipLink = () => {
  return (
    <div className='flex justify-end items-center py-3 px-10'>
      <Link href='/auth/signIn' className='text-lg text-gray-500'>
        omitir
      </Link>
    </div>
  );
};
export default SkipLink;
