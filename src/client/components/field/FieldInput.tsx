import { HTMLInputTypeAttribute, forwardRef } from 'react';
import { Field } from 'react-final-form';
import { capitalizeFirstLetter } from '../../libs';

interface FieldInputProps {
  grow?: boolean;
  name: string;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
}

const FieldInput = forwardRef<HTMLInputElement, FieldInputProps>(
  ({ name, placeholder, type, grow }, ref) => {
    return (
      <Field name={name}>
        {({ input }) => (
          <div className={`form-control ${grow && 'grow'}`}>
            <label className='label'>
              <span className='label-text'>
                {capitalizeFirstLetter(input.name)}
              </span>
            </label>
            <input
              {...input}
              ref={ref}
              className='input-bordered input'
              type={type}
              placeholder={placeholder ? placeholder : `enter ${name}`}
            />
          </div>
        )}
      </Field>
    );
  }
);

export default FieldInput;
