import { parseToken, toggleLocalStorage } from "../utils";
import appActions from "./appActions";

export const initialState={
    isUserLoggedIn:false,
    user:null,
    token:"",
   
};

export const appReducer =(state,action)=>{
    const {type,payload} = action;
    switch(type){
        case appActions.signInUser: {
           const user =parseToken(payload)
           toggleLocalStorage(payload);
            return {...state , isUserLoggedIn : true,  token:payload, user,}

        }
      case appActions.signOutUser: {
        toggleLocalStorage()
        return {...state, isUserLoggedIn: false, token:"token", user:null}
      }


       default:
        break;
    }
 
};



