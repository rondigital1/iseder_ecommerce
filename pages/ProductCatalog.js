import React from 'react';

import { Layout } from '../components/Layout';
import { Products } from '../components/Products';
import { StateContext } from '../context/StateContext';

const ProductCatalog = () => {
  return (
    <StateContext>
      <Layout>
        <Products />
      </Layout>
    </StateContext>
  );
};

export default ProductCatalog;
