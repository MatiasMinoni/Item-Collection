import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
 import 'materialize-css/dist/css/materialize.min.css';
 import {  NavLink } from 'react-router-dom';
// import "./src/App.css";
// // importar iconos de google

 
const Categorias = [
  { nombre: 'Tecnología', id: 0, ruta: "category/electronics" },
  { nombre: 'Joyas', id: 1, ruta: "category/jewelery" },
  { nombre: 'Hombres', id: 2, ruta: "category/men's clothing" },
  { nombre: 'Mujeres', id: 3, ruta: "category/women's clothing" }
]

    const NavBar = () => {
 
      return (
  
 <nav>
   <div className="nav-wrapper">
     <NavLink to="/" className="brand-logo left">MicroStore</NavLink>
     <ul id="nav-mobile" className="right hide-on-med-and-down">
       <li><NavLink to="Acerca_de">Acerca de</NavLink></li>
       <li><NavLink to="Contacto">Contacto</NavLink></li>
       {Categorias.map((Categorias) =><li> <NavLink key={Categorias.id} to={Categorias.ruta}>{Categorias.nombre} </NavLink></li>)}
      <li ><NavLink className='carrito_icon ' title='Carrito' to="Carrito" alt='Carrito'><h3><CartWidget /></h3> </NavLink></li>
    
  
  </ul>
        
    
     
      </div>
   
 </nav>
      
  
  );
}

  export default NavBar;

