import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import style from './ItemDetailContainer.module.css'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {product} = useParams();

    const funcion = () => {

    fetch(`https://fakestoreapi.com/products/${product}`)
    .then((res) => res.json())
    .then((json) => setItem(json))

    }
        
    useEffect(() => {

        funcion();
        
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