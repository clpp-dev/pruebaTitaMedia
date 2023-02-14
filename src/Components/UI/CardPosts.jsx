import React, { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../../Contexts/API/ApiContext';
import '../../Css/UI/CardsPosts.css';
import { ModalComments } from './ModalComments';
import { ModalOwner } from './ModalOwner';

export const CardPosts = ({ data }) => {
  console.log('🚀 > > > > CardPosts > > > > data', data);
  const { currentIdPost, setCurrentIdPost } = useContext(ApiContext);
  const [currentPostData, setCurrentPostData] = useState({});

  const [openCloseModalComments, setOpenCloseModalComments] = useState(false);
  const [openCloseModalOwner, setOpenCloseModalOwner] = useState(false);

  const handleOpenCloseModalCommets = (postID) => {
    setCurrentIdPost(postID);
    setOpenCloseModalComments(!openCloseModalComments);
  };

  const handleOpenCloseModalOwner = (post) => {
    setCurrentPostData(post.owner);
    setOpenCloseModalOwner(!openCloseModalOwner);
  };

  return (
    <>
      <div className='cont-cards-posts'>
        {data?.map((post) => (
          <div className='cardPost' id={post.id} key={post.id}>
            <img src={post.image} alt={post.text} />
            <p className='text-post'>{post.text}</p>
            <div className='cont-tags'>
              {post.tags.map((tag) => (
                <button className='custom-btn-tag' key={`${post.id}-${tag}`}>
                  {tag}
                </button>
              ))}
            </div>
            <div className='cont-likes-and-commets'>
              <div className='likes'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-thumb-up'
                  width='30'
                  height='30'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='#00C8E0'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3' />
                </svg>
                <p>{post.likes}</p>
              </div>
            </div>
            <button
              className='custom-btn-comments'
              onClick={() => {
                handleOpenCloseModalCommets(post.id);
              }}
            >
              Commets
            </button>
            <div className='cont-owner-post'>
              <img src={post.owner.picture} alt={post.owner.firstName} />
              <div>
                <h4>{post.owner.firstName}</h4>
                <button
                  className='custom-btn-owner'
                  onClick={() => {
                    handleOpenCloseModalOwner(post);
                  }}
                >
                  View details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {openCloseModalComments && (
        <ModalComments
          idCurrentPost={currentIdPost}
          setClose={handleOpenCloseModalCommets}
        />
      )}
      {openCloseModalOwner && (
        <ModalOwner data={currentPostData} setClose={setOpenCloseModalOwner} />
      )}
    </>
  );
};
