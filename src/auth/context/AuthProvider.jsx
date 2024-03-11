import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'
import {types} from '../types'
const initialState={
    logged:false,
}
const init =()=>{
  const user=JSON.parse(localStorage.getItem("user"));
 return({
  logged:!!user,
  user:user
 })
}
export const AuthProvider = ({children}) => {
  
    const [authState,dispatch]=useReducer(AuthReducer, initialState, init);
    const login = (name='')=>{
      const user={
        id:123,
        name:name
      }
      const action ={
        ...authState,
        type:types.login,
        payload:user
      }
      localStorage.setItem('user', JSON.stringify(user));
      
      dispatch(action)
      
    }
    const logout =()=>{
      localStorage.removeItem('user');
      const action ={
        type:types.logout,
      }
      dispatch(action);
    }
  return (
    <AuthContext.Provider value={{
      ...authState,
      login:login,
      logout:logout}}>

        {children}

    </AuthContext.Provider>
  )
}
