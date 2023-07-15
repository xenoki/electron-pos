import { forwardRef } from 'react';
import InputField from './InputField';

const Username = forwardRef<HTMLInputElement>((_, ref) => (
  <InputField
    name='username'
    ref={ref}
    type='text'
    placeholder='enter username'
    normal
  />
));

export default Username;
