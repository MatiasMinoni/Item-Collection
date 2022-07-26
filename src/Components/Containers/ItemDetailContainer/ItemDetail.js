import { AddCardTwoTone } from "@mui/icons-material";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../ItemCount/ItemCount"
import {cartContext } from "../../CartContext/CartContext";


//--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--//



const ItemDetail = ({ product }) => {

  const [buyFinalized, setBuyFinalized] = useState(false)
  const { addProduct } = useContext(cartContext);
 
  const onAdd = (count) => {
    addProduct({...product, quantity:count});
  setBuyFinalized(true);
 }

  return (
    <div key="id" class="row ">
        <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img  src={product.image} alt={product.title}></img>
              <span  class="card-title">{product.title}</span>
            </div>
            <div class="card-content">
              <p >Precio: {product.price}</p>
              <p >{product.description}</p> 
      
            </div>
            
            <div class="card-action">
        
           
            </div>
            
          </div>
        
        </div>
        {buyFinalized
          ?
        <div> <Link to="/carrito">
            <button className="waves-effect waves-light btn">Finalizar compra</button>
            </Link>
            <Link to="/"><button className="waves-effect waves-light btn">Seguir comprando</button></Link>
            </div>
          : <ItemCount initial={1} stock={5} onAdd={onAdd} />}
      </div>
  );
};



export default ItemDetail