import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {db} from '../../Firebase/Firebase';
import {getDoc, collection, doc} from 'firebase/firestore';
export const ItemDetailsContainer = () => {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(true)

    const { productId } = useParams();

    useEffect(() => {
        const productCollection= collection(db, 'items');
const refDoc= doc(productCollection, productId);
getDoc(refDoc)
.then(result=>{
    const product={ 
        id:result.id,
        ...result.data(),
    }
    setProduct(product);
    })
    .catch(err=>console.log(err))
         .finally(()=>setLoaded(false))
        // fetch(`https://fakestoreapi.com/products/${productId}`)
        //     .then(res=>res.json())
        //     .then(data=>setProduct(data))
        //     .catch(err=>console.log(err))
        //     .finally(()=>setLoaded(false))
    }, [productId]);

    return (
        <>
            {loaded ? <CircularProgress  /> : <ItemDetail product={product} />  }
            
        </>
    )
}


export default ItemDetailsContainer