import React, { useContext } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { AuthContext } from '../../Contexts/Auth/AuthConext';
import { useNavigate } from 'react-router-dom';
import '../../Css/Page/Login.css';

export const Login = () => {
  const { setUserData } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div className='cont-page-login'>
      <h1 className='login-title'>¡Bienvenid@!</h1>
      <p className='login-subtitle'>Prueba técnica C. Leandro Pérez </p>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const details = jwtDecode(credentialResponse.credential);
          setUserData(details);
          navigate('/posts');
        }}
        onError={() => {
          console.log('Login Failed');
          navigate('/');
        }}
      />
    </div>
  );
};
