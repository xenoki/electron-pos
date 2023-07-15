import { useEffect } from 'react';
import Hero from '../components/hero/Hero';
import Modal from '../components/modal/Modal';
import NavBar from '../components/navbar/NavBar';
import Form from '../components/form';
import useModal from '../hooks/useModal';
import { useAppSelector } from '../app/hooks';
import { selectName } from './info/infoSlice';

/**
 * Point of Sale Authentication Screen
 * @returns { JSX.Element }
 */
export default function Login() {
  const { open, openModal } = useModal();

  useEffect(() => {
    openModal();
    console.log('hello', { name });
  }, []);

  return (
    <Hero>
      <Modal open={open}>
        <NavBar title='Capital Pure Water' />
        <Form.Login subscription={{ submitting: true, pristine: true }} />
      </Modal>
    </Hero>
  );
}
