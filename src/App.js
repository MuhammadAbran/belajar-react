import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';

const code = "<code>ngoding</code>";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Product judul="aku suka doge doge wow " harga="12.000.000"/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
