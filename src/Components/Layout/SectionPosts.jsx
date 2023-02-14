import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../Contexts/API/ApiContext';
import { CardPosts } from '../UI/CardPosts';
import { Tags } from '../UI/Tags';
import '../../Css/Layout/SectionPosts.css'

export const SectionPosts = () => {
  const { allPosts } = useContext(ApiContext);
  const [currentTag, setCurrentTag] = useState('all');

  const [postMap, setPostMap] = useState([])
  const filterTag = allPosts?.data?.filter(tag => tag.tags[0] === currentTag || tag.tags[1] === currentTag || tag.tags[2] === currentTag);

  useEffect(() => {
    currentTag === 'all' ? setPostMap(allPosts?.data) : setPostMap(filterTag)
  }, [currentTag])

  return (
    <div className='cont-SectionPosts'>
      <h2>Latest Posts</h2>
      <Tags setTag={setCurrentTag} />
      <CardPosts data={postMap}/>
    </div>
  )
}
