import React, {Component} from 'react';
import one from './1.jpg';
import './App.css';

class Product extends React.Component{
   state = {
      judul: "Kaset",
      harga: "130.000"
   }

   render(){
      return (
        <div className="warp-promo">
            <img src={one} alt="Promo" />
            <img src={one} alt="Promo" />
            <h3 className="promo">Ini Promonya yaa, Doge Twinkie...</h3>
        </div>
      );
   }
}

export default Product;
