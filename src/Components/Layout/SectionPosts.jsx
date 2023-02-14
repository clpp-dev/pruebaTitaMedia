import React, { useContext } from 'react'
import { ApiContext } from '../../Contexts/API/ApiContext';
import { CardPosts } from '../UI/CardPosts';
import '../../Css/Layout/SectionPosts.css'

export const SectionPosts = () => {
  const {allPosts, currentIdPost, setCurrentIdPost} = useContext(ApiContext);

  return (
    <div className='cont-SectionPosts'>
      <h2>Últimos Posts</h2>
      <CardPosts data={allPosts?.data}/>
    </div>
  )
}
