import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Promo from './Promo';

const code = "<code>ngoding</code>";
class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="App-promo">
           <Promo/>
         </div>
        <div className="App-header">
           <div className="App-content">
             <Product judul="Doge Ganteng" harga="12.000.000"/>
           </div>
           <div className="App-content">
             <Product judul="Doge Ganteng" harga="12.000.000"/>
           </div>
           <div className="App-content">
             <Product judul="Doge Ganteng" harga="12.000.000"/>
           </div>
           <div className="App-content">
             <Product judul="Doge Ganteng" harga="12.000.000"/>
           </div>
           <div className="App-content">
             <Product judul="Doge Ganteng" harga="12.000.000"/>
           </div>
           <div className="App-content">
             <Product judul="Doge Ganteng" harga="12.000.000"/>
           </div>
           <div className="App-content">
             <Product judul="Doge Ganteng" harga="12.000.000"/>
           </div>
           <div className="App-content">
             <Product judul="Doge Ganteng" harga="12.000.000"/>
           </div>
           <div className="App-content">
             <Product judul="Doge Ganteng" harga="12.000.000"/>
           </div>
           <div className="App-content">
             <Product judul="Doge Ganteng" harga="12.000.000"/>
           </div>
           <div className="App-content">
             <Product judul="Doge Ganteng" harga="12.000.000"/>
           </div>
        </div>
      </div>
    );
  }
}

export default App;
