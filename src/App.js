import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './pages/Main';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
