import { useEffect, useRef } from 'react';
import { Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';
import DashboardFormAction from './DashboardFormAction';
import { FormSubscription } from 'final-form';
import InputField from '../input/InputField';
import Button from '../button';

type Props = {
  subscription: FormSubscription;
};

const onSubmit = async (values: any) => {
  console.log(values);
};

function DashboardForm({ subscription }: Props) {
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => ref.current.focus(), 200);
  }, []);

  return (
    <Form
      onSubmit={onSubmit}
      subscription={subscription}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <InputField
            ref={ref}
            name='phone'
            type='text'
            normal
            placeholder='enter phone number #'
          />
          <InputField
            name='account'
            type='text'
            placeholder='enter account #'
            normal
          />
          <InputField
            name='firstName'
            label='First Name'
            type='text'
            placeholder='enter first name'
            normal
          />
          <InputField
            name='lastName'
            label='Last Name'
            type='text'
            placeholder='enter last name'
            normal
          />
          <DashboardForm.Action>
            <Button name='Find' onClick={() => navigate('/purchase')} />
            <Button name='Add' />
            <Button name='Report' />
            <Button name='Done' onClick={() => navigate('/')} />
          </DashboardForm.Action>
        </form>
      )}
    />
  );
}

DashboardForm.Action = DashboardFormAction;
export default DashboardForm;
