import React from 'react';
import '../../Css/UI/ModalComments.css';
import UseGetCommetByPost from '../../Hooks/UseGetCommetByPost';

export const ModalComments = ({ idCurrentPost, setClose }) => {

  const currentCommets = UseGetCommetByPost({ idPost: idCurrentPost });

  return (
    <div className='cont-bg-modal-commets' onClick={() => setClose()}>
      <div className='cont-modal-comments'>
        <h3>Comentarios</h3>
        {currentCommets?.commentsByPost?.length > 0 ? (
          currentCommets?.commentsByPost?.map((commet, index) => (
            <div className='comment' key={index}>
              <p>{commet.message}</p>
            </div>
          ))
        ) : (
          <h4> NO HAY COMENTARIOS </h4>
        )}
        <button className='btn-close-modal' onClick={() => setClose()}>
          X
        </button>
      </div>
    </div>
  );
};
