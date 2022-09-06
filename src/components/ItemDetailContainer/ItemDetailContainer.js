import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import style from './ItemDetailContainer.module.css'


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
  
    const funcion = () => {

    setTimeout(() => {

    fetch('https://fakestoreapi.com/products/1')
    .then((res) => res.json())
    .then((json) => setItem(json))

        }, 2000)

    }
        
    useEffect(() => {

        funcion();
        
    }, [])
    

    return (
        
        <div className={style.container}>
            <ItemDetail 
            
            item={item}
        
            />
        </div>

    )

}

export default ItemDetailContainer;