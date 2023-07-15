import { useEffect, useState } from 'react';
import Modal from '../components/modal/Modal';
import NavBar from '../components/navbar/NavBar';
import { Form } from 'react-final-form';
import FieldInput from '../components/field/FieldInput';

export default function Membership() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 100);
  }, []);

  return (
    <Modal open={open}>
      <NavBar title='Membership' />

      <button className='btn btn-primary'>Back</button>
    </Modal>
  );
}
