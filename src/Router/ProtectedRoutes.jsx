import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {

    const IsAuth = false;

    if (!IsAuth) {
      return <Navigate to="/"/>
    }

  return (
    <Outlet/>
  )
}
