import { Field, ErrorMessage } from 'formik';

interface User {
  fieldName: string;
  label: string;
  placeHolder: string;
  type: string;
  required: boolean;
}

const InputField = ({ fieldName, type, label, placeHolder, required }: User) => {
  return (
    <div className='mx-auto text-start flex flex-col gap-1 my-4 px-2 w-full max-w-md'>
      {/* Label */}
      <label htmlFor={fieldName} className='font-semibold text-gray-700'>
        {label}
        {required && <span className='text-red-600 ml-1'>*</span>}
      </label>

      <Field
        type={type}
        name={fieldName}
        id={fieldName}
        placeholder={placeHolder}
        className='border-2 border-gray-300 focus:border-indigo-500 focus:outline-none px-3 py-2 rounded-md w-full shadow-sm transition-all duration-200 ease-in-out'
      />

      <ErrorMessage
        name={fieldName}
        component='div'
        className='text-sm text-red-600 mt-1 font-serif'
      />
    </div>
  );
};

export default InputField;
