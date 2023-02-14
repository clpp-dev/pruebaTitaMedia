import { axiosInstance } from "../Config/AxiosConfig";

export const fetchAllPosts = async () => {
    const response = await axiosInstance.get('/post');
    return response.data;
  };