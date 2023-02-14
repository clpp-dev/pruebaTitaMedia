import { axiosInstance } from "../Config/AxiosConfig";

export const fetchTags = async () => {
    const response = await axiosInstance.get('/tag');
    return response;
  };