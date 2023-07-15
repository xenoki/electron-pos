import { useCallback, useEffect, useState } from 'react';
import Hero from '../../components/hero/Hero';
import Modal from '../../components/modal/Modal';
import NavBar from '../../components/navbar/NavBar';
import Form from '../../components/form';
import { useAppSelector } from '../../app/hooks';
import { selectName } from '../info/infoSlice';

export default function LoginScreen() {
  const [open, setOpenModal] = useState(false);

  const name = useAppSelector(selectName);

  const openModal = useCallback(() => {
    setTimeout(() => setOpenModal(true), 100);
  }, [open]);

  useEffect(() => {
    console.log('useEffect1');
    openModal();
  }, []);

  useEffect(() => {
    console.log('useEffect2', name);
  }, [name]);

  return (
    <Hero>
      <Modal open={open}>
        <NavBar />
        <Form.Login subscription={{ submitting: true, pristine: true }} />
      </Modal>
    </Hero>
  );
}
