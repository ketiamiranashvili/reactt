import React from 'react'
import routes from '../constants/routes'
import { useNavigate } from 'react-router-dom';
import "./navbar.css"
import { useAppContext } from '../context/AppContentProvider';
import { signOutUser } from '../context/appActionCreators';

const appRoutes = Object.entries(routes);

const NavBar = () => {
    const navigate = useNavigate();
    const {dispatch} = useAppContext();
  return (
    <div className='navigation'>
    
      {appRoutes.map((route)=>{
        const [key,value] = route;
        return <button className='button' onClick={()=>{navigate(value)}}>{key} </button>
      })}
      
      <button onClick={()=>{
        dispatch(signOutUser())
      }}>Sign Out</button>
    </div>
  )
}

export default NavBar
