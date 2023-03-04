import React from 'react';
import Head from 'next/head';

import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { Carousel } from './Carousel';

export const Layout = ({ children }) => {
  return (
    <div>
      <Head>
      </Head>
      <header>
        <NavBar />
      </header>

      <div>
        <Carousel />
      </div>
      {/* <main className="main-container">{children}</main> */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
