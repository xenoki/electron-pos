import { forwardRef } from 'react';
import { Field } from 'react-final-form';
import { capitalizeFirstLetter } from '../../libs';

const SinceField = forwardRef<HTMLInputElement, {}>((_, ref) => (
  <Field name='since'>
    {({ input }) => (
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>
            {capitalizeFirstLetter(input.name)}
          </span>
        </label>
        <input
          className='input input-bordered input-lg'
          type='text'
          {...input}
        />
      </div>
    )}
  </Field>
));

export default SinceField;
