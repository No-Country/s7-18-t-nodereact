interface Props {
  value: string;
  handleChange: (data: any) => void;
}

const Description = ({ value, handleChange }: Props) => {
  return (
    <div className='form-control w-full'>
      <label>
        <span className='text-sm font-semibold'>Descripción</span>
      </label>
      <textarea
        className='textarea textarea-md                                      
                   textarea-warning rounded-md 
                   border-gray-300 mb-1'
        placeholder='Escribe la descripción'
        value={value}
        onChange={(e) => handleChange({ description: e.currentTarget.value })}
      ></textarea>
    </div>
  );
};
export default Description;
