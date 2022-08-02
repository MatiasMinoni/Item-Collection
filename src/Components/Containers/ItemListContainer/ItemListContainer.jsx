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



    useEffect(() => {

      const q = categoryId
          ? query(collection(db, 'items'), where('category', '==', categoryId))
          : collection(db, 'items');
          
      getDocs(q)
          .then(result => {
              const lista = result.docs.map(doc => {
                  return {
                      id: doc.id,
                      ...doc.data(),
                  }
              })
              setProductos(lista);
          })
          .catch(err => console.log(err))
          .finally(() => setLoaded(false))
  
  }, [categoryId]);
   
    return (
        <>
     
     {loaded ?<CircularProgress  />  : <Itemlista productos={productos}/> }
   
      
        </>
    )
}

export default ItemListContainer

