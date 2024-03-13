// import FetchGetRequest from '../components/FetchGetRequest';
// import FetchPostRequest from '../components/FetchPostRequest';
// import Axios from '../components/Axios';
// import ReactFetchHook from '../components/ReactFetchHook';
// import ReactQuery from '../components/ReactQuery';
import FetchWithSwr from '../components/FetchWithSwr';

import Container from '../components/Container';

const Home = () => {
  return (
    <div>
      <div className="bg-blue-700 min-h-60 flex justify-center items-center">
        <h1 className="text-3xl pb-5 font-semibold md:text-5xl text-center  bg-clip-text text-transparent  bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50 max-w-lg sm:max-w-full">
          API data <br />
          fetching in React
        </h1>
      </div>

      <Container>
        <section className="bg-white rounded-2xl overflow-hidden relative -top-8 min-h-[550px]">
          {/* <FetchGetRequest /> */}
          {/* <FetchPostRequest /> */}
          {/* <Axios /> */}
          {/* <ReactFetchHook /> */}
          {/* <ReactQuery /> */}
          <FetchWithSwr />
        </section>
      </Container>
    </div>
  );
};

export default Home;
