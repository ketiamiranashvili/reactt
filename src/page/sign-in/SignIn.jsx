
import React from 'react'
import { useLocation } from 'react-router-dom'
import SignInForm from '../../components/SignInForm';
import './signin.css'

const SignIn = () => {
  const {state} = useLocation();
  return (
    <div className='sign-in'>
      
    <h1 className='sign-in-h1'>Sign In </h1>
    {state?.success && <h3 style={{color:"green"}}>🎉congratulations successfully registered!🎉</h3>}
    <SignInForm />
    </div>
  )
}

export default SignIn
