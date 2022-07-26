import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Itemlista from './ItemList';
import { useParams } from 'react-router-dom';
import {db} from '../../Firebase/Firebase.js';
import { getDocs, collection, query, where } from "firebase/firestore"

export const ItemListContainer = ({ greeting }) => {


  const { categoryId } = useParams();

  const [loaded, setLoaded] = useState(true)
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState (false);



useEffect(()=>{
const productCollection= collection(db, "items")
const q= query(productCollection, where("categoryId", "==", "men's clothing"))
getDocs(productCollection)
.then (result => {

  const lista = result.docs.map (doc => {
    return {
      id: doc.id,
      ...doc.data(),
    }
  })
  setProductos(lista)
      console.log(lista);
    })
    .catch(error => console.log(error))
     .finally(() => setLoaded(false)) 
    

//   const URL = categoryId
//   ? `https://fakestoreapi.com/products/category/${categoryId}`
//   : "https://fakestoreapi.com/products/";
 
// fetch(URL)
// .then(res => res.json())
// .then(data => setProductos(data))
// .catch(err => console.log(err))
// .finally(() => setLoaded(false))
  
}, [categoryId]);
   
    return (
        <>
     
     {loaded ?<CircularProgress  />  : <Itemlista productos={productos}/> }
   
      
        </>
    )
}

export default ItemListContainer

