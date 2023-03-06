import React from 'react';

import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App;