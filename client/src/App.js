import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// import Card from './components/Card/Card';
import Main from './components/Main/Main';
import Header from './components/Header/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Main />
        <Footer />
      
      </div>
    );
  }
}

export default App;
