import { HTMLInputTypeAttribute, forwardRef } from 'react';
import { Field } from 'react-final-form';
import { capitalizeFirstLetter } from '../../libs';

export interface InputFieldProps {
  grow?: boolean;
  name?: string;
  normal?: boolean;
  placeholder?: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ name, normal, placeholder, type, label, grow }, ref) => (
    <Field name={name}>
      {({ input }) => (
        <div className={`form-control ${normal || 'w-96'} ${grow && 'grow'}`}>
          <label className='label'>
            <span className='label-text text-lg'>
              {label ? label : capitalizeFirstLetter(input.name)}
            </span>
          </label>
          <input
            className='input-bordered input input-lg shadow-lg'
            ref={ref}
            type={type}
            placeholder={placeholder}
            {...input}
          />
        </div>
      )}
    </Field>
  )
);

export default InputField;
