import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getRequestWithNativeFetch } from '../lib/fetcherWithFetch';

const FetchGetRequest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const postsData = await getRequestWithNativeFetch(
          'https://jsonplaceholder.typicode.com/posts?_limit=8'
        );
        setData(postsData);
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
    <div className="flex">
      <div className="w-52 sm:w-80 flex justify-center items-center">
        {loading && (
          <div className="text-xl font-medium">Loading posts...</div>
        )}
        {error && <div className="text-red-700">{error}</div>}

        <ul>
          {data &&
            data.map(({ id, title }) => (
              <li
                key={id}
                className="border-b border-gray-100 text-sm sm:text-base"
              >
                <NavLink
                  className={({ isActive }) => {
                    const baseClasses = 'p-4 block hover:bg-gray-100';
                    return isActive
                      ? `${baseClasses} bg-gray-100`
                      : baseClasses;
                  }}
                  to={`/posts/${id}`}
                >
                  {title}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>

      <div className="bg-gray-100 flex-1 p-4 min-h-[550px]">
        <Outlet />
      </div>
    </div>
  );
};

export default FetchGetRequest;
