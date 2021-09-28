import React from 'react';

//Local Imports
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sorter from './components/Sorter';

const App = () => {
  return (
    <>
      <Header />
      <Sorter />
      <Footer />
    </>
  )
}

export default App;