import { useEffect } from 'react';
import useModal from '../hooks/useModal';
import Hero from '../components/hero/Hero';
import Modal from '../components/modal/Modal';
import NavBar from '../components/navbar/NavBar';
import DashboardForm from '../components/form/DashboardForm';

export default function Dashboard() {
  const { open, openModal } = useModal();

  useEffect(() => {
    openModal();
  }, []);

  return (
    <Hero>
      <Modal open={open}>
        <NavBar title='Dashboard' />
        <DashboardForm subscription={{ submitting: true, pristine: true }} />
      </Modal>
    </Hero>
  );
}
