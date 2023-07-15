import { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/hero/Hero';
import Modal from '../components/modal/Modal';
import NavBar from '../components/navbar/NavBar';
import Card from '../components/card/PurchaseCard';
import Button from '../components/button';
import useModal from '../hooks/useModal';
import Action from '../components/action/Action';
// import InputField from '../components/input/InputField';
import ReceiptTable from '../components/table/ReceiptTable';
import { FormApi, AnyObject } from 'final-form';

const renewHeaders = [
  'Account',
  'Since',
  'Phone',
  'Name',
  'Type',
  'Fee',
  'Renew',
  'Gallon',
  'Prev',
  'Remain',
  'Date',
  'Time',
  'Actions',
];

const buyHeaders = [
  'Account',
  'Since',
  'Phone',
  'Name',
  'Type',
  'Prev',
  'Buy',
  'Remain',
  'Date',
  'Time',
  'Actions',
];

export interface PurchaseRecord {
  note: string;
  date: string;
  time: string;
  account: string;
  since: string;
  firstName: string;
  lastName: string;
  phone: string;
  buy: number;
  remain: number;
  fee: number;
  gallon: number;
}

const initialValues: PurchaseRecord = {
  date: new Date().toLocaleDateString(),
  time: new Date().toLocaleTimeString(),
  note: 'Test Note',
  account: '123456',
  since: '10/12/2000',
  firstName: 'Hung',
  lastName: 'Quach',
  phone: '(408) - 386-5089',
  buy: 0,
  remain: 100,
  fee: 0,
  gallon: 0,
};

const DateField = () => (
  <Field
    name='date'
    type='text'
    render={({ input }) => (
      <div className='form-control '>
        <label className='label'>
          <span className='label-text text-lg'>Date</span>
        </label>
        <input className='input-bordered input input-lg shadow-xl' {...input} />
      </div>
    )}
  />
);

const TimeField = () => (
  <Field
    name='time'
    text='text'
    render={(input) => (
      <div className='form-control '>
        <label className='label'>
          <span className='label-text text-lg'>Time</span>
        </label>
        <input className='input-bordered input input-lg shadow-xl' {...input} />
      </div>
    )}
  />
);

const NoteField = () => (
  <Field
    name='note'
    type='text'
    render={({ input }) => (
      <div className='form-control grow'>
        <label className='label'>
          <span className='label-text text-lg'>Note</span>
        </label>
        <input className='input-bordered input input-lg shadow-xl' {...input} />
      </div>
    )}
  />
);

const PurchaseForm = () => {
  <Form
    onSubmit={() => {}}
    initialValues={initialValues}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div className='mb-2 flex flex-row gap-2'>
          <DateField />
          <TimeField />
          <NoteField />
        </div>
        <div className='mb-2 flex justify-end gap-2'></div>
      </form>
    )}
  />;
};

const NoteRow = () => {
  return (
    <div className='mb-2 flex flex-row gap-2'>
      <div className='form-control '>
        <label className='label'>
          <span className='label-text text-lg'>Date</span>
        </label>
        <input
          className='input-bordered input input-lg shadow-xl'
          type='text'
          placeholder='5/18/2023'
        />
      </div>
      <div className='form-control '>
        <label className='label'>
          <span className='label-text text-lg'>Time</span>
        </label>
        <input
          className='input-bordered input input-lg shadow-xl'
          type='text'
          placeholder='5/18/2023'
        />
      </div>
      <div className='form-control grow'>
        <label className='label'>
          <span className='label-text text-lg'>Note</span>
        </label>
        <input
          className='input-bordered input input-lg shadow-xl'
          type='text'
          placeholder='enter note'
        />
      </div>
    </div>
  );
};

const EditRow = () => {
  return (
    <div className='mb-2 flex justify-end gap-2 '>
      <div className='form-control  '>
        <label className='label'>
          <span className='label-text text-lg'>Since</span>
        </label>
        <input
          className='input-bordered input input-lg shadow-xl'
          type='text'
          placeholder='12/30/2023'
        />
      </div>
      <div className='form-control grow'>
        <label className='label'>
          <span className='label-text text-lg'>Account</span>
        </label>
        <input
          className='input-bordered input input-lg shadow-xl'
          type='text'
          placeholder='0'
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text text-lg'>Phone</span>
        </label>
        <input
          className='input-bordered input input-lg shadow-xl'
          type='text'
          placeholder='0'
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text text-lg'>First Name</span>
        </label>
        <input
          className='input-bordered input input-lg shadow-xl'
          type='text'
          placeholder='0'
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text text-lg'>Last Name</span>
        </label>
        <input
          className='input-bordered input input-lg shadow-xl'
          type='text'
          placeholder='0'
        />
      </div>
      <button className='btn-warning btn-wide btn-lg btn mt-11 text-white shadow-xl'>
        Edit
      </button>
    </div>
  );
};

const BuyRow = () => {
  return (
    <div className='flex justify-end gap-2 '>
      <div className='form-control w-28'>
        <label className='label'>
          <span className='label-text text-lg'>Buy</span>
        </label>
        <input
          className='input-bordered input input-lg shadow-xl'
          type='text'
          placeholder='0'
        />
      </div>
      <div className='form-control w-32'>
        <label className='label'>
          <span className='label-text text-lg'>Remain</span>
        </label>
        <input
          className='input-bordered input input-lg shadow-xl'
          type='text'
          placeholder='0'
        />
      </div>
      <button className='btn-success btn-wide btn-lg btn mt-11 text-white shadow-xl'>
        Buy
      </button>
    </div>
  );
};

const RenewRow = () => {
  return (
    <div className='flex justify-end gap-2'>
      <div className='form-control w-28'>
        <label className='label'>
          <span className='label-text text-lg'>Fee</span>
        </label>
        <input
          className='input-bordered input input-lg shadow-xl'
          type='text'
          placeholder='0'
        />
      </div>
      <div className='form-control w-32'>
        <label className='label'>
          <span className='label-text text-lg'>Gallon</span>
        </label>
        <input
          className='input-bordered input input-lg shadow-xl'
          type='text'
          placeholder='0'
        />
      </div>
      <button className='btn-info btn-wide btn-lg btn mt-11 text-white shadow-xl'>
        Renew
      </button>
    </div>
  );
};

/**
 * Point of Sales Purchase Screen
 * @returns { JSX.Element }
 */
export default function Purchase() {
  const { open, openModal, closeModal } = useModal();
  const [openHistoryModal, setOpenHistoryModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    openModal();
  }, []);

  return (
    <Hero>
      <Modal.Purchase open={open}>
        <NavBar title='Purchase' />
        <Card shadow>
          <ReceiptTable />
          <NoteRow />
          <EditRow />
          <BuyRow />
          <RenewRow />
        </Card>
        <Card>
          <Card.Action>
            <Button.History
              onClick={() => {
                closeModal();
                setOpenHistoryModal(true);
              }}
            />
            <Button.Delete
              onClick={() => {
                closeModal();
                setOpenDeleteModal(true);
              }}
            />
            <Button.Done onDone={() => navigate('/dashboard')} />
          </Card.Action>
        </Card>
      </Modal.Purchase>
      <Modal open={openHistoryModal}>
        History Modal
        <Action>
          <button
            className='btn-primary btn grow'
            onClick={() => {
              setOpenHistoryModal(false);
              openModal();
            }}
          >
            Close
          </button>
        </Action>
      </Modal>
      <Modal open={openDeleteModal}>
        Delete Modal
        <Action>
          <button
            className='btn-secondary btn grow'
            onClick={() => {
              setOpenDeleteModal(false);
              openModal();
            }}
          >
            Close
          </button>
        </Action>
      </Modal>
    </Hero>
  );
}
