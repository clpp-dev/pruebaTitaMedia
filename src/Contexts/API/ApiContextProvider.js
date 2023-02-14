import React from 'react'
import UseGetposts from '../../Components/Hooks/UseGetposts';
import { ApiContext } from './ApiContext'


export const ApiContextProvider = ({ children }) => {

  const allPosts = UseGetposts();

  return (
    <ApiContext.Provider value={{ allPosts }}>
      {children}
    </ApiContext.Provider>
  )
}
