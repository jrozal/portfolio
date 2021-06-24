import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../components/about';
import Banner from '../components/banner';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import Projects from '../components/projects';
import Skills from '../components/skills';

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
        <Skills/>
        <Projects/>
        <Footer/>
      </main>
    </div>
  );
};

export default IndexPage;
