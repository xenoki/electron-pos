import { forwardRef } from 'react';
import { Si1Password } from 'react-icons/si';

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ value, onChange }, ref) => (
    <div className='group relative'>
      <Si1Password className='absolute left-3 top-1/2 -mt-2.5 w-5 h-5' />
      <input
        className='input input-bordered bg-base-200 pl-10 grow'
        type='password'
        placeholder='enter password'
        ref={ref}
        value={value}
        onChange={onChange}
      />
    </div>
  )
);

export default PasswordInput;
