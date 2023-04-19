'use client';

import { useAppSelector } from '@/redux/hooks';
import { CardFollowed } from '..';

const Followed = [];

const ListFolowed = () => {
  const Followed = useAppSelector((state) => state.userReducer.user.following);
  return (
    <>
      {Followed.map((el) => (
        <CardFollowed key={el} id={el} />
      ))}
    </>
  );
};

export default ListFolowed;
