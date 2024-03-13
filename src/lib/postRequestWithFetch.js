export const postRequestWithFetch = async (data) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  return response.json();
};
