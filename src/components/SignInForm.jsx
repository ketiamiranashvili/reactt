import React, { useState } from 'react'
import { authUser} from '../api/auth';
import routes from "../constants/routes"
import{useNavigate} from 'react-router-dom'
import { useAppContext } from '../context/AppContentProvider';
import { signInUser } from '../context/appActionCreators';


const SignInForm = () => {
  const {dispatch} = useAppContext();
    const [user,setUser] = useState({
        userName:"",
        password:"",
        
    })
    const [error,setError]=useState("")
    const navigate = useNavigate();
    const subbmitHandler=(e)=>{
       e.preventDefault();
      authUser(user, 'login')
      .then((data)=>{
        console.log(data);
       dispatch(signInUser(data.token))
       navigate(routes.movies);
       
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
      
      <button type='submit'>Sign In</button>
      {error && <h3 style={{color:"red"}}>{error}</h3>}
    </form>
  )
}

export default SignInForm