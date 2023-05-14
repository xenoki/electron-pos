import { useEffect, useState } from 'react';
import LoginForm from '../components/LoginForm';
import { sleep } from '../../libs';

export default function Login() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 300);
  }, [open]);

  return (
    <div className={`modal ${open && 'modal-open'}`}>
      <div className='modal-box'>
        <LoginForm subscription={{ submitting: true, pristine: true }} />
      </div>
    </div>
  );
}
