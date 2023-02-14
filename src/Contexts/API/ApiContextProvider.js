import React, { useState } from 'react'
import UseGetposts from '../../Hooks/UseGetposts';
import UseGetTags from '../../Hooks/UseGetTags';
import { ApiContext } from './ApiContext'


export const ApiContextProvider = ({ children }) => {
  const [currentIdPost, setCurrentIdPost] = useState(null)

  const allPosts = UseGetposts();
  const tags = UseGetTags();

  return (
    <ApiContext.Provider value={{ allPosts, currentIdPost, setCurrentIdPost, tags }}>
      {children}
    </ApiContext.Provider>
  )
}
