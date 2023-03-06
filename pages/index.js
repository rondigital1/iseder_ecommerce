import React from 'react';

import { Layout } from '../components/Layout';
import { Carousel } from '../components/Carousel';
import { StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';

const Home = () => {
  return (
    <StateContext>
      <Layout>
        <Carousel />
      </Layout>
    </StateContext>
  );
};

export default Home;
