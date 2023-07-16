import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import {
  AiOutlineLogin,
  AiOutlinePrinter,
  AiOutlineUser,
  AiOutlineLock,
} from 'react-icons/ai';

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
        <form className='flex flex-row justify-around'>
          <div className='group relative'>
            <AiOutlineUser className='absolute left-3 top-1/2 -mt-2.5 w-5 h-5' />
            <input
              className='input input-bordered bg-base-200 grow pl-10'
              type='text'
              placeholder='enter username'
            />
          </div>
          <div className='group relative'>
            <AiOutlineLock className='absolute left-3 top-1/2 -mt-2.5 w-5 h-5' />
            <input
              className='input input-bordered bg-base-200 grow pl-10'
              type='password'
              placeholder='enter password'
            />
          </div>
          <button className='btn-primary btn'>
            <AiOutlineLogin className='w-5 h-5' />
          </button>
          <button className='btn-secondary btn'>
            <AiOutlinePrinter className='w-5 h-5' />
          </button>
        </form>
      </Modal>
    </main>
  );
}
