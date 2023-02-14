import { useEffect, useState } from "react";
import { fetchCommentsByPost } from "../Services/getCommentsByPost";

const UseGetCommetByPost = ({idPost}) => {
    const [commentsByPost, setCommentsByPost] = useState([]);
  
    const UseGetposts = async () => {
      try {
        const response = await fetchCommentsByPost({idPost: idPost});
        setCommentsByPost(() => response);
      } catch (error) {
        setCommentsByPost([]);
      }
    };
  
    useEffect(() => {
        UseGetposts();
    }, []);
  
    return commentsByPost;
  };
  
  export default UseGetCommetByPost;
  

  // id de prueba: "60d21b4667d0d8992e610c85"