import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import style from './ItemDetailContainer.module.css'
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {product} = useParams();

    useEffect(() => {


        getDoc(doc(db, 'productos', `${product}`))    
        .then((res) => {
  
          setItem({
            
            
                id: res.id,
                ...res.data()
                           
        });

        })

    }, [product])
    

    return (
        
        <div className={style.container}>
            <ItemDetail 
            
            item={item}
        
            />
        </div>

    )

}

export default ItemDetailContainer;