import { useEffect, useState } from "react";
import { fetchAllPosts } from "../Services/getPosts";

const UseGetposts = () => {
    const [posts, setPosts] = useState([]);
  
    const UseGetposts = async () => {
      try {
        const response = await fetchAllPosts();
        setPosts(() => response);
      } catch (error) {
        setPosts([]);
      }
    };
  
    useEffect(() => {
        UseGetposts();
    }, []);
  
    return posts;
  };
  
  export default UseGetposts;
  