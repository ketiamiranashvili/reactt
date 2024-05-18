import React, { useState } from 'react'
import { authUser } from '../api/auth';
import routes from "../constants/routes"
import{useNavigate} from 'react-router-dom'


const RegisterForm = () => {
    const [user,setUser] = useState({
        userName:"",
        password:"",
        email:"",
    })
    const [error,setError]=useState("")
    const navigate = useNavigate();
    const subbmitHandler=(e)=>{
       e.preventDefault();
      authUser(user, 'register')
      .then(()=>{
        navigate(routes.signIn, {state: {success:true}})
  
      })
      .catch((err)=>{
        console.log(err);
        setError(err.message)
      })
    }
  return (
    <form onSubmit={subbmitHandler}>
      <label htmlFor='userName'>userName</label>
      <input onChange={(e)=>{
        setUser((prev)=>({ ...prev,[e.target.name]: e.target.value}))}} placeholder='userName' name='userName'></input>

      <label htmlFor='password'>Password</label>
      <input onChange={(e)=>{
        setUser((prev)=>({ ...prev,[e.target.name]: e.target.value}))}}
      placeholder='Password' name='password'></input>

      <label htmlFor='email'>userName</label>
      <input 
      onChange={(e)=>{
        setUser((prev)=>({ ...prev,[e.target.name]: e.target.value}))}}
       placeholder='Email' name='email'></input>
      <button type='submit'>REGISTRATION</button>
      {error && <h3 style={{color:"red"}}>{error}</h3>}
    </form>
  )
}

export default RegisterForm
