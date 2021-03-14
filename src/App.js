import React from 'react';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Header from './Components/Header/MainPage';
import OurProducts from './Components/OurProducts/OurProducts';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <OurProducts />
      <Services />
    </div>
  );
}

export default App;