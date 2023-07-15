import { HTMLInputTypeAttribute, forwardRef } from 'react';
import { Field } from 'react-final-form';
import { capitalizeFirstLetter } from '../../libs';
import { InputFieldProps } from '../input/InputField';

const LastNameField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ normal, placeholder }, ref) => (
    <Field name='lastName'>
      {({ input }) => (
        <div className={`form-control ${normal || 'w-96'}`}>
          <label className='label'>
            <span className='label-text'>
              {capitalizeFirstLetter(input.name)}
            </span>
          </label>
          <input
            ref={ref}
            className='input input-bordered input-lg'
            type='text'
            placeholder={placeholder}
            {...input}
          />
        </div>
      )}
    </Field>
  )
);

export default LastNameField;
