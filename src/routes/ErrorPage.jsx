import { Link, useRouteError } from 'react-router-dom';
import Container from '../components/Container';

export default function ErrorPage() {
  const error = useRouteError();
  // console.error(error);

  return (
    <div className="my-12">
      <Container className="max-w-screen-lg">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link
          className="mt-8 text-blue-700 inline-block font-medium"
          to="/"
        >
          Return to home page
        </Link>
      </Container>
    </div>
  );
}
