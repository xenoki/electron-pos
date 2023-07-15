import { forwardRef } from 'react';
import { Field } from 'react-final-form';
import { capitalizeFirstLetter } from '../../libs';

const BuyField = forwardRef<HTMLInputElement, {}>((_, ref) => (
  <Field name='buy'>
    {({ input }) => (
      <div className='form-control w-32 shadow-xl'>
        <label className='label'>
          <span className='label-text'>
            {capitalizeFirstLetter(input.name)}
          </span>
        </label>
        <input
          ref={ref}
          className='input-bordered input input-lg'
          type='text'
          {...input}
        />
      </div>
    )}
  </Field>
));

export default BuyField;
