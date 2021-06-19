import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../components/about';
import Banner from '../components/banner';
import Navigation from '../components/navigation';

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Justin Rozal</title>
      </Helmet>
      <main>
        <Banner/>
        <Navigation/>
        <About/>
      </main>
    </div>
  );
};

export default IndexPage;
