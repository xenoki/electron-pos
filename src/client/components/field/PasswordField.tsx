import { forwardRef } from 'react';
import { Field } from 'react-final-form';
import { capitalizeFirstLetter } from '../../libs';

const PasswordField = forwardRef<HTMLInputElement, {}>((_, ref) => (
  <Field name='password'>
    {({ input }) => (
      <div className={`form-control shadow-xl`}>
        <label className='label'>
          <span className='label-text text-lg'>
            {capitalizeFirstLetter(input.name)}
          </span>
        </label>
        <input
          ref={ref}
          className='input-bordered input input-lg'
          type='text'
          placeholder='enter password'
          {...input}
        />
      </div>
    )}
  </Field>
));

export default PasswordField;
