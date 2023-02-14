import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/Auth/AuthConext';

export const ProtectedRoutes = () => {

  const { userData } = useContext(AuthContext);

    const IsAuth = userData;

    if (!IsAuth) {
      return <Navigate to="/"/>
    }

  return (
    <Outlet/>
  )
}
