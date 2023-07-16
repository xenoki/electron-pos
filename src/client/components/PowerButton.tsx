import { AiOutlinePoweroff } from 'react-icons/ai';

export default function PowerButton({ onClick }: ButtonProps) {
  return (
    <button type='button' className='btn-secondary btn' onClick={onClick}>
      <AiOutlinePoweroff className='w-5 h-5' />
    </button>
  );
}
