import * as Yup from 'yup';

const SUPPORTED_IMAGE : Array<string> = [ 'image/png', 'image/jpeg', 'image/jpg'];

export const customerSignupValidationSchema = Yup.object({
    brand: Yup.string()
        .min(3, 'Username must be at least 3 characters')
        .required('Username is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
        password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(
        /^(?=.*[A-Z])(?=.*[a-zA-Z0-9]).{8,}$/,
        'Password must contain at least one uppercase letter and one alphanumeric character'
        )
        .required('Password is required'),
    phoneNo: Yup.string().required(" Enter Your Contact No.").matches(/^[1-9][0-9]{9}$/, "Must be integer and 10 in length"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
    brandLogo : Yup.mixed().required("select brand logo")
        .test("fileFormat","only png and jpeg are allowed",(value) => value &&  value instanceof File  && SUPPORTED_IMAGE.includes((value).type) ),
});

export const loginValidationSchema = () => {
    return(
        Yup.object().shape({
            email: Yup.string()
              .email('Invalid email format')
              .required('Email is required'),
              
            password: Yup.string()
              .min(8, 'Password must be at least 8 characters')
              .required('Password is required')
          })
    )
}