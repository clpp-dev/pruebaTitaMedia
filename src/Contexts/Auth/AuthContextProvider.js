import React, { useState } from 'react';
import { AuthContext } from './AuthConext';

export const AuthContextProvider = ({ children }) => {

  const [userData, setUserData] = useState(null)

  return (
    <>
      <AuthContext.Provider 
      value={{ userData, setUserData }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
