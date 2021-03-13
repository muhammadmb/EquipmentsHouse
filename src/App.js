import React from 'react';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Header from './Components/Header/MainPage';
import OurProducts from './Components/OurProducts/OurProducts';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <OurProducts />
    </div>
  );
}

export default App;