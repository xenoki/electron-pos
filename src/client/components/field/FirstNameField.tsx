import { forwardRef } from 'react';
import { Field } from 'react-final-form';
import { capitalizeFirstLetter } from '../../libs';

const FirstNameField = forwardRef<HTMLInputElement, { normal?: boolean }>(
  ({ normal }, ref) => (
    <Field name='firstName'>
      {({ input }) => (
        <div className={`form-control ${normal ? normal : 'w-96'}`}>
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
            placeholder='enter first name'
          />
        </div>
      )}
    </Field>
  )
);

export default FirstNameField;
