'use client';

import { useAppSelector } from '@/redux/hooks';
import { CardFollower } from '..';

const ListFolowers = () => {
  const Followers = useAppSelector((state) => state.userReducer.user.followers);
  return (
    <>
      {Followers.map((el) => (
        <CardFollower key={el} id={el} />
      ))}
    </>
  );
};

export default ListFolowers;
