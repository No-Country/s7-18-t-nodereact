interface Props {
  width: number;
  height: number;
}

const Settings = ({ width, height }: Props) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' fill='#D9D9D9'>
      <mask id='mask0_43_1330' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'>
        <rect width='24' height='24' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_43_1330)'>
        <path
          d='M9.2502 22L8.8502 18.8C8.63353 18.7166 8.42936 18.6166 8.2377 18.5C8.04603 18.3833 7.85853 18.2583 7.6752 18.125L4.7002 19.375L1.9502 14.625L4.5252 12.675C4.50853 12.5583 4.5002 12.4458 4.5002 12.3375V11.6625C4.5002 11.5541 4.50853 11.4416 4.5252 11.325L1.9502 9.37495L4.7002 4.62495L7.6752 5.87495C7.85853 5.74162 8.0502 5.61662 8.2502 5.49995C8.4502 5.38329 8.6502 5.28329 8.8502 5.19995L9.2502 1.99995H14.7502L15.1502 5.19995C15.3669 5.28329 15.571 5.38329 15.7627 5.49995C15.9544 5.61662 16.1419 5.74162 16.3252 5.87495L19.3002 4.62495L22.0502 9.37495L19.4752 11.325C19.4919 11.4416 19.5002 11.5541 19.5002 11.6625V12.3375C19.5002 12.4458 19.4835 12.5583 19.4502 12.675L22.0252 14.625L19.2752 19.375L16.3252 18.125C16.1419 18.2583 15.9502 18.3833 15.7502 18.5C15.5502 18.6166 15.3502 18.7166 15.1502 18.8L14.7502 22H9.2502ZM12.0502 15.5C13.0169 15.5 13.8419 15.1583 14.5252 14.475C15.2085 13.7916 15.5502 12.9666 15.5502 12C15.5502 11.0333 15.2085 10.2083 14.5252 9.52495C13.8419 8.84162 13.0169 8.49995 12.0502 8.49995C11.0669 8.49995 10.2377 8.84162 9.5627 9.52495C8.8877 10.2083 8.5502 11.0333 8.5502 12C8.5502 12.9666 8.8877 13.7916 9.5627 14.475C10.2377 15.1583 11.0669 15.5 12.0502 15.5ZM12.0502 13.5C11.6335 13.5 11.2794 13.3541 10.9877 13.0625C10.696 12.7708 10.5502 12.4166 10.5502 12C10.5502 11.5833 10.696 11.2291 10.9877 10.9375C11.2794 10.6458 11.6335 10.5 12.0502 10.5C12.4669 10.5 12.821 10.6458 13.1127 10.9375C13.4044 11.2291 13.5502 11.5833 13.5502 12C13.5502 12.4166 13.4044 12.7708 13.1127 13.0625C12.821 13.3541 12.4669 13.5 12.0502 13.5ZM11.0002 20H12.9752L13.3252 17.35C13.8419 17.2166 14.321 17.0208 14.7627 16.7625C15.2044 16.5041 15.6085 16.1916 15.9752 15.825L18.4502 16.85L19.4252 15.15L17.2752 13.525C17.3585 13.2916 17.4169 13.0458 17.4502 12.7875C17.4835 12.5291 17.5002 12.2666 17.5002 12C17.5002 11.7333 17.4835 11.4708 17.4502 11.2125C17.4169 10.9541 17.3585 10.7083 17.2752 10.475L19.4252 8.84995L18.4502 7.14995L15.9752 8.19995C15.6085 7.81662 15.2044 7.49579 14.7627 7.23745C14.321 6.97912 13.8419 6.78329 13.3252 6.64995L13.0002 3.99995H11.0252L10.6752 6.64995C10.1585 6.78329 9.67936 6.97912 9.2377 7.23745C8.79603 7.49579 8.39186 7.80829 8.0252 8.17495L5.5502 7.14995L4.5752 8.84995L6.7252 10.45C6.64186 10.7 6.58353 10.95 6.5502 11.2C6.51686 11.45 6.5002 11.7166 6.5002 12C6.5002 12.2666 6.51686 12.525 6.5502 12.775C6.58353 13.025 6.64186 13.275 6.7252 13.525L4.5752 15.15L5.5502 16.85L8.0252 15.8C8.39186 16.1833 8.79603 16.5041 9.2377 16.7625C9.67936 17.0208 10.1585 17.2166 10.6752 17.35L11.0002 20Z'
          fill='#434343'
        />
      </g>
    </svg>
  );
};
export default Settings;
