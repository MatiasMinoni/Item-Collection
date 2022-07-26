import React from "react";
import Item from './Item';

const Itemlist = ({productos}) => {

    return(
        <div>
       {
        productos.map(producto => <Item key={producto.id} producto={producto}/>)
       }
        </div>);
};

export default Itemlist