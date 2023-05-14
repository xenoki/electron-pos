import { HTMLInputTypeAttribute, forwardRef } from 'react';
import { Field } from 'react-final-form';
import { capitalizeFirstLetter } from '../..//libs';

interface FieldInputProps {
  name: string;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
}

const FieldInput = forwardRef<HTMLInputElement, FieldInputProps>(
  ({ name, placeholder, type }, ref) => {
    return (
      <Field name={name}>
        {({ input }) => (
          <div className='form-control'>
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

// export default function FieldInput({
//   name,
//   placeholder,
//   type,
// }: FieldInputProps) {
//   return (
//     <Field name={name}>
//       {({ input }) => (
//         <div className='form-control'>
//           <label className='label'>
//             <span className='label-text'>
//               {capitalizeFirstLetter(input.name)}
//             </span>
//           </label>
//           <input
//             {...input}
//             className='input-bordered input'
//             type={type}
//             placeholder={placeholder ? placeholder : `enter ${name}`}
//           />
//         </div>
//       )}
//     </Field>
//   );
// }
