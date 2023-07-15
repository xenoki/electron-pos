import { PropsWithChildren } from 'react';

const Modal = ({ open, children }: PropsWithChildren<{ open: boolean }>) => {
  return (
    <div className={`modal glass ${open && 'modal-open'}`}>
      {/* <div className='modal-box max-w-fit'>{children}</div> */}
      <div className='modal-box '>{children}</div>
    </div>
  );
};

const PurchaseModal = ({
  open,
  children,
}: PropsWithChildren<{ open: boolean }>) => {
  return (
    <div className={`modal ${open && 'modal-open'}`}>
      {/* <div className='modal-box max-w-fit '>{children}</div> */}
      <div className='modal-box max-w-full'>{children}</div>
    </div>
  );
};

Modal.Purchase = PurchaseModal;

export default Modal;
