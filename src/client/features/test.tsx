import { PropsWithChildren, useEffect, useState } from 'react';
import Modal from '../components/modal/Modal';
import useModal from '../hooks/useModal';

const Table = () => (
  <div className='mb-10 overflow-x-auto rounded-xl shadow-2xl'>
    <table className='table w-full'>
      {/* head */}
      <thead>
        <tr>
          <th>Account</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>
            <button className='btn-primary  btn-lg btn w-full '>Print</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Form = () => (
  <form>
    {/* Note Row */}
    <div className='flex flex-row justify-end gap-2'>
      <div className='form-control w-36'>
        <label className='label'>
          <span className='label-text text-lg'>Date</span>
        </label>
        <input
          className='input-bordered input input-lg'
          type='text'
          value={'12/25/2023'}
          placeholder={new Date().toLocaleDateString()}
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text text-lg'>Time</span>
        </label>
        <input
          className='input-bordered input input-lg'
          type='text'
          placeholder={new Date().toLocaleTimeString()}
        />
      </div>
      <div className='form-control grow'>
        <label className='label'>
          <span className='label-text text-lg'>Note</span>
        </label>
        <input
          className='input-bordered input input-lg'
          type='text'
          placeholder='enter username'
        />
      </div>
    </div>
    {/* Edit Row */}
    <div className='flex flex-row justify-end gap-2'>
      <div className='form-control w-36'>
        <label className='label'>
          <span className='label-text text-lg'>Since</span>
        </label>
        <input
          className='input-bordered input input-lg'
          type='text'
          value={'12/25/2023'}
          placeholder='enter password'
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text text-lg'>Account</span>
        </label>
        <input
          className='input-bordered input input-lg'
          type='text'
          placeholder='enter username'
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text text-lg'>Phone</span>
        </label>
        <input
          className='input-bordered input input-lg'
          type='password'
          placeholder='enter password'
        />
      </div>
      <div className='form-control w-96'>
        <label className='label'>
          <span className='label-text text-lg'>First Name</span>
        </label>
        <input
          className='input-bordered input input-lg'
          type='password'
          placeholder='enter password'
        />
      </div>
      <div className='form-control w-96'>
        <label className='label'>
          <span className='label-text text-lg'>Last Name</span>
        </label>
        <input
          className='input-bordered input input-lg'
          type='password'
          placeholder='enter password'
        />
      </div>
      <button type='button' className='btn-primary btn-wide btn-lg btn mt-11'>
        Edit
      </button>
    </div>
    {/* Buy Row */}
    <div className='flex flex-row justify-end gap-2'>
      <div className='form-control w-28'>
        <label className='label'>
          <span className='label-text text-lg'>Buy</span>
        </label>
        <input
          className='input-bordered input input-lg'
          value={'0'}
          type='text'
          placeholder='enter password'
        />
      </div>
      <div className='form-control w-28'>
        <label className='label'>
          <span className='label-text text-lg'>Remain</span>
        </label>
        <input
          className='input-bordered input input-lg'
          type='text'
          value={0}
          placeholder='enter password'
        />
      </div>
      <button type='button' className='btn-primary btn-wide btn-lg btn mt-11'>
        Buy
      </button>
    </div>
    {/* Renew Row */}
    <div className='flex flex-row justify-end gap-2'>
      <div className='form-control w-28'>
        <label className='label'>
          <span className='label-text text-lg'>Fee</span>
        </label>
        <input
          className='input-bordered input input-lg'
          type='text'
          value={'25'}
          placeholder='enter password'
        />
      </div>
      <div className='form-control w-28'>
        <label className='label'>
          <span className='label-text text-lg'>Gallon</span>
        </label>
        <input
          className='input-bordered input input-lg'
          value={'100'}
          type='text'
          placeholder='enter password'
        />
      </div>
      <button type='button' className='btn-primary btn-wide btn-lg btn mt-11'>
        Renew
      </button>
    </div>
  </form>
);

export default function Test() {
  const { open, openModal, closeModal } = useModal();
  const [openHistoryModal, setOpenHistoryModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  useEffect(() => {}, [openModal()]);

  return (
    <Modal open={open}>
      <Table />
      <Form />
      <div className='mt-10 flex flex-row justify-end gap-2'>
        <button
          className='btn-primary btn-wide btn-lg btn'
          onClick={() => {
            closeModal();
            setOpenHistoryModal(true);
          }}
        >
          History
        </button>
        <button
          className='btn-primary btn-wide btn-lg btn'
          onClick={() => {
            closeModal();
            setOpenDeleteModal(true);
          }}
        >
          Delete
        </button>
        <button className='btn-primary btn-wide btn-lg btn'>Done</button>
      </div>
      <Modal open={openHistoryModal}>
        History Modal
        <button
          className='btn-primary btn-wide btn-lg btn'
          onClick={() => {
            setOpenHistoryModal(false);
            openModal();
          }}
        >
          Close
        </button>
      </Modal>
      <Modal open={openDeleteModal}>
        Delete Modal
        <button
          className='btn-primary btn-wide btn-lg btn'
          onClick={() => {
            setOpenDeleteModal(false);
            openModal();
          }}
        >
          Close
        </button>
      </Modal>
    </Modal>
  );
}
