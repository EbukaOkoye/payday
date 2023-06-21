import { Link, useNavigate } from "react-router-dom"
import { Button, TextField, Box, InputAdornment } from "@mui/material" 
import { Field, Form, Formik } from "formik"
import { object, string } from 'yup'
import { RemoveRedEye } from "@mui/icons-material"
import google from '../../assets/google.svg'
import { useState } from "react"
import '../../styles/carousel.css'




const LoginForm = () => {
    const [ showPassword, setShowPassword ] = useState(false)
    const next = useNavigate()

    const nextPage = () =>  {
        next('/homepage')
    }

   const initialValues = {
    email: '',
    password: ''
   }

   const passwordReveal = () => {
    setShowPassword(!showPassword)
    console.log('clicked')
   }

  return (
    <div className="p-3 grid place-self-center mx-auto lg:flex lg:flex-col lg:justify-center">
        <Formik initialValues={initialValues} onSubmit={(values, formikHelpers) => {
            console.log(values)
            formikHelpers.resetForm()
        }}
        validationSchema={object({
            email: string().required('Please enter your email').email('Invalid email'),
            password: string().required('Please enter your password').min(5, 'Password too short, minimum of 5 characters').max(12, 'Password should not be longer than 12 characters')
        })}
        >
            {
                ({ errors, touched }) => (
                    <Form >
                        <Field className='text-sm' name='email' type='email' as={TextField} variant='outlined' color='primary' label='Email Address' fullWidth
                        error={Boolean(errors.email) && Boolean(touched.email)}
                        helperText={Boolean(touched.email) && errors.email}
                        />
                        <Box height={16} />
                        <Field name='password' type={showPassword ? 'text' : 'password'} as={TextField} variant='outlined' color='primary' label='Password' fullWidth
                        error={Boolean(touched.password) && Boolean(touched.password)}
                        helperText={Boolean(touched.password) && errors.password}
                        style={{flexGrow: 1}}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end" style={{cursor: 'pointer'}} onClick={passwordReveal}>
                                    <RemoveRedEye />
                                </InputAdornment>
                            )
                        }}
                        />
                            
                        <Box height={16} />
                        <p className="text-xs my-3 ml-3"><Link to=''>Forgot Password?</Link></p>
                        <Button type="submit" variant="contained" color="warning" size="large" fullWidth onClick={nextPage}>Continue</Button>
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
        <p className='text-xs text-grey mt-5 text-center'>Don’t have an account? <Link className="text-orangeMain" to='/signup'>Create Account</Link></p>
    </div>
  )
}

export default LoginForm