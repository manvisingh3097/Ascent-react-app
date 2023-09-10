// MainContainer.js

import React from 'react';
import Header from './Header';
import Section from './maincomponent';
import Footer from './Footer';

const MainContainer = () => {
  return (
    <div className="main-container">
     
      <Header />
      <Section />
      <Footer />
    </div>
  );
};

export default MainContainer;
