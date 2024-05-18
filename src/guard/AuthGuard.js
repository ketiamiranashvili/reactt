import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContentProvider';
import routes from '../constants/routes';


const AuthGuard = ({children}) => {
    const navigate = useNavigate();
    const {state} = useAppContext();
    if(!state.isUserLoggedIn){
    return (
        <div>
            <h1>Please Sign In or Register </h1>
            <button onClick={()=>{
                navigate(routes.register)
            }}>Register</button>
            <button onClick={()=>{
                navigate(routes.signIn)
            }}>Sign In</button>
        </div>
    )
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default AuthGuard
