import { Statfollowed, Statfollowers, StatPublications } from '..';

const CardStats = () => {
  return (
    <div className='stats stats-horizontal shadow'>
      <div className='stat'>
        <StatPublications textColor='Black' />
      </div>

      <div className='stat'>
        <Statfollowers textColor='Black' />
      </div>

      <div className='stat'>
        <Statfollowed textColor='Black' />
      </div>
    </div>
  );
};
export default CardStats;
