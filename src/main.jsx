import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from './routes/ErrorPage.jsx';
import Home from './routes/home.jsx';
import Post from './routes/post.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'posts/:postId',
        element: <Post />,
      },
    ],
  },
]);

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
