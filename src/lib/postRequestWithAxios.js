import axios from 'axios';

export const postRequestWithAxios = async (data) => {
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    }
  );
  return response.data;
};
