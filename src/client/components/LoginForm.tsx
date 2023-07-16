import PowerButton from '../components/PowerButton';
import PrintButton from '../components/PrintButton';
import LoginButton from '../components/LoginButton';
import PasswordInput from '../components/PasswordInput';
import Username from '../components/UsernameInput';
import { forwardRef } from 'react';

const LoginForm = forwardRef<HTMLInputElement, FormProps>(({}, ref) => (
  <form className='flex flex-row gap-2'>
    <Username ref={ref} />
    <PasswordInput />
    <LoginButton />
    <PrintButton />
    <PowerButton />
  </form>
));

export default LoginForm;
