import { Statfollowed, Statfollowers, StatPublications } from '../Stats';

const Stat = () => {
  return (
    <div className='flex justify-center items-start py-0 px-["5px"] gap-["10px"]'>
      <StatPublications />
      <Statfollowers />
      <Statfollowed />
    </div>
  );
};
export default Stat;

/* absolute top-44 left-12 */
