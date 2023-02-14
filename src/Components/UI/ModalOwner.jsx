import React from 'react';
import '../../Css/UI/ModalOwner.css';


export const ModalOwner = ({ data, setClose }) => {
console.log('🚀 > > > > ModalOwner > > > > data', data);

  return (
    <div className='cont-bg-modal-owner' onClick={() => setClose()}>
      <div className='cont-modal-owner'>
        <h3>Datos de usuario</h3>
        {data ? <>
          <div className='cont-data-user'>
            <img src={data.picture} alt={data.firstName} />
            <h4>{data.title}. {data.firstName} {data.lastName}</h4>
            <p>ID: {data.id}</p>
          </div>
        </> : (
          <h4> NO hay datos de usuario </h4>
        )}
        <button className='btn-close-modal' onClick={() => setClose()}>
          X
        </button>
      </div>
    </div>
  );
};
