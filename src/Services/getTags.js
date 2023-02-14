import { axiosInstance } from "../Config/AxiosConfig";

export const fetchTags = async () => {
    const response = await axiosInstance.get('/tag');
    console.log('🚀 > > > > fetchTags > > > > response', response);
    return response;
  };