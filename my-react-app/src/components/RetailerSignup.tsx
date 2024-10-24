import { Formik, Form, ErrorMessage } from 'formik';
import InputField from './common/InputField';
import { customerSignupValidationSchema } from '../validationSchemas/retailerSingupValidation';
import { useNavigate } from 'react-router-dom';

const initialFormData = {
  brand: '',
  email: '',
  brandLogo: null,
  phoneNo: '',
  password: '',
  confirmPassword: '',
  user_type: 'retailer',
};

const RetailerSignup = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-full bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Retailer Signup</h2>

        <Formik
          initialValues={initialFormData}
          validationSchema={customerSignupValidationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ setFieldValue, isValid }) => (
            <Form className="space-y-4">
            <InputField  fieldName="brand" type="text" label='Brand Name' placeHolder="Enter Brand Name" required={true}/>
            <InputField  fieldName="email" type="email" label='Email' placeHolder="Enter Email" required={true}/>
            <InputField  fieldName="phoneNo" type="text" label='Contact Number' placeHolder="Enter Contact Number" required={true}/>
            <InputField  fieldName="password" type="password" label='Password' placeHolder="Enter Password" required={true}/>
            <InputField  fieldName="confirmPassword" type="password" label='Confirm Password' placeHolder="Enter Confirm Password" required={true}/>

              {/* Brand Logo Upload Field */}
              <div className="flex flex-col gap-1 my-4 px-2 w-full max-w-md">
                <label htmlFor="brandLogo" className="font-semibold text-gray-700">
                  Upload Brand Logo <span className="text-red-600">*</span>
                </label>
                <input
                  id="brandLogo"
                  name="brandLogo"
                  type="file"
                  className="border-2 border-gray-300 focus:border-indigo-500 focus:outline-none px-3 py-2 rounded-md w-full shadow-sm transition-all duration-200 ease-in-out file:bg-blue-50 file:text-blue-700 file:font-semibold file:border-0 file:py-2 file:px-4 hover:file:bg-blue-100"
                  onChange={(e) => setFieldValue('brandLogo', e.target.files?.[0] || null)}
                />
                <ErrorMessage
                  name="brandLogo"
                  component="div"
                  className="text-sm text-red-600 mt-1 font-serif"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between mt-6">
                <button
                  type="submit"
                  disabled={!isValid}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:bg-gray-400"
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/login')}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RetailerSignup;




