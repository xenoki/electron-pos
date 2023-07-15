import { forwardRef } from 'react';
import { Field } from 'react-final-form';
import { capitalizeFirstLetter } from '../../libs';

const TimeField = forwardRef<HTMLInputElement, {}>((_, ref) => (
  <Field name='time'>
    {({ input }) => (
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>
            {capitalizeFirstLetter(input.name)}
          </span>
        </label>
        <input
          ref={ref}
          className='input input-bordered input-lg'
          type='text'
          {...input}
        />
      </div>
    )}
  </Field>
));

export default TimeField;
