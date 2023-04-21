interface Props {
  value: string;
  handleChange: (data: any) => void;
}

const Preparation = ({ value, handleChange }: Props) => {
  return (
    <div className='form-control w-full'>
      <label>
        <span className='text-sm font-semibold'>Preparación</span>
      </label>
      <textarea
        className='textarea textarea-md                                      
                   textarea-warning rounded-md 
                   border-gray-300 mb-1'
        placeholder='Escribe la preparación'
        value={value}
        onChange={(e) => handleChange({ preparation: e.currentTarget.value })}
      ></textarea>
    </div>
  );
};
export default Preparation;
