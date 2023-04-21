interface Props {
  preparation: string[];
}

const Preparation = ({ preparation }: Props) => {
  return (
    <>
      <h2 className='text-md font-bold my-3'>Preparación</h2>
      <ul className='list-disc ml-6 text-xs mb-5'>
        {preparation.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>
    </>
  );
};
export default Preparation;
