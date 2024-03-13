// import { useEffect, useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetcherWithFetch } from '../lib/fetcherWithFetch';
import useSWR from 'swr';

// import { getRequestWithNativeFetch } from '../lib/fetcherWithFetch';
// import { fetcherWithAxios } from '../lib/fetcherWithAxios';
// import useFetch from 'react-fetch-hook';

export default function Post() {
  const { postId } = useParams();

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const {
    data,
    error,
    isLoading: loading,
  } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    fetcherWithFetch,
    {
      dedupingInterval: 1000 * 60 * 10, // cache for 10 minutes
    }
  );

  // const {
  //   data,
  //   error,
  //   isPending: loading,
  // } = useQuery({
  //   queryKey: ['post', parseInt(postId)],
  //   queryFn: () =>
  //     fetcherWithFetch(
  //       `https://jsonplaceholder.typicode.com/posts/${postId}`
  //     ),
  //   staleTime: 1000 * 60 * 10, // cache for 10 minutes
  // });

  // const {
  //   isLoading: loading,
  //   data,
  //   error,
  // } = useFetch(
  //   `https://jsonplaceholder.typicode.com/posts/${postId}`
  // );

  // useEffect(() => {
  //   // const controller = new AbortController();

  //   const fetchSinglePost = async () => {
  //     try {
  //       /* ========
  //         With fetch API
  //       ============= */
  //       // const postData = await getRequestWithNativeFetch(
  //       //   `https://jsonplaceholder.typicode.com/posts/${postId}`,
  //       //   controller.signal
  //       // );

  //       /* ========
  //        With axios
  //       ============= */
  //       // const postData = await fetcherWithAxios(
  //       //   `https://jsonplaceholder.typicode.com/posts/${postId}`
  //       // );

  //       setData(postData);
  //       setError(null);
  //     } catch (err) {
  //       // if (err.name === 'AbortError') {
  //       //   console.log('Aborted');
  //       //   return;
  //       // }
  //       setError(err.message);
  //       setData(null);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchSinglePost();

  //   // return () => controller.abort();
  // }, [postId]);

  return (
    <>
      {loading && (
        <div className="text-xl font-medium">A moment please...</div>
      )}
      {error && <div className="text-red-700">{error}</div>}

      <article>
        <h1 className="text-xl md:text-2xl font-medium mb-6">
          {data?.title}
        </h1>
        <p>{data?.body}</p>
      </article>
    </>
  );
}
