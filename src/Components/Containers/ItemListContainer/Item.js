
import React from "react";
import { Link } from "react-router-dom";


const Item = ({producto}) => {

return (
  <>

  <div key={producto.id} class="row ">
  <div class="col s12 m4">
    <div class="card">
      <div class="card-image">
        <img  src={producto.image}  alt=""/>
        <span  class="card-title">{producto.title}</span>
      </div>
      <div class="card-content">
        <p >Precio: {producto.price} </p>
        <p >{producto.description}</p> 
      </div>
      <div class="card-action">
        <Link to={`/product/${producto.id}`}>Más detalles</Link>
      </div>
    </div>
  </div>
</div>


</>
)

 }

 export default Item;