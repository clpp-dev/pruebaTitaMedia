import { useEffect, useState } from 'react';
import { fetchCommentsByPost } from '../Services/getCommentsByPost';

const UseGetCommetByPost = ({ idPost }) => {
  const [commentsByPost, setCommentsByPost] = useState([]);

  const getCommetsByposts = async ({ idPost: idPost }) => {
    try {
      const response = await fetchCommentsByPost({ idPost: idPost });
      setCommentsByPost(() => response);
    } catch (error) {
      setCommentsByPost([]);
    }
  };

  useEffect(() => {
    getCommetsByposts({ idPost });
  }, []);

  return { commentsByPost, getCommetsByposts };
};

export default UseGetCommetByPost;

