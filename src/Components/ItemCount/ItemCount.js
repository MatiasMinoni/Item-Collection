import { useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';



    

export const ItemCount =({initial, Count, setCount, cantidad, onAdd}) => {
[Count, setCount] = useState(initial);

function sumar(){
        
setCount(Count+1);
sumar=document.getElementById("sumar")
onRemove=document.getElementById("onRemove")
const add_Cart=document.getElementById("addCart");

sumar.disabled=false;
onRemove.disabled=false;
add_Cart.disabled=false;

    while
    (Count>=cantidad-1){
        setCount(cantidad);
      sumar.disabled=true;
        onRemove.disabled=false;
        
        break;}
      
}
function onRemove(){
    sumar=document.getElementById("sumar")
    onRemove=document.getElementById("onRemove")
    const add_Cart=document.getElementById("addCart");
setCount(Count-1);


    sumar.disabled=false;
    while (Count<=1){   
        setCount(0);
        sumar.disabled=false;
        onRemove.disabled=true;
        add_Cart.disabled=true;
       break;
    }
    if(Count<=1){
       
    }
    
}
const toCart = () => {
    onAdd(Count);
   

}



return (
<>

<div className="valign-wrapper center-align contador_carrito">

<p>Agregar al carrito</p>

<button  className="waves-effect waves-light btn" id="sumar"  onClick={() => sumar()}> + </button>

<p>    {Count}    </p>

<button className="waves-effect waves-light btn" id="onRemove" onClick={() => onRemove()}> - </button>

<button className="waves-effect waves-light btn" onClick={toCart} id="addCart" >  Agregar al carrito</button>

</div>
</> 
)
}


export default ItemCount;