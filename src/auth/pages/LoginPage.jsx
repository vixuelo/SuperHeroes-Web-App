import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context';

export const LoginPage = () => {
  const {login}=useContext(AuthContext)
  const navigate = useNavigate();
  const onLogin=()=>{
    const lastPath=localStorage.getItem('lastPath');
      const name='vixuelo';
      login(name);
      !!lastPath ?
      navigate(lastPath,{replace:true}):
      navigate('/Search',{replace:true})
  }
  return (
    <div className='container mt-5'>
      <h1>
          login
      </h1>
      <hr />
      <button className='btn btn-primary'
              onClick={onLogin}>

        Login
      </button>

    </div>
  )
}
