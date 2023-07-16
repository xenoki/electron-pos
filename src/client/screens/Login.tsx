import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import PowerButton from '../components/PowerButton';
import PrintButton from '../components/PrintButton';
import LoginButton from '../components/LoginButton';
import PasswordInput from '../components/PasswordInput';
import Username from '../components/UsernameInput';

export default function Login() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 300);
  }, []);

  return (
    <main className='flex min-h-screen items-center justify-center'>
      <Modal open={open}>
        <form className='flex flex-row gap-2'>
          <Username />
          <PasswordInput />
          <LoginButton />
          <PrintButton />
          <PowerButton />
        </form>
      </Modal>
    </main>
  );
}
