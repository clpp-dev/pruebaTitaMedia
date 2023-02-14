import React, { useContext } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { AuthContext } from '../../Contexts/Auth/AuthConext';
import { useNavigate } from 'react-router-dom';


export const Login = () => {

  const { setUserData } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div className='cont-page-login'>
      <div>Inicio de sesón</div>
      <button>Inciar con Google</button>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const details = jwtDecode(credentialResponse.credential);
          setUserData(details)
          navigate('/posts')
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      ;
    </div>
  );
};
