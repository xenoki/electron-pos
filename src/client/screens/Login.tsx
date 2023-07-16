import { useEffect, useRef, useState } from 'react';
import Modal from '../components/Modal';
import LoginForm from '../components/LoginForm';

export default function Login() {
  const [open, setOpen] = useState(false);
  const usernameInputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
      usernameInputRef.current?.focus();
    }, 300);
  }, []);

  return (
    <main className='flex min-h-screen items-center justify-center'>
      <Modal open={open}>
        <LoginForm ref={usernameInputRef} />
      </Modal>
    </main>
  );
}
