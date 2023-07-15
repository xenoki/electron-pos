import { forwardRef } from 'react';
import { Field } from 'react-final-form';
import { capitalizeFirstLetter } from '../../libs';

const NoteField = forwardRef<HTMLInputElement, {}>((_, ref) => (
  <Field name='note'>
    {({ input }) => (
      <div className='form-control basis-10/12'>
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

export default NoteField;
