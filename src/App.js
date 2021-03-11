import { useState } from 'react';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Header from './Components/Header/MainPage';

function App() {

  return (
    <div className="App">
      <Header />
      <AboutUs />
    </div>
  );
}

export default App;
