import React from 'react';

type Props = {
  open: boolean;
  children: React.ReactNode;
};

export default function Modal({ open = false, children }: Props) {
  return (
    <div className={`modal ${open && 'modal-open'}`}>
      {/* <div className='modal-box max-w-full'>{children}</div> */}
      <div className='modal-box max-w-fit'>{children}</div>
    </div>
  );
}
