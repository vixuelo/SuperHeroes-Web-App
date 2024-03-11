import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { AuthContext } from '../auth/'

export const PrivateRouter = ({children}) => {
    const {pathname, search}=useLocation();
    localStorage.setItem('lastPath',pathname+search);
    console.log('re-render');
    const {logged}=useContext(AuthContext)
  return (logged)
    ? children:
    <Navigate to="/login"/>
}