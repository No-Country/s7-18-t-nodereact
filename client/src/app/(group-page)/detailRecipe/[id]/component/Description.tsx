interface Props {
  description: string;
}
const Description = ({ description }: Props) => {
  return (
    <>
      <h2 className='text-md font-bold mt-3'>Descripción</h2>
      <p className='text-sm my-3'>{description}</p>
    </>
  );
};
export default Description;
