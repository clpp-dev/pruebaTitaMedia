import React, { useContext } from 'react';
import { ApiContext } from '../../Contexts/API/ApiContext';
import UseGetCommetByPost from '../../Hooks/UseGetCommetByPost';
import { NavBar } from '../Layout/NavBar';
import { SectionPosts } from '../Layout/SectionPosts';
import { CardPosts } from '../UI/CardPosts';

export const Posts = () => {
  const {allPosts, currentIdPost, setCurrentIdPost} = useContext(ApiContext);
  console.log('🚀 > > > > Posts > > > > allPosts', allPosts);

  return (
    <>
      <NavBar />
      <SectionPosts />
    </>
  );
};
