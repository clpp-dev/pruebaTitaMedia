import React, { useState } from 'react';
import { AuthContext } from './AuthConext';

export const AuthContextProvider = ({ children }) => {
  
  const [userData, setUserData] = useState(null)
  
  const fakeData = {
    name: 'Natalia',
    lastName: 'Sierra',
    age: 19,
    token: true,
  };

  return (
    <>
      <AuthContext.Provider 
      value={{fakeData, userData, setUserData }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
