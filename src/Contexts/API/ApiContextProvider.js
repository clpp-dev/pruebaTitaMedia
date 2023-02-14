import React, { useState } from 'react'
import UseGetposts from '../../Hooks/UseGetposts';
import { ApiContext } from './ApiContext'


export const ApiContextProvider = ({ children }) => {
  const [currentIdPost, setCurrentIdPost] = useState(null)

  const allPosts = UseGetposts();

  return (
    <ApiContext.Provider value={{ allPosts, currentIdPost, setCurrentIdPost }}>
      {children}
    </ApiContext.Provider>
  )
}
