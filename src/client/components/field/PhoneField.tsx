import { forwardRef } from 'react';
import { Field } from 'react-final-form';
import { capitalizeFirstLetter } from '../../libs';

const PhoneField = forwardRef<HTMLInputElement, {}>((_, ref) => (
  <Field name='phone'>
    {({ input }) => (
      <div className='form-control shadow-lg'>
        <label className='label'>
          <span className='label-text'>
            {capitalizeFirstLetter(input.name)}
          </span>
        </label>
        <input
          ref={ref}
          className='input input-bordered input-lg'
          type='text'
          placeholder='enter phone number'
          {...input}
        />
      </div>
    )}
  </Field>
));

export default PhoneField;
