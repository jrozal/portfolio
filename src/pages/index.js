import React from 'react';
import { siteData } from '../data/site';
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
      <Helmet
        title={siteData.title}
        meta={siteData.meta}
        link={siteData.link}
      >
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
