import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/Auth/AuthConext';
import '../../Css/Layout/NavBar.css'

export const NavBar = () => {

  const { userData } = useContext(AuthContext);

  return (
    <nav className='navBar'>
      <div className='cont-user-sesion'>
        <img src={userData?.picture} alt='USAURIO' />
        <h4 className=''>{userData.name}</h4>
      </div>
      <button className='custom-btn-logout' onClick={()=> console.log('TODO: crear funcion cerrar sesión como helper')}>
        Cerrar Sesión
      </button>
    </nav>
  );
};
