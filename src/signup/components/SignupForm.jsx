import { Link, } from "react-router-dom"
import { object, string } from "yup"
import { Field, Form, Formik } from "formik"
import { Button, TextField, Box } from "@mui/material"
import google from '../../assets/google.svg'

const SignupForm = () => {
    const initialValues = {
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: ''
    }

  return (
    <div className="p-3 grid place-self-center-center mx-auto">
        <Formik initialValues={initialValues} onSubmit={ (values, formikHelpers) => {
            console.log(values)
            formikHelpers.resetForm()
        }}
        validationSchema={object({
            email: string().required('Please enter your email').email('Invalid email'),
            firstName: string().required('Your first name is required').min(2, 'Name cannot be a letter').max(20, 'Name is too long'),
            lastName:  string().required('Your last name is required').min(2, 'Name cannot be a letter').max(20, 'Name is too long'),
            phoneNumber: string().required('Your phone number is required').min(11, 'Phone number is 11 digits').max(11, 'Phone number is 11 digits')
        })}
        >
            {
                ({ errors, touched}) => (
                    <Form>
                        <Field className='text-sm' name='email' type='email' as={TextField} variant='outlined' color='primary' label='Email Address' fullWidth
                        error={Boolean(errors.email) && Boolean(touched.email)}
                        helperText={Boolean(touched.email) && errors.email}
                        />
                        <Box height={16} />
                        <div className="grid lg:grid-cols-2 gap-3">
                            <Field className='text-sm' name='firstName' type='text' as={TextField} variant='outlined' color='primary' label='First Name' fullWidth
                            error={Boolean(errors.firstName) && Boolean(touched.firstName)}
                            helperText={Boolean(touched.firstName) && errors.firstName}
                            />
                            <Field className='text-sm' name='lasName' type='text' as={TextField} variant='outlined' color='primary' label='Last Name' fullWidth
                            error={Boolean(errors.lastName) && Boolean(touched.lastName)}
                            helperText={Boolean(touched.lastName) && errors.lastName}
                            />
                        </div>
                        <Box height={16} />
                        <Field className='text-sm' name='phoneNumber' type='text' as={TextField} variant='outlined' color='primary' label='Phone Number' fullWidth
                        error={Boolean(errors.phoneNumber) && Boolean(touched.phoneNumber)}
                        helperText={Boolean(touched.phoneNumber) && errors.phoneNumber}
                        />
                    </Form>
                )
            }
        </Formik>
        <div className="flex gap-2 justify-center items-center mt-7">
            <div className="hidden md:block left-line w-52 h-1 bg-gray-200"></div>
            <p className="text-xs">or</p>
            <div className="hidden md:block rightline w-52 h-1 bg-gray-200"></div>
        </div>
        <div className="google-auth text-center mt-8">
            <Button className="flex gap-2 btn" style={{backgroundColor: '#F4F4F4', fontSize: '12px' }} variant="filled">  
                <span>
                    <img src={google} alt="" />
                </span>
                <span>Continue with Google</span>
            </Button>
        </div>
        <p className='text-xs text-grey mt-5 text-center'>Already have an account? <Link className="text-orangeMain" to='/'>Sign In</Link></p>
    </div>
  )
}

export default SignupForm