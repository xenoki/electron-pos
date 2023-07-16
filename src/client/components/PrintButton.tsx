import { AiOutlinePrinter } from 'react-icons/ai';

export default function PrintButton({ onClick }: ButtonProps) {
  return (
    <button
      type='button'
      className='btn-warning text-white btn hover:bg-yellow-500'
      onClick={onClick}
    >
      <AiOutlinePrinter className='w-5 h-5' />
    </button>
  );
}
