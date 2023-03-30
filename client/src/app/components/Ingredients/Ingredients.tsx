const ingredients = [
  'Lorem ipsum',
  'adipiscing elit',
  'Aenean commodo',
  'Aenean massa',
  'Lorem ipsum',
  'adipiscing elit',
  'Aenean commodo',
  'Aenean massa',
];

const Ingredients = () => {
  return (
    <div className='flex flex-col justify-start gap-5 w-[80%]'>
      <h2 className='text-xl font-bold'>Ingredientes</h2>
      <ul className='list-disc ml-6 text-lg'>
        {ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};
export default Ingredients;
