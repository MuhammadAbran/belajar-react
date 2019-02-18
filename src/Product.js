import React, {Component} from 'react';
import unnamed from './unnamed.png';
import './App.css';

class Product extends React.Component{
   state = {
      judul: "Kaset",
      harga: "130.000"
   }

   render(){
      return (
        <div>
            <img src={unnamed} className="App-logo" alt="logo" />
            <h1>{this.props.judul}</h1>
            <h3>Harga: { this.props.harga }</h3>
        </div>
      );
   }
}

export default Product;
