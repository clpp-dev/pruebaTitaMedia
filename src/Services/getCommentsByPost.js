import { axiosInstance } from "../Config/AxiosConfig";

export const fetchCommentsByPost = async ({ idPost }) => {
    const response = await axiosInstance.get(`/post/${idPost}/comment`);
    return response;
  };