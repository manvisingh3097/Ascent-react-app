// MainContainer.js

import React from 'react';
import Header from './Header';
import MainContent from './maincomponent';
import Footer from './Footer';


const MainContainer = () => {
  return (
    <div className="main-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default MainContainer;
