import React, { useContext } from 'react';
import { ApiContext } from '../../Contexts/API/ApiContext';
import UseGetCommetByPost from '../../Hooks/UseGetCommetByPost';
import { NavBar } from '../Layout/NavBar';
import { SectionPosts } from '../Layout/SectionPosts';
import { CardPosts } from '../UI/CardPosts';

export const Posts = () => {
  const {allPosts, currentIdPost, setCurrentIdPost} = useContext(ApiContext);
  
  
  const commets = UseGetCommetByPost({idPost: "60d21b4667d0d8992e610c85"})
  console.log('🚀 > > > > Posts > > > > commets', commets);

  return (
    <>
      <NavBar />
      <SectionPosts />
    </>
  );
};
