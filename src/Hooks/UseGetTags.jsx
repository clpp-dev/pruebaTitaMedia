import { useEffect, useState } from "react";
import { fetchTags } from "../Services/getTags";

const UseGetTags = () => {
    const [tags, setTags] = useState([]);
  
    const getTags = async () => {
      try {
        const response = await fetchTags();
        setTags(() => response);
      } catch (error) {
        setTags([]);
      }
    };
  
    useEffect(() => {
        getTags();
    }, []);
  
    return tags;
  };
  
  export default UseGetTags;
  