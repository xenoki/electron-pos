import { Form } from 'react-final-form';
import Field from '../field';
import EditButton from '../button/EditButton';
import BuyButton from '../button/BuyButton';
import RenewButton from '../button/RenewButton';
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

export default function PurchaseForm() {
  return (
    <Form
      onSubmit={() => {}}
      initialValues={initialValues}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className='mt-2 flex flex-row gap-2 shadow-xl'>
            <Field.Date />
            <Field.Time />
            <Field.Note />
          </div>
          <div className='mt-2 flex flex-row gap-2 justify-end shadow-xl'>
            <Field.Account />
            <Field.Since />
            <Field.Phone />
            <Field.FirstName />
            <Field.LastName />
            <EditButton />
          </div>
          <div className='mt-2 flex flex-row justify-end gap-2 '>
            <Field.Buy />
            <Field.Remain />
            <BuyButton />
          </div>
          <div className='flex flex-row justify-end gap-2'>
            <Field.Fee />
            <Field.Gallon />
            <RenewButton />
          </div>
        </form>
      )}
    />
  );
}
