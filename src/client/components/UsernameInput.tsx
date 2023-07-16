import { forwardRef } from 'react';
import { AiOutlineUser } from 'react-icons/ai';

const Username = forwardRef<HTMLInputElement, InputProps>(
  ({ value, onChange }, ref) => (
    <div className='group relative'>
      <AiOutlineUser className='absolute left-3 top-1/2 -mt-2.5 w-5 h-5' />
      <input
        ref={ref}
        className='input input-bordered bg-base-200 pl-10 '
        type='text'
        placeholder='enter username'
        value={value}
        onChange={onChange}
      />
    </div>
  )
);

export default Username;
