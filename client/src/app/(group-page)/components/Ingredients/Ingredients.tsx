interface Props {
  ingredients: string[];
}

const Ingredients = ({ ingredients }: Props) => {
  return (
    <div className='flex flex-col justify-start gap-5 w-[90%] lg:w-[80%] xl:w-1/2'>
      <h2 className='text-md font-bold'>Ingredientes</h2>
      <ul className='list-disc ml-6 text-xs'>
        {ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};
export default Ingredients;
