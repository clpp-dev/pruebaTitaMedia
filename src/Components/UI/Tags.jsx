import React, { useState } from 'react';
import UseGetTags from '../../Hooks/UseGetTags';
import '../../Css/UI/Tags.css';

export const Tags = ({ setTag }) => {

  function onChangeValueTag(e) {
    setTag(e.target.value);
  }

  return (
    <div className='cont-tags'>
      <button className='btn-filter-tag' onClick={onChangeValueTag} value='all'>
        All posts
      </button>
      <button className='btn-filter-tag' onClick={onChangeValueTag} value='pet'>
        Pet
      </button>
      <button className='btn-filter-tag' onClick={onChangeValueTag} value='dog'>
        Dog
      </button>
      <button className='btn-filter-tag' onClick={onChangeValueTag} value='human'>
        Human
      </button>
    </div>
  );
};
