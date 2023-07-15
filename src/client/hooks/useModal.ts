import { useState } from 'react';

export default function etseModal() {
  const [open, setOpen] = useState(false);

  const openModal = () => setTimeout(() => setOpen(true), 100);
  const closeModal = () => setTimeout(() => setOpen(false), 100);

  return {
    open,
    openModal,
    closeModal,
  };
}
