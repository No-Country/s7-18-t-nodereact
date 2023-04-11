'use client';

import { redirect } from 'next/navigation';
import Welcome from './Welcome';

const Movil = () => {
  console.log('screen => ', document.body.clientWidth);
  return <Welcome />;
  /* 
  if (window.innerWidth < 450) {
    redirect('/auth/signIn');
  } else return <Welcome />; */
  /*   const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    console.log('window => ', window.innerWidth);
    const handleResize = () => {
      setWindowWidth((prevState) => (prevState = window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => console.log('paso 2 ', windowWidth), [windowWidth]);
 */
};

export default Movil;

{
  /* <div className=''>{windowWidth < 450 ? <Welcome /> : redirect('/auth/signIn')}</div> */
}
