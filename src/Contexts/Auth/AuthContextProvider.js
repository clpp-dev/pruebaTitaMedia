import React, { useState } from 'react';
import { AuthContext } from './AuthConext';

export const AuthContextProvider = ({ children }) => {
  
  const [userData, setUserData] = useState(null)
  console.log('🚀 > > > > AuthContextProvider > > > > userData', userData);
  
  return (
    <>
      <AuthContext.Provider 
      value={{ userData, setUserData }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
