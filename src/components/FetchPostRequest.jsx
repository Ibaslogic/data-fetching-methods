import { useEffect, useState } from 'react';
import { postRequestWithAxios } from '../lib/postRequestWithAxios';
// import { postRequestWithFetch } from '../lib/postRequestWithFetch';

const FetchPostRequest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const postsData = await postRequestWithAxios({
          userId: 11,
          id: 101,
          title: 'New post title',
          body: 'The post body content',
        });

        // const postsData = await postRequestWithFetch({
        //   userId: 11,
        //   id: 101,
        //   title: 'New post title',
        //   body: 'The post body content',
        // });
        setData(postsData.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchDataForPosts();
  }, []);

  return (
    <div className="py-12 px-3">
      <h2 className="text-2xl font-medium mb-6 underline">
        Post Request with Fetch
      </h2>
      {loading && (
        <div className="text-xl font-medium">Loading posts...</div>
      )}
      {error && <div className="text-red-700">{error}</div>}

      {data && (
        <div>
          <h2 className="text-xl font-medium mb-6">{data.title}</h2>
          <p className="mb-2">{data.body}</p>
          <span className="text-gray-700 text-sm">
            Post ID: {data.id}
          </span>
        </div>
      )}
    </div>
  );
};

export default FetchPostRequest;
