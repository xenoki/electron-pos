import { forwardRef } from 'react';
import { Field } from 'react-final-form';
import { capitalizeFirstLetter } from '../../libs';

const AccountField = forwardRef<HTMLInputElement, {}>((_, ref) => (
  <Field name='account'>
    {({ input }) => (
      <div className='form-control '>
        <label className='label'>
          <span className='label-text'>
            {capitalizeFirstLetter(input.name)}
          </span>
        </label>
        <input
          className='input input-bordered input-lg'
          placeholder='enter account number'
          type='text'
          {...input}
        />
      </div>
    )}
  </Field>
));

export default AccountField;
