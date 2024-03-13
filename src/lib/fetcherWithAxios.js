import axios from 'axios';

export const fetcherWithAxios = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
