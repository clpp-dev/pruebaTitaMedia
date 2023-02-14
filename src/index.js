import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './Contexts/Auth/AuthContextProvider';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <GoogleOAuthProvider clientId='232024812110-0aj971sfk6g0dbafa9mgver3s92of2pn.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
    ;
  </AuthContextProvider>
);
