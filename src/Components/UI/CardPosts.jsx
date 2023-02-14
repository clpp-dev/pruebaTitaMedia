import React from 'react';
import '../../Css/UI/CardsPosts.css';

export const CardPosts = ({ data }) => {
  return (
    <div className='cont-cards-posts'>
      {data.map((post) => (
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
          <button className='custom-btn-comments'>Ver comentarios</button>
        </div>
      ))}
    </div>
  );
};
