import { AiOutlineLogin } from 'react-icons/ai';

export default function LoginButton({ onClick }: ButtonProps) {
  return (
    <button className='btn-primary btn' type='button' onClick={onClick}>
      <AiOutlineLogin className='w-5 h-5' />
    </button>
  );
}
