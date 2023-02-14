import React, { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../../Contexts/API/ApiContext';
import '../../Css/UI/CardsPosts.css';
import { ModalComments } from './ModalComments';
import { ModalOwner } from './ModalOwner';

export const CardPosts = ({ data }) => {

  const {currentIdPost, setCurrentIdPost} = useContext(ApiContext);
  const [currentPostData, setCurrentPostData] = useState({})
  
  const [openCloseModalComments, setOpenCloseModalComments] = useState(false);
  const [openCloseModalOwner, setOpenCloseModalOwner] = useState(false);

  const handleOpenCloseModalCommets = (postID) => {
    setCurrentIdPost(postID)
    setOpenCloseModalComments(!openCloseModalComments)
  }

  const handleOpenCloseModalOwner = (post) => {
    setCurrentPostData(post.owner)
    setOpenCloseModalOwner(!openCloseModalOwner)
  }


  return (
    <>
      <div className='cont-cards-posts'>
        {data?.map((post) => (
          <div className='cardPost' id={post.id} key={post.id}>
            <img src={post.image} alt={post.text} />
            <p>{post.text}</p>
            <div className='cont-tags'>
              {post.tags.map((tag) => (
                <button className='custom-btn-tag' key={`${post.id}-${tag}`}>
                  {tag}
                </button>
              ))}
            </div>
            <p>Likes: {post.likes}</p>
            <button className='custom-btn-comments' onClick={()=> {handleOpenCloseModalCommets(post.id) }}>Commets</button>
            <div className='cont-owner-post'>
              <img src={post.owner.picture} alt={post.owner.firstName} />
              <div>
                <h4>{post.owner.firstName}</h4>
                <button className='custom-btn-owner' onClick={()=> {handleOpenCloseModalOwner(post) }}>View details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {
        openCloseModalComments && <ModalComments idCurrentPost={currentIdPost} setClose={handleOpenCloseModalCommets}/>
      }
      {
        openCloseModalOwner && <ModalOwner data={currentPostData} setClose={setOpenCloseModalOwner}/>
      }
    </>
  );
};
