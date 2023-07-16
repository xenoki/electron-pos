import React from 'react';

type Props = {
  open: boolean;
  children: React.ReactNode;
};

export default function Modal({ open = false, children }: Props) {
  return (
    <div className={`modal ${open && 'modal-open'}`}>
      <div className='modal-box  max-w-2xl'>{children}</div>
    </div>
  );
}
